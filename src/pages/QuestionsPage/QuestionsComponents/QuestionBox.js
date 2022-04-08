
import './QuestionBox.css';

const QuestionBox = () => {


    return (
        <div className='container'>
            <form class="form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfeAnb2VjiDhlMq0KR3_YS0JU9RNES1quDP-wcD_d3vBOl4sQ/formResponse" id="usrform">
                <div className='question-container'>
                    <div className='question'>Kön</div>
                    <br />
                    <input type="radio" name="entry.555448699" value="Man" />
                    <label>Man</label>
                    <br />
                    <input type="radio" name="entry.555448699" value="Kvinna" />
                    <label>Kvinna</label>
                    <br />
                    <input type="radio" name="entry.555448699" value="Annan könsidentitet" />
                    <label>Annan könsidentitet</label>

                </div>
                <div className='question-container'>
                    <div className='question'>ÅLDER</div>
                    <br />
                    <input type="radio" name="entry.182468652" value="18-24"></input>
                    <label>18-24</label>
                    <br />
                    <input type="radio" name="entry.182468652" value="25-39"></input>
                    <label>25-39</label>
                    <br />
                    <input type="radio" name="entry.182468652" value="40-54"></input>
                    <label>40-54</label>
                    <br />
                    <input type="radio" name="entry.182468652" value="55-64"></input>
                    <label>55-64</label>
                    <br />
                    <input type="radio" name="entry.182468652" value="65+"></input>
                    <label>65+</label>
                </div>
                <div className='question-container'>
                    <div className='question'>Utbildning</div>
                    <br />
                    <input type="radio" name="entry.1405968452" value="Förgymnasial utbildning"></input>
                    <label>Förgymnasial utbildning</label>
                    <br />
                    <input type="radio" name="entry.1405968452" value="Gymnasial utbildning"></input>
                    <label>Gymnasial utbildning</label>
                    <br />
                    <input type="radio" name="entry.1405968452" value="Eftergymnasial utbildning"></input>
                    <label>Eftergymnasial utbildning</label>
                </div>
                <div className='question-container'>
                    <div className='question'>Hur många gånger har du varit på Dramaten?</div>
                    <br />
                    <input type="radio" name="entry.1124185269" value="Första gången"></input>
                    <label>Första gången</label>
                    <br />
                    <input type="radio" name="entry.1124185269" value="Ett par gånger"></input>
                    <label>Ett par gånger</label>
                    <br />
                    <input type="radio" name="entry.1124185269" value="4 - 6 gånger"></input>
                    <label>4 - 6 gånger</label>
                    <br />
                    <input type="radio" name="entry.1124185269" value="Fler än 6 gånger"></input>
                    <label>Fler än sex gånger</label>
                </div>
                <div className='question-container'>
                    <div className='question'>Har du intresse av att lära dig mer om Dramatens byggnad och dess historia?</div>
                    <br />
                    <input type="radio" name="entry.728732675" value="Ja"></input>
                    <label>Ja</label>
                    <br />
                    <input type="radio" name="entry.728732675" value="Nej"></input>
                    <label>Nej</label>
                    <br />
                    <input type="radio" name="entry.728732675" value="Vet ej"></input>
                    <label>Vet ej</label>
                    <br />
                    <input type="radio" name="entry.728732675" value="Jag vet redan tillräckligt"></input>
                    <label>Jag vet redan tillräckligt</label>
                </div>
                <div className='question-container'>
                    <div className='question'>Vad tyckte du om att använda QR-koden?</div>
                    <br />
                    <input type="radio" name="entry.893376523" value="Jobbigt o gå fram"></input>
                    <label>Jobbigt att gå fram</label>
                    <br />
                    <input type="radio" name="entry.893376523" value="Känndes ovant"></input>
                    <label>Kändes ovant</label>
                    <br />
                    <input type="radio" name="entry.893376523" value="Inget särskilt"></input>
                    <label>Inget särskilt</label>
                    <br />
                    <input type="radio" name="entry.893376523" value="Det väckte nyfikenhet"></input>
                    <label>Det väckte nyfikenhet</label>
                </div>
                <div className='question-container'>
                    <div className='question'>Vad tyckte du om hemsidan?</div>
                    <br />
                    <input type="radio" name="entry.692020234" value="Gillade inte"></input>
                    <label>Gillade inte</label>
                    <br />
                    <input type="radio" name="entry.692020234" value="Inget särskilt"></input>
                    <label>Inget särskilt</label>
                    <br />
                    <input type="radio" name="entry.692020234" value="Gillade"></input>
                    <label>Gillade</label>
                    <br />
                    <input type="radio" name="entry.692020234" value="Gillade mycket"></input>
                    <label>Gillade mycket</label>
                    <br />
                </div>
                <div className='question-container'>
                    <div className='question'>Vad tyckte du om guidningen?</div>
                    <br />
                    <input type="radio" name="entry.1590345215" value="Gillade"></input>
                    <label>Gillade</label>
                    <br />
                    <input type="radio" name="entry.1590345215" value="Vet ej"></input>
                    <label>Vet ej</label>
                    <br />
                    <input type="radio" name="entry.1590345215" value="Gillade inte"></input>
                    <label>Gillade inte</label>
                    <br />
                    
                </div>
                <div className='question-container'>
                    <div className='question'>Upplevde du att Ljudguiden var lätt att använda?</div>
                    <br />
                    <input type="radio" name="entry.1941116291" value="Ja"></input>
                    <label>Ja</label>
                    <br />
                    <input type="radio" name="entry.1941116291" value="Nej"></input>
                    <label>Nej</label>
                    <br />
                    <input type="radio" name="entry.1941116291" value="Ja"></input>
                    <label>Varken eller</label>
                    <br />
                </div>
                <div className='question-container'>
                    <div className='question'>Var det här ett intressant sätt att presentera information på?</div>
                    <br />
                    <input type="radio" name="entry.69697636" value="Ja"></input>
                    <label>Ja</label>
                    <br />
                    <input type="radio" name="entry.69697636" value="Nej"></input>
                    <label>Nej</label>
                    <br />
                    <input type="radio" name="entry.69697636" value="Vet ej"></input>
                    <label>Vet ej</label>
                </div>
                <div className='question-container'>
                    <div className='question'>Har Ljudguiden ökat ditt intresse för Dramaten och dess byggnad?</div>
                    <br />
                    <input type="radio" name="entry.1613067403" value="Ja"></input>
                    <label>Ja</label>
                    <br />
                    <input type="radio" name="entry.1613067403" value="Nej"></input>
                    <label>Nej</label>
                    <br />
                    <input type="radio" name="entry.1613067403" value="Vet ej"></input>
                    <label>Vet ej</label>
                </div>
                <div className='question-container'>
                    <div className='question'>Har Ljudguiden fått dig att uppmärksamma objekt och miljön på Dramaten?</div>
                    <br />
                    <input type="radio" name="entry.1350643249" value="Ja"></input>
                    <label>Ja</label>
                    <br />
                    <input type="radio" name="entry.1350643249" value="Nej"></input>
                    <label>Nej</label>
                    <br />
                    <input type="radio" name="entry.1350643249" value="Vet ej"></input>
                    <label>Vet ej</label>
                </div>
                <div className='question-container'>
                    <div className='question'>Tycker du att Dramaten bör vidareutveckla Ljudguiden?(flerval)</div>
                    <br />
                    <input type="checkbox" name="entry.1876321008" value="Ja, guidning på fler konstverk"></input>
                    <label>Ja, guidning på fler konstverk</label>
                    <br />
                    <input type="checkbox" name="entry.1876321008" value="Vet ej"></input>
                    <label>Vet ej</label>
                    <br />
                    <input type="checkbox" name="entry.1876321008" value="Nej, ljudguide behövs inte här"></input>
                    <label>Nej, ljudguide behövs inte här</label>
                    <br />
                    <input type="checkbox" name="entry.1876321008" value="Nej, den är bra som den är"></input>
                    <label>Nej, den är bra som den är</label>
                </div>
                <div className='question-container'>
                    <div className='question'>Tror du att digital teknik kan förbättra din helhetsupplevelse på Dramaten? </div>
                    <br />
                    <input type="radio" name="entry.1121994984" value="Ja"></input>
                    <label>Ja</label>
                    <br />
                    <input type="radio" name="entry.1121994984" value="Nej"></input>
                    <label>Nej</label>
                    <br />
                    <input type="radio" name="entry.1121994984" value="Vet ej"></input>
                    <label>Vet ej</label>
                </div>
                <div className='question-container'>
                <div className='question'>Annat att tillägga / förbättringsförslag</div>
                    <textarea rows="4" cols="50" name="entry.949042644" form="usrform"></textarea>
                </div>
                <button className='submit-button' type="submit">SKICKA</button>
            </form>
        </div >
    )
}

export default QuestionBox