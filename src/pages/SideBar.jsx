import React, {Component} from "react";
import {Route, Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBrain,
  faTools,
  faAddressCard,
  faProjectDiagram,
  faThList
} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import '../js/nav';
// images imports
import MyPic from "../img/swe_hayk.webp";

class SideBar extends Component {
  componentDidMount() {

    const HeaderMain = document.getElementById("header-main");
    //const PtActive = document.getElementsByClassName(".pt-active");

    // $(document).ready(function () {

    //   $(".modeToSwitch")
    //     .change(function () {

    //       var SwitchCntr = document.getElementById("modech");
    //       var currentClass = SwitchCntr.className;

    //       if (currentClass === "dark-mode") {

    //         $("#modech").addClass("light-mode");
    //         $("#modech").removeClass("dark-mode");

    //         $("#header-main").css({background: "#dae0e6"});

    //       } else if (currentClass === "light-mode") {

    //         $("#modech").addClass("dark-mode");
    //         $("#modech").removeClass("light-mode");

    //         $("#header-main").css({background: "#17181b"});

    //       }

    //     });

    //   if (currentClass === "dark-mode") {
    //     var SwitchCntr = document.getElementById("modech");
    //     var currentClass = SwitchCntr.className;

    //     $(".pt-active").css({background: "white"});

    //   } else if (currentClass === "light-mode") {

    //     $(".pt-active").css({color: "black"});

    //   }

    // })

    const choosenSideBarHide = () => {
      if ($(window).width() < 767) {
        $("#header-main").css({left: "-200px"});
      }
    };

    $("#hamburger").click(function () {
      this
        .classList
        .toggle("is-active");
    });

    $(document).ready(function () {
      if ($(window).width() < 767) {
        HeaderMain.style.left = "-200px";
      } else if ($(window).width() >= 767) {
        HeaderMain.style.left = "0px";
      }
    });

    $("#burger-button").click(function () {
      if ($(window).width() < 767) {
        if (HeaderMain.style.left === "-200px") {
          HeaderMain.style.left = "0px";
        } else if (HeaderMain.style.left === "0px") {
          HeaderMain.style.left = "-200px";
        }
      } else if ($(window).width() > 767) {
        HeaderMain.style.left = "0px";
      }
    });

    $(".pt-link").click(function () {

      var subMenu = $(this)
        .attr("class")
        .substring(-1, 7);
      $(".pt-link").removeClass("pt-active");

      if (!$(this).hasClass("pt-active")) {
        $("aside." + subMenu).addClass("pt-active");
      }
      $(this)
        .siblings()
        .removeClass("pt-active");
      $(this).toggleClass("pt-active");
      choosenSideBarHide();

    });

  }
  render() {
    return (
      <React.Fragment>
        <Route>
          <header>
            <div className="header-content">
              <div className="header-mobile">
                <div className="header-toggle hamburger hamburger--elastic" id="hamburger">
                  <span className="hamburger-box" id="burger-button">
                    <span className="hamburger-inner"/>
                  </span>
                </div>
                <h2>SWE Hayk</h2>
              </div>
              <div id="header-main" className="header-main" data-simplebar>
                <div className="image-container">
                  <h2 className="header-name">
                    <p>SWE Hayk</p>
                  </h2>
                  <img className="profile-pic" src={MyPic} alt="profile-pic"/>
                </div>
                <nav className="nav-menu">
                  <ul>
                    <li className="frst-nav-li">
                      <Link id="home-nav" to="/" className="pt-link pt-active">
                        <span className="nav-menu-icon">
                          <FontAwesomeIcon
                            icon={faHome}
                            style={{
                            paddingRight: "5px"
                          }}/>
                        </span>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link id="about-nav" to="/about" className="pt-link">
                        <span className="nav-menu-icon">
                          <FontAwesomeIcon
                            icon={faUser}
                            style={{
                            paddingRight: "5px"
                          }}/>
                        </span>
                        About Me
                      </Link>
                    </li>
                    <li>
                      <Link id="exp-nav" to="/experience" className="pt-link">
                        <span className="nav-menu-icon">
                          <FontAwesomeIcon
                            icon={faThList}
                            style={{
                            paddingRight: "5px"
                          }}/>
                        </span>
                        Experience
                      </Link>
                    </li>
                    <li>
                      <Link id="port-nav" to="/portfolio" className="pt-link">
                        <span className="nav-menu-icon">
                          <FontAwesomeIcon
                            icon={faProjectDiagram}
                            style={{
                            paddingRight: "5px"
                          }}/>
                        </span>
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link id="skill-nav" to="/skills" className="pt-link">
                        <span className="nav-menu-icon">
                          <FontAwesomeIcon
                            icon={faBrain}
                            style={{
                            paddingRight: "5px"
                          }}/>
                        </span>
                        Skills
                      </Link>
                    </li>
                    <li>
                      <Link id="tool-nav" to="/tools" className="pt-link">
                        <span className="nav-menu-icon">
                          <FontAwesomeIcon
                            icon={faTools}
                            style={{
                            paddingRight: "5px"
                          }}/>
                        </span>
                        Tools
                      </Link>
                    </li>
                    <li>
                      <Link id="cont-nav" to="/contact" className="pt-link">
                        <span className="nav-menu-icon">
                          <FontAwesomeIcon
                            icon={faAddressCard}
                            style={{
                            paddingRight: "5px"
                          }}/>
                        </span>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="mode-switcher-inner">
                  {/* <div className="switch dark-mode-switch">
                  <label>
                    <input type="hidden" id="modech" className="dark-mode" />
                    <input className="modeToSwitch" type="checkbox" name="dark_light" title="Toggle dark/light mode" />
                    <span className="lever" />
                  </label>
                </div> */}
                </div>
                <div className="nav-footer">
                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/computerscience.hayk?ref=bookmarks"
                        target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-square"/>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Compute96607118" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter-square"/>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/haikaz-bashoyan/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"/>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.reddit.com/user/CSHayk" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-reddit"/>
                      </a>
                    </li>
                    <li>
                      <a href="https://vk.com/cshayk" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-vk"/>
                      </a>
                    </li>
                  </ul>
                  <div className="copy">
                    <p>
                      2020 © SWE Hayk
                      <br/>
                      All Right Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Route>
      </React.Fragment>
    );
  }
}

export default SideBar;
