import React from "react";

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <section class="content">
            {posts.map((menu) => (
            
          <div class="menu-card" 
                key={menu.id}>
            
              <a href={`/trays/${menu.id}`}
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
                  <span>${menu.price}</span>
                </div>
              </div> 
              </a>
          </div>


            ))}
          </section>
    );
}
export default Posts;