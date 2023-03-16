import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:40px;


`
const Wrapper = styled.div`
padding: 3px 10px;
display:flex;
justify-content:space-between;
align-items:center;

`
const Left = styled.div`
flex:1;
display:flex;
align-items:center:
`

const Searchbar=styled.div`
border:0.5px  solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px ;
border-radius:5%;

`
const Input=styled.input`
border:none;
`
const Center= styled.div`
flex:1;
text-align:center;
`
const Logo=styled.h1`
font-weight:bold;
`

const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:45px;
`

export const Navbar = () => {
  return (
    <Container>
    <Wrapper>
    <Left>
    <Searchbar>
     <Input/>
    <Search style={{color:"gray", fontSize:16}}/>
    </Searchbar>
    
    </Left>
   <Center>
      <Logo>Appearal.</Logo>
   </Center>
   <Right>

      <MenuItem>Register</MenuItem>
      <MenuItem>Sign In</MenuItem>
      <MenuItem>
      <Badge badgeContent={4} color="primary">
  <ShoppingCartOutlined color="action" />
</Badge>
      </MenuItem>

   </Right>
    </Wrapper>
      
    </Container>
  )
}
