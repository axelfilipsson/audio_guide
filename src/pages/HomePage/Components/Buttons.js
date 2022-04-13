
import styled from 'styled-components'
import GuideButton from './GuideButton'
import { Link } from "react-router-dom";



const ButtonContainer = styled.div`
  padding-top: 44px;
  padding-bottom: 40px;
`
const StyledLink = styled(Link)`
     text-decoration: none;
`;


const Buttons = () => {

  return (
    <ButtonContainer>
      <StyledLink to={"/OMBOKEN"} > <GuideButton text={"OM BOKEN"}></GuideButton></StyledLink>
      <StyledLink to={"/OMKONSTEN"} > <GuideButton text={"OM KONSTEN"}></GuideButton></StyledLink>
      <StyledLink to={"/TRAGEDIEN"} > <GuideButton text={"TRAGEDIEN"}></GuideButton></StyledLink>
      <StyledLink to={"/KOMEDIEN"} > <GuideButton text={"KOMEDIEN"}></GuideButton></StyledLink>
      <StyledLink to={"/DROTTNINGHOLM"} > <GuideButton text={"DROTTNINGHOLM"}></GuideButton></StyledLink>
      <StyledLink to={"/GUSTAVIII"} > <GuideButton text={"GUSTAV III"}></GuideButton></StyledLink>
      <StyledLink to={"/DRAMATSSKAPELSE"} > <GuideButton text={"DRAMATS SKAPELSE"}></GuideButton></StyledLink>
    </ButtonContainer>
  )
}

export default Buttons