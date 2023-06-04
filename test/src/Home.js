import styled, { ThemeProvider } from 'styled-components';
import { useState, props } from 'react';
import theme from './component/styles/Tagged';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import SectionBegin from './component/section/section';
import './App.css';

export default function Home(props) {
  const Body = styled.body`
    height: 100vh;
    ${({ theme }) => theme.commonStyle.homeStyle};
  `;

  const HomeH2 = styled.h2`
    font-size: ${({ theme }) => theme.fontSizeObj.title};
    margin-bottom: 96px;
  `;

  const Container = styled.ul`
    width: 100vw;
    display: block;
    height: auto;
    overflow: hidden;
    ${({ theme }) => theme.commonStyle.homeStyle};
  `;
  return (
    <ThemeProvider theme={theme}>
    <div className="homeNav">
      <HomeH2>React 포트폴리오</HomeH2>
      <Container>
      <li>
          <Link to={'/profile'}> 프로필 </Link>
        </li>
        <li>
          <Link to={'/weather'}> OPEN API 활용 날씨정보 </Link>
        </li>
        <li>
          <Link to={'/jsx'}>JSX - setState() 탭메뉴 퍼블리싱 Test</Link>
        </li>
        <li>
          <Link to={'/props'}>props() Function Class 컴포넌트 </Link>
        </li>
        <li>
          <Link to={'/usestate'}>useState() 사용 배열추가</Link>
        </li>
        <li>
          <Link to={'/useref'}>useref() 활용</Link>
        </li>
        <li>
          <Link to={'/useeffect'}> useEffect() 이메일 형식검사</Link>
        </li>
        <li>
          <Link to={'/cleanup'}> useEffect() 예제</Link>
        </li>
        <li>
          <Link to={'/testcontext'}>useContext() 사용한 style 적용 예제</Link>
        </li>
        <li>
          <Link to={'/impcontext'}>useContext() 활용</Link>
        </li>
        <li>
          <Link to={'/slider'}>React Slider 퍼블리싱 Test</Link>
        </li>
        <li>
          <Link to={'/styledobj'}> Styled-components </Link>
        </li>
        <li>
          <Link to={'/api'}> Axios 알아보기 </Link>
        </li>
        <li>
          <Link to={'/dummylist'}> dummy data 실습 </Link>
        </li>
      </Container>
    </div>
    </ThemeProvider>
  );
}

export function BackBtn() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button type="button" id="backPage" onClick={goBack}>
        뒤로가기
      </button>
    </div>
  );
}
