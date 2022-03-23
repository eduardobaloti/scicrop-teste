import React, { Component } from "react";
import Pet4 from "../imgs/pet4.png";

export default class About extends Component {
    render() {
        return (
            <div class="container">
                <p> Traga o cao</p>
                <div class="row">
                    <div class="col-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean justo velit, iaculis eget lacus eu, varius cursus
                        nisl. Fusce posuere est elit, sed consectetur justo
                        pretium nec. Quisque interdum nibh purus. In ac nibh sit
                    </div>

                    <img class="col-sm"
                        style={{ width:"200px" }}
                        src={Pet4}
                        alt="First slide"
                    />

                    <div class="col-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean justo velit, iaculis eget lacus eu, varius cursus
                        nisl. Fusce posuere est elit, sed consectetur justo
                        pretium nec. Quisque interdum nibh purus. In ac nibh sita
                    </div>
                </div>
            </div>
        );
    }
}
