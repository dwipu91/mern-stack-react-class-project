import Lasyout from "../component/Layouts/Lasyout";
import Admin from "../Pages/admin/Admin";
import Catagory from "../Pages/admin/pages/Catagory";
import Other from "../Pages/admin/pages/Other";
import Rolling from "../Pages/admin/pages/Rolling";
import User from "../Pages/admin/pages/Users";

const privetRoute = [
  {
    element: <Lasyout />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            path: "user",
            element: <User />,
          },
          {
            path: "catagory",
            element: <Catagory />,
          },
          {
            path: "rolling",
            element: <Rolling />,
          },
          {
            path: "other",
            element: <Other />,
          },
        ],
      },
    ],
  },
];

export default privetRoute;
