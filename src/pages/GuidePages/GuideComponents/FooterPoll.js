import { Link } from "react-router-dom";
import styled from 'styled-components'


const Container = styled.div`

//  width: 100%;
//   height: 60px;
//   position: relative;

//   position: fixed; 
//   bottom:0%;
//   box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.6);

`

const Footer = styled.div`
margin-bottom: 5%;
margin-left: 5%;
 width: 90%;
  height: 60px;
  position: relative;
   background-color: #F297DE;
   color: black;
  position: fixed; 
  bottom:0%;
  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.6);
  font-family: 'replica';

`

const First = styled.div`
padding-top: 10px;
  font-size: 14px;
  
`

const Second = styled.div`
  font-size: 20px;
 
`
const StyledLink = styled(Link)`
     text-decoration: none;
     color:white;

`;

const FooterPoll = () => {


  return (
    <Container>

      <StyledLink to="/questions">


        <Footer>

          <First> VI BEHÖVER FEEDBACK </First>
          <Second>
            SVARA HÄR
          </Second>

        </Footer>
      </StyledLink>

    </Container>
  )
}

export default FooterPoll