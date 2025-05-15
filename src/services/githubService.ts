import { Project } from '../types';

// This is a utility class to handle GitHub API interactions
export class GitHubService {
  private username: string;
  private accessToken?: string;
  
  constructor(username: string, accessToken?: string) {
    this.username = username;
    this.accessToken = accessToken;
  }

  // Prepare headers for GitHub API requests
  private getHeaders() {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    };
    
    if (this.accessToken) {
      headers['Authorization'] = `Bearer ${this.accessToken}`;
    }
    
    return headers;
  }

  // Fetch user repositories
  async getUserRepos() {
    try {
      const response = await fetch(`https://api.github.com/users/${this.username}/repos`, {
        headers: this.getHeaders()
      });
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching user repositories:', error);
      throw error;
    }
  }

  // Fetch specific repository details
  async getRepository(repoName: string) {
    try {
      const response = await fetch(`https://api.github.com/repos/${this.username}/${repoName}`, {
        headers: this.getHeaders()
      });
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Error fetching repository ${repoName}:`, error);
      throw error;
    }
  }

  // Fetch portfo.txt content from a repository
  async getPortfoContent(repoName: string) {
    try {
      // First, try to get the content directly
      const response = await fetch(
        `https://api.github.com/repos/${this.username}/${repoName}/contents/portfo/portfo.txt`, 
        { headers: this.getHeaders() }
      );
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      // GitHub API returns content as base64 encoded
      const content = atob(data.content);
      return this.parsePortfoContent(content);
      
    } catch (error) {
      console.error(`Error fetching portfo.txt for ${repoName}:`, error);
      throw error;
    }
  }

  // Parse the portfo.txt content into structured data
  private parsePortfoContent(content: string): {
    title: string;
    description: string;
    link: string;
    domains: string[];
    coverImage?: string;
  } {
    const lines = content.split('\n').filter(line => line.trim() !== '');
    const result: any = {
      domains: []
    };
    
    lines.forEach(line => {
      const [key, ...valueParts] = line.split(':');
      const value = valueParts.join(':').trim();
      
      switch (key.trim().toLowerCase()) {
        case 'title':
          result.title = value;
          break;
        case 'description':
          result.description = value;
          break;
        case 'link':
          result.link = value;
          break;
        case 'domains':
          result.domains = value.split(',').map(domain => domain.trim());
          break;
        case 'cover':
          result.coverImage = value;
          break;
      }
    });
    
    return result;
  }

  // Fetch complete project data for a list of repositories
  async getProjects(repoNames: string[]): Promise<Project[]> {
    try {
      const projectsData = await Promise.all(
        repoNames.map(async (repoName) => {
          try {
            const repoData = await this.getRepository(repoName);
            const portfoData = await this.getPortfoContent(repoName);
            
            return {
              id: repoData.id.toString(),
              title: portfoData.title || repoData.name,
              description: portfoData.description || repoData.description,
              repoUrl: repoData.html_url,
              liveUrl: portfoData.link,
              domains: portfoData.domains,
              coverImage: portfoData.coverImage || `https://picsum.photos/seed/${repoName}/800/400`
            };
          } catch (error) {
            console.error(`Error processing repository ${repoName}:`, error);
            // Return a fallback project with basic information
            return {
              id: repoName,
              title: repoName,
              description: 'Project information not available',
              repoUrl: `https://github.com/${this.username}/${repoName}`,
              domains: ['N/A'],
              coverImage: `https://picsum.photos/seed/${repoName}/800/400`
            };
          }
        })
      );
      
      return projectsData;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  }
}