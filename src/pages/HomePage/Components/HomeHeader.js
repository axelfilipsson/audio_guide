import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Header = styled.div`
display: table;
padding: 30px;
box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
text-align: left;

width: 100%;
`

const H1 = styled.div`
  margin-left: 2%;
  float: left;

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
      <Line>
        <H1> DRAMATEN</H1>
        <Link to="/about" >
          <About>ABOUT</About>
        </Link>

      </Line>

    </Header>
  )
}

export default HomeHeader