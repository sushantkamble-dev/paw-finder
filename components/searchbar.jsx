import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useRouter } from 'next/router';
export default function SearchBar() {
    const router = useRouter();
    const [petType, setPetType] = useState(router.query.type)
    const [location, setLocation] = useState(router.query.city);
    

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

        window.location.assign(`/search?${params.toString()}&sortBy=ASC&breed=any&age=any&size=any&gender=any`);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Col} xs="auto">
                    <Form.Label>Choose pet type</Form.Label>
                    <Form.Select name="type" value={petType} onChange={e => setPetType(e.target.value)}
                    >
                        <option value="dog">Dogs</option>
                        <option value="cat">Cats</option>
                        
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} xs={7} controlId="location">
                    <Form.Label aria-required  >Enter city/zip</Form.Label>
                    <Form.Control
                    required
                    name="city"
                    type="search"
                    placeholder="e.g. Austin"
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