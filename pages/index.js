import PetCard from "../components/card";
// import Container from 'react-bootstrap/Container';
import SearchBar from "@/components/searchbar";
import QuizBanner from "@/components/quizbanner";

export default function Home({ response }) {
  let dogs = [];
  let cats = [];
  for (let i = 0; i < 3; i++) {
    dogs.push(
      <li key={i}>
        <PetCard
          id={response.dogs.data[i]._id}
          imageURL={response.dogs.data[i].imageURL}
          imageAlt="alt text goes here"
          name={response.dogs.data[i].name}
          gender={response.dogs.data[i].gender}
          age={response.dogs.data[i].age}
          distance={2}
        />
      </li>
    );
    cats.push(
      <li key={i}>
        <PetCard
          id={response.cats.data[i]._id}
          imageURL={response.cats.data[i].imageURL}
          imageAlt="alt text goes here"
          name={response.cats.data[i].name}
          gender={response.cats.data[i].gender}
          age={response.cats.data[i].age}
          distance={2}
        />
      </li>
    );
  }
  return (
    <div>
      <section className="hero-wrapper">
        <p>
          Every pet deserves a loving HOME.
          <br />
          Adopt a paw buddy!
        </p>
        <div className="search-section">
          <h1>Find your furry friend today!</h1>
          <SearchBar />
        </div>
      </section>
      <section style={{ display: "flex", flexDirection: "column" }}>
        <QuizBanner />
      </section>
      <section className="near-you">
        <div>
          <h2>Featured Dogs</h2>
          <ul className="card-grid">{dogs}</ul>
        </div>
        <div>
          <h2>Featured Cats</h2>
          <ul className="card-grid">
            {cats}
          </ul>
        </div>
      </section>
      <section>
        <div className="container mt-5 mb-5">
          <h2 className="text-center mb-5">Pawou Values</h2>
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <div className="circle-container">
                <div className="icon"></div>
                <h3>Save Lives</h3>
                <p>
                  Our foremost commitment is to save lives by rescuing and
                  rehoming animals in distress, providing them with a second
                  chance for a happy, healthy future. Every day, we work
                  tirelessly to ensure that no animal is left behind, striving
                  to be a beacon of hope and a lifeline for pets in need.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="circle-container2">
                <div className="icon"></div>
                <h3>Promote animal well-being</h3>
                <p>
                  We prioritize the well-being of every animal in our care,
                  offering them a safe haven where they receive proper medical
                  attention, love, and nurturing to thrive. Our dedication to
                  promoting animal well-being extends beyond adoption; we also
                  educate our community about responsible pet ownership to
                  create a world where every pet lives a joyful life.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="circle-container">
                <div className="icon"></div>
                <h3>Advocate Compassion</h3>
                <p>
                  We passionately advocate for compassion towards all creatures,
                  emphasizing empathy and kindness as the driving force behind
                  our mission to bring animals and humans closer together.
                  Through our advocacy for compassion, we strive to inspire a
                  culture of understanding and empathy, fostering relationships
                  between pets and their owners built on love and respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  let response = {};
  let dogs = await fetch(`${process.env.BASE_URL}/api/listPets?type=dog&city=Austin`); // should probably limit these somehow
  let cats = await fetch(`${process.env.BASE_URL}/api/listPets?type=cat&city=Austin`);
  response.dogs = await dogs.json();
  response.cats = await cats.json();
  response.dogs.data = response.dogs.data.slice(0,4);
  response.cats.data = response.cats.data.slice(0,4);
  
  return {
    props: {
      response,
    },
  };
}
