import mongoose, { Schema, Document } from 'mongoose'

// Define TypeScript interface for Image document structure
interface IImage extends Document {
  url: string
  copyright?: string
}

// Create Mongoose schema for Image
const ImageSchema = new Schema<IImage>({
  url: { type: String, required: true }, // URL is required
  copyright: String,
})

// Define TypeScript interface for PostBlock document structure
interface IPostBlock extends Document {
  titleType: boolean
  title: string
  text?: string
}

// Create Mongoose schema for PostBlock
const PostBlockSchema = new Schema<IPostBlock>({
  titleType: { type: Boolean, required: true },
  title: { type: String, required: true },
  text: String,
})

// Define TypeScript interface for Description document structure
interface IDescription extends Document {
  image?: IImage
  title: string
  author?: string
  tags?: string[]
  date: string
  likes?: number
}

// Create Mongoose schema for Description
const DescriptionSchema = new Schema<IDescription>({
  image: { type: ImageSchema }, // Nested Image schema
  title: { type: String, required: true },
  author: String,
  tags: [String],
  date: { type: String, required: true },
  likes: Number,
})

// Define TypeScript interface for Post document structure
interface IPost extends Document {
  postType: string
  description: IDescription
  content: IPostBlock[] // Array of PostBlock
}

// Create Mongoose schema for Post
const PostSchema = new Schema<IPost>({
  postType: { type: String, required: true },
  description: { type: DescriptionSchema, required: true }, // description is required and uses nested Description schema
  content: { type: [PostBlockSchema], required: true }, // content is required and is an array of PostBlockSchema
})

// Create Mongoose model for Post
const PostModel = mongoose.model<IPost>('Post', PostSchema)

export default PostModel
