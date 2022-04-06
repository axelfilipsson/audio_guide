import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";


const Header = styled.div`
display: table;
padding: 24px;
// box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
text-align: left;
width: 100%;

`


const Back = styled.div`

float: left;
font-size: 20px;
// color: white;
`

const H1 = styled.div`
margin-top: 8px;
float: left;
font-size: 18px;
// color: white;
margin-left: 0px;
`
const About = styled.div`
  margin-top: 11px;
  margin-right: 14%;
  float: right;
  font-size: 12px;
  color: black;
`





const HomeHeader = (props) => {
  return (
    <Header>
      <Back>
      <a href="https://audio-guide.vercel.app/">
          <IconButton >
            <ArrowBackIosIcon />
          </IconButton>
        </a>
      </Back>
      <H1>{props.title}</H1>
      <a href="https://audio-guide.vercel.app/about">
        <About>ABOUT</About>
      </a>

    </Header>
  )
}

export default HomeHeader