import { login } from "@/lib/users/login";

export default async (req, res) => {
  try {
    const {email, password} = req.body;
    const { results, err } = await login(email, password);
    if (err) throw new Error(err);
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({data:results});
  } catch (error) {
    return res.status(500).json({ error: error.message });

  }

};
