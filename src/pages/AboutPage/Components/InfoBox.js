import styled from 'styled-components'


const Container = styled.div`
text-align: left;
margin: 30px;

margin-top: 0;
`

const Text = styled.p`
margin-top: 40px;
  font-size: 18px;
  font-weight: normal;

`

const InfoBox = () => {
    return (
        <Container>
            <Text>
                <b>Vi är Axel och Vanessa och har i samarbete med Dramaten skapat Ljudguiden som en del av vårt examensarbete på Stockholms universitet.
                <br></br><br></br>

                Hoppas du tycker det är kul att få testa detta med oss!
                <br></br><br></br>

                Det är viktigt för oss att få in så många svar som möjligt, hjälp oss gärna genom att svara på enkäten nedan!

                Självklart är du anonym.
                <br></br><br></br>
                Tack och ha en fin dag!
                <br></br><br></br>

                </b>
            </Text>
        </Container>
    )
}

export default InfoBox