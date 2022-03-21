import GuideHeader from "./GuideComponents/GuideHeader"
import AudioPlayer from "./GuideComponents/AudioPlayer"
import InfoBox from "./GuideComponents/InfoBox"
import FooterPoll from "./GuideComponents/FooterPoll";

const artwork = {title:"TUSSILAGO", artist:"GABRIELLA NUBRÈ"};

const GuidePage = () => {
  return (
    <div>
      <GuideHeader title={artwork.title} artist={artwork.artist}/>
      <AudioPlayer/>
      <InfoBox firstWord={"Lorem "} rest={"ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ligula non nisl tempor pretium nec non tortor. Aliquam lobortis enim in orci euismod, non pellentesque nisl congue. Duis scelerisque iaculis mauris fermentum accumsan."}/>
      <FooterPoll></FooterPoll>
    </div>
  )
}

export default GuidePage