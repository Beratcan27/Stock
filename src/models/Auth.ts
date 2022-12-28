import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";
import validate from "mongoose-unique-validator";
export interface IAuth extends Document {
  email: string;
  password: string;
  passwordAgain: string;
  validatePassword(password: string): boolean;
}

const AuthSchema: Schema = new Schema<IAuth>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

AuthSchema.plugin(validate);

AuthSchema.pre("save", async function save(next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err: any) {
    return next(err);
  }
});

AuthSchema.methods.validatePassword = async function validatePassword(
  password: string
) {
  return bcrypt.compare(password, this.password);
};

const Auth = mongoose.model<IAuth>("Auth", AuthSchema);
export default Auth;
