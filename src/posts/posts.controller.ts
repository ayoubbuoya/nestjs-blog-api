import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/posts.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: 'Create a new blog post' })
  @ApiBody({ type: CreatePostDto })
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @ApiOperation({ summary: 'Get all blog posts' })
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @ApiOperation({ summary: 'Get a post by its slug' })
  @ApiParam({ name: 'slug', description: 'Unique identifier for the post' })
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.postsService.findBySlug(slug);
  }

  @ApiOperation({ summary: 'Update views for a post' })
  @ApiParam({ name: 'slug', description: 'Unique identifier for the post' })
  @Patch(':slug/views')
  updateViews(@Param('slug') slug: string) {
    return this.postsService.updateViews(slug);
  }

  @ApiOperation({ summary: 'Update likes for a post' })
  @ApiParam({ name: 'slug', description: 'Unique identifier for the post' })
  @Patch(':slug/likes')
  updateLikes(@Param('slug') slug: string) {
    return this.postsService.updateLikes(slug);
  }

  @ApiOperation({ summary: 'Search posts by title or content' })
  @ApiParam({ name: 'query', description: 'Search query' })
  @Get('search/:query')
  search(@Param('query') query: string) {
    return this.postsService.search(query);
  }

  @ApiOperation({ summary: 'Filter posts by author and tags' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        author: { type: 'string' },
        tags: { type: 'array', items: { type: 'string' } },
      },
    },
  })
  @Get('filter')
  filter(@Body('author') author: string, @Body('tags') tags: string[]) {
    return this.postsService.filterByAuthorAndTags(author, tags);
  }

  @ApiOperation({ summary: 'Get paginated blog posts' })
  @ApiParam({ name: 'page', description: 'Page number for pagination' })
  @ApiParam({ name: 'limit', description: 'Number of posts per page' })
  @Get('paginate/:page/:limit')
  paginate(@Param('page') page: number, @Param('limit') limit: number) {
    return this.postsService.paginate(page, limit);
  }
}
