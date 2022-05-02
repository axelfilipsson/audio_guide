import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import AXELOCHVANESSA from "../../../resources/images/AXELOCHVANESSA.png"

const Icon = styled(ArrowBackIosIcon)`
color: black;
`



const Header = styled.div`
display: table;
padding: 20px;

box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
text-align: left;
width: 100%;
// background-image: url(${AXELOCHVANESSA});
background-size: 110px;
background-position: 80% 160%;
background-repeat: no-repeat;
font-family: 'replica';


`
const Back = styled.div`
margin-top:7px;
margin-bottom: 0px;
float: left;
font-size: 20px;
color: black;
` 

const H1 = styled.div`
margin-top: 8px;
float: left;
font-size: 18px;
color: black;
margin-left: 8px;
`

const AboutHeader = () => {




  return (
    <Header>
      <Back>
        <Link to="/">
     
            <Icon />
          
        </Link>
      </Back>
      <H1>OM PROJEKTET</H1>
    
    </Header>
  )
}

export default AboutHeader