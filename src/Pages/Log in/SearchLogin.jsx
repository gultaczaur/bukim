import React, { useState } from 'react'
import "./SearchLogin.scss"
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { useFormik } from 'formik'
import { FormRegisterSchema } from '../../assets/schema/FormRegisterSchema'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const SearchLogin = () => {

  const sendpost = (form,action) => {

  }

  const {values,handleChange,handleSubmit,errors} = useFormik({
    initialValues:{
      Username:"",
      Email:"",
      Logemail:"",
      Password:"",
      Logpassword:"",
      number:"",
      term:false,
    },
    validationSchema: FormRegisterSchema,
    onSubmit: sendpost
  });
  

  let [logbtn,setlogbtn] = useState(false)
  let [register,setregister] = useState(true)
  let [eye,seteye] = useState(true)
  let [inpFokus,setinpFocus] = useState({
   inp1: false,
   inp2: false,
   inp3: false
  });
  let [Hoverinp,setHoverinp] = useState("Mobil nömrə")
  let [Logbox,setLogbox] = useState(true)
  let [discclas,setdiscla] = useState(true)




  let loginbutton= () => { 
     if (logbtn){
      setlogbtn(!logbtn)
      setregister(!register)
      setLogbox(!Logbox)
      setTimeout(() => {
        setdiscla(!discclas)
      }, 300);
     } else {
      null
     }
  }

  let registerbutton = () => {
     if(register) {
      setregister(!register)
      setlogbtn(!logbtn)
      setLogbox(!Logbox)
      setTimeout(() => {
        setdiscla(!discclas)
      }, 300);
     } else{
      null
     }
  }

  

  const inpfocus = (inp) => {
    setinpFocus((prevState) => ({
      ...prevState,
      [inp]: true,  
    }));
  } 

  const inpblur = (inp) => {
    setinpFocus((prevState) => ({
      ...prevState,
      [inp]: false, 
    }));
    
  }

  let eyefunc = () => {
    seteye(!eye)
  }

  let Enterinpfunc = () => {
    setHoverinp("+994")
  }

  let leaveinpfunc = () => {
    setHoverinp('Mobil nömrə')
  }



  

  return (
    <>
    <Header/>
    <section className='Searc-login'>
        <h3>Hesabım</h3>  
        <div className="Logintext">
        <span onClick={loginbutton} className={logbtn ? "span" : 'span spancolor'}>Log in</span>
        <span onClick={registerbutton} className={register ? 'span' : 'span spancolor'}>Register</span>
        </div>  
        <div className="logboxs">


         <div style={{"display":discclas ?  "block" :"none"}} className={Logbox ? "loginbox a" : "loginbox a endlogbox"}>
          <form onSubmit={handleSubmit} className='form' action="#">
          <h4>Login</h4>
            <input name='Logemail' onChange={handleChange} value={values.Logemail} className='inp' onFocus={() => inpfocus("inp1")} onBlur={() => inpblur("inp1")} type="text"  placeholder={inpFokus.inp1 ? "" : 'Email address'}/>
            {errors.Logemail && <span className='errortext'>{errors.Logemail}</span>}
            <div className="pasinp">
              <input name='Logpassword' onChange={handleChange} value={values.Logpassword} className='inp' onFocus={() => inpfocus("inp2")} onBlur={() => inpblur("inp2")} type={eye ? "password" : "text"} placeholder={inpFokus.inp2 ? "" : 'Password'}/>
              <FaEye onClick={eyefunc}  className={eye ? "eye" : "eye slasheye"}/>
              <FaEyeSlash onClick={eyefunc} className={eye ? "eye slasheye" : "eye"}/>
            </div>
            {errors.Logpassword && <span className='errortext'>{errors.Logpassword}</span>}
          <p>İsdifadeçi kimi daxil ol:</p>
          <div className="loginbox-img">
            <img src="https://texnomart.az/wp-content/plugins/yith-woocommerce-social-login-premium/assets/images/google.png" alt="" />
          </div>
          <div className="checkform">
            <div className="checkinp">
            <input className='checkbox' type="checkbox" />
            <span>Remember me</span>
            </div>
            <a href="">Lost your password?</a>
          </div>
          <button>Log in</button>
          </form>
         </div>


         <div style={{"display":discclas ?  "none" :"block"}} className={Logbox ? "registerbox a endregbox" : "registerbox a"}>
         <form onSubmit={handleSubmit} className='form' action="#">
          <h4>Register</h4>
            <input name='Username' onChange={handleChange} value={values.Username} className='inp' onFocus={() => inpfocus("inp1")} onBlur={() => inpblur("inp1")} type="text" placeholder={inpFokus.inp1 ? "" : 'Username'}/>
            {errors.Username && <span className='errortext'>{errors.Username}</span>}
            <input name='Email' onChange={handleChange} value={values.Email} className='inp' onFocus={() => inpfocus("inp2")} onBlur={() => inpblur("inp2")} type="text"  placeholder={inpFokus.inp2 ? "" : 'Email address'}/>
            {errors.Email && <span className='errortext'>{errors.Email}</span>}
            <div className="pasinp">
              <input name='Password' onChange={handleChange} value={values.Password} className='inp' onFocus={() => inpfocus("inp3")} onBlur={() => inpblur("inp3")} type={eye ? "password" : "text"} placeholder={inpFokus.inp3 ? "" : 'Password'}/>
              <FaEye onClick={eyefunc}  className={eye ? "eye" : "eye slasheye"}/>
              <FaEyeSlash onClick={eyefunc} className={eye ? "eye slasheye" : "eye"}/>
            </div>
            {errors.Password && <span className='errortext'>{errors.Password}</span>}
            <input name='number' onChange={handleChange} value={values.number} onMouseEnter={Enterinpfunc} onMouseLeave={leaveinpfunc} className='inp inpend' type="text" placeholder={Hoverinp} />
            {errors.number && <span className='errortext'>{errors.number}</span>}
          <p>İsdifadeçi kimi daxil ol:</p>
          <div className="loginbox-img">
            <img src="https://texnomart.az/wp-content/plugins/yith-woocommerce-social-login-premium/assets/images/google.png" alt="" />
          </div>
            <div className="checkform">
            <div className="checkinp">
            <input name='term' onChange={handleChange} value={values.term} className='checkbox'  type="checkbox" />
            <span>"" ilə tanış oldum. <span>*</span></span>
            {values.term ? null : <span className='errortext'>{errors.term}</span>}
            
            </div>
            </div>
          <button>Register</button>
          </form>
          </div>  


        </div>         

    </section>
    <Footer/>
    </>
  )
}

export default SearchLogin
