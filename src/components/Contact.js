import React from "react";
import {BsFacebook} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";

function Contact() {
    return(
        <div>
            <form>
                <h1>Contact me</h1>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Subject"/>
                <input type="text" placeholder="Enter your message"/>
                <input type="button" value="Send"/>
            </form>
        </div>
    );
}

export default Contact;