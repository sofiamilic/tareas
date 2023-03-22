import React from 'react';
import Link from 'react-router-dom';
import './App.css';
import NavBar from './navbar';
import Courses from './components/courses';
import Pagination from './components/pagination';
import Posts from './components/posts';

import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ingredients from './components/ingredients';

function IngredientsAll() {
    const[ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(8);
    const [lenght, setLenght] = useState(0);
  
    useEffect(() => {
      const fetchIngredients = async () => {
        setLoading(true);
        const res = await axios.get('https://tarea-1.2023-1.tallerdeintegracion.cl/ingredients');
        setIngredients(res.data.items);
        setLenght(res.data.size);
        setLoading(false);
        
      };
      fetchIngredients();
    }, []);
    console.log(ingredients);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = ingredients.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  
      return (
        <div className='container mt-5'>
          <NavBar/>
          <h1 className='text-primary mb-3'>Ingredientes</h1>
          <Ingredients ingredients={currentPosts} loading={loading} fromdish={'False'} />
            
          
          <Pagination 
          postsPerPage={postsPerPage} 
          totalPosts={lenght}
          paginate={paginate}/>
        </div>
      );
}
  
    
  
  export default IngredientsAll;