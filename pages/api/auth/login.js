import { getIronSession } from "iron-session";
import { ironOptions } from "@/lib/config/iron-config";
import { login } from "@/lib/users/login";

export default async (req, res) => {
  try {
    const {email, password} = req.body;
    const { results, err } = await login(email, password);
    if (err) throw new Error(err);
    const session = await getIronSession(req, res, ironOptions);
    session.user = results;
    session.isLoggedIn = true;
    await session.save()
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({"user":results, "session": session});
  } catch (error) {
    return res.status(500).json({ error: error.message });

  }

};
