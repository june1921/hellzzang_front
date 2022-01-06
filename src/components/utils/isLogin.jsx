const isLogin = () => !!window.sessionStorage.getItem('userid')

export default isLogin;
