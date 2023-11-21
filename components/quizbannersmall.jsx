import Image from "next/image";
import Button from 'react-bootstrap/Button';

export default function QuizBannerSmall() {
    return (
        <div className="quiz-section-small">
                <Image src="/catdog.jpg" width={85} height={83} alt="A cat and dog looking at the camera."/>
                <p>Find your match!</p>
                <Button href="/quiz">Take Quiz</Button>
        </div>
    );
}