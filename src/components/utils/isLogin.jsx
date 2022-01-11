const isLogin = () => !!window.sessionStorage.getItem('userId')

export default isLogin;