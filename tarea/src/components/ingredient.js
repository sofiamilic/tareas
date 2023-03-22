import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import NavBar from '../navbar';
import Ingredients from "./ingredients";
/* Muestra la descripcion de un Ingrediente*/
const Ingredient = () => {
    const [ingredient, setIngredient] = useState();
    const {id_post} = useParams();
    const [loading, setLoading] = useState(true);
    

   
    useEffect(() => {
      const fetchIngredient = async () => {
          setLoading(true);
          const res = await axios.get(`https://tarea-1.2023-1.tallerdeintegracion.cl/ingredients/${id_post}`);
          setIngredient(res.data);
          setLoading(false);
        };
        fetchIngredient();
      }, []);
  
      
      if (!loading) {
          return (
            <div className='container mt-5'>
              <NavBar/>
              <section class="content">
                <div class="menu-card-specific"
                      key = {ingredient.id}>
                    <div class="menu-container">
                        <img
                            class="video-thumbnail"
                            src={ingredient.img_url}
                        />
                    </div> 
                      <div class="menu-info">
                        <h2 class="menu-name">{ingredient.name}</h2>
                        <div class="menu-category">Descripcion: {ingredient.description}</div>
                        <div class="menu-category">Precio: ${ingredient.price}</div>
                        <div class="menu-category">Vence: {ingredient.expiration} días</div>
                        <div class="menu-category">Tamaño: {ingredient.size} g.</div>
                      </div>
                      
                    </div>

                
              </section>
            </div>
           
          )
      }
  }

export default Ingredient;