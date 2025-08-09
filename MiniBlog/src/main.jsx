import './index.css'
import App from './App.jsx'
import { Provider} from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'
import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import Post from './pages/Post.jsx'
import EditPost from "./pages/EditPost";
import AllPosts from "./pages/AllPosts";
import ReactDOM from 'react-dom';
import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'

const router =  createBrowserRouter([
{path: '/',
element: <App/>,
children: [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/login',
    element:(
      <AuthLayout authentication={false}>
        <Login/>
      </AuthLayout>
    )
  },
  {
    path: "/about",
    element:(
        <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
    ),
  },
  {
    path: "/signup",
    element:(
      <AuthLayout authentication={false}>
        <Signup/>
      </AuthLayout>
    ),
  },
  {
     path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
  },
  {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {""}
                    <AddPost />
                </AuthLayout>
            ),
        },
    {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
     {
            path: "/post/:slug",
            element: <Post />,
        },   
],
},
])

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
