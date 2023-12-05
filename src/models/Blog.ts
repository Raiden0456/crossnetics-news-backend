
const MockImages = [
  {
    url: "https://example.com/image1.jpg",
    copyright: "Photographer 1"
  },
  {
    url: "https://example.com/image2.jpg",
    copyright: "Photographer 2"
  }
]


const News = [
  {
    date: 'April 14, 2023',
    title: 'Industry weighs potential of AI-designed watches',
    text: "Small text about. If you want to find the best time to post on Instagram, you're probably trying to...",
    tags: ['Social'],
    image: MockImages[0],
  },
]

const Blog = [
  {
    id: 1,
    date: 'April 14, 2023',
    title:
        "Here's What You Need to Know About YouTube's New Shorts Creation Tools.",
    text: "YouTube's response to the short-form video trend has taken the shape of a powerful contender: YouTube Shorts. As the popularity of platforms like TikTok continues...",
    tags: ['Influencing'],
    likes: 12,
    image: MockImages[1],
  },
]

export const mockBlogResult = {
  news: News,
  blog: Blog
}