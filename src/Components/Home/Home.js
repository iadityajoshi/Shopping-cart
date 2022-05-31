import React from 'react'
import { CartState } from '../../context/GlobalContext'
import SingleProduct from '../SingleProduct';
import './styles.css'
import Filters from '../Filter/Filters';


const Home = () => {
  const {state: {products}, } = CartState();
  console.log(products);
  
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">   
        {products.map( (item)=> 
          <SingleProduct prod = {item} key = {item.id} />
         )}
      </div> 
    </div>
  )
}

export default Home
