import Image from "next/image";
import Button from 'react-bootstrap/Button';

export default function QuizBanner() {
    return (
        <div className="quiz-section">
            <div>
                <h2>Looking for your ideal pet? Let our quiz guide your choice!</h2>
                <Button href="/quiz">Take Quiz</Button>
            </div>
            <div>
                <Image src="/quiz-image.jpg" width={254} height={148} alt="A cat and dog sitting together."/>
            </div>
        </div>
    );
}