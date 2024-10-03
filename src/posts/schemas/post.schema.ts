import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;

  @Prop([String])
  tags: string[];

  @Prop({ unique: true, required: true })
  slug: string;

  @Prop({ default: 0 })
  views: number;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);

// Add indexes
PostSchema.index({ title: 'text', content: 'text' }); // Full-text search index
PostSchema.index({ author: 1, tags: 1 }); // Compound index
PostSchema.index({ slug: 1 }, { unique: true }); // Unique index on slug
