import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

const Header = styled.div`
  width: 100%;
  display: table;
  padding: 30px;
  box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
`

const Back = styled.div`
margin-left: 2%;
float: left;
`

const H1 = styled.div`
margin-top: 2px;
margin-right: 14%;
color: black;

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
      <H1>Om projektet</H1>
    </Header>
  )
}

export default AboutHeader