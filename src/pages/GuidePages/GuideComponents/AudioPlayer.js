import song from "../../../resources/knack.mp3";
import styled from 'styled-components'

const Button = styled.button`
  background: #3959F8;
  border: none;
  color: #EFEFEF;
  margin-top: 40px;
  margin-bottom: 18px;
  width: 12em;
  height: 12em;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.6);
  border-radius: 100px;
`

const Text = styled.text`
  font-size: 30px;
  font-weight: bold;
`

const AudioPlayer = () => {

  let audio = new Audio(song);

  function play() {

    if (audio.paused) {
      audio.play();
    }
    else {
      audio.pause();
    }
  }


  return (
    <div>
      <Button onClick={play}>
      <Text>LYSSNA</Text> 
      </Button>
    </div>
  )
}
export default AudioPlayer