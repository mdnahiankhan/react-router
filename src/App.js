
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/Bout/About';
import Home from './component/Home/Home';
import Main from './Layout/Main';
import Product from './component/Product/Product';
import Freinds from './component/Friends/Freinds';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Posts from './component/Posts/Posts';
import PostDetails from './component/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: '/home', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        {
          path: "/friends",
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Freinds></Freinds>
        },
        {
          path: '/friend/:friendId',
          loader: async ({ params }) => {
            // console.log(params);
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: '/post',
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/posts`)
          },

          element: <Posts></Posts>
        },
        {
          path: '/post/:postId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        }
      ]
    },
    { path: '/product', element: <Product></Product> },
    { path: '*', element: <div>There is no webpage that you search"404"</div> }
  ])
  return (

    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
