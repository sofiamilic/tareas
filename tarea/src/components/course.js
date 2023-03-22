import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import NavBar from '../navbar';
import Courses from './courses';
import Ingredients from "./ingredients";
/* Muestra la descripcion de un Menu junto a los platos que tiene*/
const Course = () => {
    const [course, setCourse] = useState();
    const {id_post} = useParams();
    const [loading, setLoading] = useState(true);
    const [ingredients, setIngredients] = useState();

   
    useEffect(() => {
      const fetchCourse = async () => {
          setLoading(true);
          const res = await axios.get(`https://tarea-1.2023-1.tallerdeintegracion.cl/courses/${id_post}`);
          setCourse(res.data);
          setIngredients(res.data.ingredients);
          setLoading(false);
        };
      fetchCourse();
      }, []);
  
      
      if (!loading) {
        console.log(course);
          return (
            <div className='container mt-5'>
              <NavBar/>
              <section class="content">
                <div class="menu-card-specific"
                      key = {course.id}>
                    <div class="menu-container">
                        <img
                            class="video-thumbnail"
                            src={course.img_url}
                        />
                    </div> 
                      <div class="menu-info">
                        <h2 class="menu-name">{course.name}</h2>
                        <div class="menu-category">Descripcion: {course.description}</div>
                        <div class="menu-category">Precio: ${course.price}</div>
                        <div class="menu-category">Vence: {course.expiration} días</div>
                        <div class="menu-category">Tamaño: {course.size} g.</div>
                      </div>
                      <div>
                        <h2>Ingredientes</h2>
                        <Ingredients ingredients={ingredients} loading={loading} fromdish={'True'} />
                      </div>
                    </div>

                
              </section>
            </div>
           
          )
      }
  }

export default Course;