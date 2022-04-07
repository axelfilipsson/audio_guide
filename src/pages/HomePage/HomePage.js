import Buttons from './Components/Buttons'
import HomeHeader from './Components/HomeHeader'
import styled from 'styled-components'
import Background from '../../resources/images/BAKGRUND.png';

const Body = styled.div`
height:100vh;
`

const Container= styled.div`
box-shadow: 0px 4px 4px rgb(0,0,0,0.5) inset;
height:100vh;
background-image: url(${Background});
background-size: cover;
background-position: center;
`

const HomePage = () => {
    return (
        <Body>
            <HomeHeader></HomeHeader>
            <Container>
                <Buttons />
            </Container>
        </Body>
    )
}

export default HomePage