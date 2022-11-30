import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [slug, setSlug] = useState('')
    const [description, setDescription] = useState('')

    const [id, setID] = useState(null);
    useEffect(() => {
            setID(localStorage.getItem('ID'))
            setName(localStorage.getItem('Name'))
            setSlug(localStorage.getItem('Slug'))
            setDescription(localStorage.getItem('Description'))
    }, [])

    const updateAPIData = () => {
        axios.put(`https://6383958b6e6c83b7a9974a62.mockapi.io/data/categories/${id}`, {
            name,
            slug,
            description
        }).then(() => {
            navigate('/read')
        })
    }

    return (
        <div>
            <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder='slug' value={slug} onChange={(e) => setSlug(e.target.value)}/>
            <input placeholder='descrition' value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button type='submit' onClick={updateAPIData}>Update</button>
        </div>
    )
}