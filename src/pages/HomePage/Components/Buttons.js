
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
        {/* <StyledLink to={"/TUSSILAGO"} > <GuideButton text={"TUSSILAGO"}></GuideButton></StyledLink>  */}
        <StyledLink to={"/KOMEDIN"} > <GuideButton text={"KOMEDIN"}></GuideButton></StyledLink> 
        <StyledLink to={"/TRAGEDIN"} > <GuideButton text={"TRAGEDIN"}></GuideButton></StyledLink> 
        <StyledLink to={"/DRAMATSSKAPELSE"} > <GuideButton text={"DRAMATS SKAPELSE"}></GuideButton></StyledLink> 
        <StyledLink to={"/OMKONSTEN"} > <GuideButton text={"OM KONSTEN"}></GuideButton></StyledLink> 
        <StyledLink to={"/GUSTAVIII"} > <GuideButton text={"GUSTAV III"}></GuideButton></StyledLink> 
        <StyledLink to={"/DROTTNINGHOLM"} > <GuideButton text={"DROTTNINGHOLM"}></GuideButton></StyledLink> 
        <StyledLink to={"/OMBOKEN"} > <GuideButton text={"OMBOKEN"}></GuideButton></StyledLink> 
    </ButtonContainer>
  )
}

export default Buttons