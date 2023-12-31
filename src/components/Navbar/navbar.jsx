/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import appData from '../../data/app.json';
import { handleDropdown, handleMobileDropdown } from '../../common/navbar';

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === 'themeL' ? 'light' : ''
      }`}
    >
      <div className='container'>
        <Link href='/'>
          <a className='color-font'>
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" style = {{width : '50%'}}  />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
        
          </a>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          onClick={handleMobileDropdown}
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='icon-bar'>
            <i className='fas fa-bars'></i>
          </span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link href={`/homepage/home1-dark`}>
                  <a className="dropdown-item">Main Home</a>
                </Link>
                <Link href={`/homepage/home2-dark`}>
                  <a className="dropdown-item">Creative Agency</a>
                </Link>
                <Link href={`/homepage/home5-dark`}>
                  <a className="dropdown-item">Digital Agency</a>
                </Link>
                <Link href={`/homepage/home4-dark`}>
                  <a className="dropdown-item">Business One Page</a>
                </Link>
                <Link href={`/homepage/home3-dark`}>
                  <a className="dropdown-item">Corporate Business</a>
                </Link>
                <Link href={`/homepage/home6-dark`}>
                  <a className="dropdown-item">Modern Agency</a>
                </Link>
                <Link href={`/homepage/home7-dark`}>
                  <a className="dropdown-item">Freelancer</a>
                </Link>
                <Link href={`/homepage/home8-dark`}>
                  <a className="dropdown-item">Architecture</a>
                </Link>
              </div>
            </li> */}
            {/* <li className='nav-item'>
              <Link href='https://solai-game.vercel.app/' target="_blank">
              
              <a
                style={{ fontSize: '15px' }}
                className='nav-link'
                // href='https://undefined-351.gitbook.io/plowave-dao/'
                target='_blank'
                rel='noreferrer'
              >
                Demo
              </a>
              </Link>
            </li> */}
            <li className='nav-item'>
              {/* <Link href='https://ipdao.gitbook.io/the-luna-dao/thelunadao' target="_blank"> */}
              
              <a
                style={{ fontSize: '15px' }}
                className='nav-link'
                href='https://undefined-351.gitbook.io/helix-protocol/'
                target='_blank'
                rel='noreferrer'
              >
                Whitepaper
              </a>
              {/* </Link> */}
            </li>
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </span>
              <div className="dropdown-menu">
                <Link href={`/showcase/showcase-dark`}>
                  <a className="dropdown-item">Showcase Parallax</a>
                </Link>
                <Link href={`/showcase4/showcase4-dark`}>
                  <a className="dropdown-item">Showcase Carousel</a>
                </Link>
                <Link href={`/showcase3/showcase3-dark`}>
                  <a className="dropdown-item">Showcase Circle</a>
                </Link>
                <Link href={`/works/works-dark`}>
                  <a className="dropdown-item">Portfolio Masonry</a>
                </Link>
                <Link href={`/works2/works2-dark`}>
                  <a className="dropdown-item">Portfolio Filtering</a>
                </Link>
                <Link href={`/works3/works3-dark`}>
                  <a className="dropdown-item">Portfolio Gallery</a>
                </Link>
              </div>
            </li> */}
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </span>
              <div className="dropdown-menu">
                <Link href={`/blog/blog-dark`}>
                  <a className="dropdown-item">Blog Standerd</a>
                </Link>
                <Link href={`/blog-list/blog-list-dark`}>
                  <a className="dropdown-item">Blog List</a>
                </Link>
                <Link href={`/blog-grid/blog-grid-dark`}>
                  <a className="dropdown-item">Blog Grid</a>
                </Link>
                <Link href={`/blog-details/blog-details-dark`}>
                  <a className="dropdown-item">Blog Details</a>
                </Link>
              </div>
            </li> */}
            {/* <li className='nav-item'>
              <a
                style={{ fontSize: '15px' }}
                className='nav-link'
                href='https://docs.google.com/forms/d/e/1FAIpQLSf8KY3gB2wpukMbvIpasWSF6Owwi6xyrUAMeXiHA21MM9Dl6w/viewform?usp=sf_link'
                target='_blank'
                rel='noreferrer'
              >
                Get Whitelisted
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
