import { useRouter } from "next/router";
import { useState } from 'react';
import PhotoViewer from "@/components/photoviewer";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const PetDetails = ({ response }) => {
    console.log("response",response.data.shelter)
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
                {response.data.type}&nbsp;&nbsp;🐾&nbsp;&nbsp;{response.data.breed}&nbsp;&nbsp;🐾&nbsp;&nbsp;Austin, TX
            </div>
            </div>
            <div className="about">
            <div className="text-wrapper">About</div>
            <div className="details">
                <div className="div">Description</div>
                <div className="text-wrapper-2">{response.data.description}</div>
            </div>
            <div className="details">
                <div className="div">Age</div>
                <div className="text-wrapper-2">{response.data.age} years</div>
            </div>
            <div className="details">
                <div className="div">Gender</div>
                <div className="text-wrapper-2">{response.data.gender}</div>
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
                <div className="div">Adoption fee</div>
                <div className="text-wrapper-2">{response.data.adoptionFee}</div>
            </div>
            </div>
        </div>
        <div className="shelter-adopt">

            <div className="shelter">
            <div className="name-map">
                <div className="text-wrapper-6">{response.data.shelter.name}</div>
                <img className="rectangle" src={response.data.shelter.imageURL} />
            </div>
            <div className="details-2">
                <div className="div">Location</div>
                <p className="element-guadalupe-st">{response.data.shelter.Location}</p>
            </div>
            <div className="details-2">
                <div className="div">Website</div>
                <a className="text-wrapper-2" href="mailto:email@email.com">{response.data.shelter.website}</a>
            </div>
            <div className="details-2">
                <div className="div">Contact</div>
                <a className="text-wrapper-2" href="mailto:email@email.com">{response.data.shelter.emailId}</a>
            </div>
            <Button className="favorite" size="lg" href={`mailto:${response.data.shelter.emailId}?subject=${'Adoption request for '+ response.data.shelter.name}&body=${'Hi, I would like to adopt '+ response.data.shelter.name}`}>Send an inquiry</Button>
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
