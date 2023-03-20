import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListPostView from './ListPostView';

const ListPostContainer = () => {
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3004/post')
            .then((res) => setBlogData(res.data));

    }, []);
    return <ListPostView blogData={blogData} />;


};

export default ListPostContainer
