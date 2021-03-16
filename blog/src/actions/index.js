import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = getState().posts.reduce((ids, post) => {
    if (ids.indexOf(post.userId) === -1)
      return [ ...ids, post.userId ];
    else
      return ids;

  }, [])

  userIds.forEach(id => dispatch(fetchUser(id)));
};
