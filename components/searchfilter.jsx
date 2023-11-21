import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const filters = [
    {
        id: "sortby",
        label: "Sort By",
        options: ["Any"]
    },
    {
        id: "breed",
        label: "Breed",
        options: ["Any", "Golden Retriever"]
    },
    {
        id: "age",
        label: "Age",
        options: ["Any", "Puppy"]
    },
    {
        id: "size",
        label: "Size",
        options: ["Any", "Small", "Medium", "Large"]
    },
    {
        id: "gender",
        label: "Gender",
        options: ["Any", "Male", "Female"]
    }
]

export default function SearchFilter() {

    const filterOptions = filters.map(filter =>
        <Form.Group key={filter.id}>
            <Form.Label>{filter.label}</Form.Label>
            <Form.Select>
                {filter.options.map((value, index) =>
                    <option key={index}>{value}</option>
                )}
            </Form.Select>
        </Form.Group>
    );

    return (
        <Form className="search-filter">
            {filterOptions}
            <Button variant="primary">Filter results</Button>
        </Form>
    );
}