import { lazy } from "react";

const Home = lazy(() => import('../pages/Home'))
const List = lazy(() => import('../pages/List'))

const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/list",
    element: List,
  },
];

export default routes;
