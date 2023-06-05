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
import mainTop from './assets/imgs/seoul1.jpg';
import chung from './assets/imgs/chung.jpg';
import kyung from './assets/imgs/kyung.jpg';
import lTower from './assets/imgs/l-tower.jpg';
import namsan from './assets/imgs/namsan.jpg';
import river from './assets/imgs/river.jpg';
import olympic from './assets/imgs/olympic.jpg';


export default function Home(props) {
  const Body = styled.body`
    height: 100vh;
    ${({ theme }) => theme.commonStyle.homeStyle};
  `;

  const HomeH2 = styled.h2`
    font-size: ${({ theme }) => theme.fontSizeObj.title};
    margin-bottom: 2.5000vw;
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
      <div className='topSlider'>
        <img src={mainTop}></img>
        <div>
          <HomeH2>
            <p>Seoul</p> 
          </HomeH2>    
          <span>동행·매력 특별시 서울민선 8기가 지향하는 서울의 목표(Vision)를 나타낸 슬로건으로 약자와 ‘동행’하는 상생도시, ‘매력’있는 글로벌 선도도시를 만들겠다는 의지를 담았습니다.</span>
        </div>  
      </div>
      <div className='FlexWrap'>
      <HomeH2>관광명소</HomeH2>
        <ul className='ProjectFlex'>
          <li>
            <img src={chung}></img>
            <span></span>
          </li>
          <li>
          <img src={kyung}></img>
          </li>
          <li>
          <img src={namsan}></img>
          </li>
          <li>
          <img src={lTower}></img>
          </li>
          <li>
          <img src={river}></img>
          </li>
          <li>
          <img src={olympic}></img>
          </li>
          <li>
          <img src={chung}></img>
          </li>
        </ul>
      </div>
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
