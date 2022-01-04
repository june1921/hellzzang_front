import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from "../../lib/styles/palette"
import Button from "../common/Button";

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
            <form>
                {type === 'register' && (
                    <><StyledInput
                        autoComplete="userName"
                        name="userName"
                        placeholder="이름"
                        type="text" />
                        <StyledInput
                            autoComplete="userNickname"
                            name="userNickname"
                            placeholder="닉네임"
                            type="text" />
                    </>
                )}


                <StyledInput
                    autoComplete="userId"
                    name="userId"
                    placeholder="아이디" />
                <StyledInput
                    autoComplete="new-password"
                    name="password"
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