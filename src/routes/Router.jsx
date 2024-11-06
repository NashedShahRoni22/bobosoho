import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Privacypolicy from "../pages/Privacypolicy";
import Contact from "../pages/Contact";
import Security from "../pages/Security";
import Blogs from "../components/Blogs";
import Payment from "../pages/Payment/Payment";
import EmailOverview from "../pages/EmailOverview/EmailOverview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: "/private",
        element: <EmailOverview />,
      },
      {
        path: "/business",
        element: <EmailOverview />,
      },
      {
        path: "/privacypolicy",
        element: <Privacypolicy />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/security",
        element: <Security />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
]);
