import React, { Component } from "react";
import Slider from "react-slick";
import "../Media/slick-theme.css";
import "../Media/slick.css";
import puppy from "../Media/images/img1.png"
import puppy2 from "../Media/images/img2.jpeg"
import puppy3 from "../Media/images/img3.jpeg"

export default class AppendDots extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            width: 100,
            appendDots: dots => (
                <div
                    style={{
                        backgroundColor: "#ddd",
                        borderRadius: "10px",
                        padding: "10px",
                    }}
                >
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            ),
            customPaging: i => (
                <div
                    style={{
                        width: "50px",
                        height: '50px',
                        fontSize: '25pt',
                        color: "black",
                        border: "1px black solid",
                        borderRadius: '10px',
                    }}
                >
                    {i + 1}
                </div>
            )
        };
        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div>
                        <img style={{width: '1100px'}} alt={'image'} src={puppy} />
                    </div>
                    <div>
                        <img style={{width: '1100px'}} alt={'image'} src={puppy2} />
                    </div>
                    <div>
                        <img style={{width: '1100px'}} alt={'image'} src={puppy3} />
                    </div>
                </Slider>
                <div style={{ textAlign: "center", position: 'absolute' }}>
                    <button className="button" onClick={this.previous}>
                        이전
                    </button>
                    <button className="button" onClick={this.next}>
                        다음
                    </button>
                </div>
            </div>
        );
    }
}