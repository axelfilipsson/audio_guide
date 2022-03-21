import styled from 'styled-components'


const Container = styled.div`
text-align: left;
margin: 30px;
margin-top: 0;
`

const Text = styled.p`
  font-size: 20px;
  font-weight: normal;

`

const InfoBox = () => {
    return (
        <Container>
            <Text>
           <b>Lorem </b> ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ligula non nisl tempor pretium nec non tortor. Aliquam lobortis enim in orci euismod, non pellentesque nisl congue. Duis scelerisque iaculis mauris fermentum accumsan.
            </Text>
        </Container>
    )
}

export default InfoBox