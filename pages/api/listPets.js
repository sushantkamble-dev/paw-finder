import listPets from "@lib/pets/listPets";

export default async (req, res) => {
  try {
    let query = req.query;
    console.log(query);
    const { results, err } = await listPets(query);
    if (err) throw new Error(err);
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({data:results});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

};
