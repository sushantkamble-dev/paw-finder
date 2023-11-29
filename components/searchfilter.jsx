import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';

let catFilters = [
    {
        id: "sortBy",
        label: "Sort By",
        options: ["Ascending", "Descending"],
        values: ["ASC", "DESC"]
    },
    {
        id: "breed",
        label: "Breed",
        options: ["Any", "Siamese Cat", "British ShortHair", "Persian Cat"],
        values: ["any", "siameseCat", "britishShortHair", "persianCat"]
    },
    {
        id: "age",
        label: "Age",
        options: ["Any", "Young", "Adult", "Senior"],
        values: ["any", "young", "adult", "senior"]
    },
    {
        id: "size",
        label: "Size",
        options: ["Any", "Small", "Medium", "Large"],
        values: ["any", "small", "medium", "large"]
    },
    {
        id: "gender",
        label: "Gender",
        options: ["Any", "Male", "Female"],
        values: ["any", "male", "female"]
    }
]

let dogFilters = [
    {
        id: "sortBy",
        label: "Sort By",
        options: ["Ascending", "Descending"],
        values: ["ASC", "DESC"]
    },
    {
        id: "breed",
        label: "Breed",
        options: ["Any", "Labrador Retriever", "German Shepherd", "Beagle"],
        values: ["any", "labradorRetriever", "germanShepherd", "beagle"]
    },
    {
        id: "age",
        label: "Age",
        options: ["Any", "Young", "Adult", "Senior"],
        values: ["any", "young", "adult", "senior"]
    },
    {
        id: "size",
        label: "Size",
        options: ["Any", "Small", "Medium", "Large"],
        values: ["any", "small", "medium", "large"]
    },
    {
        id: "gender",
        label: "Gender",
        options: ["Any", "Male", "Female"],
        values: ["any", "male", "female"]
    }
]
export default function SearchFilter({ queryParams }) {
    const router = useRouter();
    let filters = []
    if(queryParams.type==='cat'){
        filters = catFilters;
    }else{
        filters = dogFilters;
    }

    const onChangeHandler = (value,id) => {


        const { pathname, query } = router;

        query[id] = value;

        const newURL = {
            pathname,
            query
        }

        router.replace(newURL,undefined)
    }

    const resetFilters = () => {
        const { pathname, query } = router;

        query.sortBy = "ASC",
        query.breed = "any",
        query.age = "any",
        query.size = "any",
        query.gender = "any"

        const newURL = {
            pathname,
            query
        }

        router.replace(newURL,undefined)
    }

    const filterOptions = filters.map((filter,i) =>
        <Form.Group key={i}>
            <Form.Label>{filter.label}</Form.Label>
            <Form.Select id={filter.id} onChange={(e) =>onChangeHandler(e.target.value,e.target.id)}>
                {filter.options.map((option, index) => {
                    return (<option key={index} value={filter.values[index]} selected={queryParams[filter.id] === filter.values[index] ? true : false}>{option}</option>)
                }

                )}
            </Form.Select>
        </Form.Group>
    );


    return (
        <Form className="search-filter">
            {filterOptions}
            <Button variant="primary" onClick={resetFilters}>Reset Filters</Button>
        </Form>
    );

}