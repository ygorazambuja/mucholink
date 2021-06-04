import mongoose from "mongoose";
import bcriptjs from "bcryptjs";

interface UserInterface extends mongoose.Document {
  username: string;
  password: string;
  email: string;
}

const UserSchema = new mongoose.Schema<UserInterface>(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    iconGroup: { type: Array },
    cards: { type: Array },
    profileImg: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  const hash = await bcriptjs.hash(this.password, 10);
  this.password = hash;
});

export default mongoose.models.User ||
  mongoose.model<UserInterface>("User", UserSchema);
