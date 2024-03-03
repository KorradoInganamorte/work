import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "normalize.css";
import { Paths } from "./paths";
import { PresentationPage } from "./components/presentation_page";
import store from "./redux/store";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { Femal } from "./components/femal-form";
import { Men} from "./components/men's-form";
// import { TestStand } from "./test_stand";
import { PersonalAccount } from "./components/personal-account";
import { FriendPage } from "./components/friend-page";
import BigCalendar from "./components/calendar";



const router = createBrowserRouter([
  { path: Paths.presentation, element: <PresentationPage /> },
  { path: Paths.login, element: <Login /> },
  { path: Paths.register, element: <Register/> },
  { path: Paths.femal, element: <Femal/> },
  { path: Paths.men, element: <Men/> },
  // { path: '/test_stand', element: <TestStand><BigCalendar/></TestStand> },
  { path: Paths.home, element: <PersonalAccount></PersonalAccount> },
  { path: Paths.user, element: <FriendPage></FriendPage> },
  { path: Paths.friends, element:<PersonalAccount></PersonalAccount> },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
);
