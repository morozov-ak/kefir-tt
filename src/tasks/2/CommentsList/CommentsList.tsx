import React, {useEffect,useState,useRef} from "react";
import getDataRequest from "../data/getDataRequest";
import Comments from "./Comments";
import {IComments} from "./interfaces"
var _ = require('lodash');

const CommentsList = () => {

    const[comments, setComments] = useState<IComments>({})
    const ref_root_comments = useRef<HTMLInputElement>(null)
    
    
    useEffect(()=>{
        async function get_comments() {
            try {
                setComments(await getDataRequest())
            }
            catch (e) {
                alert(e)
            }
        }
        get_comments()
    },[]
    )


    if(comments.comments){return (
        <div className="container">
            <h1 className="greeting">May the force be with you !</h1>
            <Comments comments={_.sortBy(comments.comments,"created")} authors={comments.authors} ref={ref_root_comments} />
        </div>
    )}
    return(<h1>no comments!</h1>)
};

export default CommentsList;
