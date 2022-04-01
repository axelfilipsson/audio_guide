
import './QuestionBox.css';

const QuestionBox = () => {


    return (
        <div className='container'>
            <form class="form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfeAnb2VjiDhlMq0KR3_YS0JU9RNES1quDP-wcD_d3vBOl4sQ/formResponse">
                <div className='question-container'>
                    <div className='question'>KÖN</div>
                    <br />
                    <input type="radio" name="entry.555448699" value="Man" />
                    <label>MAN</label>
                    <br />
                    <input type="radio" name="entry.555448699" value="Kvinna" />
                    <label>KVINNA</label>
                    <br />
                    <input type="radio" name="entry.555448699" value="Annan könsidentitet" />
                    <label>ANNAN KÖNSIDENTITET</label>
                    <br />
                    <br />
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
                    <br />
                    <br />
                </div>


                <button className='submit-button' type="submit">SKICKA</button>
            </form>
        </div >
    )
}

export default QuestionBox