import listShelters from "@lib/shelters/listShelters";

export default async (req, res) => {
  try {
    const { results, err } = await listShelters();
    if (err) throw new Error(err);
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({data:results});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

};
