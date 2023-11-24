import { useRouter } from "next/router";
import { useState } from 'react';
import PhotoViewer from "@/components/photoviewer";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const PetDetails = ({ response }) => {

    //stuff for favorites
    const [favorite, setFavorite] = useState(false);

    function handleFavorite() {
      setFavorite(!favorite);
    }

    // check for response
    //console.log(response)
    if(!response.data){
        return(<><h1>Details not found for this pet</h1></>)
    }

  // if successful:
  //console.log(response.data)
  return (
    <>
      {/* Photo viewer */}
      <div className="carousel-wrapper">
      <PhotoViewer imageURL={response.data.imageURL} imageAlt={response.data.imageAlt}/>
      </div>

      {/* Info */}
      <Container>
        <div className="info">
        <div className="pet">
            <div className="headline">
            <div className="name">{response.data.name}</div>
            <div className="overview">
                {response.data.type}&nbsp;&nbsp;🐾&nbsp;&nbsp;{response.data.bread}&nbsp;&nbsp;🐾&nbsp;&nbsp;Austin, TX
            </div>
            </div>
            <div className="about">
            <div className="text-wrapper">About</div>
            <div className="details">
                <div className="div">Age</div>
                <div className="text-wrapper-2">{response.data.age} years</div>
            </div>
            <div className="details">
                <div className="div">Gender</div>
                <div className="text-wrapper-2">{response.data.gender}</div>
            </div>
            <div className="details">
                <div className="div">Characteristics</div>
                <ul className="text-wrapper-2" style={{marginBottom: 0}}>{response.data.characteristics.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}</ul>
            </div>
            <div className="details">
                <div className="div">Color</div>
                <div className="text-wrapper-2">{response.data.coatColor}</div>
            </div>
            <div className="details">
                <div className="div">Coat length</div>
                <div className="text-wrapper-2">{response.data.coatLength}</div>
            </div>
            <div className="details">
                <div className="div">Health</div>
                <div className="text-wrapper-2">{response.data.health}</div>
            </div>
            <div className="details">
                <div className="div">House-trained</div>
                <div className="text-wrapper-2">{response.data.houseTrained ? "Yes" : "No"}</div>
            </div>
            <div className="details">
                <div className="div">Good in a home with</div>
                <ul className="text-wrapper-2" style={{marginBottom: 0}}>{response.data.compatibleWith.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}</ul>
            </div>
            <div className="details">
                <div className="div">Adoption fee</div>
                <div className="text-wrapper-2">{response.data.AdoptionFee}</div>
            </div>
            </div>
        </div>
        <div className="shelter-adopt">
            <div className="adopt">
            <div className="text-wrapper-3">Interested in adopting {response.data.name}?</div>
            <Button className="favorite" size="lg" href="mailto:email@email.com">Send an inquiry</Button>
            <Button className="favorite" size="lg" variant="outline-primary" onClick={handleFavorite}>{favorite ? "Unfavorite" : "Favorite"}</Button>
            </div>
            <div className="shelter">
            <div className="name-map">
                <div className="text-wrapper-6">UT Animal Rescue</div>
                <img className="rectangle" src="https://i.pinimg.com/originals/97/19/9c/97199cdda2fec20471eb88c8da150220.jpg" />
            </div>
            <div className="details-2">
                <div className="div">Location</div>
                <p className="element-guadalupe-st">1616 Guadalupe St.<br />Austin, TX 78701</p>
            </div>
            <div className="details-2">
                <div className="div">Contact</div>
                <a className="text-wrapper-2" href="mailto:email@email.com">email@email.com</a>
            </div>
            </div>
        </div>
        </div>
      </Container>
    </>
  );
};

export default PetDetails;

export async function getServerSideProps(context) {
  const petId = context.query.petId;
  const query = await fetch(`${process.env.BASE_URL}/api/getPetDetails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ petId }),
  });
  const response = await query.json();
  return {
    props: {
      response,
    },
  };
}
