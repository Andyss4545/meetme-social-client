import React from "react";
import "../navbar/navbar.css";
import {
  Search,
  Home,
  People,
  Feed,
  Notifications,
  WbSunny,
  Chat,
  NightlightRound,
} from "@mui/icons-material";
import Person from "../../Assets/person.jpg";

const Navbar = () => {
  // const [isDark, setIsDark] = useState(false);

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarContainer">
          <div className="navbarLeft">
            <div className="navbarLeftContainer">
              <span className="navbarLogo">Meetme</span>
              <div className="navbarSearch">
                <Search className="navbarSearchIcon" />
                <input
                  className="navbarSearchInput"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          <div className="navbarCenter">
            <div className="navbarMenuContainer">
              <div className="navbarCenterMenu">
                <Home className="navbarMenuIcon" />
                <span className="navbarMenutitle">Home</span>
              </div>

              <div className="navbarCenterMenu">
                <Chat className="navbarMenuIcon" />

                <span className="navbarMenutitle">Messages</span>
                <span className="navbarNotification">10</span>
              </div>

              <div className="navbarCenterMenu">
                <Notifications className="navbarMenuIcon" />

                <span className="navbarMenutitle">Notifications</span>
                <span className="navbarNotification">5</span>
              </div>

              <div className="navbarCenterMenu">
                <img className="navbarPersonImg" src={Person} alt="" />
                <span className="navbarMenutitle">Profile</span>
              </div>
            </div>
          </div>
          <div className="navbarRight">
            <div className="navbarMode">
              <div className="navbarLightmode">
                <span>DARK MODE</span>
                <NightlightRound className="navbarmodeIcon" />
              </div>

              <div className="navbarDarkmode">
                <span>LIGHT MODE</span>
                <WbSunny className="navbarmodeIconDark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
