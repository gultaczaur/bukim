import React, { useContext, useEffect, useState } from 'react'
import "./home.css"
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Carousel from '../../Components/Carousel/Carousel'
import Cards from '../../Components/Cards/Cards'
import İnfo from '../../Components/İnfo/İnfo'
import { GlobalContext } from '../../Context/Context'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../assets/redux/features/Product/productSlice'
import NavItem from '../../Components/NavItem/NavItem'



const Home = () => {
  const { phoneData, nav, baharMujdesi, baharEndirimleri } = useContext(GlobalContext)
  const data = useSelector((state) => state.product.data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
  }, [])
  // console.log(data[2]);
  // const [filteredData, setFilteredData] = useState([]);

  // useEffect(() => {
  //   // "baharEndirimleri" kateqoriyasında olan məhsulları filtr edin
  //   const filtered = data.filter(item => item.category === "baharEndirimleri");
  //   setFilteredData(filtered);
  // }, []);


  return (
    <div>
      <Header/>
      <section >
        <div className='texno-first-section'>
        <div className='category-mobil-div'>
              <div className='category-mobil'><img className='category-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-texnomart-smart-saat-4gzpkmc1b6uotq8jl2ry-92g7sqt5pejy6hlcwz3m.png" alt="" /><h2>Smart saatlar</h2></div>
              <div className='category-mobil'><img className='category-img' src="https://texnomart.az/wp-content/uploads/2022/06/texnomart-smartfonlar-2-7crvm93q0ij5ehw468zn.png" alt="" /><h2>Smartfonlar</h2></div>
              <div className='category-mobil'><img className='category-img' src="https://texnomart.az/wp-content/uploads/2022/06/texnomart-kondisioner-lg-2-f6ge7b05okpl2wzy8qv1.png" alt="" /><h2>Kondisionerlər</h2></div>
              <div className='category-mobil'><img className='category-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-texnomart-kompyuterler-co52aht8jk3glswuzpfe-fwg79nterm5jhybkoi1q.png" alt="" /><h2>Noutbuklar</h2></div>
              <div className='category-mobil'><img className='category-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-texnomart-televizor-2s4mbtex68v70hpwcq5j-gcqlnzu9oymh2f7pbs13.png" alt="" /><h2>Televizorlar</h2></div>
              <div className='category-mobil'><img className='category-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-texnomart-paltaryuyan-fy04s5j8amtxbcz1kg7p-ce9tok5zyu8hsl41mw6i.png" alt="" /><h2>Paltaryuyanlar</h2></div>
            </div>
          <div className='category-div'>
            <div className="navItem">
              <div className='ulbox'>
                 <NavItem />
              </div>
            
            </div>
           
          </div>
          <div className='outlet-carousel'>
            <Carousel >
              <img src="https://texnomart.az/wp-content/uploads/2024/02/texnomart-Outlet-magaza-web-size-4uq0598f3ie1ym67hcaj.jpg" alt="" />
            </Carousel>
          </div>

          <div className='spring-sale-max1460'>
            <h2>Bahar endirimləri</h2>
            <div className='sale-time'>
              <div className='sale-time-item'>
                <span>00</span>
                <p>Day</p>
              </div>
              <div className='sale-time-item'>
                <span>00</span>
                <p>Hour</p>
              </div>
              <div className='sale-time-item'>
                <span>00</span>
                <p>Minute</p>
              </div>
              <div className='sale-time-item'>
                <span>00</span>
                <p>Second</p>
              </div>

            </div>
            
            <Carousel slideCount={1} >
              {baharEndirimleri.map((item, index) => (
                <Cards key={index} item={item} />
              ))}
            </Carousel>
            <div><button className='bahar-teklif'>Bütün təklifləri gör</button></div>
          </div>
          <div className="spring-sale-min1460">
          <div className='carousel-headline'>
          <h3>BAHAR ENDİRİMLƏRİ</h3>
          <div className='carousel-headline-right'>
            <button style={{ background: '#13b5f5' }}>Bütün təklifləri gör</button>
          </div>
        </div>
        <Carousel>
          {baharEndirimleri.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </Carousel>
          </div>
        </div>

      </section>

      <section className='bahar-mujdesi'>
        <div className='carousel-headline'>
          <h3>BAHAR MÜJDƏSİ ENDİRİMLƏRİ</h3>
          <div className='carousel-headline-right'>
            <button>Bütün təklifləri gör</button>
          </div>
        </div>
        <Carousel>
          {baharMujdesi.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </Carousel>

        {/* <Carousel>
          <Cards data={phoneData} />
        </Carousel> */}
      </section>
      <section className='mobil-cihazlar'>
        <div className='carousel-headline'>
          <h3>MOBİL CİHAZLAR</h3>
          <div className='carousel-headline-right'>
            <ul>
              <li>Smart saatlar</li>
              <li>Planşetlər</li>
              <li>Elektron kitablar</li>
            </ul>
            <button>Bütün təklifləri gör</button>
          </div>
        </div>
        <Carousel>
          {phoneData.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </Carousel>

      </section>

      <section className='markalar'>
        <div className='carousel-headline'>
          <h3>MARKALAR</h3>
          <div className='carousel-headline-right'>
            <button>Bütün təklifləri gör</button>
          </div>
        </div>
        <Carousel>
          <div className='markalar-carousel' ><img className='markalar-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-arcelk-9thx0jog5e8p63az41mr.png" alt="Arçelik" /></div>
          <div className='markalar-carousel' ><img className='markalar-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-bosch-komq5j4biw2tay98h1nf.png" alt="" /></div>
          <div className='markalar-carousel' ><img className='markalar-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-lg-2-p25xg18sokh3z7njtuqc.png" alt="" /></div>
          <div className='markalar-carousel' ><img className='markalar-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-samsung-y9xp0qseukt1vng4zhfi.png" alt="" /></div>
          <div className='markalar-carousel' ><img className='markalar-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-artel-b4x056ja382vfc7hynus.png" alt="" /></div>
          <div className='markalar-carousel' ><img className='markalar-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-arnica-emjbawskyhl297xu0p15.png" alt="" /></div>
          <div className='markalar-carousel' ><img className='markalar-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-acer-mv36c491j50f2gxy7iak.png" alt="" /></div>
          <div className='markalar-carousel' ><img className='markalar-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-lenovo-mhlo6kjyunia29bxvqp0.png" alt="" /></div>
          <div className='markalar-carousel' ><img className='markalar-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-arcelk-9thx0jog5e8p63az41mr.png" alt="Arçelik" /></div>
          <div className='markalar-carousel' ><img className='markalar-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-bosch-komq5j4biw2tay98h1nf.png" alt="" /></div>
          <div className='markalar-carousel' ><img className='markalar-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-lg-2-p25xg18sokh3z7njtuqc.png" alt="" /></div>
          <div className='markalar-carousel' ><img className='markalar-img' src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-samsung-y9xp0qseukt1vng4zhfi.png" alt="" /></div>
        </Carousel>
      </section>
      <İnfo />
      <Footer />
    </div>

  )
}

export default Home