import React from "react";
import {ICommentsObject,ICommentsListProps} from "./interfaces"
import CommentCard from "./CommentCard";


const Comments: React.FC<ICommentsListProps> = ({comments,authors}) => {

    return(
        <>
            {comments.map((comment:ICommentsObject)=>{
                if(!comment.parent){
                    return(<CommentCard comment={comment} authors={authors} comments={comments}></CommentCard>)
                    
                }
                return <></>
        })}
        </>
    )
};

export default Comments;
