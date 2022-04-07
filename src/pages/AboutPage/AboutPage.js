import AboutHeader from "./Components/AboutHeader"
import InfoBox from "./Components/InfoBox"
import { Link } from "react-router-dom";
import styled from 'styled-components'


const Body = styled.div`
height:100vh;
`


const StyledLink = styled(Link)`
     text-decoration: none;
     background-color: #3959F8;
     color: white;
     padding: 10px;
     font-size: 20px;
   
     box-shadow: 2px 2px 4px rgba(0,0,0,0.6);
`;


const AboutPage = (props) => {
    return (
        <Body>
            <AboutHeader />
            <InfoBox underAged={props.underAged} />
            {!props.underAged ?
                <StyledLink to={"/questions"} >SVARA PÅ FRÅGORNA</StyledLink>
                : null}

        </Body>
    )
}

export default AboutPage