import axios from "axios";


const fetchMediumBlogs = async () => {
  try {
    const response = await axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tajaar07`
    );
    return response.data.items; // This will return the blog posts
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};


