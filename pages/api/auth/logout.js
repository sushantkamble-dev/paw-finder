import { getIronSession } from "iron-session";
import { ironOptions } from "@/lib/config/iron-config";

export default async (req, res) => {
    const session = await getIronSession(req, res, ironOptions);
    await session.destroy();
    return res.redirect("/")
  }
  