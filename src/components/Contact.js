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
            <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100010851407178"><BsFacebook /></a></li>
                <li><a href="https://www.linkedin.com/in/bence-kolozsi-t%C3%B3th-4940b2138/"><BsLinkedin /></a></li>
            </ul>
        </div>
    );
}

export default Contact;