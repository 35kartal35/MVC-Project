import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListPostView from './ListPostView';

const ListPostContainer = () => {
    const [blogData, setBlogData] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const [userPosts, setUserPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3004/post')
            .then((res) => setBlogData(res.data));

    }, []);
    const showUserPost = (parametre) => {

        setShowModal(!showModal)
        setUserPosts(blogData.filter((post) => post.user == parametre))
    }
    return <ListPostView
        blogData={blogData}
        showModal={showModal}
        showUserPost={showUserPost}
        userPosts={userPosts}
    />;


};

export default ListPostContainer
