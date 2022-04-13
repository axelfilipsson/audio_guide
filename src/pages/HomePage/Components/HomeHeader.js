import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Logo from '../../../resources/logo.svg'
import HEADERIMAGE from '../../../resources/images/HEADER.png';
import DRAMATEN from '../../../resources/DRAMATEN.png'
import AboutButton from '../../../GlobalComponents/AboutButton'


const Header = styled.div`
display: table;
padding: 20px;
box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
text-align: left;
width: 100%;

font-family: 'replica';

`

const H1 = styled.div`
margin-top: 7px;
float: left;
font-size: 18px;
color: black;
margin-left: 12px;


`
const Img = styled.img`
height: 28px;
float: left;
font-size: 20px;
color: black;
margin-top: 5px;
margin-left: 0px;
margin-right: 6px;
`

const About = styled.div`
margin-top: 10px;
margin-right: 14%;
margin-left: 8px;
float: right;
font-size: 14px;
color: black;
`


const HomeHeader = () => {
  return (
    <Header >
      <Img src={Logo} /> 
      {/* <Img src={DRAMATEN}/> */}
        <H1> LJUDGUIDEN</H1>
        <Link to="/about" >
          <AboutButton/>
          {/* <About>OM OSS</About> */}
        </Link>
    </Header>
  )
}

export default HomeHeader