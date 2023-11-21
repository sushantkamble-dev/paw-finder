import {useRouter} from 'next/router';

const PetDetails = () => {
    const router = useRouter();
    const petId = router.query.petId;
    return <h1>{`Details for PetID: ${petId}`}</h1>
}

export default PetDetails