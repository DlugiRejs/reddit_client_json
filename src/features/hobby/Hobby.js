import React from 'react';
import PropTypes from 'prop-types';

export function Hobby(props) {


    function chooseSvgColor(button) {
        switch (button) {
            case "sports":
            default:
                if (props.hobby === "sports") {
                    return "#FFFFFF";
                } else {
                    return "#9C18E7";
                }
            case "tennis":
            case "golf":
            case "Equestrian":
                if (props.hobby === button) {
                    return "#FFFFFF";
                } else if (props.hobby === "sports") {
                    return "#7B718E";
                } else {
                    return "#9C18E7";
                }
        }
    }

    function chooseButtonColor(button) {
        switch (button) {
            case "sports":
            default:
                if (props.hobby === "sports") {
                    return { color: "#FFFFFF", backgroundColor: "#7B718E", borderColor: "#B9B4C3" };
                } else if (props.hobby === "golf") {
                    return { color: "#FFA508", backgroundColor: "#FFFFFF", borderColor: "#9C18E7" };
                } else {
                    return { color: "#2BBD88", backgroundColor: "#FFFFFF", borderColor: "#9C18E7" };
                }
            case "tennis":
            case "golf":
            case "Equestrian":
                if (props.hobby === button) {
                    return { color: "#FFFFFF", backgroundColor: "#9C18E7", borderColor: "#FFFFFF" };
                } else if ((props.hobby === "sports")) {
                    return { color: "#7B718E", backgroundColor: "#FFFFFF", borderColor: "#7B718E" };
                } else if (props.hobby === "golf") {
                    return { color: "#FFA508", backgroundColor: "#FFFFFF", borderColor: "#9C18E7" };
                } else {
                    return { color: "#2BBD88", backgroundColor: "#FFFFFF", borderColor: "#9C18E7" };
                }
        }
    }


    return (
        <section id="buttons" className="buttons">
            <button type="button"
                className={props.hobby === "sports" ? "thisButton" : "otherButton"}
                style={chooseButtonColor('sports')}
                onClick={() => props.onClick('sports')}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="25" height="25" fill={chooseSvgColor('sports')}>
                    <path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z" ></path>
                </svg>
                <span>home</span>
            </button>
            <button type="button"
                className={props.hobby === "tennis" ? "thisButton" : "otherButton"}
                style={chooseButtonColor('tennis')}
                onClick={() => props.onClick('tennis')}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25" fill={chooseSvgColor('tennis')}>
                    <path d="M21.923,2.067C18.758-1.1,13.077-.569,9.258,3.248A10.6,10.6,0,0,0,6.02,10.9a13.291,13.291,0,0,0,.157,1.433c.149,1.571.129,3.938-.884,4.951l-5,5A1,1,0,1,0,1.707,23.7l5-5c1.025-1.023,3.433-1.033,5-.879a13.448,13.448,0,0,0,1.62.163,10.667,10.667,0,0,0,7.412-3.249C24.56,10.915,25.089,5.234,21.923,2.067Zm-.517,8.154L19.924,8.739,21.967,6.7A7.444,7.444,0,0,1,21.406,10.221Zm-.1-5.689L18.51,7.325,16.584,5.4l2.753-2.753a4.838,4.838,0,0,1,1.172.835A4.831,4.831,0,0,1,21.3,4.532ZM13.037,15.98l-.3-.051,2.241-2.241,1.568,1.568A7.685,7.685,0,0,1,13.037,15.98ZM8.01,10.951a7.7,7.7,0,0,1,.724-3.5l1.487,1.486L8.039,11.117C8.029,11.058,8.019,11,8.01,10.951Zm2.532,4.342a4.718,4.718,0,0,1-1.9-1.952l2.992-2.993,1.926,1.926Zm2.507-6.359L15.17,6.813,17.1,8.739,14.975,10.86Zm4.079-6.907L15.17,3.985l-1.4-1.4a7.7,7.7,0,0,1,2.891-.6C16.823,1.988,16.973,2.016,17.128,2.027ZM11.949,3.592,13.756,5.4,11.635,7.52,9.793,5.679a9.381,9.381,0,0,1,2.156-2.087Zm-3.9,12.346c0-.014.005-.029.008-.043l.017.019.018.017Zm10.26-1.74-1.923-1.924,2.121-2.121L20.4,12.044a9.879,9.879,0,0,1-1.073,1.275A10.035,10.035,0,0,1,18.312,14.2Z"></path>
                </svg>
                <span>tennis</span>
            </button>
            <button type="button"
                className={props.hobby === "golf" ? "thisButton" : "otherButton"}
                style={chooseButtonColor('golf')}
                onClick={() => props.onClick('golf')}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25" fill={chooseSvgColor('golf')}>
                    <path d="M12.014,24H5.119A5.125,5.125,0,0,1,0,18.881v-4.8a5.121,5.121,0,0,1,6.174-5.01L20.01,11.98,22.018.018,23.99.349,21.4,15.8a9.335,9.335,0,0,1-.667,2.511A9.518,9.518,0,0,1,12.014,24Zm-6.9-13.043A3.119,3.119,0,0,0,2,14.077v4.8A3.122,3.122,0,0,0,5.119,22h6.9A7.518,7.518,0,0,0,18.9,17.508a7.515,7.515,0,0,0,.521-2.01l.259-1.544L5.762,11.024A3.169,3.169,0,0,0,5.114,10.957Z"></path>
                    <rect x="9.231" y="9.775" width="2" height="10.758" transform="translate(-6.706 22.043) rotate(-78.106)"></rect>
                    <rect x="6.489" y="15.175" width="2" height="7.135" transform="translate(-12.401 22.168) rotate(-77.992)"></rect>
                </svg>
                <span>golf</span>
            </button>
            <button type="button"
                className={props.hobby === "Equestrian" ? "thisButton" : "otherButton"}
                style={chooseButtonColor('Equestrian')}
                onClick={() => props.onClick('Equestrian')}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="25" height="25" fill={chooseSvgColor('Equestrian')}>
                    <path d="M20,18.184V8.5c0-.085-.108-8.5-9.438-8.5H9.781L9.593.758C8.9,3.546,7.76,4.481,5.91,5.232A3.014,3.014,0,0,0,4,8.025V10h6.221a5.911,5.911,0,0,1-4.086,3.753A2.978,2.978,0,0,0,4,16.623v1.561A3,3,0,0,0,2,21v3H22V21A3,3,0,0,0,20,18.184ZM6.709,15.669a7.91,7.91,0,0,0,5.777-6.505L12.681,8H6a1.027,1.027,0,0,1,.661-.914,7.213,7.213,0,0,0,4.652-5.063C17.877,2.436,18,8.247,18,8.5V18H6V16.623A.99.99,0,0,1,6.709,15.669ZM20,22H4V21a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"></path>
                </svg>
                <span>horses</span>
            </button>
        </section>
    );
}

Hobby.propTypes = {
    hobby: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}