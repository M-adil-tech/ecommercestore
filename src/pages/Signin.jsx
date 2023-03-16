import React from 'react'
import { Announcment } from '../components/Announcment'
import { Navbar } from '../components/Navbar'
import styled from "styled-components";

const Container = styled.div`
 
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
margin-top:50px;
  width: 25%;
  padding: 20px;


`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;



const Signin = () => {
  return (
    <>
      <Announcment/>
    <Navbar/>
  
  
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
   

  </>
 

  )
}

export default Signin