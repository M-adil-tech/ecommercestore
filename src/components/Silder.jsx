import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import React,{ useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data'
const Container =styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
padding-top:25px;
overflow:hidden;

`
const Arrow = styled.div`
width:50px;
height:50px;

color:teal;
border-radius:20px;
display:flex;
align-item:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction === "left" && "10px"};
right:${props=>props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
z-index:2;
`
const Wrapper=styled.div`
height:100%;
display:flex;
transform:translateX(${props=>props.slide * -100}vw);
transition:all 1.5s ease;
background-color:rgb(250,211,214);
`
const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;


`
const Imgcontainer=styled.div`
 height: 100%;
  flex: 1;




`

const Image=styled.img`
flex:1;
height:80%;
`




const Infocontainer=styled.div`
flex:1;
padding:50px;


`
const Title=styled.h1`
font-size:70px;
color:white;
font-align:center;
font-weight:bold;

`
const Para=styled.p` 
font-size:20px;
color:white;
font-weight:bold;
font-align:center;
letter-spacing: 3px;
`
const Button=styled.button`


cursor:pointer;
font-size:14px;

`

export const Silder = () => {
const [slide, setSlide] = useState(0);
    const handleclick=(direction)=>{
        if(direction==="left"){
            setSlide(Slide > 0 ? slide-1:2)
        }
        else{
            setSlide(slide<2 ? slide+1:0)
        }
    }
  return (
   
    <Container>
        <Arrow direction="left" onClick={()=>handleclick("left")} >
            <ArrowBackIosNew/>
        </Arrow> 
        <Wrapper slide={slide}>
        {sliderItems.map((item)=>(
        <Slide>
        <Imgcontainer>
           <Image src={item.img}/>
        </Imgcontainer>
        <Infocontainer>
            <Title>
               {item.title}
            </Title>
            <Para>
               {item.des}
            </Para>
            <Button>
               Shop Now
            </Button>
           </Infocontainer>
          
           
              
        </Slide>
        
        ))}
        </Wrapper>
        
        <Arrow direction="right" onClick={()=>handleclick("right")} >
            <ArrowForwardIos/>

        </Arrow>

    </Container>
  )
}
