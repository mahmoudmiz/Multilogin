import * as React from "react";
import * as styles from "./HeroBanner.module.scss";
import Shape1 from "../../images/shape-1.svg";
import Shape2 from "../../images/shape-2.svg";
import Image1 from "../../images/image 1.png";
import Image2 from "../../images/image 2.png";
import ChevronLeft from "../../images/chevron-left.svg";
import ChevronRight from "../../images/chevron-right.svg";

const HeroBanner = () => {
  return (
    <section className={styles.heroBanner}>
      <div className="container-xl g-0">
        <div className="row">
          <div className="col-lg-12 col-xl-3 col-sm-12 col-12">
            <h1>Claim the offer</h1>
            <p>
              To claim, simply fill in your email below and follow the
              instructions that appear.
            </p>
          </div>
          <div
            className={`col-lg-12 col-xl-2 col-sm-12 col-12 g-1 position-relative ${styles.heroBanner__middle}`}
          >
            <img
              className={styles.heroBanner__shape1}
              src={Shape1}
              alt="hero banner shape 1"
            ></img>
            <img
              className={styles.heroBanner__shape2}
              src={Shape2}
              alt="hero banner shape 2"
            ></img>
          </div>
          <div
            className={`col-lg-12 col-xl-7 col-sm-12 col-12 d-flex ${styles.heroBanner__last}`}
          >
            <img src={ChevronLeft} alt="left arrow" />
            <div className="col ms-4 me-4">
              <div
                className={`d-flex mb-4 border border-dark ${styles.heroBanner__card}`}
              >
                <img src={Image1} alt="person 1"></img>
                <div className="col p-3">
                  <p>
                    “Virtual machines just weren’t feasible. The process was
                    ‘hope and pray’ they don’t ban you. So I realized I needed
                    something to protect us.”
                  </p>

                  <p>
                    <strong>Adam, Owner, Rocket 31 </strong>
                  </p>
                </div>
              </div>
              <div
                className={`d-flex border border-dark ${styles.heroBanner__card}`}
              >
                <div className="col p-3">
                  <p>
                    “Virtual machines just weren’t feasible. The process was
                    ‘hope and pray’ they don’t ban you. So I realized I needed
                    something to protect us.”
                  </p>
                  <p>
                    <strong>Adam, Owner, Rocket 31 </strong>
                  </p>
                </div>
                <img src={Image2} alt="person 2"></img>
              </div>
            </div>

            <img src={ChevronRight} alt="right arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
