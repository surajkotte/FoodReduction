import '../css/Auth.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState,useContext} from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import auth from './auth';
import context from '../context/auth-context';
function Authentication() {
  const ctx = useContext(context);
  const [Flipcard,useFlip]= useState(false);
  const [AuthDetails, setAuthDetails] = useState({
    userName:'',
    Password:''
  })
  const [AuthDetailsSignup, setAuthDetailsSignup] = useState({
    userName:'',
    Password:''
  })
  const HandleClick=()=>{
    useFlip(!Flipcard)
  }
  const UpdateUnamePassword=(event)=>{
    const {name,value}=event.target
    setAuthDetails(prev=>{
      return{
        ...prev,
        [name]:value
      }
    });
  }
  const UpdateSignup=(event)=>{
    const {name,value}=event.target
    setAuthDetailsSignup(prev=>{
      return{
        ...prev,
        [name]:value
      }
    });
  }
  const LoginForm=()=>{ 

    signInWithEmailAndPassword(auth, AuthDetails.userName, AuthDetails.Password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
         console.log(user);
        // localStorage.setItem('isLoggedin',true);
        // localStorage.setItem('user',user.uid); 
        // localStorage.setItem('uname',AuthDetails.userName.split('@')[0]);
        console.log(AuthDetails.userName.split('@')[0]);
        ctx.login(user.uid,AuthDetails.userName.split('@')[0]);
        setAuthDetails({
          userName:'',
          Password:''
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthDetails({
          userName:'',
          Password:''
        })
      });
      // console.log("login successful");
  }
  const signupForm=()=>{
      createUserWithEmailAndPassword(auth, AuthDetailsSignup.userName, AuthDetailsSignup.Password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);
        setAuthDetailsSignup({
          userName:'',
          Password:''
        })
        // ctx.logout();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode+" "+errorMessage)
        setAuthDetailsSignup({
          userName:'',
          Password:''
        })
      });
  }
  return (

    <div className="main1" id="log">
      <div className={`container ${Flipcard && "h"}`}>
        <div className="login">
          <p className="pname">Login</p>
            <div className="username">
            <label><i className="fas fa-user" style={{marginTop:'13px',fontSize:'20px',marginRight:'-6px',color:'darkblue'}}> : </i> </label>
            <TextField
              style={{width: '20rem',fontSize:'10px',marginLeft:'10px'}}
              id="outlined-search"
              label="userName"
              type="search"
              onChange={UpdateUnamePassword}
              name="userName"
              value={AuthDetails.userName}
            />
            </div>
            <div className='password'>
            <label><i className="fas fa-lock" style={{marginTop:'13px',fontSize:'20px',marginRight:'-6px',color:'darkblue'}}> : </i></label>
            <TextField
              style={{width: '20rem',fontSize:'10px',marginLeft:'15px'}}
              id="outlined-search"
              label="Password"
              type="search"
              name="Password"
              onChange={UpdateUnamePassword}
              value={AuthDetails.Password}
            />
            </div>
            <Stack style={{alignItems:'center',marginTop:'20px'}}>
            <Button variant="contained" color="primary"style={{width:'100px',height:'30px'}} onClick={LoginForm}>
              Login
            </Button>
            </Stack>
            <Stack direction="column" spacing={1} style={{alignItems:'center',marginTop:'20px'}}>
                <Button className="b1"variant="outlined" color="secondary" style={{width:'350px',height:'35px'}}>
                <i className="fab fa-google"> login with google</i>
                </Button>
                <Button variant="outlined" color="success" style={{width:'350px',height:'35px'}}>
                <i className="fab fa-facebook"> login with facebook</i>
                </Button>
            </Stack>
            <Stack style={{alignItems:'center',marginTop:'20px'}}>
            <Button variant="contained" color="warning"style={{width:'100px',height:'30px'}} onClick={HandleClick}>
              signup
            </Button>
            </Stack>
        </div>
        <div className="signup">
        <p className="pname">signup</p>
            <div className="username">
            <label><i className="fas fa-user" style={{marginTop:'13px',fontSize:'20px',marginRight:'-6px',color:'darkblue'}}> : </i> </label>
            <TextField
              style={{width: '20rem',fontSize:'10px',marginLeft:'10px'}}
              id="outlined-search"
              label="userName"
              type="search"
              name="userName"
              onChange={UpdateSignup}
              value={AuthDetailsSignup.userName}
            />
            </div>
            <div className='password'>
            <label><i className="fas fa-lock" style={{marginTop:'13px',fontSize:'20px',marginRight:'-6px',color:'darkblue'}}> : </i></label>
            <TextField
              style={{width: '20rem',fontSize:'10px',marginLeft:'15px'}}
              id="outlined-search"
              label="Password"
              type="search"
              name="Password"
              onChange={UpdateSignup}
              value={AuthDetailsSignup.Password}
            />
            </div>
            <Stack style={{alignItems:'center',marginTop:'20px'}}>
            <Button variant="contained" color="primary"style={{width:'100px',height:'30px'}} onClick={signupForm}>
              signup
            </Button>
            </Stack>
            <Stack direction="column" spacing={1} style={{alignItems:'center',marginTop:'20px'}}>
                <Button className="b1"variant="outlined" color="secondary" style={{width:'350px',height:'35px'}}>
                <i className="fab fa-google"> signup with google</i>
                </Button>
                <Button variant="outlined" color="success" style={{width:'350px',height:'35px'}}>
                <i className="fab fa-facebook"> signup with facebook</i>
                </Button>
            </Stack>
            <Stack style={{alignItems:'center',marginTop:'20px'}}>
            <Button variant="contained" color="warning"style={{width:'100px',height:'30px'}} onClick={HandleClick}>
              login
            </Button>
            </Stack>
        </div>
      </div>
    </div>

  );
}

export default Authentication;
