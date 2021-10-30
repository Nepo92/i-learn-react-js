import { rerenderEntireTree } from "../render.js";

const state = {
  messages: {
    dialogs: [
      {
        id: 2,
        name: 'Jhon Doe',
      },
      {
        id: 3,
        name: 'Ivan Ivanov',
      }
    ],
    messages: [
      {
        id: 1,
        message: 'Hello',
      },
      {
        id: 2,
        message: 'Hello',
      }
    ],
  },
  profile: {
    newPostText: '',
    posts: [
      {
        id: 1,
        message: 'Hi everyone',
      },
    ]
  }
}

export const addPost = () => {
  const newPost = {
    id: state.profile.posts.length + 1,
    message: state.profile.newPostText,
    likes: 0,
  }

  state.profile.posts.push(newPost);
  state.profile.newPostText = '';
  rerenderEntireTree(state);
}

export const changePost = (postMessage) => {
  state.profile.newPostText = postMessage;
  rerenderEntireTree(state);
}

export default state;
