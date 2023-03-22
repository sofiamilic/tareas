import React from "react";

const Courses = ({ courses, loading, frommenu }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    if (frommenu === 'True') {
      return (
        <section class="content">
            {courses.map((menu) => (
                
            
          <div class="menu-card" 
                key={menu.id}>
            
              <a href={`/courses/${menu.id}`}
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
                  <span>Category:{menu.category}</span>
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
            {courses.map((menu) => (
                
            
          <div class="menu-card" 
                key={menu.id}>
            
              <a href={`/courses/${menu.id}`}
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
                  <span>Price: ${menu.price}</span>
                </div>
              </div> 
              </a>
          </div>


            ))}
          </section>
    );
    }
    
}
export default Courses;