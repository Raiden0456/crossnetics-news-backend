const mockImages = [
  {
    url: 'https://example.com/image1.jpg',
    copyright: 'Photographer 1',
  },
  {
    url: 'https://example.com/image2.jpg',
    copyright: 'Photographer 2',
  },
  // ... add more if needed
]

const mockPostsBlocks = [
  {
    id: 'block1',
    titleType: true,
    title: 'First Post Block',
    text: 'This is the first post Block text.',
  },
  {
    id: 'block2',
    titleType: false,
    title: 'Second Post Block',
    text: 'This is the second post Block text.',
  },
  // ... add more if needed
]

const mockDescription = {
  image: mockImages[0],
  title: 'News Update',
  author: 'Author Name',
  tags: ['news', 'update', 'latest'],
  date: '2023-12-01',
  likes: 100,
}

const mockPost = {
  id: 'post1',
  postType: 'blog',
  description: mockDescription,
  content: mockPostsBlocks,
}

export const mockPosts = {
  posts: [mockPost, mockPost, mockPost],
}
