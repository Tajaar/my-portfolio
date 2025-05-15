import { BlogPost } from '../types';

// This is a utility class to handle Medium RSS feed
export class MediumService {
  private username: string;
  
  constructor(username: string) {
    this.username = username;
  }

  // Fetch Medium posts from RSS feed
  async getPosts(): Promise<BlogPost[]> {
    try {
      // Due to CORS restrictions, we would normally use a proxy or backend service
      // For demonstration, we're using a mock implementation
      
      // The actual implementation would fetch from:
      // `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${this.username}`
      // or use a custom backend endpoint
      
      const mockPosts: BlogPost[] = [
        {
          id: '1',
          title: 'Building Modern React Applications with TypeScript',
          excerpt: 'Learn how to leverage TypeScript to build type-safe React applications with improved developer experience and fewer bugs.',
          publishDate: new Date('2023-10-15'),
          url: 'https://medium.com/@yourusername/building-modern-react-applications',
          coverImage: 'https://picsum.photos/seed/blog1/800/400'
        },
        {
          id: '2',
          title: 'Mastering Tailwind CSS: From Basics to Advanced',
          excerpt: 'A comprehensive guide to using Tailwind CSS effectively in your projects, with tips and tricks for maximizing productivity.',
          publishDate: new Date('2023-09-22'),
          url: 'https://medium.com/@yourusername/mastering-tailwind-css',
          coverImage: 'https://picsum.photos/seed/blog2/800/400'
        },
        {
          id: '3',
          title: 'The Power of Server-Side Rendering in Modern Web Apps',
          excerpt: 'Exploring the benefits of SSR and how it can improve performance, SEO, and user experience in your web applications.',
          publishDate: new Date('2023-08-10'),
          url: 'https://medium.com/@yourusername/server-side-rendering',
          coverImage: 'https://picsum.photos/seed/blog3/800/400'
        }
      ];
      
      return mockPosts;
    } catch (error) {
      console.error('Error fetching Medium posts:', error);
      throw error;
    }
  }

  // In a real implementation, this method would parse the RSS feed
  private parseRssFeed(data: any): BlogPost[] {
    try {
      return data.items.map((item: any) => {
        // Extract the first image from content if available
        const imgRegex = /<img[^>]+src="([^">]+)"/;
        const imgMatch = item.content.match(imgRegex);
        const coverImage = imgMatch ? imgMatch[1] : `https://picsum.photos/seed/${item.guid}/800/400`;
        
        return {
          id: item.guid,
          title: item.title,
          excerpt: item.description.replace(/<[^>]*>?/gm, '').substring(0, 140) + '...',
          publishDate: new Date(item.pubDate),
          url: item.link,
          coverImage
        };
      });
    } catch (error) {
      console.error('Error parsing RSS feed:', error);
      return [];
    }
  }
}