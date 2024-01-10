import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createCategory } from '../services/operations/courseDetailsAPI';
import { useEffect } from 'react';

const Category = () => {

    const dispatch = useDispatch();
    const[FormData,setFormData] = useState({
        categoryName:"",
        description:"",
    });

    const[token, setToken] = useState();
    const {categoryName, description} = FormData;

    useEffect(()=>{
        setToken(JSON.parse(localStorage.getItem("token")));
    },[]);

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
      }

      const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(createCategory(FormData, token))
      }

  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='text-white'>Create Category</div>
        <form onSubmit={handleOnSubmit}>
            <input type='text'
            name='categoryName'
            onChange={handleOnChange}
            value={categoryName}
            placeholder='category name' />
            
            <input type='textarea' 
            name='description'
            value={description}
            onChange={handleOnChange}
            placeholder='description' />
            <button className='text-white'> Create</button>
        </form>
    </div>
  )
}

export default Category

