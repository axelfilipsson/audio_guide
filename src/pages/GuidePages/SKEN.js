import GuideHeader from "./GuideComponents/GuideHeader"
import AudioPlayer from "./GuideComponents/AudioPlayer"
import InfoBox from "./GuideComponents/InfoBox"
import FooterPoll from "./GuideComponents/FooterPoll";

const artwork = {title:"SKEN", artist:"LISA STRANSTRÖM"};

const GuidePage = () => {
  return (
    <div>
      <GuideHeader title={artwork.title} artist={artwork.artist}/>
      <AudioPlayer/>
      <InfoBox/>
      <FooterPoll></FooterPoll>
    </div>
  )
}

export default GuidePage