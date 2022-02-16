import { useState } from "react";
import axios from "axios";

export const useUserInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState();

  const userInfoToggle = (by) => {
    if (by) {
      setIsModalOpen(true);
      getUserInfo(by);
    } else {
      setIsModalOpen(false);
    }
  };

  const getUserInfo = async (by) => {
    try {
      const userInfo = await axios(
        `https://hacker-news.firebaseio.com/v0/user/${by}.json`
      );

      setUserInfo(userInfo.data);
    } catch (error) {
      // console.log("useGetInfo error");
    }
  };
  return { userInfo, isModalOpen, userInfoToggle };
};
