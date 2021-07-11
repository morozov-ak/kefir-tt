import like from "src/assets/like.svg";
import React from "react";
import {ICommentsObject, ICommentCardProps} from "./interfaces"
var _ = require('lodash');


const CommentCard: React.FC<ICommentCardProps> = (props/*{comment,authors,refs,setRefs}*/) => {
    let child:ICommentsObject
    child = _.find(props.comments,{'parent':props.comment.id})


    return(
        <>
            <div  key={props.comment.id} id={`${props.comment.id}`} className="comment-card">
                <div className="comment-card__head">
                        <div className="comment-card__head-left">
                            <div className="comment-card__avatar-container" >
                                <img className="comment-card__avatar"
                                        alt={_.find(props.authors,{'id':props.comment.author}).name} 
                                        src={_.find(props.authors,{'id':props.comment.author}).avatar}/>
                            </div>
                                
                            <div className="comment-card__name-and-date">
                                <p className="comment-card__name">{_.find(props.authors,{'id':props.comment.author}).name}</p>
                                <span className="time">{new Date(props.comment.created).toLocaleString()}</span>
                            </div>
                        </div>
                        <div className="comment-card__likes">
                            <img className="comment-card__likes-heart" alt="like"  src={like}/>
                            <span className="comment-card__likes-counter">{props.comment.likes}</span>
                        </div>
                </div>
                <p className="comment-card__text">{props.comment.text}</p>
            </div>
            {child&&
                <div className="gap">
                <CommentCard comment={child} authors={props.authors} comments={props.comments}></CommentCard>
                    
                </div>
            }
        </>
            
    )
};

export default CommentCard;
