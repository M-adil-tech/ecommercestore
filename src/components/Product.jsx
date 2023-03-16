import React from 'react'
import styled from 'styled-components'
import Productlist from './Productlist'
import {popularProducts} from '../data'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Product = () => {
  return (

   <Container>
    {popularProducts.map(item=> (
        <Productlist item={item}/>
    ))}
   </Container>
  )
}

export default Product