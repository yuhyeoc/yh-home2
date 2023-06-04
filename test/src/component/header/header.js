import React, { useState } from 'react';
import logo from '../../logo.svg';
import styles from '../../component/css/AppStyles.module.scss'
// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { BiAlignRight } from 'react-icons/bi';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Link } from 'react-router-dom';

function Header(props) {
  const [isOpen, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정
  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen); // on,off 개념 boolean
  };
  let navLis = [];
  for (let i = 0; i < props.headerMenu.length; i++) {
    let t = props.headerMenu[i];
    navLis.push(
      <li>
        <Link to={t.linkTo}>{t.title}</Link>
      </li>
    );
  }
  let subNavLis = [];
  for (let i = 0; i < props.headerMenu.length; i++) {
    let t = props.headerMenu[i];
    subNavLis.push(
      <li>
        <Link to={t.linkTo}>{t.subNav}</Link>
      </li>
    );
  }
  return (
    <div className={`${styles.headerCustom} header`}>
      <ul className="header-wrapper">
        <li
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Link to="/">
            <img className="App-logo" width="100px" src={logo}></img>
          </Link>
        </li>
        <ul className="navPc">{navLis}</ul>
        <li
          onClick={(e) => {
            e.preventDefault();
            toggleMenu();
          }}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </li>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
        </li>
      </ul>
      <ul className={isOpen ? 'show-menu sideMenu' : 'hide-menu sideMenu'}>
        {subNavLis}
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
            }}
          >
            닫기
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
