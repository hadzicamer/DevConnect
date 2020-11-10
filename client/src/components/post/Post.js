import React,{Fragment,useEffect} from 'react';
import PostItem from '../posts/PostItem';
import{connect} from 'react-redux';
import{getPost}from '../../actions/post';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';


const Post = ({getPost,post: {post,loading},match}) => {
    useEffect(()=>{
getPost(match.params.id);
    },[getPost]);

    return loading || post===null?<span></span>: 
    <Fragment>
        <Link to="/posts" className="btn">Back to posts</Link>
         <PostItem post={post} showActions={false}/>
         <CommentForm postId={post._id}/>
         <div className="comments">
             {post.comments.map(comment=>(
                 <CommentItem key={comment._id} comment={comment} postId={post._id}/>
             ))}
         </div>
         </Fragment>
}

const mapStateToProps=state=>({
    post:state.post
});

export default connect(mapStateToProps,{getPost})(Post);