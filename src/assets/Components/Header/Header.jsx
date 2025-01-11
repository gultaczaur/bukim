import React, { useState } from 'react'
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

const Header = () => {
    const [line,setline] = useState(true)
    const [hover,sethover] = useState(false)
const barss = () => {
    setline(!line)
    sethover(!hover)
}

  return (
    <header>
        <div className="HeaderOne">
            <div className="headerOne-boxs">
                <div className="headerleft">
                        <li><span>Kampaniyalar</span></li>
                        <li><span>Mağazalar</span></li>
                        <li><span>Tez-tez verilən suallar</span></li>
                        <li><span>Korporativ satişlar</span></li>
                        <li><span>Servislər</span></li>
                </div>
                <div className="headerright">
                    <span><FaManatSign className='header-icone-one'/> Kredit ödənişi</span>
                    <span><IoMdPhonePortrait className='header-icone-two'/> *3344</span>
                </div>
            </div>
        </div>
        <div className='HeaderTwo'>
            <div className="headerTwo-boxs">
            <div className="logo">
                <img src="https://texnomart.az/wp-content/uploads/2021/10/logo.svg" alt="" />
            </div>
            <div className="headerbtns">
                <div className={hover ? "barboxs" : "barboxs barboxs1"}>
                <div onClick={barss} className="baricon">
                <div className={line ? 'line line-end' : `line line-start`}></div> 
                </div>
                <div className={hover ? "ulbox" : "ulbox ulbox1"}>
                    <ul>
                        <li><a href=""><GiSmallFire className='fire icon'/> Bahar müjdəsi endirimləri</a></li>
                        <li className='lihover-one'><a href=""><FcSmartphoneTablet className='icon'/> Mobil cihazlar və planşetlər</a>
                        <div className="hoverdiv-One">
                            <ul>
                            <li><a href="">Smartfonlar</a></li>
                            <li><a href="">Duymeli telfonlar</a></li>
                            <li><a href="">Plansetler</a></li>
                            <li><a href="">Aksesualar</a></li>
                            <li><a href="">Electron kitablar</a></li>
                            <li><a href="">Ev / ofis telefonlari</a></li>
                            </ul>
                        </div>
                        </li>
                        <li className='lihover-one'><a href=""><GiWashingMachine className='icon'/> Məişət texnikası</a>
                        <div className="hoverdiv-One">
                            <ul>
                            <li><a href="">Böyük məisət texnikası</a></li>
                            <li><a href="">Bisirici texnika</a></li>
                            <li><a href="">İqlim texnikasi</a></li>
                            <li><a href="">Mətbəxcavadanliği</a></li>
                            <li><a href="">Ev əşyaları</a></li>
                            <li><a href="">Qab-qacaq</a></li>
                            </ul>
                        </div>
                        </li>
                        <li className='lihover-one'><a href=""><FiMonitor className='icon'/> TV, audio va aksesuarlar</a>
                        <div className="hoverdiv-One">
                            <ul>
                            <li><a href="">Televizorlar</a></li>
                            <li><a href="">Audio</a></li>
                            <li><a href="">Aksesuarlar</a></li>
                            </ul>
                        </div>
                        </li>
                        <li className='lihover-one'><a href=""><MdComputer className='icon'/> Komputer texnikasi</a>
                        <div className="hoverdiv-One">
                            <ul>
                            <li><a href="">Noutbuklar</a></li>
                            <li><a href="">Printerler</a></li>
                            <li><a href="">Sebeke avadanliqlari</a></li>
                            <li><a href="">Yaddas qurgulari</a></li>
                            <li><a href="">Aksesuarlar</a></li>
                            </ul>
                        </div>
                        </li>
                        <li className='lihover-one'><a href=""><PiHairDryer className='icon'/> Gözəllik Və saglamlıq</a>
                        <div className="hoverdiv-One">
                            <ul>
                            <li><a href="">Uzqirxanlar</a></li>
                            <li><a href="">Sacqirxanlar</a></li>
                            <li><a href="">Hava fenleri</a></li>
                            <li><a href="">Utu fenler</a></li>
                            <li><a href="">Daraq fenler</a></li>
                            </ul>
                        </div>
                        </li>
                        <li className='lihover-one'><a href=""><PiBicycle className='icon'/> Nəqliyyat</a>
                        <div className="hoverdiv-One">
                            <ul>
                            <li><a href="">Velosipedler</a></li>
                            <li><a href="">Elektrik skuterler</a></li>
                            <li><a href="">Hoverboardlar</a></li>
                            <li><a href="">Skuterler</a></li>
                            </ul>
                        </div>
                        </li>
                        <li className='lihover-one'><a href=""><BsSmartwatch className='icon'/> Saatlar va qolbaqlar</a>
                        <div className="hoverdiv-One">
                            <ul>
                            <li><a href="">Smart saatlar</a></li>
                            <li><a href="">Smart qolbaqlar</a></li>
                            <li><a href="">Qol saatlari</a></li>
                            </ul>
                        </div>
                        </li>
                        <li className='lihover-one'><a href=""><IoGameControllerOutline className='icon'/> Oyunlar və əyləncə</a>
                        <div className="hoverdiv-One">
                        <ul>
                        <li><a href="">Oyun ve aksesuarlar</a></li>
                        <li><a href="">Oyun konsollori</a></li>
                        </ul>
                        </div>
                        </li>
                        <li className='lihover-one'><a href=""><LiaCameraRetroSolid className='icon'/> Foto və video</a>
                            <div className="hoverdiv-One">
                            <ul>
                            <li><a href="">Fotoaparatlar</a></li>
                            </ul>
                            </div>
                        </li>
                        <li><a href=""><LuTickets className='icon'/> Outlet</a></li>
                    </ul>
                </div>
                </div>
                <div className="formbox">
                <form action="#">
                    <input type="text" placeholder='Search product ...'/>
                    <button><FaSearch /></button>
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
                <div className="icone">
                <CiHeart />
                <span>
                    0
                </span>
                </div>
                <div className="icone">
                <GrShop className='shop'/>
                <span>
                    0
                </span>
                </div>
                <div className="icone">
                <BsPerson />
                </div>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Header
