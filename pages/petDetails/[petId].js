import { useRouter } from "next/router";

const PetDetails = ({ response }) => {
    console.log(response)
    if(!response.data){
        return(<><h1>Details not found for this pet</h1></>)
    }
  return (
    <>
      <h1>{`Details for PetID: ${response.data.name}`}</h1>
      <img src={response.data.imageURL} height={500} width={500}></img>
    </>
  );
};

export default PetDetails;

export async function getServerSideProps(context) {
  const petId = context.query.petId;
  const query = await fetch(`${process.env.BASE_URL}/api/getPetDetails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ petId }),
  });
  const response = await query.json();
  return {
    props: {
      response,
    },
  };
}
