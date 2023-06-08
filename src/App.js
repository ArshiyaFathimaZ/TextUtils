import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,Link
// } from "react-router-dom"


let name='Arsh';
// react will sanitize the external js
// let name='<b>Arsh</b>';
// Bable copmiles JSX down to React.createElement() calls

// Its a single page application we can reduce a lots of bandwidth load
// we can reduce multiple server calls


// we will not give node modules folder to any one as it is so, we will keep it in a git ignore file
// We can easily download it by using npm install using package manager
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  // const [Theme, setTheme] = useState("#063970");

  // const handleThemeChange = (newTheme) => {
  //   setTheme(newTheme);
  // };

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggleMode=()=>{
    // Routes (mode) {
    //   case 'light':
    //     setMode('dark');
        
    //     showAlert(" Dark mode enabled","success")
    //     Routes (Theme)
    //     {
    //       case 'blue':
    //         document.body.style.backgroundColor='#063970';
    //         break;
    //       case 'green':
    //         document.body.style.backgroundColor='#088a56';
    //         break;
    //       case 'red':
    //         document.body.style.backgroundColor='#8a0808';
    //         break;
    //       default:
    //       document.body.style.backgroundColor='#063970';
    //       break;
    //     }
    //     break;
    //   case 'dark':
    //     setMode('light');
    //     document.body.style.backgroundColor='white';
    //     showAlert(" Dark mode disabled","success")
    //     break;
    //   default:
    //     break;
    // }
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      document.body.style.color ='white'; 
      showAlert("Dark mode has been enabled","success")
      document.title='TextUtils - Dark Mode'
       // run each 2 second run
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing Mode'
      // },2000)
      // run each 1 second run
      // setInterval(()=>{
      //   document.title='Install TextUtils Now'
      // },1000)
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color ='black';
      showAlert("Light mode has been enabled","success")}
      document.title='TextUtils - Light Mode'
  }
  return (
    <>
   {/* <Navbar title='Text Utils' aboutText="About TextUtils"/> */}
   {/* <Navbar mode={mode} toggleMode={toggleMode} setTheme={handleThemeChange}/> */}
  {/* <Router> */}
  <Navbar mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3" >
   <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode}/>
   {/* <Routes>
      <Route exact path='/about' element={<About/>}/> */}
      {/* Exact - react will match exact path (otherwise if upper or lower case letter it will route to the path so) ,other wise partial match*/}
     {/* /user -->component 1 */}
     {/* /user/home -->component 2(will open component it self if exact not present) */}
      {/* <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode}/> }/> */}

      {/* </Routes> */}
  
   </div>
  {/* </Router> */}
 
   
      {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <img src="" alt="" />
      <div classNameName="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi minima, at, odio deleniti labore architecto nam natus, est excepturi error aliquam ab. Dolores ratione dignissimos quis inventore deserunt aliquam at?</p>
      </div> */}
    </>
 );
}

export default App;
