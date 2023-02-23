import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const foundPost = postsService.find('1');
    expect(foundPost).not.toBe(undefined);
  });

  it('should find a post', () => {
    const foundPost = postsService.find('1');
    expect(foundPost).not.toBe(undefined);
  });
});
