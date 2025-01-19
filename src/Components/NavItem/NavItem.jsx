import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/Context'
import "./navItem.css"
import { GiSmallFire, GiWashingMachine } from 'react-icons/gi'
import { FcSmartphoneTablet } from 'react-icons/fc'
import { FiMonitor } from 'react-icons/fi'
import { MdComputer } from 'react-icons/md'
import { PiBicycle, PiHairDryer } from 'react-icons/pi'
import { IoGameControllerOutline } from 'react-icons/io5'
import { LuTickets } from 'react-icons/lu'
import { BsPerson, BsSmartwatch } from 'react-icons/bs'
import { LiaBalanceScaleSolid, LiaCameraRetroSolid } from 'react-icons/lia'

const NavItem = () => {
    const {nav } = useContext(GlobalContext)
  return (
    <>
                            <ul>
                                <li><a href=""><img src={nav[0].src} alt="" className='icon' /> Bahar müjdəsi endirimləri</a></li>
                                <li className='lihover-one'><a href=""><img src={nav[1].src} alt="" className='icon' /> Mobil cihazlar və planşetlər</a>
                                <div className="hoverdiv-One">
                                    <li><a href="">Smartfonlar</a></li>
                                    <li><a href="">Duymeli telfonlar</a></li>
                                    <li><a href="">Plansetler</a></li>
                                    <li><a href="">Aksesualar</a></li>
                                    <li><a href="">Electron kitablar</a></li>
                                    <li><a href="">Ev / ofis telefonlari</a></li>
                                </div>
                                </li>
                                <li className='lihover-one'><a href=""><img src={nav[2].src} alt="" className='icon' /> Məişət texnikası</a>
                                <div className="hoverdiv-One">
                                    <li><a href="">Böyük məisət texnikası</a></li>
                                    <li><a href="">Bisirici texnika</a></li>
                                    <li><a href="">İqlim texnikasi</a></li>
                                    <li><a href="">Mətbəxcavadanliği</a></li>
                                    <li><a href="">Ev əşyaları</a></li>
                                    <li><a href="">Qab-qacaq</a></li>
                                </div>
                                </li>
                                <li className='lihover-one'><a href=""><img src={nav[3].src} alt="" className='icon' /> TV, audio va aksesuarlar</a>
                                <div className="hoverdiv-One">
                                    <li><a href="">Televizorlar</a></li>
                                    <li><a href="">Audio</a></li>
                                    <li><a href="">Aksesuarlar</a></li>
                                </div>
                                </li>
                                <li className='lihover-one'><a href=""><img src={nav[4].src} alt="" className='icon' /> Komputer texnikasi</a>
                                <div className="hoverdiv-One">
                                    <li><a href="">Noutbuklar</a></li>
                                    <li><a href="">Printerler</a></li>
                                    <li><a href="">Sebeke avadanliqlari</a></li>
                                    <li><a href="">Yaddas qurgulari</a></li>
                                    <li><a href="">Aksesuarlar</a></li>
                                </div>
                                </li>
                                <li className='lihover-one'><a href=""><img src={nav[5].src} alt="" className='icon' /> Gözəllik Və saglamlıq</a>
                                <div className="hoverdiv-One">
                                    <li><a href="">Uzqirxanlar</a></li>
                                    <li><a href="">Sacqirxanlar</a></li>
                                    <li><a href="">Hava fenleri</a></li>
                                    <li><a href="">Utu fenler</a></li>
                                    <li><a href="">Daraq fenler</a></li>
                                </div>
                                </li>
                                <li className='lihover-one'><a href=""><img src={nav[6].src} alt="" className='icon' /> Nəqliyyat</a>
                                <div className="hoverdiv-One">
                                    <li><a href="">Velosipedler</a></li>
                                    <li><a href="">Elektrik skuterler</a></li>
                                    <li><a href="">Hoverboardlar</a></li>
                                    <li><a href="">Skuterler</a></li>
                                </div>
                                </li>
                                <li className='lihover-one'><a href=""><img src={nav[7].src} alt="" className='icon' /> Saatlar va qolbaqlar</a>
                                <div className="hoverdiv-One">
                                    <li><a href="">Smart saatlar</a></li>
                                    <li><a href="">Smart qolbaqlar</a></li>
                                    <li><a href="">Qol saatlari</a></li>
                                </div>
                                </li>
                                <li className='lihover-one'><a href=""><img src={nav[8].src} alt="" className='icon' /> Oyunlar və əyləncə</a>
                                <div className="hoverdiv-One">
                                <li><a href="">Oyun ve aksesuarlar</a></li>
                                <li><a href="">Oyun konsollori</a></li>
                                </div>
                                </li>
                                <li className='lihover-one'><a href=""><img src={nav[9].src} alt="" className='icon' /> Foto və video</a>
                                    <div className="hoverdiv-One">
                                    <li><a href="">Fotoaparatlar</a></li>
                                    </div>
                                </li>
                                <li><a href=""><img src={nav[10].src} alt="" className='icon' /> Outlet</a></li>
                            </ul>
    </>
  )
}

export default NavItem