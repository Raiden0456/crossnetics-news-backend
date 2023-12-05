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

const mockArticles = [
  {
    id: "article1",
    titleType: true,
    title: "First Article",
    text: "This is the first article text.",
  },
  {
    id: "article2",
    titleType: false,
    title: "Second Article",
    text: "This is the second article text.",
  }
  // ... add more if needed
];

const mockDescription = {
  image: mockImages[0],
  title: "News Update",
  author: "Author Name",
  tags: ["news", "update", "latest"],
  date: "2023-12-01"
};

export const mockQueryResult = {
  description: mockDescription,
  content: mockArticles
};
