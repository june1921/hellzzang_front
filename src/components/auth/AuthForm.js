import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from "../../lib/styles/palette"
import Button from "../common/Button";
import axios from 'axios';

// 회원가입 or 로그인 폼 보여줌

const AuthFormBlock = styled.div`
h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
}`;

// 스타일링된 input
const StyledInput = styled.input`
font-size: 1rem;
border: none;
border-bottom: 1px solid ${palette.gray[5]};
padding-bottom: 0.5rem;
outline: none;
width: 100%;
&:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
}
&+&{
    margin-top: 1rem;
}`;

// 폼 하단에 로그인/회원가입 링크를 보여줌
const Footer = styled.div`
margin-top: 2rem;
text-align: right;
a {
    color: ${palette.gray[6]}0;
    text-decoration: underline;
    &:hover {
        color: ${palette.gray[9]};
    }
}`;

const ButtonWidthMarginTop = styled(Button)`
margin-top: 1rem
`;

const textMap = {
    login: '로그인',
    register: '회원가입',
};

const AuthForm = ({ type }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={(e)=>{ //회원가입 > 회원정보 DB에 저장하는 곳
              e.preventDefault();
              if(type ==='register'){
                const formData = new FormData();
                const name = e.target['0'].value;
                const nickname = e.target['1'].value;
                const userid = e.target['2'].value;
                const userpw = e.target['3'].value;

                formData.append("name", name);
                formData.append("nickname", nickname);
                formData.append("userid", userid);
                formData.append("userpw", userpw);

                console.log(name, nickname, userid, userpw);
                axios({
                  url: 'http://localhost:8080/user/signup',
                  method: 'post',
                  data: formData,
                }).then((res) => {
                  window.location = '/login';
                });
              }else if(type ==='login'){
                const formData = new FormData();
                const userid = e.target['0'].value;
                const userpw = e.target['1'].value;
                formData.append("userid", userid);
                formData.append("userpw", userpw);
                console.log(userid, userpw);
                axios({
                  url: 'http://localhost:8080/user/login',
                  method: 'post',
                  data: formData,
                }).then((res) => {
                  if (res.data.code === 200) {
                    alert('로그인 되었습니다.');
                    //JWT와 같은 토큰값을 저장
                    sessionStorage.setItem("token", 1234);
                    window.location = '/';
                  } else {
                    alert('가입 정보를 확인해 주세요');
                  }
                });
              }
              
            }}>
                {type === 'register' && (
                    <><StyledInput
                        autoComplete="userName"
                        name="name"
                        placeholder="이름"
                        type="text" />
                      <StyledInput
                        autoComplete="userNickname"
                        name="nickname"
                        placeholder="닉네임"
                        type="text" />
                    </>
                )}

                <StyledInput
                    autoComplete="userId"
                    name="userid"
                    placeholder="아이디" />
                <StyledInput
                    autoComplete="new-password"
                    name="userpw"
                    placeholder="비밀번호"
                    type="password" />

                {type === 'register' && (
                    <><StyledInput
                        autoComplete="new-password"
                        name="password"
                        placeholder="비밀번호 확인"
                        type="password" />
                        <StyledInput
                            autoComplete="userEmail"
                            name="userEmail"
                            placeholder="이메일 주소"
                            type="email" />
                        <StyledInput
                            autoComplete="userBirth"
                            name="userBirth"
                            placeholder="생년월일"
                            type="date" /></>

                )}

                <ButtonWidthMarginTop cyan fullWidth>
                    {text}
                </ButtonWidthMarginTop>
            </form>
 
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                ) : (
                    <Link to="/login">로그인</Link>
                )}
            </Footer>

        </AuthFormBlock>
    );
};

export default AuthForm;