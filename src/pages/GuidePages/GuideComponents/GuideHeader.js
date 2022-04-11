import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import AboutButton from "../../../GlobalComponents/AboutButton"

const Icon = styled(ArrowBackIosIcon)`
color: black;
`


const Header = styled.div`
display: table;
padding: 20px;
text-align: left;
width: 100%;

`


const Back = styled.div`
  float: left;
  font-size: 20px;
  color: white;
   margin-top: 6px;
  margin-right:4px;
  margin-left:0px;

`


const H1 = styled.div`
margin-top: 8px;
float: left;
font-size: 16px;
// color: white;

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
            <Icon />
        </a>
      </Back>
      <H1>{props.title}</H1>
      {/* <AboutButton/> */}
      <a href="https://audio-guide.vercel.app/about">
      <AboutButton/>
        {/* <About>OM LJUDGUIDEN</About> */}
      </a>

    </Header>
  )
}

export default HomeHeader