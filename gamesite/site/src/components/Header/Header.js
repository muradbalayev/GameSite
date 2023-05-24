import React from 'react'
import logo from "../../images/logo.png"
import headerlogo from "../../images/profile-header.jpg"
function Header() {
  return (
   <>
   <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    <a href="!#" className="logo">
                        <img src={logo} alt=""></img>
                    </a>
                    <div className="search-input">
                      <form id="search" action="#">
                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" />
                        <i className="fa fa-search"></i>
                      </form>
                    </div>
                    <ul className="nav">
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="/browse">Browse</a></li>
                        <li><a href="/details">Details</a></li>
                        <li><a href="/streams">Streams</a></li>
                        <li><a href="/profile">Profile <img src={headerlogo} alt=""></img></a></li>
                    </ul>   
                    <a href='!#' className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
  </header>
   </>
  )
}

export default Header