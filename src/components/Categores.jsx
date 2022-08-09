import React from 'react'
import styled from 'styled-components'
import group from '../assets/38.png'
import black from '../assets/8.png'
import white from '../assets/white.png'

const Maindiv =styled.div`
background: url(${group});
 
 height:63vh;
 width:50vw;
    margin-top:12vh;
`

const Black = styled.img`
   height:14vh;
   width:30vw;
   margin-top:27vh;
   margin-left:17%;
   
`
const Newdiv = styled.div`
background: url(${white});
height:65vh;
width:20vw;
margin-top:12vh;

`


const BigDiv = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
`
const TextDiv = styled.div`
  display:grid;
   margin-left:20%;
   margin-top:-12%;
`
const Para = styled.p`
  color:#FFFFFF;
  font-size:16px;
  font-family:monospace;
  font-weight:bold;
  margin-left:40px;
`
const Text1 = styled.p`
color:#FFFFFF;
font-size:16px;
font-family:monospace;
font-weight:bold;
margin-left:33px;
`
const TextDiv1 = styled.div`
display:grid;
margin-left:5%;
margin-top:-12%;
`
const Para1 = styled.p`
color:#FFFFFF;
font-size:16px;
font-family:monospace;
font-weight:bold;
margin-left:11px;
`
const Text2 = styled.p`
color:#FFFFFF;
font-size:16px;
font-family:monospace;
font-weight:bold;
`
const TextDiv2 = styled.div`
display:grid;
margin-left:5%;
margin-top:-12%;
`
const Para2 = styled.p`
color:#FFFFFF;
font-size:16px;
font-family:monospace;
font-weight:bold;
margin-left:17px;
`
const Text3 = styled.p`
color:#FFFFFF;
font-size:16px;
font-family:monospace;
font-weight:bold;
`
const TextDiv3 = styled.div`
display:grid;
margin-left:5%;
margin-top:-12%;
`
const Para3 = styled.p`
color:#FFFFFF;
font-size:16px;
font-family:monospace;
font-weight:bold;
margin-left:2px;
`
const Text4 = styled.p`
color:#FFFFFF;
font-size:16px;
font-family:monospace;
font-weight:bold;
`

const BigTextDiv  = styled.div`
  display:flex;
  margin-left:30px;
  
`
const Categores = () => {
  return (
   <>
   
   <BigDiv>
   <Maindiv>
      <Black src={black} />
      <BigTextDiv>
      <TextDiv>
      <Para>10</Para>
      <Text1>Days</Text1>
      </TextDiv> 
      <TextDiv1>
      <Para1>25</Para1>
      <Text2>Hours</Text2>
      </TextDiv1>
      <TextDiv2>
      <Para2>47</Para2>
      <Text3>minutes</Text3>
      </TextDiv2>
      <TextDiv3>
      <Para3>34</Para3>
      <Text4>sec</Text4>
      </TextDiv3>
      </BigTextDiv>
   </Maindiv>
   <Newdiv>
   
   </Newdiv>
   </BigDiv>
   
   </>
  )
}

export default Categores