import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  console.log(req.body);

  switch (method) {
    case "POST":
      console.log(req.body);
      try {
        const user = await User.create(req.body);
        return res.status(200).json(user);
      } catch (e) {
        return res.status(400).json({ error: e });
      }

    case "GET":
      return res.status(200).json({ method: "GET" });
    default:
      return res.status(400).json({ method: "NOT IMPLEMENTED YET" });
  }
}
