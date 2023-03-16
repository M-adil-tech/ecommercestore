import React from 'react'
import styled from 'styled-components'
const Container= styled.div`
height:30px;
background-color:teal;
color: white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:500;
`

export const Announcment = () => {
  return (
<Container>
Mega Offer! Delivery Free All Over The World On Order Over $100
</Container>
    
  )
}
