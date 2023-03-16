import React from 'react'
import styled from 'styled-components'
import {categories} from '../data'
import Catogoryitem from './Catogoryitem'



const Container= styled.div`
display:flex;
padding:20px;
justify-content:center;
`;

const Catogories = () => {
  return (
   <Container>   
    {
        categories.map(item=>(
            <Catogoryitem item={item}/>
        ))
    }
   </Container>
  )
};

export default Catogories