import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Home from "./views/Home";
import Tong from "./views/Tong";
import Jumun from "./views/Jumun";
import Wol from "./views/Wol";
import Menu from "./views/Menu";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/Home" />
  },
  {
    path: "/Home",
    layout: DefaultLayout,
    component: Home
  },
  {
    path: "/Tong",
    layout: DefaultLayout,
    component: Tong
  },
  {
    path: "/Jumun",
    layout: DefaultLayout,
    component: Jumun
  },
  {
    path: "/Wol",
    layout: DefaultLayout,
    component: Wol
  },
  {
    path: "/Menu",
    layout: DefaultLayout,
    component: Menu
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
