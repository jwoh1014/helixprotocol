/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea2 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4>
                {" "}
                The First
                <br />
                DEFI Hub on <span className="color-font1">XRPL</span>,
                <br /> <span className="color-font">Helix</span>{" "}
              </h4>
              {/* <Split> */}
              <p className="wow txt words chars splitting" data-splitting>
                As a promising future standard of programmable payments, Helix
                introduces a new paradigm of incentive alignment between payers
                and payees, consumers and builders, patrons and artists,
                investors and entrepreneurs, borrowers and lenders, and many
                more groups and relationships.
              </p>
              {/* </Split> */}
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                We offer a Helix Aggregator comprising multiple XRPL projects. It is a fund for several projects in a similar sector, and for investors.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                We will provide a Helix Gateway that can support a specific project only with a lending apy. 
                </li>
              </ul>
              {/* <Link href={`/about/about-dark`}>
                <a
                  className='butn bord curve mt-40 wow fadeInUp'
                  data-wow-delay='.8s'
                >
                  <span>Discover</span>
                </a>
              </Link> */}

              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
