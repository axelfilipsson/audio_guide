import GuideHeader from "./GuideComponents/GuideHeader"
import AudioPlayer from "./GuideComponents/AudioPlayer"
import InfoBox from "./GuideComponents/InfoBox"
import FooterPoll from "./GuideComponents/FooterPoll";
import styled from 'styled-components'
import audio from "../../resources/audio/OMKONSTEN.wav";
import painting from '../../resources/images/OMKONSTEN.png';


const Body = styled.div`
height:100vh;
`

const artwork = { title: "OM KONSTEN" };

const GuidePage = (props) => {
  return (
    <Body>
      <GuideHeader title={artwork.title} />
      <AudioPlayer audio={audio} painting={painting}/>
      <InfoBox firstWord={"När "} rest={"den nybyggda Operan invigdes år 1898 fick det stora finansgeniet Knut Agathon Wallenberg mycket beröm då han fick projektet att gå i hamn. Detta utmanade andra att även vilja bygga om den gamla Dramaten från 1700-talet som då låg i Kungsträdgården. Ett lotteri anordnades för att kunna köpa tomten och bygga upp Dramaten. När allt var klart så överlämnades Dramaten till staten. Arkitekten Fredrik Lilljekvist insåg att det stora kapitalet skulle inte bara kunna göra byggnaden till ett tempel för dramatiken och skådespelarkonsten utan även för målarkonst och kultur i allmänhet. Dramaten här på Nybroplan har funnits sedan 1908. "} />
      {!props.popup &&
        !props.questionConsent ?
        <FooterPoll ></FooterPoll> : null}
    </Body>
  )
}

export default GuidePage