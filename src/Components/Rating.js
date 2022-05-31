import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const Rating = ({rating, onClick, style}) => {
  return (
    <>
{/* while creating those icons we check if there index is smaller or equal to index of user clicked and acc to that render it as filled star or empty star */}
    {[...Array(5)].map( (_, index)=>(
      <span key={index} onClick= {()=> onClick(index)} style= {style} >
        {rating>index ? (<AiFillStar fontSize = '15px' />) : (<AiOutlineStar fontSize='15px' />)}
      </span>
    ) )}
    </>
  )
}

export default Rating

