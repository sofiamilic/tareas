import React from 'react';
import './App.css';
import NavBar from './navbar';
import Courses from './components/courses';
import Pagination from './components/pagination';


import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function CoursesAll() {
    const[courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(8);
    const [lenght, setLenght] = useState(0);
  
    useEffect(() => {
      const fetchCourses = async () => {
        setLoading(true);
        const res = await axios.get('https://tarea-1.2023-1.tallerdeintegracion.cl/courses');
        setCourses(res.data.items);
        setLenght(res.data.size);
        setLoading(false);
        
      };
      fetchCourses();
    }, []);

    console.log(courses);
        
    
  
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = courses.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  
      return (
        <div className='container mt-5'>
          <NavBar/>
          <h1 className='text-primary mb-3'>Platos</h1>
          <Courses courses={currentPosts} loading={loading} frommenu={"False"} />
            
          {console.log(lenght)}
          <Pagination 
          postsPerPage={postsPerPage} 
          totalPosts={lenght}
          paginate={paginate}/>
        </div>
      );
    };
  
  
  export default CoursesAll;
  