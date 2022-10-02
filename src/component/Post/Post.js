import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Post.css"
const Post = ({ post }) => {
    const { body, id, title, userId } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <p>{userId}</p>
            <h3>{title}</h3>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}><button>Show more</button></Link>
            <button onClick={handleNavigate}>Show more2</button>
        </div>
    );
};

export default Post;