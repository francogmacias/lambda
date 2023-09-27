import {
    faCreditCard,
    faGamepad,
    faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HomeCarousel from "../../components/carousel/Carousel";
import "./Home.scss";

const Home = () => {
    return (
        <div className="hero-container">
            <div className="hero-bg">
                <div className="hero-tittle-container py-3">
                    <h1 className=" hero-tittle">LAMBDA</h1>
                </div>
            </div>
            <div className="main-section">
                <div className="carousel w-50 mx-auto">
                    <HomeCarousel />
                </div>
                <div className="snippets">
                    <div className="product-snippet">
                        <FontAwesomeIcon
                            className="snippet-icon"
                            icon={faGamepad}
                            style={{ color: "#000000" }}
                            size="10x"
                        />

                        <p className="snippet-caption">
                            We have the best products on the market.
                        </p>
                    </div>
                    <div className="shipping-snippet">
                        <FontAwesomeIcon
                            className="snippet-icon"
                            icon={faTruck}
                            style={{ color: "#000000" }}
                            size="10x"
                        />
                        <p>
                            We do fast delivery, without cost under $1000
                            purchase.
                        </p>
                    </div>
                    <div className="payment-snippet">
                        <FontAwesomeIcon
                            className="snippet-icon"
                            icon={faCreditCard}
                            style={{ color: "#000000" }}
                            size="10x"
                        />
                        <p>We provide a wide variety of payment methods.</p>
                    </div>
                </div>
                <div className="block-container show-me-section">test</div>
            </div>
        </div>
    );
};

export default Home;
