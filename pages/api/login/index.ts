import User from "../../../models/User";
import dbConnect from "../../../utils/dbConnect";
import bcryptjs from "bcryptjs";

// @ts-ignore
export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST": {
      const { username, password } = req.body;
      try {
        const user = await User.findOne({ username });
        const comparisonResult = await bcryptjs.compare(
          password,
          user.password
        );
        if (comparisonResult) {
          return res.status(200).json(user);
        }
        return res.status(400).json({ error: "desconhecço" });
      } catch (error) {
        return res.status(400).json({ error: error });
      }
    }
    default: {
      return res.status(402).json({ error: "not implemented yet" });
    }
  }
}
