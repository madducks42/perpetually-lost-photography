import axios from "axios";

export const getPostData = async (id) => {
  try {
    const { data } = await axios.get(`/api/v1/blogs/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};