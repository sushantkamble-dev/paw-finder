"use client"
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function SearchBar() {
    return (
        <Form>
            <Row>
                <Form.Group as={Col} xs="auto" controlId="petType">
                    <Form.Label>Choose pet type</Form.Label>
                    <Form.Select>
                        <option value="default">Cats and dogs</option>
                        <option value="cats">Cats</option>
                        <option value="dogs">Dogs</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} xs={7} controlId="location">
                    <Form.Label>Enter city/zip</Form.Label>
                    <Form.Control type="search" placeholder="e.g., 78701 or Austin, TX" />
                </Form.Group>
                <Col style={{display: "flex", alignItems: "flex-end"}}>
                    <Button type="submit" href="/search">Search</Button>
                </Col>
            </Row>
        </Form>
    );
}