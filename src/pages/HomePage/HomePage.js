import Buttons from './Components/Buttons'
import HomeHeader from './Components/HomeHeader'
import styled from 'styled-components'

const Body = styled.div`
height:100vh;
`

const HomePage = () => {
    return (
        <Body>
            <HomeHeader></HomeHeader>
            <Buttons></Buttons>
        </Body>
    )
}

export default HomePage