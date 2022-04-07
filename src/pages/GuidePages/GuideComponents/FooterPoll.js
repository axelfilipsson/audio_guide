import { Link } from "react-router-dom";
import styled from 'styled-components'


const Footer = styled.div`
// margin-bottom: 5%;
// margin-left: 5%;
 width: 100%;
  height: 60px;
  position: relative;
   background-color: #3959F8;
  position: fixed; 
  bottom:0%;


  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);

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
    <div>

      <StyledLink to="/questions">


        <Footer>

          <First> VI BEHÖVER FEEDBACK </First>
          <Second>
            SVARA HÄR
          </Second>

        </Footer>
      </StyledLink>

    </div>
  )
}

export default FooterPoll