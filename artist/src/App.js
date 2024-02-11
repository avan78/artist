import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './App.css';
import {MainPage} from "./Pages/MainPage";
import {ErrorPage} from "./Pages/ErrorPage";

function App() {
    const router = createBrowserRouter([{
        path:"/",
        element:<MainPage/>,
        errorElement:<ErrorPage/>,
    }])
  return (
    <div className="App">
        <RouterProvider router={router}>
        <MainPage/>
        </RouterProvider>
    </div>
  );
}

export default App;
