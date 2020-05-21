import { Document, Schema, Model, model } from 'mongoose'

export interface IUrl extends Document {
  url?: string
  newUrl?: string
  hashCode?: string
  dueDate?: Date
}

const UrlSchema = new Schema({
    url: String,
    newUrl: String,
    hashCode: String,
    dueDate: Date
}, {
  timestamps: true
})

export const Url: Model<IUrl> = model<IUrl>('url', UrlSchema)