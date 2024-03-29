import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import AnimeList from "../pages/AnimeList";
import ForumPage from "../pages/ForumPage";
import SignUp from "../pages/SignUp.jsx";
import MostPopular from "../pages/MostPopular.jsx";




function AppRoutes(props) {
  return (
    <Routes className="Routes">
      <Route path="login" element={<LoginPage {...props} />} />
      <Route path="SignUp" element={<SignUp {...props} />} />
      <Route index element={<Homepage {...props} />} />
      <Route path="anime" element={<AnimeList {...props} />} />
      <Route path="profile" element={<ProfilePage {...props} />} />
      <Route path="forum" element={<ForumPage {...props} />} />
      <Route path="mostpopular" element={<MostPopular {...props} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
