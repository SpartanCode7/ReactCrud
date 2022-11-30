import React, { useState } from 'react';
import axios from 'axios';

function Create() {

    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDescription] = useState('');

    const postData = () => {
        
        axios.post(`https://6383958b6e6c83b7a9974a62.mockapi.io/data/categories`, {
            name: name,
            slug: slug,
            description: description
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

  return (
    <div>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        <input type="text" name="slug" onChange={(e) => setSlug(e.target.value)} />
        <input type="text" name="description" onChange={(e) => setDescription(e.target.value)}  />
        <button onClick={postData} type="submit">Submit</button>
    </div>
  )
}

export default Create
