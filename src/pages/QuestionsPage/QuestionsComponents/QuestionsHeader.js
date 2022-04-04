import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(80, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 90px;
  box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
`

const Back = styled.div`
padding-left: 20px;
padding-top: 20px;
// background-color: yellow;
grid-area: 1 / 1 / 3 / 16; 
`

const H1 = styled.div`
padding-top: 16px;
font-size: 30px;
grid-area: 1 / 16 / 2 / 60; 
margin-top:7px;
`

const QuestionsHeader = (props) => {
  return (
    <Header>
      <Back>
        <Link to="/">
          <IconButton >
            <ArrowBackIosIcon />
          </IconButton>
        </Link>
      </Back>

      <H1>Enkät</H1>
    
    </Header>
  )
}

export default QuestionsHeader