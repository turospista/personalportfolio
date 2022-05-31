import React from "react";

function Navbar() {
    const pages = ["Home", "Contact"]
    const navlinks = pages.map(page => {
        return(
            <a href={"/" + page} >
                {page}
            </a>
        )
    })
    return(
        <nav>{navlinks}</nav>
    );
}

export default Navbar;