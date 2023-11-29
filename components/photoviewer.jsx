import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export default function PhotoViewer(props) {
  return (
    // <div className="photo-viewer">
    // <div className="photo-controls">
    //   <div className="cycle-backward"><div className="text-wrapper">&lt;</div></div>
    //   <img className="photo" src="https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg" />
    //   <div className="cycle-forward"><div className="text-wrapper">&gt;</div></div>
    // </div>
    // <div className="circles">
    //   <div className="ellipse"></div>
    //   <div className="ellipse"></div>
    //   <div className="ellipse"></div>
    // </div>
    // </div>
    <Image src={props.imageURL} alt={props.imageAlt} height={640} />

  );
}