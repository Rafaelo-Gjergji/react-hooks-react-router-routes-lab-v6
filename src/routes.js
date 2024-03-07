import Home from "./pages/Home.js";
import Directors from "./pages/Directors.js";
import Actors from "./pages/Actors.js";
import Movies from "./pages/Movie.js";
import ErrorPage from "./pages/ErrorPage.js";

const routes = [
  {
    path: "/",
    element: <Home> </Home>,
  },
  {
    path: "directors",
    element: <Directors></Directors>,
  },
  {
    path: "actors",
    element: <Actors></Actors>,
  },
  {
    path: "movie",
    element: <Movies></Movies>,
  },
  {
    path: "movie/:id",
    element: <Movies></Movies>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
];

export default routes;
