import React from 'react'
import './Stars.css'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Stars({ stars, reviews }) {

    const ratingStar = Array.from({ length: 5 }, (elem, i) => {
        let number = i + 0.5;
    
        return (
          <span key={i}>
            {stars >= i + 1 ? (
              <FaStar className="icon" />
            ) : stars >= number ? (
              <FaStarHalfAlt className="icon" />
            ) : (
              <AiOutlineStar className="icon" />
            )}
          </span>
        );
      });
    
      return (
        
          <div className="icon-style">
            {ratingStar}
            <p>({reviews} customer reviews)</p>
          </div>
       
      );
    };
    


export default Stars