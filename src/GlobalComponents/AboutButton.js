import styled from 'styled-components'

const Button = styled.button`
margin-top: 4px;
margin-right: 8%;
float: right;
font-size: 12px;
color: black;
font-weight: bold;
border: none;
text-decoration: none;
background-color: black;
color: white;
padding: 6px;
font-size: 14px;
font-family: 'replica';
box-shadow: 1px 1px 2px rgba(0,0,0,0.6);

`
const AboutButton = () => {
  return (
    <Button>OM PROJEKTET</Button>
  )
}

export default AboutButton