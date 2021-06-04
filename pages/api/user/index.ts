import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";

// @ts-ignore
export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const user = await User.create(req.body);
        return res.status(200).json(user);
      } catch (e) {
        return res.status(400).json({ error: e });
      }

    case "GET":
      const { username } = req.query;
      try {
        const user = await User.findOne({ username }).select("-password");
        return res.status(200).json({ user });
      } catch (e) {
        return res.status(400).json({ error: e });
      }

    default:
      return res.status(400).json({ method: "NOT IMPLEMENTED YET" });
  }
}
