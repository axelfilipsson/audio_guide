import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";


const Header = styled.div`
display: table;
padding: 30px;
box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
text-align: left;

width: 100%;
`
const Back = styled.div`
height: 34px;
float: left;
` 


const H1 = styled.div`
  margin-left: 4%;
  float: left;
  font-size: 24px;
`

const About = styled.div`
  margin-top: 10px;
  margin-right: 14%;
  float: right;
  font-size: 14px;
  color: black;
`

const HomeHeader = (props) => {
  return (
    <Header>
      <Back>
        <Link to="/">
          <IconButton >
            <ArrowBackIosIcon />
          </IconButton>
        </Link>
      </Back>
      <H1>{props.title}</H1>
      <Link to="/about" >
          <About>ABOUT</About>
        </Link>

    </Header>
  )
}

export default HomeHeader