/*eslint-disable*/
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Component, useState, Fragment, useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// 스타일 테마 컴포넌트
import theme from './component/styles/Tagged';
import './App.css';
import './component/css/AppStyles.module.scss';
import './component/section/nav.css';

// 컴포넌트
import Header from './component/header/header';
import Footer from './component/footer/Footer';
import Home from './Home';
import SecTest from './component/section/secTest';
import ListExpen from './component/section/listExpen';
import EmailStateForm from './component/section/emailForm';
import TabMenu from './component/section/sectionTab';
import SimpleSlider from './Myslide';
import RefEx from './component/section/RefEx';
import TestContext from './component/section/useContext';
import PhoneText from './component/section/importContext';
import KeyTxt from './component/section/exportContext';
import TimerEfc from './component/section/useEffectCleanup';
import NotFound from './NotFound';
import ScssComponent from './component/styles/ScssComponent';
import CSSModule from './component/styles/CSSModule';
import StyledComponent from './component/styles/StyledComponent';
import StyledObj from './component/section/StyledComponents';
import MapRoof from './component/section/MapRoof';
import Day from './component/section/Day';
import WeatherApi from './component/section/WeatherApi';
import DummyList from './component/section/DummyList';
import Select from './component/section/select';
import Profile from './component/section/profile';
import mainSection2 from './component/section/mainSection2';

export const App = () => {
  // 헤더 props
  const headerMenu = [
    { id: 1, title: 'Profile', linkTo: '/profile', subNav: '프로필' },
    { id: 2, title: 'JSX Study', linkTo: '/props', subNav: '리액트 함수' },
    { id: 3, title: 'React Study', linkTo: '/usestate', subNav: 'JS study' },
    { id: 4, title: 'UI/UX', linkTo: '/slider', subNav: 'HTML/CSS' },
  ];

  return (
    <BrowserRouter>
      <Fragment>
        <ThemeProvider theme={theme}>
          <Header headerMenu={headerMenu} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/react_test" element={<Home />} />
            <Route path="/jsx" element={<TabMenu />} />
            <Route path="/props" element={<SecTest />} />
            <Route path="/usestate" element={<ListExpen />} />
            <Route path="/useref" element={<RefEx />} />
            <Route path="/useeffect" element={<EmailStateForm />} />
            <Route path="/testcontext" element={<TestContext />} />
            <Route
              path="/impcontext"
              element={
                <KeyTxt>
                  <PhoneText />
                </KeyTxt>
              }
            />
            <Route path="/slider" element={<SimpleSlider />} />
            <Route path="/cleanup" element={<TimerEfc />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/Scss" element={<ScssComponent />} />
            <Route path="/CSSModule" element={<CSSModule />} />
            <Route path="/styled" element={<StyledComponent />} />
            <Route path="/styledObj" element={<StyledObj />} />
            <Route path="/MapRoof" element={<MapRoof />} />
            <Route path="/day" element={<Day />} />
            <Route path="/weather" element={<WeatherApi />} />
            <Route path="/dummylist" element={<DummyList />} />
            <Route path="/select" element={<Select />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Fragment>
    </BrowserRouter>
  );
};
export default App;
