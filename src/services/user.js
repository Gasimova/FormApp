import { ENDPOINTS } from "../shared/constant/endpoints";
import { instanceAxios } from "../shared/helper/instanceAxios";


export const getPosts = () => instanceAxios({ method: 'GET', url: ENDPOINTS.POSTS });
export const getPostsById = (id) => instanceAxios({ method: 'GET', url: ENDPOINTS.POST_ID(id) });
export const addPosts = (data) => instanceAxios({ method: 'POST', url: ENDPOINTS.POSTS, data });
export const updatePosts = (id, data) => instanceAxios({ method: 'PUT', url: ENDPOINTS.POST_ID(id), data });
export const deletePosts = (id) => instanceAxios({ method: 'DELETE', url: ENDPOINTS.POST_ID(id) });