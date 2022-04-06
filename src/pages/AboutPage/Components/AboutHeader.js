import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import AXELOCHVANESSA from "../../../resources/images/AXELOCHVANESSA.png"


const Header = styled.div`
display: table;
padding: 24px;
box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
text-align: left;
width: 100%;
background-image: url(${AXELOCHVANESSA});
background-size: 110px;
background-position: 84% 120%;
background-repeat: no-repeat;


`
const Back = styled.div`

float: left;
font-size: 20px;
color: black;
` 

const H1 = styled.div`
margin-top: 7px;
float: left;
font-size: 20px;
color: black;
margin-left: 8px;
`

const AboutHeader = () => {




  return (
    <Header>
      <Back>
        <Link to="/">
          <IconButton >
            <ArrowBackIosIcon />
          </IconButton>
        </Link>
      </Back>
      <H1>OM PROJEKTET</H1>
    
    </Header>
  )
}

export default AboutHeader