import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

const Header = styled.div`
display: table;
padding: 20px;
box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
text-align: left;
width: 100%;
font-family: 'replica';
`

const Icon = styled(ArrowBackIosIcon)`
color: black;
`

const Back = styled.div`
float: left;
font-size: 20px;
color: white;

`

const H1 = styled.div`
margin-top: 6px;
float: left;
font-size: 24px;
color: black;
margin-left: 0px;
`

const QuestionsHeader = (props) => {
  return (
    <Header>
      <Back>
        <Link to="/">
          <IconButton >
            <Icon />
          </IconButton>
        </Link>
      </Back>

      <H1>Enkät</H1>
    
    </Header>
  )
}

export default QuestionsHeader