import React from 'react'
import {NavLink} from 'react-router-dom'
import './Product.css'


function Product(curElem) {

    const {price,productImageUrl,title,_id} = curElem

  return (
    <>
    <NavLink to={`/singleproduct/${_id}`}>
      <div className="card">
        <figure>
        <img src={`http://localhost:8081/images/${productImageUrl}`} alt={title} />
          <figcaption className="caption">{title}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{title}</h3>
            <p className="card-data--price">{price}</p>
          </div>
        </div>
      </div>
     </NavLink>
    </>
  )
}

export default Product