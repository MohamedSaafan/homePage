import React from "react";
import Styles from "./PostDetails.module.css";
import sidePost1 from "../../images/side-posts-1.jpg";
import sidePost2 from "../../images/side-posts-2.jpg";
import faker from "faker";

const Details = (props) => {
  return (
    <div className={`${Styles.details} container`}>
      {" "}
      <div className={`${Styles.posts}`}>
        <div className={`${Styles.container} container`}>
          <div className={`${Styles.mainPosts}`}>
            <div className={`${Styles.sidePostsHeader}`}>
              <input type="text" placeholder="Search Keywords" />
              <span className={`${Styles.vertical}`}></span>
              <span>
                <i className="fa fa-search fa-xl"></i>
              </span>
            </div>
            <div className={`${Styles.avatar}`}>
              <img src={faker.image.avatar()} alt="avatar" />
              <div className={`${Styles.content}`}>
                <h3>ALEX BROCKENBROW</h3>
                <p>2-Sep-2020</p>
              </div>
            </div>
            <div>
              <h3>BitCoin's and Correlation With Gold</h3>
              <br />
              <video src="slddsojdf" controls />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem
                ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                maiores. Vitae ab quos expedita animi inventore, voluptatem,
                commodi omnis est harum quisquam dignissimos veritatis,
                obcaecati dolorum unde at temporibus natus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                maiores. Vitae ab quos expedita animi inventore, voluptatem,
                commodi omnis est harum quisquam dignissimos veritatis,
                obcaecati dolorum unde at temporibus natus.Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quidem, maiores. Vitae ab
                quos expedita animi inventore, voluptatem, commodi omnis est
                harum quisquam dignissimos veritatis, obcaecati dolorum unde at
                temporibus natus.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quidem, maiores. Vitae ab quos expedita animi
                inventore, voluptatem, commodi omnis est harum quisquam
                dignissimos veritatis, obcaecati dolorum unde at temporibus
                natus.
              </p>
            </div>
          </div>
          <div className={`${Styles.sidePosts}`}>
            <h3>Recent Posts</h3>
            <div className={`${Styles.sidePostsItem}`}>
              <div className={`${Styles.sideImg}`}>
                <img src={sidePost1} alt="Posts" />
              </div>
              <div className={`${Styles.sidePostsContent}`}>
                <h2>Bit Coin Correlation With Gold</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className={`${Styles.info}`}>
                  <span>Alex Brockenbrow</span>
                  <span className={`${Styles.vertical}`}></span>
                  <span>9-Sep-2020</span>
                  <br />
                </div>
                <a href="/">read more</a>
              </div>
            </div>
            <div className={`${Styles.sidePostsItem}`}>
              <div className={`${Styles.sideImg}`}>
                <img src={sidePost2} alt="Posts" />
              </div>
              <div className={`${Styles.sidePostsContent}`}>
                <h2>Bit Coin Correlation With Gold</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className={`${Styles.info}`}>
                  <span>Alex Brockenbrow</span>
                  <span className={`${Styles.vertical}`}></span>
                  <span>9-Sep-2020</span>
                  <br />
                </div>
                <a href="/">read more</a>
              </div>
            </div>
            <div className={`${Styles.sidePostsItem}`}>
              <div className={`${Styles.sideImg}`}>
                <img src={sidePost1} alt="Posts" />
              </div>
              <div className={`${Styles.sidePostsContent}`}>
                <h2>Bit Coin Correlation With Gold</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className={`${Styles.info}`}>
                  <span>Alex Brockenbrow</span>
                  <span className={`${Styles.vertical}`}></span>
                  <span>9-Sep-2020</span>
                  <br />
                </div>
                <a href="/">read more</a>
              </div>
            </div>
            <div className={`${Styles.sidePostsItem}`}>
              <div className={`${Styles.sideImg}`}>
                <img src={sidePost2} alt="Posts" />
              </div>
              <div className={`${Styles.sidePostsContent}`}>
                <h2>Bit Coin Correlation With Gold</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className={`${Styles.info}`}>
                  <span>Alex Brockenbrow</span>
                  <span className={`${Styles.vertical}`}></span>
                  <span>9-Sep-2020</span>
                  <br />
                </div>
                <a href="/">read more</a>
              </div>
            </div>
            <div className={`${Styles.subscribe}`}>
              <div className={`${Styles.container} container`}>
                <p>Subscribe</p>
                <h2>AltsTogether</h2>
                <input type="email" placeholder="Type Your Email" />
                <div className={`${Styles.centered}`}>
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
            <div className={`${Styles.category}`}>
              <h6>Share this Post</h6>
              <div className={`${Styles.social}`}>
                <i className="fa fa-facebook fa-xl"></i>
                <i className="fa fa-youtube fa-xl"></i>
                <i className="fa fa-instagram fa-xl"></i>
                <i className="fa fa-twitter fa-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
