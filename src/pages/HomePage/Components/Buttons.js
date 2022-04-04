
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
        <StyledLink to={"/KOMEDINOCHTRAGEDIN"} > <GuideButton text={"KOMEDIN & TRAGEDIN"}></GuideButton></StyledLink> 
        <StyledLink to={"/DRAMATSSKAPELSE"} > <GuideButton text={"DRAMATS SKAPELSE"}></GuideButton></StyledLink> 
        <StyledLink to={"/OMKONSTEN"} > <GuideButton text={"OM KONSTEN"}></GuideButton></StyledLink> 
        <StyledLink to={"/GUSTAVIIIKOMPLIMENTERANDEFRUOLIN"} > <GuideButton text={"GUSTAV III KOMPLIMENTERANDE FRU OLIN"}></GuideButton></StyledLink> 
    </ButtonContainer>
  )
}

export default Buttons