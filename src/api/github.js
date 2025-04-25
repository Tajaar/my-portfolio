// src/api/github.js
import axios from 'axios';
import { GITHUB_USERNAME, REPOSITORIES } from '../utils/constants'; // Import the token from constants
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const fetchCustomProjects = async () => {
    const projectData = await Promise.all(
      REPOSITORIES.map(async (repo) => {
        const [repoRes, readmeRes] = await Promise.all([
          axios.get(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo}`, {
            headers: {
              Authorization: `token ${TOKEN}`,
            },
          }),
          axios.get(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/readme`, {
            headers: {
              Authorization: `token ${TOKEN}`,
              Accept: 'application/vnd.github.v3.html',
            },
          }),
        ]);
  
        return {
          name: repoRes.data.name,
          url: repoRes.data.html_url,
          readme: readmeRes.data,
        };
      })
    );
  
    return projectData;
  };