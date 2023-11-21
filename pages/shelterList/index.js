import { useEffect, useState } from "react";

const shelterList = ({ response }) => {

  console.log(response);
  return (
    <div>
      {response.data.map((item,index) => (
        <>
        <img src={item.imageURL} height={500} width={500}></img>
        <h2 key={index}>{item.name}</h2>
        </>
      ))}
    </div>
  );
};

export default shelterList;

export async function getServerSideProps(context) {
  const query = await fetch(`${process.env.BASE_URL}/api/listShelters`);
  const response = await query.json();
  return {
    props: {
      response,
    },
  };
}
