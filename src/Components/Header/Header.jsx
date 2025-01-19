import React, { useEffect, useState } from 'react'
import { FaManatSign } from 'react-icons/fa6'
import "./Header.scss"
import { IoMdPhonePortrait } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'
import { LiaBalanceScaleSolid, LiaCameraRetroSolid } from 'react-icons/lia'
import { CiHeart } from 'react-icons/ci'
import { GrShop } from 'react-icons/gr'
import { BsPerson, BsSmartwatch } from 'react-icons/bs'
import { GiSmallFire, GiWashingMachine } from 'react-icons/gi'
import { FcSmartphoneTablet } from 'react-icons/fc'
import { FiMonitor } from 'react-icons/fi'
import { MdComputer } from 'react-icons/md'
import { PiBicycle, PiHairDryer } from 'react-icons/pi'
import { IoGameControllerOutline } from 'react-icons/io5'
import { LuTickets } from 'react-icons/lu'
import NavItem from '../NavItem/NavItem'
import { useLocation, useNavigate } from 'react-router'


const Header = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [line, setline] = useState(true)
    const [hover, sethover] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const [cardCount, setCardCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);
    const barss = () => {
        setline(!line)
        sethover(!hover)
    }
    useEffect(() => {
        const handleResize = () => {
          setShowDiv(location.pathname === '/' && window.innerWidth < 990);
        };
      
        handleResize(); 
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [location]);


       
       useEffect(() => {
        const storedCard = JSON.parse(localStorage.getItem("card")) || [];
        setCardCount(storedCard.length); 
    }, []);  

   
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("favorites")) || [];
        setWishlistCount(storedWishlist.length); 
    }, []);  

    const updateCounts = () => {
        const storedCard = JSON.parse(localStorage.getItem("card")) || [];
        setCardCount(storedCard.length);
        const storedWishlist = JSON.parse(localStorage.getItem("favorites")) || [];
        setWishlistCount(storedWishlist.length);
        
    }

    
    useEffect(() => {
        window.addEventListener("storage", updateCounts);
        return () => {
            window.removeEventListener("storage", updateCounts);
        };
    }, []);


    return (
        <header>
            <div className="HeaderOne">
                <div className="headerOne-boxs">
                    <div className="headerleft">
                        <li><span  onClick={()=>navigate("/aboutus")}>Haqqımızda</span></li>
                        <li><span  onClick={()=>navigate("/market")}>Mağazalar</span></li>
                        <li><span  onClick={()=>navigate("/question")}>Tez-tez verilən suallar</span></li>
                        <li><span  onClick={()=>navigate("/corporate")}>Korporativ satişlar</span></li>
                        <li><span  onClick={()=>navigate("/service")} >Servislər</span></li>
                    </div>
                    <div className="headerright">
                        <span><FaManatSign className='header-icone-one' /> Kredit ödənişi</span>
                        <span><IoMdPhonePortrait className='header-icone-two' /> *3344</span>
                    </div>
                </div>
            </div>
            <div className='HeaderTwo'>
                <div className="headerTwo-boxs">
                    <div className="logo" onClick={()=>navigate("/")} style={{"cursor":"pointer"}}>
                        <img src="https://texnomart.az/wp-content/uploads/2021/10/logo.svg" alt="" />
                    </div>
                    <div className="headerbtns">
                        <div className={hover ? "barboxs" : "barboxs barboxs1"}>
                            <div onClick={barss} className="baricon">
                                <div className={line ? 'line line-end' : `line line-start`}   style={{ display: showDiv ? 'block' : 'none' }}></div>
                            </div>
                            <div className={hover ? "ulbox" : "ulbox ulbox1"}>
                                <NavItem />
                            </div>
                        </div>
                        <div className="formbox">
                            <form action="#">
                                <input type="text" placeholder='Search product ...' />
                                <button onClick={()=>navigate("/search")}><FaSearch  /></button>
                            </form>
                        </div>
                        <div className="btn">
                            <a href="/" title='outlet'>OUTLET</a>
                        </div>
                    </div>
                    <div className="icones">
                        <div className="icone">
                            <LiaBalanceScaleSolid />
                            <span>
                                0
                            </span>
                        </div>
                        <div className="icone" onClick={()=>navigate("/wishlist")}>
                            <CiHeart />
                            <span>
                            {wishlistCount}
                            </span>
                        </div>
                        <div className="icone" onClick={()=>navigate("/sebet")}>
                            <GrShop className='shop' />
                            <span>
                            {cardCount}
                            </span>
                        </div>
                        <div className="icone" onClick={()=>navigate("/login")}>
                            <BsPerson />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
