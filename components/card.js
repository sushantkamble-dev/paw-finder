import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PetCard(props) {
  const [favorite, setFavorite] = useState(false);

  function handleFavorite() {
    setFavorite(!favorite);
  }

  return (
    <Card className="pet-card">
      <Card.Img variant="top" src={props.imageURL} alt={props.imageAlt} style={{maxHeight: 200,maxWidth:200, objectFit: "cover"}}/>
      <Card.Body>
        <div>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle>{props.gender} | {props.age} yr(s)</Card.Subtitle>
        </div>
        <Card.Text>
          {props.breed} 
        </Card.Text>
        <div style={{display: "flex"}}>
          {/* <Button variant="outline-primary" onClick={handleFavorite}>{favorite ? "Unfavorite" : "Favorite"}</Button> */}
          <Button variant="primary" href={`/petDetails/${props.id}`}>View</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PetCard;