import React,{useState} from "react";
// import { useCookies } from "react-cookie";
const context = React.createContext({
  isLoggedin: false,
  user: "",
  userid: "",
  login: (token,uname) => {},
  logout: () => {},
});
export const AuthContextProvider = (props) => {
  const [details,setDetails]=useState({
    uname:'',
    isLoggedin:false,
    userid:''
  });

  const loginHandler=(token,uname)=>{
    setDetails({
      uname,
      isLoggedin:true,
      userid:token
    });
    
  }
  const logOutHandler=()=>{
  }
  const ContextValues={
    isLoggedin:details.isLoggedin,
    user:details.uname,
    userid:details.userid,
    login:loginHandler,
    logout:logOutHandler
  }
  // const [cookies, setCookie] = useCookies();
  // console.log(cookies);
  // const logOutHandler = () => {
  //   cookies.removeCookie('LogInOrOut');
  // };
  // const contextValues = {
  //   isLoggedin: localStorage.getItem('isLoggedin'),
  //   user: localStorage.getItem('uname'),
  //   userid: localStorage.getItem('user'),
  //   logout: logOutHandler,
  // };
  return (
    <context.Provider value={ContextValues}>{props.children}</context.Provider>
  );
};
export default context;
