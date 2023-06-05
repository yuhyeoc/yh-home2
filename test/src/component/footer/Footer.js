import React, { Component, Fragment } from 'react';
import jquery from 'jquery';
window.$ = window.jquery = jquery;
/*eslint-disable*/

class Footer extends Component {
    






    render() {
        return(
            <footer>
                <div className='footerWrap'>
                    <h2>Copyright 2023 All Right Reserved Web Publishing yh</h2>
                    <span>Contact : <a href ='mailto:yhyhyh8@gmail.com'>yhyhyh8@gmail.com</a></span>
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