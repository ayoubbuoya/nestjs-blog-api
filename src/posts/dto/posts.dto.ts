import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ description: 'The title of the post' })
  title: string;

  @ApiProperty({ description: 'The content of the post' })
  content: string;

  @ApiProperty({ description: 'The author of the post' })
  author: string;

  @ApiProperty({ description: 'Tags associated with the post', type: [String] })
  tags: string[];

  @ApiProperty({ description: 'Unique slug for the post' })
  slug: string;
}

export class UpdatePostDto {
  @ApiProperty({ description: 'Updated title of the post', required: false })
  title?: string;

  @ApiProperty({ description: 'Updated content of the post', required: false })
  content?: string;

  @ApiProperty({
    description: 'Updated tags associated with the post',
    type: [String],
    required: false,
  })
  tags?: string[];

  @ApiProperty({ description: 'Updated slug of the post', required: false })
  slug?: string;
}
