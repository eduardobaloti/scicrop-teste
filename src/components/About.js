import React, { Component } from "react";
import Pet4 from "../imgs/pet4.png";
import Pet5 from "../imgs/pet5.png";

export default class About extends Component {
    render() {
        return (
            <div class="container">
                <p style={{fontWeight: 'bold', fontSize:'1.5em'}}> Traga seu pet hoje mesmo! </p>

                <div class="row">
                    <div class="col-12 col-xl-4" style={{ padding: "30px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean justo velit, iaculis eget lacus eu, varius cursus
                        nisl. Fusce posuere est elit, sed consectetur justo
                        pretium nec. Quisque interdum nibh purus. In ac nibh sit
                    </div>

                    <img
                        class="col-12 col-xl-4"
                        style={{ padding: "30px" }}
                        src={Pet4}
                    />

                    <img
                        class="col-12 col-xl-4"
                        style={{ padding: "30px" }}
                        src={Pet5}
                    />
                </div>

                <div class="row">
                    <img
                        class="col-12 col-xl-4"
                        style={{ padding: "30px" }}
                        src={Pet4}
                    />

                    <img
                        class="col-12 col-xl-4" 
                        style={{ padding: "30px" }}
                        src={Pet5}
                    />
                    <div class="col-12 col-xl-4" style={{ padding: "30px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean justo velit, iaculis eget lacus eu, varius cursus
                        nisl. Fusce posuere est elit, sed consectetur justo
                        pretium nec. Quisque interdum nibh purus. In ac nibh sit
                    </div>
                </div>
            </div>
        );
    }
}
