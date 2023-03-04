import { Link } from "react-router-dom"
export default function Services() {
    return (
        <section className='services'>
            <div className='container'>
                <div className='sec-head'>
                    <h6 className='wow fadeIn' data-wow-delay='.5s'>
                        Best Features
                    </h6>
                    <h4 className='wow words chars splitting' data-splitting>
                        Services.
                    </h4>
                    <span className='tbg'>Services</span>
                </div>
                <div className='row'>
                    <div
                        className='item-box bg-img wow fadeInLeft'
                        data-wow-delay='.3s'
                        style={{ backgroundImage: "url(/img/1.jpg)" }}
                    >
                        <h4>
                            Best Of <br /> Our Features
                        </h4>
                        <Link to='/about/about-dark' className='btn-curve btn-bord btn-lit'>
                            <span>See All Services</span>
                        </Link>
                    </div>
                    <div className='item-box wow fadeInLeft' data-wow-delay='.5s'>
                        <span className='icon pe-7s-paint-bucket'></span>
                        <h6>Graphic Design</h6>
                        <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                    </div>
                    <div className='item-box wow fadeInLeft' data-wow-delay='.7s'>
                        <span className='icon pe-7s-phone'></span>
                        <h6>
                            Web &amp; <br /> Mobile Design
                        </h6>
                        <p>Tempore corrupti temporibus fuga earum asperiores fugit.</p>
                    </div>
                    <div className='item-box wow fadeInLeft' data-wow-delay='.9s'>
                        <span className='icon pe-7s-display1'></span>
                        <h6>
                            Social <br /> media Marketing
                        </h6>
                        <p>Tempore corrupti temporibus fuga earum asperiores fugit.</p>
                    </div>
                </div>
            </div>
            <div className='half-bg bottom'></div>
        </section>
    )
}
