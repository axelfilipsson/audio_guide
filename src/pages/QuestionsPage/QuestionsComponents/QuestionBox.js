
import styled from 'styled-components'
import React, { useReducer, useState } from "react";

const Container = styled.div`
  font-size: 10px;
text-align: left;
padding: 10px;

`

const SubmitButton = styled.button`
    margin-top: 10px;

`

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}


const QuestionBox = () => {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 5000)
    }

    const handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        setFormData({
            name: event.target.name,
            value: isCheckbox ? event.target.checked : event.target.value,
        })
    }


    return (
        <Container>
                {/* <h1>Hur var din upplevelse?</h1>
                {submitting &&
                    <div>
                        Du har valt följande:
                        <ul>
                            {Object.entries(formData).map(([name, value]) => (
                                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                            ))}
                        </ul>
                    </div>
                } */}

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfeAnb2VjiDhlMq0KR3_YS0JU9RNES1quDP-wcD_d3vBOl4sQ/viewform?embedded=true" width="360" height="510" frameborder="0" marginheight="0" marginwidth="0">Läser in …</iframe>
{/* <form>
  <input class="input" type="text" placeholder="Name" />
  <input class="input" type="email" placeholder="Email" />
  <button class="button" type="submit" >
    Submit
  </button>
</form> */}
                {/* <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label>
                            <p>Namn</p>
                            <input name="namn" onChange={handleChange} />
                        </label>
                        <label>
                            <p>Vad uppskattade du mest?</p>
                            <select name="favorit" onChange={handleChange}>
                                <option value="">Välj ett alternativ</option>
                                <option value="tussilago">Tussilago</option>
                                <option value="sken">Sken</option>
                            </select>
                        </label>
                        <label>
                            <p>Skulle du rekommendera detta?</p>
                            <input type="checkbox" name="mervärde" onChange={handleChange} />
                        </label>
                    </fieldset>
                    <SubmitButton type="submit">skicka</SubmitButton>
                </form> */}
        </Container>
    )
}

export default QuestionBox