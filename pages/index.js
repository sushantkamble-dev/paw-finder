import PetCard from "../components/card";
// import Container from 'react-bootstrap/Container';
import SearchBar from "@/components/searchbar";
import QuizBanner from "@/components/quizbanner";

export default function Home({response}) {

  return (
    <div>
      <section className="hero-wrapper">
        <p>Every pet deserves a loving HOME.<br/>
        Adopt a paw buddy!</p>
        <div className="search-section">
          <h1>Find your furry friend today!</h1>
          <SearchBar/>
        </div>
      </section>
      <section style={{display: "flex", flexDirection: "column"}}>
        <QuizBanner/>
      </section>
      <section className="near-you">
        <div>
          <h2>Dogs near you</h2>
          <ul className="card-grid">
            {response.dogs.data.map((pet,index) => (
                <li key={index}>
                    <PetCard
                    id={pet._id} 
                    imageURL={pet.imageURL} 
                    imageAlt="alt text goes here"
                    name={pet.name}
                    gender={pet.gender}
                    age={pet.age}
                    distance={2}/>
                </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Cats near you</h2>
          <ul className="card-grid">
            {response.cats.data.map((pet,index) => (
                  <li key={index}>
                      <PetCard
                      id={pet._id} 
                      imageURL={pet.imageURL} 
                      imageAlt="alt text goes here"
                      name={pet.name}
                      gender={pet.gender}
                      age={pet.age}
                      distance={2}/>
                  </li>
              ))}
            </ul>
        </div>
      </section>
      <section>
        <div className="container mt-5 mb-5">
            <h2 className="text-center mb-5">Pawou Values</h2>
            <div className="row">
                <div className="col-md-4 text-center mb-4">
                    <div className="circle-container">
                        <div className="icon">
                        </div>
                        <h3>Save Lives</h3>
                        <p>Our foremost commitment is to save lives by rescuing and rehoming animals in distress, providing them with a second chance for a happy, healthy future. Every day, we work tirelessly to ensure that no animal is left behind, striving to be a beacon of hope and a lifeline for pets in need.</p>
                    </div>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <div className="circle-container2">
                        <div className="icon">
                        </div>
                        <h3>Promote animal well-being</h3>
                        <p>We prioritize the well-being of every animal in our care, offering them a safe haven where they receive proper medical attention, love, and nurturing to thrive. Our dedication to promoting animal well-being extends beyond adoption; we also educate our community about responsible pet ownership to create a world where every pet lives a joyful life.</p>
                    </div>
                </div>
                <div className="col-md-4 text-center mb-4">
                    <div className="circle-container">
                        <div className="icon">
                        </div>
                        <h3>Advocate Compassion</h3>
                        <p>We passionately advocate for compassion towards all creatures, emphasizing empathy and kindness as the driving force behind our mission to bring animals and humans closer together. Through our advocacy for compassion, we strive to inspire a culture of understanding and empathy, fostering relationships between pets and their owners built on love and respect.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps() {
  let response = {};
  let dogs = await fetch(`${process.env.BASE_URL}/api/listPets?type=dog`); // should probably limit these somehow
  let cats = await fetch(`${process.env.BASE_URL}/api/listPets?type=cat`);
  response.dogs = await dogs.json();
  response.cats = await cats.json();
  return {
    props: {
      response,
    },
  };
}
