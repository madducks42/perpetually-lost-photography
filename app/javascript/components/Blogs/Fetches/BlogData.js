import axios from "axios";

export const getBlogData = async () => {
  try {
    const { data } = await axios.get(`/api/v1/blogs`);
    return data;
  } catch (error) {
    console.log(error);
  }
};