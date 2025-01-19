import React from 'react'
import "./info.css"
import icon1 from '../../Gallery/texno-catdirilma-icon.svg';
import icon2 from '../../Gallery/texno-tehlukesizlik-icon.svg';
import icon3 from '../../Gallery/texno-zemanet-icon.svg';
import icon4 from '../../Gallery/texno-24-saat-xidmet-icon.svg';

const İnfo = () => {
    
  const images = [icon1, icon2, icon3, icon4];
  return (
    <div>
        <section className="texno-info">
                <div className='texno-info-cont'>
                  <div className='texno-info-item'>
                    <img src={icon1} alt="" />
                    <div className='texno-info-item-text'>
                      <span>Sürətli çatdırılma</span>
                      <p>Bütün ölkәyә çatdırılma <br />
                        edirik</p>
                    </div>
                  </div>
                  <div className='divider'></div>
                  <div className='texno-info-item'>
                    <img src={icon3} alt="" />
                    <div className='texno-info-item-text'>
                      <span>Zəmanət</span>
                      <p>Saytda olan bütün <br />
                        mәhsullara zəmanət</p>
                    </div>
                  </div>
                  <div className='divider'></div>
                  <div className='texno-info-item'>
                    <img src={icon2} alt="" />
                    <div className='texno-info-item-text'>
                      <span>100% Təhlükəsiz</span>
                      <p>Ödəniş</p>
                    </div>
                  </div>
                  <div className='divider'></div>
                  <div className='texno-info-item'>
                    <img src={icon4} alt="" />
                    <div className='texno-info-item-text'>
                      <span>24/7</span>
                      <p>Xidmət</p>
                    </div>
                  </div>
                </div>
              </section>
    </div>
  )
}

export default İnfo