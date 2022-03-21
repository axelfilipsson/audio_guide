
import styled from 'styled-components'
import GuideButton from './GuideButton'
import { Link } from "react-router-dom";



const ButtonContainer = styled.div`
  padding-top: 44px;
`
const StyledLink  = styled(Link)`
     text-decoration: none;
`;


const Buttons = () => {

  return (
    <ButtonContainer>
        <StyledLink to={"/TUSSILAGO"} > <GuideButton text={"TUSSILAGO"}></GuideButton></StyledLink>
        <StyledLink to={"/SKEN"} > <GuideButton text={"SKEN"}></GuideButton></StyledLink>
 
    </ButtonContainer>
  )
}

export default Buttons