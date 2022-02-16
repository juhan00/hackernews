import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const NaviStyle = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  width: 100%;
  height: 72px;
  background-color: #282828;
  justify-content: space-evenly;
  align-items: end;
  filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.25));
  a {
    color: #fff;
    width: 56px;
    height: 56px;
    text-align: center;
    margin-bottom: 8px;
    font-size: 8px;
    /* opacity: 0.5; */
    div {
      .icon {
        display: block;
        width: 24px;
        height: 24px;
        margin: 9px auto 2px;
      }
      opacity: 0.5;
      &.article {
        .icon {
          background: url("/img/ic_article.png") no-repeat;
        }
      }
      &.ask {
        .icon {
          background: url("/img/ic_ask.png") no-repeat;
        }
      }
      &.home {
        margin: 21px auto 2px;
        .icon {
          background: url("/img/ic_home.png") no-repeat;
        }
      }
      &.jobs {
        .icon {
          background: url("/img/ic_jobs.png") no-repeat;
        }
      }
      &.show {
        .icon {
          background: url("/img/ic_show.png") no-repeat;
        }
      }
    }
    &.home-link {
      width: 80px;
      height: 80px;
      background-color: #363636;
      border-radius: 50%;
    }
    &.active {
      div {
        opacity: 1;
      }
    }
  }
`;

export const Navigation = () => {
  return (
    <NaviStyle>
      <NavLink
        to="/article"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="article">
          <span className="icon"></span>
          article
        </div>
      </NavLink>
      <NavLink
        to="/ask"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="ask">
          <span className="icon"></span>
          ask
        </div>
      </NavLink>
      <NavLink
        to="/home"
        className={({ isActive }) => "home-link " + (isActive ? "active" : "")}
      >
        <div className="home">
          <span className="icon"></span>
          home
        </div>
      </NavLink>
      <NavLink
        to="/show"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="show">
          <span className="icon"></span>
          show
        </div>
      </NavLink>
      <NavLink
        to="/jobs"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <div className="jobs">
          <span className="icon"></span>
          jobs
        </div>
      </NavLink>
    </NaviStyle>
  );
};
