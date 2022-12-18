import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./Posts";
import Home from "./Home";
import UserInfo from "./UserInfo";
import Comment from './Comment'
const router = createBrowserRouter(
  [{
    path: "/",
    element: (<Home/>)
  },
  {
    path: "/posts/:id",
    element: (<Posts/>),
    children: [
      {
        path: "comments",
        element: (<Comment/>)
      },
      {
        path: "userInfo",
        element: (<UserInfo/>)
      }
    ]
  }
  ]
)
function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App