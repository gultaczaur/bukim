import React, { useState } from 'react';
import './Market.scss';
import { TfiLocationPin } from 'react-icons/tfi';
import { MdPhoneInTalk } from 'react-icons/md';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { IoIosSend } from 'react-icons/io';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Market = () => {
  let marketdata = [
    {
      img: 'https://texnomart.az/wp-content/uploads/2021/10/texnomart-texnomart-texnomartseki-pzy2xaq9t0fsru5coibe-uetvsfc8ozk9p6rmnji0.jpg',
      title: 'Şəki',
      map: 'Sabit Rəhman küçəsi (Bazar Store-un yanı)',
      phone: '050 229 72 29',
      telephone: '024 244 23 29',
      location: 'https://www.google.com/maps/dir//41.201425,%2047.167537',
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2022/09/texnomart-Agdas-sza8q4r1m0puto59nhw6.jpeg',
      title: 'Ağdaş',
      map: 'Ağdaş şəhəri, Müşfiq isayev küçəsi 2B',
      phone: '050 229 92 31',
      telephone: '020 235 22 77',
      location: 'https://www.google.com/maps/dir//40.600673,%2047.439480',
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2022/09/texnomart-Zaqatala-skebgvato5p016xf4mqi.jpeg',
      title: 'Zaqatala',
      map: 'Zaqatala rayonu, F. Əmirov küçəsi, 17B',
      phone: '050 229 13 30',
      telephone: '024 225 40 76',
      location: 'https://www.google.com/maps/dir//41.629225,%2046.635289',
    },
  ];

  let [data, setdata] = useState(marketdata); 

  const marketfunck = (a) => {
    let filter = marketdata.filter((item) => item.title[0] === a);
    setdata(filter); 
  };

  const defaulfunck = () => {
    setdata(marketdata);
  };

  return (
    <>
    <Header/>
    <section className="market-sec">
      <h2>Market</h2>
      <div className="a-z">
        <div onClick={defaulfunck} className="box">
          <span>All</span>
        </div>
        <div onClick={() => marketfunck('A')} className="box">
          <span>A</span>
        </div>
        <div onClick={() => marketfunck('Z')} className="box">
          <span>Z</span>
        </div>
        <div onClick={() => marketfunck('Ş')} className="box">
          <span>Ş</span>
        </div>
      </div>
      <div className="marketboxs">
        {data.length > 0
          ? data.map((item, index) => (
              <div key={index} className="marketbox">
                <div className="imgbox">
                  <img src={item.img} alt="" />
                  <a href={item.location}>
                    <IoIosSend /> Waypoint
                  </a>
                </div>
                <div className="markrt-text">
                  <h3>{item.title}</h3>
                  <p>
                    <TfiLocationPin /> {item.map}
                  </p>
                  <span>
                    <IoPhonePortraitOutline /> {item.phone}
                  </span>
                  <span>
                    <MdPhoneInTalk /> {item.telephone}
                  </span>
                </div>
              </div>
            ))
          : marketdata.map((item, index) => (
              <div key={index} className="marketbox">
                <div className="imgbox">
                  <img src={item.img} alt="" />
                  <a href={item.location}>
                    <IoIosSend /> Waypoint
                  </a>
                </div>
                <div className="markrt-text">
                  <h3>{item.title}</h3>
                  <p>
                    <TfiLocationPin /> {item.map}
                  </p>
                  <span>
                    <IoPhonePortraitOutline /> {item.phone}
                  </span>
                  <span>
                    <MdPhoneInTalk /> {item.telephone}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Market;
