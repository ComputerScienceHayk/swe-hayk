import React, { Component } from "react";
import $ from "jquery";

//images
import GithubLogo from "../img/tools/github-logo.webp";
import GitlabLogo from "../img/tools/gitlab.webp";
import CodepenLogo from "../img/tools/codepen-icon.webp";
import Terminal from "../img/tools/terminal.webp";
import WindLogo from "../img/tools/wind.webp";
import LinuxLogo from "../img/tools/linux.webp";

class Tools extends Component {
  componentDidMount() {
    $("#githublogo").click(function () {
      $(".github").show();
      $(".gitlab").hide();
      $(".codepen").hide();
      $(".term").hide();
      $(".windows").hide();
      $(".linux").hide();
    });

    $("#gitlablogo").click(function () {
      $(".github").hide();
      $(".gitlab").show();
      $(".codepen").hide();
      $(".term").hide();
      $(".windows").hide();
      $(".linux").hide();
    });

    $("#codepenlogo").click(function () {
      $(".github").hide();
      $(".gitlab").hide();
      $(".codepen").show();
      $(".term").hide();
      $(".windows").hide();
      $(".linux").hide();
    });

    $("#terminallogo").click(function () {
      $(".github").hide();
      $(".gitlab").hide();
      $(".codepen").hide();
      $(".term").show();
      $(".windows").hide();
      $(".linux").hide();
    });

    $("#windowslogo").click(function () {
      $(".github").hide();
      $(".gitlab").hide();
      $(".codepen").hide();
      $(".term").hide();
      $(".windows").show();
      $(".linux").hide();
    });

    $("#linuxlogo").click(function () {
      $(".github").hide();
      $(".gitlab").hide();
      $(".codepen").hide();
      $(".term").hide();
      $(".windows").hide();
      $(".linux").show();
    });
  }
  render() {
    return (
      <div>
        <div className="tools" id="tools">
          <div className="tools-wrapper">
            <div className="dev-tools">
              <h4>Dev tools</h4>
              <div className="tools-items">
                <img id="githublogo" src={GithubLogo} alt="github" />
                <img id="gitlablogo" src={GitlabLogo} alt="gitlab" />
                <img id="codepenlogo" src={CodepenLogo} alt="codepen" />
                <img id="terminallogo" src={Terminal} alt="terminal" />
              </div>
            </div>
            <div className="OS">
              <h4>OS</h4>
              <div className="tools-items">
                <img id="windowslogo" src={WindLogo} alt="windows" />
                <img id="linuxlogo" src={LinuxLogo} alt="linux" />
              </div>
            </div>
          </div>
          <div className="tool-body">
            <div className="tool-content github">
              <h1>Github</h1>
            </div>
            <div className="tool-content gitlab">
             <h1>Gitlab</h1>
            </div>
            <div className="tool-content codepen">
              <h1>Codepen</h1>
            </div>
            <div className="tool-content term">
              <h1>Terminal</h1>
            </div>
            <div className="tool-content windows">
              <h1>Windows</h1>
            </div>
            <div className="tool-content linux">
              <h1>Linux</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tools;
