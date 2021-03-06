// import song from "../../../resources/knack.mp3";
import styled from 'styled-components'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';




const PlayButton = styled.button`
  background: #3959F8;
  border:none;
  // border-right: 1px solid white;
  color: #FFFFFF;
  margin-top: 40px;
  margin-bottom: 18px;
  width: 6em;
  height: 6em;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.6);
  border-radius: 0px 0px 0px 0px ;

`

const PauseButton = styled.button`
  background: #3959F8;
  border: none;
  color: #EFEFEF;
  margin-top: 40px;
  margin-bottom: 18px;
  width: 6em;
  height: 6em;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.6);
  border-radius: 0px 0px 0px 0px ;
`

const Text = styled.text`
  font-size: 30px;
  font-weight: bold;
`

const AudioPlayer = (props) => {

  const Background = styled.div`
  background-image: url(${props.painting});
  background-size: cover;
  background-position: center;
  height: 160px;
  box-shadow: 0px 4px 4px rgb(0,0,0,0.5) inset;
`

  let audio = new Audio(props.audio);

  function play() {
    if (audio.paused) {
      audio.play();
    }
  }

  function pause() {
    if (!audio.paused) {
      audio.pause();
    }
  }


  return (
    <Background>
      <PlayButton onClick={pause}>
        <PauseIcon fontSize="large" />
      </PlayButton>
      <PauseButton onClick={play}>
        <PlayArrowIcon fontSize="large" />
      </PauseButton>

    </Background>
  )
}
export default AudioPlayer