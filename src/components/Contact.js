import React, { Component } from "react";
import Map from "../imgs/map.png";

export default class Contact extends Component {
    render() {
        return (
            <div style={{ paddingTop: "40px" }}>
                <h2 style={{ paddingBottom: "10px" }}> Nossos contatos!</h2>
                <p>
                    Address: Keas 69 Str. 15234, Chalandri Athens, Greece
                    +30-2106019311 (landline) +30-6977664062 (mobile phone)
                </p>

                <img
                    className="rounded mx-auto d-block"
                    src={Map}
                    style={{paddingBottom:'30px', paddingTop:'30px'}}
                />
            </div>
        );
    }
}
