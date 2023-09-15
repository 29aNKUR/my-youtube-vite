import { Provider } from "react-redux";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import WatchPage from "./components/WatchPage";
import { lazy,Suspense } from "react";
import Shimmer from "./components/Shimmer";


const MainContainer = lazy(()=>import("./components/MainContainer"));


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<Shimmer/>}><MainContainer/></Suspense>,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path:"shimmer",
        element:<Shimmer />
      }
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Head />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </>
  );
}

export default App;

{
  /**
Head
Body
  -Sidebar
    -MenuItems
  -MainContainer
  -ButtonsList
  -VideoContainer
    -VideoCard
*/
}
