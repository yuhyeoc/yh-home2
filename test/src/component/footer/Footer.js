import React, { Component, Fragment } from 'react';
import jquery from 'jquery';
window.$ = window.jquery = jquery;
/*eslint-disable*/

class Footer extends Component {
    render() {
        return(
            <footer>
                <div className='footerWrap'>
                    <h2>Copyright 2023</h2>
                    <div>
                        <a>
                        {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;