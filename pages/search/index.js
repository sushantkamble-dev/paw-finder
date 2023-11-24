import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuizBannerSmall from "@/components/quizbannersmall";
import Link from "next/link";
import SearchBar from '@/components/searchbar';
import PetCard from '@/components/card';
import SearchFilter from '@/components/searchfilter';

export default function SearchResults ({response}) {
    return (

        <Container className="page-wrapper">
        <SearchBar/>
        <h1>Search results</h1>
            <Row>
                <Col md={2}>
                    {/* || Quiz link */}
                    <QuizBannerSmall/>
                    {/* || Filters */}
                    <SearchFilter/>
                </Col>

                {/* || Results grid */}
                <Col md={10}>
                    <ul className="card-grid">
                        {response.data.map((pet,index) => (
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
                </Col>
            </Row>
        </Container>

    );
}

export async function getServerSideProps(context) {
    let params = new URLSearchParams(context.query);
    const query = await fetch(`${process.env.BASE_URL}/api/listPets?${params}`);
    const response = await query.json();
    return {
      props: {
        response,
      },
    };
  }