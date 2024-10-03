import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './schemas/post.schema';
import { CreatePostDto } from './dto/posts.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    try {
      const createdPost = new this.postModel(createPostDto);
      return await createdPost.save();
    } catch (error) {
      // Handle duplicate key error (11000)
      if (error.code === 11000) {
        // ConflictException will return a 409 status code
        throw new ConflictException('Post with this slug already exists');
      }
      throw error; // Re-throw other errors if any
    }
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findBySlug(slug: string): Promise<Post> {
    return this.postModel.findOne({ slug }).exec();
  }

  async updateViews(slug: string): Promise<Post> {
    return this.postModel
      .findOneAndUpdate({ slug }, { $inc: { views: 1 } }, { new: true })
      .exec();
  }

  async updateLikes(slug: string): Promise<Post> {
    return this.postModel
      .findOneAndUpdate({ slug }, { $inc: { likes: 1 } }, { new: true })
      .exec();
  }

  async delete(slug: string): Promise<Post> {
    return this.postModel.findOneAndDelete({ slug }).exec();
  }

  async search(query: string): Promise<Post[]> {
    return this.postModel.find({ $text: { $search: query } }).exec();
  }
  
  async filterByAuthorAndTags(author: string, tags: string[]): Promise<Post[]> {
    return this.postModel.find({ author, tags: { $in: tags } }).exec();
  }

  async paginate(page: number, limit: number): Promise<Post[]> {
    return this.postModel
      .find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }
}
