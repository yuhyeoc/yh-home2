import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/Tagged';
import { BackBtn } from '../../Home';
;

const ProfileCss = styled.div`
    width: 100%;
    color: #333;
`;
const ProfileCssH2 = styled.h2`
    margin-bottom: 36px;
    font-size: ${({ theme }) => theme.fontSizeObj.title};
`;
const ProfileCssH3 = styled.p`
font-size: ${({ theme }) => theme.fontSizeObj.subtitle};
margin-bottom: 18px;
`;
const ProfileCssP = styled.h3`
    font-size: ${({ theme }) => theme.fontSizeObj.paragraph};\
    line-height: 2;
`;

export default function Profile() {
  return (
    <ThemeProvider theme={theme}>
          <ProfileCss>
              <ProfileCssH2>퍼블리셔 유혁님의 프로필 입니다.</ProfileCssH2>
              <ProfileCssH3>보유스킬</ProfileCssH3>
              <div>
                  <ProfileCssP>
                   REACT 기반 퍼블리싱
                  </ProfileCssP>
                  <ProfileCssP>
                   HTML/CSS 
                  </ProfileCssP>
                  <ProfileCssP>
                   JavaScript/JQuery
                  </ProfileCssP>
              </div>
              <BackBtn />
          </ProfileCss>
      </ThemeProvider>
  )
}
