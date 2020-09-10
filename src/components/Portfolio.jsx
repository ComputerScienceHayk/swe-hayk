import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import work1 from "../img/works/work1.webp";
import work2 from "../img/works/work2.webp";
import temp1 from "../img/works/temp1.webp";
import temp2 from "../img/works/temp2.webp";

class Portfolio extends Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <div className="portfolio__container">
          <div className="portfolio-item">
            <div className="portfolio-item__wrapper">
              <div className="portfolio-item__demo">
                <img src={work1} alt="work" />
                <span className="quick-view">
                  <span className="quick-demo">
                    <a href="https://nanekharatyan.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-eye"></i>
                    </a>
                    <a
                      href="https://github.com/ComputerScienceHayk/simple-web-designer-portfolio"
                      target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github" alt="github"></i>
                    </a>
                  </span>
                </span>
              </div>
              <div className="portfolio-item__title">
                <h2>Web designer portfolio-website</h2>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item__wrapper">
              <div className="portfolio-item__demo">
                <img src={work2} alt="work" />
                <span className="quick-view">
                  <span className="quick-demo">
                    <a href="https://github.com/ComputerScienceHayk/sales_list" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </span>
                </span>
              </div>
              <div className="portfolio-item__title">
                <h2>"Sales List" android/IOS app, coming soon</h2>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item__wrapper">
              <div className="portfolio-item__demo">
                <img src={temp1} alt="temp" />
                <span className="quick-view">
                  <span className="quick-demo">
                    <a
                      href="https://computersciencehayk.github.io/travel-simple-template.github.io/"
                      target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-eye"></i>
                    </a>
                    <a
                      href="https://github.com/ComputerScienceHayk/travel-simple-template.github.io/tree/master"
                      target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </span>
                </span>
              </div>
              <div className="portfolio-item__title">
                <h2>"Travel" template</h2>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-item__wrapper">
              <div className="portfolio-item__demo">
                <img src={temp2} alt="temp"/>
                <span className="quick-view">
                  <span className="quick-demo">
                    <a
                      href="https://computersciencehayk.github.io/company-simle-template.github.io/"
                      target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-eye"></i>
                    </a>
                    <a
                      href="https://github.com/ComputerScienceHayk/company-simle-template.github.io"
                      target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </span>
                </span>
              </div>
              <div className="portfolio-item__title">
                <h2>"Company" template</h2>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;
