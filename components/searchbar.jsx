import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function SearchBar() {

    const [petType, setPetType] = useState("default")
    const [query, setQuery] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        var formData = new FormData(e.target);
        //const formJson = Object.fromEntries(formData.entries());
        //console.log(formJson);
        const queryString = new URLSearchParams(formData).toString();
        console.log(queryString);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Col} xs="auto">
                    <Form.Label>Choose pet type</Form.Label>
                    <Form.Select name="petType" value={petType} onChange={e => setPetType(e.target.value)}
                    >
                        <option value="default">Cats and dogs</option>
                        <option value="cats">Cats</option>
                        <option value="dogs">Dogs</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} xs={7} controlId="location">
                    <Form.Label>Enter city/zip</Form.Label>
                    <Form.Control
                    name="query"
                    type="search"
                    placeholder="e.g., 78701 or Austin, TX"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    />
                </Form.Group>
                <Col style={{display: "flex", alignItems: "flex-end"}}>
                    <Button type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    );
}