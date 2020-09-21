import React from "react";
import Styles from "./BlogIndexPosts.module.css";
import post1 from "../../images/posts-1.jpg";
import post2 from "../../images/posts-2.jpg";
import sidePost1 from "../../images/side-posts-1.jpg";
import sidePost2 from "../../images/side-posts-2.jpg";

const Posts = (props) => {
  return (
    <div className={`${Styles.posts}`}>
      <div className={`${Styles.container} container`}>
        <div className={`${Styles.mainPosts}`}>
          <div className={`${Styles.postsHeader}`}>
            <h5>Latest Posts</h5>
            <button>
              Filter <i className="fa fa-arrow-bottom fa-lg"></i>
            </button>
          </div>
          <div className={`${Styles.postsItems}`}>
            <div className={`${Styles.postsItem}`}>
              <div className={`${Styles.postsItemContainer}`}>
                <img src={post1} alt="" />
                <div className={`${Styles.container} container`}>
                  <div className={` container `}>
                    <h3>Bitcoin and Cryptocrruncy</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex iste maxime minima culpa eos atque reiciendis, sunt
                      aliquid provident id itaque? Cupiditate placeat id
                      tenetur.
                    </p>
                    <div className={`${Styles.info}`}>
                      <span className={`${Styles.horizontal}`}></span>
                      <h3>Alex Brockenbrow</h3>
                      <span className={`${Styles.vertical}`}></span>
                      <span>September 9.2020</span>
                      <br />
                    </div>
                    <button>read more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${Styles.postsItem}`}>
              <div className={`${Styles.postsItemContainer}`}>
                <img src={post2} alt="" />
                <div className={`${Styles.container} container`}>
                  <div className={`container`}>
                    <h3>Bitcoin and Cryptocrruncy</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex iste maxime minima culpa eos atque reiciendis, sunt
                      aliquid provident id itaque? Cupiditate placeat id
                      tenetur.
                    </p>
                    <div className={`${Styles.info}`}>
                      <span className={`${Styles.horizontal}`}></span>
                      <h3>Alex Brockenbrow</h3>
                      <span className={`${Styles.vertical}`}></span>
                      <span>September 9.2020</span>
                      <br />
                    </div>
                    <button>read more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${Styles.postsItem}`}>
              <div className={`${Styles.postsItemContainer}`}>
                <img src={post1} alt="" />
                <div className={`${Styles.container} container`}>
                  <div className={`container`}>
                    <h3>Bitcoin and Cryptocrruncy</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex iste maxime minima culpa eos atque reiciendis, sunt
                      aliquid provident id itaque? Cupiditate placeat id
                      tenetur.
                    </p>
                    <div className={`${Styles.info}`}>
                      <span className={`${Styles.horizontal}`}></span>
                      <h3>Alex Brockenbrow</h3>
                      <span className={`${Styles.vertical}`}></span>
                      <span>September 9.2020</span>
                      <br />
                    </div>
                    <button>read more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${Styles.postsItem}`}>
              <div className={`${Styles.postsItemContainer}`}>
                <img src={post2} alt="" />
                <div className={`${Styles.container} container`}>
                  <div className={`container`}>
                    <h3>Bitcoin and Cryptocrruncy</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex iste maxime minima culpa eos atque reiciendis, sunt
                      aliquid provident id itaque? Cupiditate placeat id
                      tenetur.
                    </p>
                    <div className={`${Styles.info}`}>
                      <span className={`${Styles.horizontal}`}></span>
                      <h3>Alex Brockenbrow</h3>
                      <span className={`${Styles.vertical}`}></span>
                      <span>September 9.2020</span>
                      <br />
                    </div>
                    <button>read more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${Styles.postsItem}`}>
              <div className={`${Styles.postsItemContainer}`}>
                <img src={post1} alt="" />
                <div className={`${Styles.container} container`}>
                  <div className={`container`}>
                    <h3>Bitcoin and Cryptocrruncy</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex iste maxime minima culpa eos atque reiciendis, sunt
                      aliquid provident id itaque? Cupiditate placeat id
                      tenetur.
                    </p>
                    <div className={`${Styles.info}`}>
                      <span className={`${Styles.horizontal}`}></span>
                      <h3>Alex Brockenbrow</h3>
                      <span className={`${Styles.vertical}`}></span>
                      <span>September 9.2020</span>
                      <br />
                    </div>
                    <button>read more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${Styles.postsItem}`}>
              <div className={`${Styles.postsItemContainer}`}>
                <img src={post2} alt="" />
                <div className={`${Styles.container} container`}>
                  <div className={`container`}>
                    <h3>Bitcoin and Cryptocrruncy</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex iste maxime minima culpa eos atque reiciendis, sunt
                      aliquid provident id itaque? Cupiditate placeat id
                      tenetur.
                    </p>
                    <div className={`${Styles.info}`}>
                      <span className={`${Styles.horizontal}`}></span>
                      <h3>Alex Brockenbrow</h3>
                      <span className={`${Styles.vertical}`}></span>
                      <span>September 9.2020</span>
                      <br />
                    </div>
                    <button>read more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${Styles.loadmore}`}>
            <hr />
            <button>LOAD MORE</button>
            <hr />
          </div>
        </div>
        <div className={`${Styles.sidePosts}`}>
          <div className={`${Styles.sidePostsHeader}`}>
            <input type="text" placeholder="Search Keywords" />
            <span className={`${Styles.vertical}`}></span>
            <span>
              <i className="fa fa-search fa-xl"></i>
            </span>
          </div>
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
                <span>September 9.2020</span>
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
                <span>September 9.2020</span>
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
                <span>September 9.2020</span>
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
                <span>September 9.2020</span>
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
            <div className={`${Styles.social}`}>
              <i className="fa fa-facebook fa-xl"></i>
              <i className="fa fa-youtube fa-xl"></i>
              <i className="fa fa-instagram fa-xl"></i>
              <i className="fa fa-twitter fa-xl"></i>
            </div>
            <h6>Categories</h6>
            <ul className="list-unstyled">
              <li>Bitcoing</li>
              <li>AltCoin</li>
              <li>DeFi</li>
              <li>BlockChain</li>
              <li>Technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Posts;
