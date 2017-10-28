import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST= 'fetchPost';

const ROOT_URL = 'http://blackonair.com/wp-json/wp/v2/';


export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`);
    return {
      type: FETCH_POSTS,
      payload: request
    };
}

export function fetchPost() {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);
    return {
      type: FETCH_POST,
      paylod: request
    };
}
