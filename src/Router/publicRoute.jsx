import Lasyout from "../component/Layouts/Lasyout";
import Home from "../Pages/home/Home";
import About from "../Pages/about/About";
import Team from "../Pages/team/Team";
import Contract from "../Pages/contract/Contract";
import Blog from "../Pages/blog/Blog";

const publicRoute = [
  {
    element: <Lasyout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contract",
        element: <Contract />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
];
export default publicRoute;
