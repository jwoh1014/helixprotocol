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
              <h3 className="wow color-font">How is Solai structured?</h3>
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
                Anybody can propose any task that one wants to train. If the
                proposal is passed, training starts. Using the Federated
                Learning scheme, every participant independently locally trains
                AI models on their device. AI models are uploaded in
                decentralized storage and are recorded on the blockchain in an
                NFT format.
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
              <h5>Operations</h5>
              <p>
                Participants are able to evaluate other uploaded models with
                their data and record the evaluation score on the chain. After
                the number of evaluations meets a certain threshold, the local
                model is a candidate for being aggregated into a global model.
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
              <h5>Transparency</h5>
              <p>
                Due to Blockchain's structure, records of compensation are
                released. In addition, participants will only participate in the
                study if they can be verified and deemed valid. Therefore, it is
                good to keep and manage the license of the temper-proof model
                and provide incentives by managing it in token form.
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
              <h5>Users</h5>
              <p>
                Through Federated Learning and Differential Privacy,
                participants are provided with appropriate
                compensation/ownership as much as they contributed to the
                model's learning. In addition, participation in learning is
                possible without infringement of privacy in Solai.
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
