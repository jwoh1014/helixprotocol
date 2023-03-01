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
                <span className="color-font1">Solana. </span>
                <br />
                <span className="color-font">Blockchain & AI</span>
                <br /> <span className="color-font">Solai.</span>{" "}
              </h4>
              {/* <Split> */}
              <p className="wow txt words chars splitting" data-splitting>
                Through federated learning, local data is processed on client
                devices, so the central server does not collect data. This
                provides privacy benefits. Additionally, learning on client
                devices allows the model to learn from more diverse data
                compared to centralized learning, using distributed data.
                Federated learning can also effectively work on large datasets
                because learning is performed on local data.
              </p>
              {/* </Split> */}
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  Provides new utilities and layers for existing data.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  Solai is a next generation decentralized AI owned by the
                  community.
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
