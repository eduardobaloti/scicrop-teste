import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Pet1 from "../imgs/pet1.png";
import Pet2 from "../imgs/pet2.png";
import Pet3 from "../imgs/pet3.png";

export default class CarouselComp extends Component {
    render() {
        return (
            <div class="main">
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{ paddingLeft:'15px', paddingRight:'15px', paddingBottom:'30px'}}
                            className="d-block w-100"
                            src={Pet1}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            style={{ paddingLeft:'15px', paddingRight:'15px', paddingBottom:'30px'}}
                            className="d-block w-100"
                            src={Pet2}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ paddingLeft:'15px', paddingRight:'15px', paddingBottom:'30px'}}
                            className="d-block w-100"
                            src={Pet3}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
