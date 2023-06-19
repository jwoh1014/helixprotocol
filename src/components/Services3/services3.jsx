import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";

const Services3 = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Organization
              </h6>
              <h3 className="wow color-font">How is Helix structured?</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>Structure</h5>
              <p>
                Helix enables the easily accessible experience of launchpad
                through Helix Aggregator and Helix Gateway, sustainable
                exchanges between long-term value providers and their consumers
                through customizable deposit contracts, and yield redirection.
              </p>
              {/* <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>Helix Aggregator</h5>
              <p>
                Helix Aggregator includes three projects, which are thoroughly
                organized by the Helix community. Through community consent, the
                three projects with the highest consent rate among the candidate
                group will be incorporated into the fund.
              </p>
              {/* <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>Helix Gateway</h5>
              <p>
                Helix Gateway, users can deposit XRPL native assets and spend
                accrued yields on platform services and content offerings. Upon
                subscription expiry, users can withdraw their principal in full.
                Platforms can easily integrate the "Deposit with Helix" widget
                in 10 lines of code.
              </p>
              {/* <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-unlocked"></i>
              </span>
              <h5>User First</h5>
              <p>
                Helix is designed with everything focused on User Experience
                Optimization. Reimagining the future of recurring payments and
                providing convenient platform integrations for the mainstream
                adoption of crypto, Helix aims to become a must-have feature of
                the DeFi future.
              </p>
              {/* <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;
