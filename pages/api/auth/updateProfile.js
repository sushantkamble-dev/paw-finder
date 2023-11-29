import { updateProfile } from "@/lib/users/update";

export default async (req, res) => {
  try {
    const id = req.body.id;
    const profile = req.body;
    delete profile.id;
    const { results, err } = await updateProfile(profile, id);
    if (err) throw new Error(err);
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({data:results});
  } catch (error) {
    return res.status(500).json({ error: error.message });

  }

};