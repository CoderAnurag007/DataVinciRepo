import React, { useContext } from "react";
import "./Profile.css";
import { AccountContext } from "../context/AccountContext";

const Profile = () => {
  const { sidebar, setsidebar } = useContext(AccountContext);

  return (
    <>
      <div
        style={{
          transform: !sidebar && "translateX(-80px)",
        }}
        className="profile"
      >
        <div className="profile_img"></div>

        <div className="admin">Admin</div>
        <div className="regno"></div>

        <div className="reach_head">Reach Progress</div>
        <div className="reach_box1">
          Technical
          <div className="reach_box1_grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
            3.4%
          </div>
        </div>
        <div className="reach_box2">
          {" "}
          Comedy
          <div className="reach_box2_grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
            1.4%
          </div>
        </div>
        <div className="reach_box3">
          Sports
          <div className="reach_box3_grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
            6.2%
          </div>
        </div>
        <div className="reach_box4">
          Education
          <div className="reach_box4_grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
            0.9%
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
