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
//  background-color: red;
font-size: 26px;
grid-area: 1 / 16 / 2 / 81; 
`

const H2 = styled.div`
// background-color: green;
font-size: 20px;
grid-area: 2 / 16 / 3 / 81;
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
      <H2>{props.artist}</H2>
    </Header>
  )
}

export default HomeHeader