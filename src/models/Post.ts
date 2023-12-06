const mockImages = [
  {
    url: "https://example.com/image1.jpg",
    copyright: "Photographer 1"
  },
  {
    url: "https://example.com/image2.jpg",
    copyright: "Photographer 2"
  }
  // ... add more if needed
];

const mockArticlesBlocks = [
  {
    id: "block1",
    titleType: true,
    title: "First Article Block",
    text: "This is the first article Block text.",
  },
  {
    id: "block2",
    titleType: false,
    title: "Second Article Block",
    text: "This is the second article Block text.",
  }
  // ... add more if needed
];

const mockDescription = {
  image: mockImages[0],
  title: "News Update",
  author: "Author Name",
  tags: ["news", "update", "latest"],
  date: "2023-12-01",
  likes: 100
};

const mockArticle = {
  id: "article1",
  articleType: "blog",
  description: mockDescription,
  content: mockArticlesBlocks
};

export const mockArticles = {
  articles: [mockArticle, mockArticle, mockArticle]
};
