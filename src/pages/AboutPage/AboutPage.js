import AboutHeader from "./Components/AboutHeader"
import InfoBox from "./Components/InfoBox"
import { Link } from "react-router-dom";
import styled from 'styled-components'



const StyledLink = styled(Link)`
     text-decoration: none;
     background-color: black;
     color: white;
     padding: 10px;
     font-size: 20px;
     border-radius: 10px;
     box-shadow: 2px 2px 4px rgba(0,0,0,0.6);
`;


const AboutPage = () => {
    return (
        <div>
            <AboutHeader />
            <InfoBox />
            <StyledLink to={"/questions"} > Svara på frågorna</StyledLink>

        </div>
    )
}

export default AboutPage