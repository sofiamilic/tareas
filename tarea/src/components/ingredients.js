import React from "react";

const Ingredients = ({ ingredients, loading, fromdish }) => {
    
    if (loading) {
        return <h2>Loading...</h2>;
    }
    if (fromdish === 'True') {
      return (
        <section class="content">
            {ingredients.map((menu) => (
        
          <div class="menu-card" 
                key={menu.id}>
            
              <a href={`/ingredients/${menu.id}`}
                 class= "menu-link">
              
            
              <div class="menu-container">
                <img
                  class="video-thumbnail"
                  src={menu.img_url}
                />
              </div>  
              <div class="menu-info">
                <div class="menu-name">
                  <p>{menu.name}</p>
                </div>  
                <div class="menu-category">
                  <span>Cantidad: {menu.quantity}</span>
                </div>
                
              </div> 
              </a>
          </div>


            ))}
          </section>
    );
    }
    else {
      return (
        <section class="content">
            {ingredients.map((menu) => (
        
          <div class="menu-card" 
                key={menu.id}>
            
              <a href={`/ingredients/${menu.id}`}
                 class= "menu-link">
              
            
              <div class="menu-container">
                <img
                  class="video-thumbnail"
                  src={menu.img_url}
                />
              </div>  
              <div class="menu-info">
                <div class="menu-name">
                  <p>{menu.name}</p>
                </div>  
                <div class="menu-category">
                  <span>Precio: ${menu.price}</span>
                </div>
                
              </div> 
              </a>
          </div>


            ))}
          </section>
    );
    }
    
}
export default Ingredients;