import { Link } from "react-router-dom";
import styled from 'styled-components'


const Footer = styled.div`
  height: 60px;
  position: relative;
   background-color: #3959F8;
  position: fixed; 
  bottom:0%;

  width: 100%;


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
     color: black;
`;

const FooterPoll = () => {


  return (
    <div>

      <StyledLink to="/questions">


        <Footer>

          <First> VI BEHÖVER FLER SVAR </First>
          <Second>
            SVARA PÅ FRÅGOR HÄR
          </Second>

        </Footer>
      </StyledLink>

    </div>
  )
}

export default FooterPoll