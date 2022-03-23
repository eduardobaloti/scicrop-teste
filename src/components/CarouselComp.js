import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Pet1 from "../imgs/pet1.png";
import Pet2 from "../imgs/pet2.png";
import Pet3 from "../imgs/pet3.png";

export default class CarouselComp extends Component {
    render() {
        return (
            <div >
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{ padding: "45px" }}
                            className="d-block w-100"
                            src={Pet1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            style={{ padding: "45px" }}
                            className="d-block w-100"
                            src={Pet2}
                            alt="First slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ padding: "45px" }}
                            className="d-block w-100"
                            src={Pet3}
                            alt="First slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
