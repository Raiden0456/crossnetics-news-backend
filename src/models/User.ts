import mongoose, { Schema, Document } from 'mongoose'
import bcrypt from 'bcrypt'

// Define TypeScript interface for User document structure
interface IUser extends Document {
  login: string
  password: string
  comparePassword(candidatePassword: string): Promise<boolean>
}

// Create Mongoose schema for User
const UserSchema = new Schema<IUser>({
  login: { type: String, required: true, unique: true }, // login is required and unique
  password: { type: String, required: true }, // password is required
})

// Pre-save hook to hash the password before saving the user document
UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  // Hash the password with a salt round of 10
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// Method to compare provided password with hashed password in the database
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password)
}

// Create Mongoose model for User
const UserModel = mongoose.model<IUser>('User', UserSchema)

export default UserModel
