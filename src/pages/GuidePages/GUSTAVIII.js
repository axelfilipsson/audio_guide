import GuideHeader from "./GuideComponents/GuideHeader"
import AudioPlayer from "./GuideComponents/AudioPlayer"
import InfoBox from "./GuideComponents/InfoBox"
import FooterPoll from "./GuideComponents/FooterPoll";
import styled from 'styled-components'
import audio from "../../resources/audio/GUSTAVIII.wav";
import painting from '../../resources/images/GUSTAVIII.png';

const Body = styled.div`
height:100vh;
`

const artwork = { title: "GUSTAV III"};

const GuidePage = (props) => {
  return (
    <Body>
      <GuideHeader title={artwork.title} artist={artwork.artist} />
      <AudioPlayer audio={audio} painting={painting}/>
      <InfoBox  setPopup={props.setPopup}  popup={props.popup}  firstWord={"I Marmorfoajen "} rest={"finns Gustav Cederströms målning som föreställer Gustav III som har besökt sin teater i Gripsholm. Uppe på scenen tackar han den nigande operasångerskan Elisabeth Olin. Gustav III har grundat Dramaten och målningen har fått paradplatsen i Marmorfoajen."} />
      {
        !props.questionConsent ?
        <FooterPoll ></FooterPoll> : null}
    </Body>
  )
}

export default GuidePage