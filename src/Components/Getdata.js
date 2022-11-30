import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Getdata() {

    const [APIData, setAPIData] = useState([]);
    // const [cate, setCate] = useState([]);
    
    useEffect(() => {
        axios.get(`https://6383958b6e6c83b7a9974a62.mockapi.io/data/categories/`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const onDelete = (id) => {
        axios.delete(`https://6383958b6e6c83b7a9974a62.mockapi.io/data/categories/${id}`).then(() => {
            axios.get(`https://6383958b6e6c83b7a9974a62.mockapi.io/data/categories/`)
            .then((response) => {
                setAPIData(response.data);
            })
        }).catch(error => console.log(error))
    }

    const setData = (data) => {
        let { id, name, slug, description } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', name);
        localStorage.setItem('Last Name', slug);
        localStorage.setItem('Checkbox Value', description);
    }

  return (
    <div>
        <table border="2">
            <tr>
                <th>Id #</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            {
                APIData.map((item) => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><img src={item.slug} alt={item.name} /></td>
                            <td>{item.description}</td>
                            <td>
                                <Link to='/update'>
                                    <button onClick={() => setData(item)}>Update</button>
                                </Link>
                            </td>
                            <td><button onClick={() => onDelete(item.id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}

export default Getdata
