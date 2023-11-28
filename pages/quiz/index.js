import { useState } from "react";
import { ironOptions } from "@/lib/config/iron-config";
import { getIronSession } from "iron-session";
import Button from 'react-bootstrap/Button';

export default function Quiz ({session}) {

    // handling defaults

    let defaults = {
        id: "",
        q1: "cat",
        q2: "myself",
        q3: "first time",
        q4: "dogs",
        q5: "baby",
        q6: "male",
        q7: "small",
        q8: "short",
        q9: "must be",
        q10: "open",
        q11: "persian",
    }

    // update defaults if user is logged in and they already exist

    if (session.user) {
        // save user id
        defaults.id = session.user._id
        // iterate over user's existing survey answers
        for (const [key, value] of Object.entries(session.user.surveyAnswers)) {
            // if they already have a saved answer, put it in the field, otherwise use the default
            if (key, value) {
                defaults[key] = value;
            }
        }
    }

    const [quiz, setQuiz] = useState({
        id: defaults.id,
        q1: defaults.q1,
        q2: defaults.q2,
        q3: defaults.q3,
        q4: defaults.q4,
        q5: defaults.q5,
        q6: defaults.q6,
        q7: defaults.q7,
        q8: defaults.q8,
        q9: defaults.q9,
        q10: defaults.q10,
        q11: defaults.q11
    });

    function updateQuiz(value) {
        return setQuiz((prev) => {
          return { ...prev, ...value };
        });
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch(`/api/auth/updateQuiz`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(quiz)
        });
        if (response.ok) {
            const result = await response.json();
            console.log(result);
            window.alert("Changes saved!");
        } else {
            const errorMsg = await response.json();
            window.alert(`Update failed: ${errorMsg.error}!`);
        }
    }

    if (session.isLoggedIn) {

        return(
            <form className="form-container mt-5 mb-5" onSubmit={handleSubmit}>
                <h2>Tell us a bit about yourself</h2>

                <div className="form-question">
                    <span className="quiz-span">I&apos;d like to adopt a</span>
                    <select className="quiz-select" id="q1" name="q1" value={quiz.q1} onChange={(e) => updateQuiz({ q1: e.target.value })}>
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                    </select>
                </div>
                
                <div className="form-question">
                    <span className="quiz-span">I am looking to adopt for</span>
                    <select className="quiz-select" id="q2" name="q2" value={quiz.q2} onChange={(e) => updateQuiz({ q2: e.target.value })}>
                        <option value="myself">Myself</option>
                        <option value="someone else">Someone else</option>
                    </select>
                </div>
                
                <div className="form-question">
                    <span className="quiz-span">I am a(n)</span>
                    <select className="quiz-select" id="q3" name="q3" value={quiz.q3} onChange={(e) => updateQuiz({ q3: e.target.value })}>
                        <option value="first time">First Time</option>
                        <option value="experienced">Experienced</option>
                    </select>
                    <span className="quiz-span">Pet owner</span>
                </div>
                
                <div className="form-question">
                    <span className="quiz-span">I currently have</span>
                    <select className="quiz-select" id="q4" name="q4" value={quiz.q4} onChange={(e) => updateQuiz({ q4: e.target.value })}>
                        <option value="dogs">Dog(s)</option>
                        <option value="cats">Cat(s)</option>
                        <option value="none">No other pets</option>
                    </select>
                </div>

                <div className="form-question">
                    <span className="quiz-span">My ideal pet is</span>
                    <select className="quiz-select" id="q5" name="q5" value={quiz.q5} onChange={(e) => updateQuiz({ q5: e.target.value })}>
                        <option value="baby">a baby</option>
                        <option value="young">young</option>
                        <option value="adult">an adult</option>
                        <option value="senior">a senior</option>
                    </select>
                </div>

                <div className="form-question">
                    <span className="quiz-span">I would like to adopt a</span>
                    <select className="quiz-select" id="q6" name="q6" value={quiz.q6} onChange={(e) => updateQuiz({ q6: e.target.value })}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <span className="quiz-span">pet</span>
                </div>

                <div className="form-question">
                    <span className="quiz-span">I prefer a pet that is</span>
                    <select className="quiz-select" id="q7" name="q7" value={quiz.q7} onChange={(e) => updateQuiz({ q7: e.target.value })}>
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                    </select>
                </div>

                <div className="form-question">
                    <span className="quiz-span">I would like a pet that has</span>
                    <select className="quiz-select" id="q8" name="q8" value={quiz.q8} onChange={(e) => updateQuiz({ q8: e.target.value })}>
                        <option value="short">short</option>
                        <option value="medium">medium</option>
                        <option value="long">long</option>
                    </select>
                    <span className="quiz-span">hair</span>
                </div>

                <div className="form-question">
                    <span className="quiz-span">My pet</span>
                    <select className="quiz-select" id="q9" name="q9" value={quiz.q9} onChange={(e) => updateQuiz({ q9: e.target.value })}>
                        <option value="must be">must be</option>
                        <option value="doesn't have to be">doesn&apos;t have to be</option>
                    </select>
                    house/litter box trained
                </div>

                <div className="form-question">
                    <span className="quiz-span">I am</span>
                    <select className="quiz-select" id="q10" name="q10" value={quiz.q10} onChange={(e) => updateQuiz({ q10: e.target.value })}>
                        <option value="open">open</option>
                        <option value="not open">not open</option>
                    </select>
                    <span className="quiz-span">to adopting a pet with special needs</span>
                </div>

                <div className="form-question">
                    <span className="quiz-span">A breed that I really like is</span>
                    <select className="quiz-select" id="q11" name="q11" value={quiz.q11} onChange={(e) => updateQuiz({ q11: e.target.value })}>
                        <option value="persian">Persian</option>
                    </select>
                </div>

                <Button className="quiz-button" type="submit">Start Matching</Button>
            </form>
        );
    } else {
        return (
            <h1>Not logged in</h1>
        );
    }


}

export async function getServerSideProps(context) {
    const session = await getIronSession(context.req, context.res, ironOptions);
    return {
      props: {
        session,
      },
    };
  }