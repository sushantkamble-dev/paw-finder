import Button from 'react-bootstrap/Button';

export default function Quiz () {
    return(

<div className="form-container mt-5 mb-5">
    <h2>Tell us a bit about yourself</h2>

    <div className="form-question">
        <span className="quiz-span">{"I'd like to adopt a"}</span>
        <select className="quiz-select">
            <option>Cat</option>
            <option>Dog</option>
        </select>
    </div>
    
    <div className="form-question">
        <span className="quiz-span">I am looking to adopt for</span>
        <select className="quiz-select">
            <option>Myself</option>
            <option>Someone else</option>
        </select>
    </div>
    
    <div className="form-question">
        <span className="quiz-span">{"I am a(n)"}</span>
        <select className="quiz-select">
            <option>First Time</option>
            <option>Experienced</option>
        </select>
        <span className="quiz-span">Pet owner</span>
    </div>
    
    <div className="form-question">
        <span className="quiz-span">I currently have</span>
        <select className="quiz-select">
            <option>Dog(s)</option>
            <option>Cat(s)</option>
            <option>No other pets</option>
        </select>
    </div>

    <div className="form-question">
        <span className="quiz-span">My ideal pet is</span>
        <select className="quiz-select">
            <option>a baby</option>
            <option>young</option>
            <option>an adult</option>
            <option>a senior</option>
        </select>
    </div>

    <div className="form-question">
        <span className="quiz-span">I would like to adopt a</span>
        <select className="quiz-select">
            <option>male</option>
            <option>female</option>
        </select>
        <span className="quiz-span">pet</span>
    </div>

    <div className="form-question">
        <span className="quiz-span">I prefer a pet that is</span>
        <select className="quiz-select">
            <option>small</option>
            <option>medium</option>
            <option>large</option>
        </select>
    </div>

    <div className="form-question">
        <span className="quiz-span">I would like a pet that has</span>
        <select className="quiz-select">
            <option>short</option>
            <option>medium</option>
            <option>long</option>
        </select>
        <span className="quiz-span">hair</span>
    </div>

    <div className="form-question">
        <span className="quiz-span">My pet</span>
        <select className="quiz-select">
            <option>must be</option>
            <option>{"doesn't have to be"}</option>
        </select>
        house/litter box trained
    </div>

    <div className="form-question">
        <span className="quiz-span">I am</span>
        <select className="quiz-select">
            <option>open</option>
            <option>not open</option>
        </select>
        <span className="quiz-span">to adopting a pet with special needs</span>
    </div>

    <div className="form-question">
        <span className="quiz-span">A breed that I really like is</span>
        <select className="quiz-select">
            <option>Persian</option>
        </select>
    </div>

    <Button className="quiz-button" href="/search">Start Matching</Button>
</div>

    );
}