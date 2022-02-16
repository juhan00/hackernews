import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Article } from "./containers/Article";
import { Ask } from "./containers/Ask";
import { Home } from "./containers/Home";
import { Jobs } from "./containers/Jobs";
import { Show } from "./containers/Show";
import { Comment } from "./containers/Comment";
import { NotFound } from "./containers/NotFound";
import { StoryDetail } from "./containers/StoryDetail";
import { Navigation } from "./components/Navigation";
import { UserInfo } from "./components/UserInfo";
import { useUserInfo } from "./hooks/useUserInfo";
import { Global } from "@emotion/react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobalContext } from "./hooks/useGlobalContext";

export default function App() {
  const { userInfo, isModalOpen, userInfoToggle } = useUserInfo();

  return (
    <div className="App">
      <Global styles={GlobalStyle} />

      <GlobalContext.Provider value={{ userInfoToggle }}>
        {isModalOpen && <UserInfo {...userInfo} />}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/article" element={<Article />}></Route>
          <Route path="/ask" element={<Ask />}></Route>
          <Route path="/show" element={<Show />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/Comment/:id" element={<Comment />}></Route>
          <Route path="/StoryDetail/:id" element={<StoryDetail />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Navigation />
      </GlobalContext.Provider>
    </div>
  );
}
