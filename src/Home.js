import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt="" 
                />

                <div className="home__row">
                    <Product
                        id="12321341" 
                        title="Cal Newport 2 Books Collection Set (Deep Work: Rules for Focused Success in a Distracted World, So Good They Can't Ignore You)"
                        price={15.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51iYnKcbwiL._SY498_BO1,204,203,200_.jpg"
                        rating={5}   
                    />
                    <Product
                        id="45665523"
                        title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
                        price={99.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/91JA5-hAnoL._AC_SL1500_.jpg"
                        rating={4}
                    />    
                </div>

                <div className="home__row">
                    <Product
                        id="68124659"
                        title="Interstellar (4K UHD + Blu-ray + Digital)"
                        price={14.96}
                        image="https://m.media-amazon.com/images/I/811f30s5dQL._AC_UY218_.jpg"
                        rating={5}
                    />   
                    <Product
                        id="65184257"
                        title="Lara Fabian Live - DVD"
                        price={59.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41Ypl9rkfgL._SY445_.jpg"
                        rating={5}
                    />   
                    <Product
                        id="57265685"
                        title="Orion 9005 AstroView 120ST Equatorial Refractor Telescope"
                        price={599.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71qX6T6OAZL._AC_SL1500_.jpg"
                        rating={4}
                    />   
                </div>
                
                <div className="home__row">
                    <Product
                        id="34658957"
                        title="Wood Parallettes Set for Gymnastics or Push up Bars. Pink or Black in 18 inch to 24 inch Length. "
                        price={87.95}
                        image="https://images-na.ssl-images-amazon.com/images/I/71NkcvEZyPL._AC_SL1500_.jpg"
                        rating={4}
                    />   
                    
                </div>
            </div>
        </div>
    )
}

export default Home
