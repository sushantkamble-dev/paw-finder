import { createUser } from "@/lib/users/signup";

export default async (req, res) => {
  try {
    const {firstName, lastName, email, password} = req.body;
    const { results, err } = await createUser(firstName, lastName, email, password);
    if (err) throw new Error(err);
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({data:results});
  } catch (error) {
    return res.status(500).json({ error: error.message });

  }

};
