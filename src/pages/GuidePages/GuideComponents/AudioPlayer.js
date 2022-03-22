import song from "../../../resources/knack.mp3";
import styled from 'styled-components'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const PlayButton = styled.button`
  background: #3959F8;
  border: none;
  color: #EFEFEF;
  margin-top: 40px;
  margin-bottom: 18px;
  width: 6em;
  height: 12em;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.6);
  border-radius: 100px 0px 0px 100px ;

`

const PauseButton = styled.button`
  background: #3959F8;
  border: none;
  color: #EFEFEF;
  margin-top: 40px;
  margin-bottom: 18px;
  width: 6em;
  height: 12em;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.6);
  border-radius: 0px 100px 100px 0px ;
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
  }

  function pause() {
    if (!audio.paused) {
      audio.pause();
    }
  }


  return (
    <div>
      <PlayButton onClick={pause}>
        <PauseIcon fontSize="large" />
      </PlayButton>
      <PauseButton onClick={play}>
        <PlayArrowIcon fontSize="large" />
      </PauseButton>

    </div>
  )
}
export default AudioPlayer