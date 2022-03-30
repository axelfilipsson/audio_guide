import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Logo from '../../../resources/logo.svg'

const Header = styled.div`
display: table;
padding: 30px;
box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
text-align: left;
width: 100%;
`

const H1 = styled.div`
margin-top: 7px;
float: left;
font-size: 20px;
color: black;
margin-left: 8px;

`
const Img = styled.img`
height: 34px;
float: left;
font-size: 20px;
color: black;
`

const About = styled.div`
margin-top: 10px;
margin-right: 14%;
float: right;
font-size: 14px;
color: black;
`

const Line = styled.div`
display: table-cell;
vertical-align: middle;
`




const HomeHeader = () => {
  return (
    <Header>
      <Img src={Logo} /> 
        <H1> LJUDGUIDE</H1>
        <Link to="/about" >
          <About>ABOUT</About>
        </Link>
    </Header>
  )
}

export default HomeHeader