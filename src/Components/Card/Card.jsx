import React from 'react'
import cardImage from "../../assets/no-poster.png"
export const Card = () => {
    const cardStyle  ={
        width : "300px",
        margin : "20px",
        border : "10px solid black"
       
       
    }
  return (
          <>
            <div>
                <figure style={cardStyle}>
                    <img src={cardImage}/>
                </figure>
            </div>
            
            
          </>
              
           
          
  )
}
