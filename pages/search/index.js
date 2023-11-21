import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuizBannerSmall from "@/components/quizbannersmall";
import Link from "next/link";
import SearchBar from '@/components/searchbar';
import PetCard from '@/components/card';
import SearchFilter from '@/components/searchfilter';

// //pretend search results
// function searchResults() {
//     const pets = petData.map(pet =>
//       <li key={pet.id}>
//         <PetCard
//         id={pet.id} 
//         imageURL={pet.imageURL} 
//         imageAlt={pet.imageAlt}
//         name={pet.name}
//         gender={pet.gender}
//         age={pet.age}
//         distance={2}/>
//       </li>
//     );
//     return <ul className="card-grid">{pets}</ul>;
//   }

export default function SearchResults () {
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
                    <p>search results</p>
                </Col>
            </Row>
        </Container>

    );
}