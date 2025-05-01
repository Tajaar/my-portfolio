// ./utils/FetchProjects.js
export async function fetchProjectDataFromGitHub(dashboardUrl, projectList) {
    try {
      const username = dashboardUrl.replace("https://github.com/", "").split("/")[0];
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await reposResponse.json();
  
      const matchingRepos = reposData.filter(repo => projectList.includes(repo.name));
  
      const projectsData = await Promise.all(
        matchingRepos.map(async (repo) => {
          const data = await fetchProjectData(repo.name, username);
          return data;
        })
      );
  
      return projectsData.filter(Boolean); // Remove nulls if some fetches fail
    } catch (error) {
      console.error("Error fetching project data from GitHub:", error);
      return [];
    }
  }
  
  export async function fetchProjectData(projectName, username) {
    const basePath = `https://raw.githubusercontent.com/${username}/${projectName}/main/portfo/`;
  
    try {
      const portfoFileRes = await fetch(`${basePath}portfo.txt`);
      if (!portfoFileRes.ok) throw new Error("portfo.txt not found");
      const portfoText = await portfoFileRes.text();
  
      const projectData = parsePortfoText(portfoText);
  
      // Supported image extensions in order of preference
      const imageExtensions = ["jpg", "jpeg", "png"];
      let coverImageUrl = null;
  
      for (const ext of imageExtensions) {
        const imageUrl = `${basePath}cover.${ext}`;
        const res = await fetch(imageUrl);
        if (res.ok) {
          coverImageUrl = imageUrl;
          break;
        }
      }
  
      return {
        title: projectData.title,
        description: projectData.description,
        githubLink: projectData.githubLink,
        domains: projectData.domains,
        coverImage: coverImageUrl,
      };
    } catch (error) {
      console.error(`Error fetching data for project "${projectName}":`, error);
      return null;
    }
  }  
  
  function parsePortfoText(text) {
    const lines = text.split("\n");
    let title = '';
    let githubLink = '';
    let description = '';
    let domains = [];
  
    lines.forEach(line => {
      if (line.startsWith("Project Title:")) {
        title = line.replace("Project Title:", "").trim().replace(/^"|"$/g, "");
      } else if (line.startsWith("Project Link:")) {
        githubLink = line.replace("Project Link:", "").trim().replace(/^"|"$/g, "");
      } else if (line.startsWith("Domains:")) {
        try {
          domains = JSON.parse(line.replace("Domains:", "").trim());
        } catch {
          domains = [];
        }
      } else if (line.startsWith("Description:")) {
        description = line.replace("Description:", "").trim().replace(/^"|"$/g, "");
      }
    });
  
    return { title, description, githubLink, domains };
  }
  