import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Privacypolicy from "../pages/Privacypolicy";
import Contact from "../pages/Contact";
import Security from "../pages/Security";
import Blogs from "../pages/Blogs/Blogs";
import Payment from "../pages/Payment/Payment";
import EmailOverview from "../pages/EmailOverview/EmailOverview";
import About from "../pages/About/About";
import Calling from "../pages/Calling/Calling";
import Login from "../pages/Login/Login";
import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";

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
        path: "/privacy-policy",
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
      {
        path: "/calls",
        element: <Calling />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
