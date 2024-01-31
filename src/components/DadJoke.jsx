import '../App.css'
import { useState } from 'react';

const DadJoke = ()=>{

    const API = "https://icanhazdadjoke.com/";
    const [jokes, setJokes] = useState ("Click 'Generate a joke' to create a joke");
    const [isDisabled, setISDisabled] = useState(false)

    const getjokes = async ()=>{
        const response = await fetch(API, {
            headers:{
                "accept": "application/json"
            }
        })
        
        const data = await response.json();
        return data;
    } 

    const jokesData = (e)=>{
        e.preventDefault();
        setISDisabled(true)

        getjokes()
            .then((response)=>{setJokes(response.joke), console.log(response.joke) })
            .catch((error)=>{setJokes(error.message)})
            .finally(()=>{setISDisabled(false)})
        
    }
    
    return (
        <div className='container'>
            <form className='form-container'>
                <div className="title">
                    <h1 id='text'>Tell Me a Joke</h1>
                </div>

                <div className="text-input">
                    <p>{jokes}</p>
                </div>

                <div className="btn-container">
                    <button className="btn" disabled={isDisabled}  onClick={jokesData}> {isDisabled ? 'Loading...' : 'Generate a joke'}</button>
                </div>
            </form>
        </div>
    )
}

export default DadJoke;