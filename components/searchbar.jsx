import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function SearchBar() {

    const [petType, setPetType] = useState("default")
    const [location, setLocation] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        var formData = new FormData(e.target);
        const params = new URLSearchParams(formData);
        // deleting empty search params
        let keysForDel = [];
        params.forEach((value, key) => {
        if (value == '') {
            keysForDel.push(key);
        }
        });

        keysForDel.forEach(key => {
        params.delete(key);
        });

        window.location.assign(`/search?${params.toString()}`);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Col} xs="auto">
                    <Form.Label>Choose pet type</Form.Label>
                    <Form.Select name="type" value={petType} onChange={e => setPetType(e.target.value)}
                    >
                        <option value="">Cats and dogs</option>
                        <option value="cat">Cats</option>
                        <option value="dog">Dogs</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} xs={7} controlId="location">
                    <Form.Label>Enter city/zip</Form.Label>
                    <Form.Control
                    name="location"
                    type="search"
                    placeholder="e.g., 78701 or Austin, TX"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    />
                </Form.Group>
                <Col style={{display: "flex", alignItems: "flex-end"}}>
                    <Button type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    );
}