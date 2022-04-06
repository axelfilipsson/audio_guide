import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Logo from '../../../resources/logo.svg'
import HEADERIMAGE from '../../../resources/images/HEADER.png';
import DRAMATEN from '../../../resources/DRAMATEN.png'


const Header = styled.div`
display: table;
padding: 24px;
box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
text-align: left;
width: 100%;

// background-image: url(${HEADERIMAGE});
// background-size: 90%;
// background-position: 0% 20%;
// background-repeat: no-repeat;


`



const H1 = styled.div`
margin-top: 7px;
float: left;
font-size: 20px;
color: black;
margin-left: 14px;


`
const Img = styled.img`
height: 30px;
float: left;
font-size: 20px;
color: black;
margin-top: 7px;
margin-left: 6px;
margin-right: 6px;
`

const About = styled.div`
margin-top: 12px;
margin-right: 14%;
float: right;
font-size: 14px;
color: black;
`


const HomeHeader = () => {
  return (
    <Header class="z">
      <Img src={Logo} /> 
      <Img src={DRAMATEN}/>
        {/* <H1> LJUDGUIDE</H1> */}
        <Link to="/about" >
          <About>ABOUT</About>
        </Link>
    </Header>
  )
}

export default HomeHeader