import React, { useState } from 'react'
import AddPostView from './AddPostView'
import AddPostModel from './AddPostModel'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPostController = () => {
    const navigate = useNavigate();
    const model = new AddPostModel();

    const [form, setForm] = useState(model.state);

    //inputların onchange yerine ele alma 
    const onInputChange = (label, value) => {
        var newInputState = { ...form }
        newInputState[label] = value;
        setForm(newInputState);

    };

    // form onaylandığında 
    const handleSubmit = (e) => {
        e.preventDefault();
        // formların doluluğunu kontrol etme
        if (!form.title || !form.user || !form.text) {

            (alert("Formu doldurun"));
            return;
        }
        // eğer hepsi doluysa gönderdik
        axios.post('http://localhost:3004/post', form)
            .then((res) => navigate('/'));

    };

    return (<AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit} />
    );
};

export default AddPostController;
