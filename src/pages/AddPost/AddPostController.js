import React, { useState } from 'react'
import AddPostView from './AddPostView'
import AddPostModel from './AddPostModel'
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const AddPostController = () => {
    const model = new AddPostModel();

    const [form, setForm] = useState(model.state);

    //inputların onchange yerine ele alma 
    const onInputChange = (label, value) => {
        var newInputState = { ...form }
        newInputState[label] = value;
        setForm(newInputState);
        console.log(form);
    };

    // form onaylandığında 
    const handleSubmit = (e) => {
        e.preventDefault();
        // formların doluluğunu kontrol etme
        if (!form.title || !form.user || !form.text) {

            (alert("Formu doldurun"));
            console.log(form);
        }
        // eğer hepsi doluysa gönderdik
        axios.post('http://localhost:3004/post', form)
            .then((res) => Navigate('/'));

    }

    return <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit} />;
};

export default AddPostController;
