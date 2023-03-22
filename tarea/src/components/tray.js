import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import NavBar from '../navbar';
import Courses from './courses';
/* Muestra la descripcion de un Menu junto a los platos que tiene*/
const Tray = () => {
    const [tray, setTray] = useState();
    const {id_post} = useParams();
    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState();
   
    useEffect(() => {
      const fetchTray = async () => {
          setLoading(true);
          const res = await axios.get(`https://tarea-1.2023-1.tallerdeintegracion.cl/trays/${id_post}`);
          setTray(res.data);
          setCourses(res.data.courses)
          setLoading(false);
        };
      fetchTray();
      }, []);
  
      
      if (!loading) {
        console.log(tray);
          return (
            <div className='container mt-5'>
              <NavBar/>
              <section class="content">
                <div class="menu-card-specific"
                      key = {tray.id}>
                    <div class="menu-container">
                      <div class="menu-info">
                        <h2 class="menu-name">{tray.name}</h2>
                        <div class="menu-category">Descripcion: {tray.description}</div>
                        <div class="menu-category">Precio: ${tray.price}</div>
                        <div class="menu-category">Vence: {tray.expiration} días</div>
                        <div class="menu-category">Tamaño: {tray.size} g.</div>

                      </div>
                      <div>
                        <h2>Platos</h2>
                        <Courses courses={courses} loading={loading} frommenu={"True"}/>
                      </div>
                    </div>

                  

                </div>
              </section>
            </div>
          )
      }
  }

export default Tray;
