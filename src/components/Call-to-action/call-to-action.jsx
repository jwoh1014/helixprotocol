import React from 'react'
import Split from '../Split'
import Link from 'next/link'

const CallToAction = ({img}) => {
    return (
      <section
        className="call-action section-padding sub-bg bg-img"
        style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="content sm-mb30">
                <Split>
                  <h6 className="wow words chars splitting" data-splitting>
          JOIN US
                  </h6>
                  <h2 className="wow words chars splitting" data-splitting>
                    become our <br /> <b className="back-color">next member</b>
                    .
                  </h2>
                </Split>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 valign">
              {/* <Link
                href={`/contact/contact-dark`}
              > */}
                <a
                 href='https://twitter.com/solai_protocol'
                 target='_blank'
                 rel='noreferrer'
                  className="butn bord curve wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span>Go to Twitter</span>
                </a>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>
    );
}

export default CallToAction