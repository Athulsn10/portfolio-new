import { createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import Home from "./components/Home.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/Home",
        Component: Home
    }
])