import React from 'react'
function Main(props) {

    const {games} = props

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-content">

                            <div className="main-banner">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="header-text">
                                            <h6>Welcome To Cyborg</h6>
                                            <h4><em>Browse</em> Our Popular Games Here</h4>
                                            <div className="main-button">
                                                <a href="browse.html">Browse Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="most-popular">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="heading-section">
                                            <h4><em>Most Popular</em> Right Now</h4>
                                        </div>
                                        <div className="row">
                                            {games.map((game) => (
                                                <div key={game.id} className="col-lg-3 col-sm-6">
                                                    <div className="item">
                                                        <img src={game.img} alt=""></img>
                                                        <h4>{game.title}<br></br><span>{game.subtitle}</span></h4>
                                                        <ul>
                                                            <li><i className="fa fa-star"></i>{game.star}</li>
                                                            <li><i className="fa fa-download"></i> {game.download}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}

                                        </div> 
                                    </div>
                                </div>
                            </div>

                            <div className="gaming-library">
                                <div className="col-lg-12">
                                    <div className="heading-section">
                                        <h4><em>Your Gaming</em> Library</h4>
                                    </div>
                                 {games.map((game) => (
                                       <div key={game.id} className="item">
                                       <ul>
                                           <li><img src={game.img} alt="" className="templatemo-item"></img></li>
                                           <li><h4>{game.title}</h4><span>{game.subtitle}</span></li>
                                           <li><h4>Date Added</h4><span>24/08/2036</span></li>
                                           <li><h4>Hours Played</h4><span>634 H 22 Mins</span></li>
                                           <li><h4>Currently</h4><span>Downloaded</span></li>
                                           <li><div className="main-border-button border-no-active"><a href="!#">Donwloaded</a></div></li>
                                       </ul>
                                   </div>
                                 ))}
                                   
                                </div>
                                <div className="col-lg-12">
                                    <div className="main-button">
                                        <a href="profile.html">View Your Library</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main