
import React from 'react';
import './App.css';
import NavBar from './navbar';
import Tray from './components/tray';
import Pagination from './components/pagination';
import Posts from './components/posts';

import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const[menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(8);
  const [lenght, setLenght] = useState(0);

  useEffect(() => {
    const fetchMenus = async () => {
      setLoading(true);
      const res = await axios.get('https://tarea-1.2023-1.tallerdeintegracion.cl/trays');
      setMenus(res.data.items);
      setLenght(res.data.size);
      setLoading(false);
      console.log(menus)
      console.log(lenght)
    };
    fetchMenus();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = menus.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
      <div className='container mt-5'>
        <NavBar/>
        <h1 className='text-primary mb-3'>Menús</h1>
        <Posts posts={currentPosts} loading={loading} />
          
        {console.log(lenght)}
        <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={lenght}
        paginate={paginate}/>
      </div>
    );
  };


export default App;
