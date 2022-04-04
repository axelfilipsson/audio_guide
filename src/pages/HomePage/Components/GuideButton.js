import styled from 'styled-components'

const Button = styled.button`
  background: #000000;
  border: none;
  color: #EFEFEF;
  margin-bottom: 2em;
  width: 24em;
  height: 4em;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.6);
`

const Text = styled.text`
  font-size: 20px;
  font-weight: bold;
`

const GuideButton = (props) => {
  return (
    <Button>
      <Text>{props.text}</Text>
    </Button>
  )
}

export default GuideButton