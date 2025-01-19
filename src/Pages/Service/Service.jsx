import React, { useState } from 'react'
import "./service.scss"
import { IoMdSearch } from 'react-icons/io'
import { number } from 'yup'
import { use } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

const Service = () => {

  let servicedata = [
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-1-e02g349th6kx17jypfaq.jpg',
      name: "Baku Service Company(BSC) Yurd Texnoservis",
      location: "1) Azadlıq pr.116 2) 28 May küç., 9/27 3) Ə.Rəcəbli küç.,2",
      logo: "Samsung",
      telephonenumber: {
          number1: "*9292", 
          number2: "(012) 480 33 03",
          number3: " (050) 417 34 34",
          number4: "(055) 417 34 34"           
      }
      
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-2-f3ehjugvqi2np7wmx6k1.jpg',
      name: "Baku Service Company(BSC)",
      location: "Azadlıq pr.116",
      logo: "Tefal",
      telephonenumber: {
          number1: "(012) 991",
          number2: "(012) 143",      
          number3: "(050) 417 34 34"       
      }
    },
    {
      img: '	https://texnomart.az/wp-content/uploads/2023/04/texnomart-3-6vu8wfsrn35bm21g0kzi.jpg',
      name: "Baku Service Company(BSC) Smarton(Bakond)",
      location: "1) Azadlıq pr.116 2) Ə.Rəcəbli küç.,108",
      logo: "Panasonic",
      telephonenumber: {
          number1: "(012) 991", 
          number2: "(070) 860 54 54",
          number3: "(012) 465 54 54",
          number4: "(012) 143"    
      }
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-4-4sxurz10ji9qcwtm2ngv.jpg',
      name: "Baku Service Company(BSC) Smarton(Bakond)",
      location: "1) Azadlıq pr.116 2) Ə.Rəcəbli küç.,108",
      logo: "LG",
      telephonenumber: {
          number1: "(012) 991", 
          number2: "(012) 143",
          number3: "(070) 860 54 54",  
          number4: "(012) 465 54 54"
      }
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-5-0nl4o9tecprzqvmyuf7b.jpg',
      name: "Baku Service Company(BSC) Yurd Unimac Servis Avera servis",
      location: "1) Azadlıq pr.116 2) 28 May küç., 9/27 3) Ziya Bünyadov 2075.Bakı 4) Nizami r, Qara Qarayev pr57 A (8 km Ramal TM yanı)",
      logo: "Bosch",
      telephonenumber: {
          number1: "(012) 991",
          number2: "(012) 143",
          number3: "(012) 480 33 03",
          number4: "(050) 417 34 34",
          number5: "(055) 417 34 34",
          number6: "(050) 268 03 77",
          number7: "(070) 295 88 08"
      }
    },
    {
      img: '	https://texnomart.az/wp-content/uploads/2023/04/texnomart-6-7kow6v3ctyzhbf5nqlp2.jpg',
      name: "Baku Service Company(BSC)",
      location: "Azadlıq pr.116",
      logo: "PHILIPS",
      telephonenumber: {
          number1: "(012) 991", 
          number2: "(012) 143"      
      }
    },
    {
      img: '	https://texnomart.az/wp-content/uploads/2023/04/texnomart-7-cx6s9tv0umo7nk3b5p4g.jpg',
      name: "Baku Service Company(BSC)",
      location: "Azadlıq pr.116",
      logo: "Rowenta",
      telephonenumber: {
          number1: "(012) 991",
          number2: "(012) 143"       
      }
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-8-2aplc5hjgm1b6xtwsqf4.jpg',
      name: "Texnoservis",
      location: "Ə.Rəcəbli küç.,2/1",
      logo: "DeLonghi",
      telephonenumber: {
          number1: "*9292",       
      }
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-9-s6jnfqapu32gx0i7czvb.jpg',
      name: "Texnoservis",
      location: "Ə.Rəcəbli küç.,2/1",
      logo: "KENWOOD",
      telephonenumber: {
          number1: "*9292",       
      }
    },
    {
      img: '	https://texnomart.az/wp-content/uploads/2023/04/texnomart-10-c0ezpltfuam2k716irjw.jpg',
      name: "Texnoservis",
      location: "Ə.Rəcəbli küç.,2/1",
      logo: "BRAUN" ,
      telephonenumber: {
          number1: "*9292",       
      }
    },
    {
      img: '	https://texnomart.az/wp-content/uploads/2023/04/texnomart-11-1xl4gotv07s85e36mhub.jpg',
      name: "Texnoservis",
      location: "Ə.Rəcəbli küç.,2/1",
      logo: "VITEK",
      telephonenumber: {
          number1: "*9292",       
      }
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-12-7w5gue3oqhcp2r06yikt.jpg',
      name: "Fakir",
      location: "28 May küç., 33B",
      logo: "Fakir",
      telephonenumber: {
          number1: "(055) 591 85 20", 
          number2: "(070) 591 85 20",
          number3: "(012) 493 01 28"    
      }
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-13-a9i081yjlq6so4ke2b5g.jpg',
      name: "Sony",
      location: "1) Mətbuat pr. 529 2) 111, Fətəli xan Xoyskiy.",
      logo: "SONY",
      telephonenumber: {
          number1: "(012) 432 51 39", 
          number2: "(050) 347 27 93"      
      }
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-14-tq936vj42lzfs0w8iyrm.jpg',
      name: "Karcher Karcher Servis",
      location: "1) Mətbuat pr. 529 2) 111, Fətəli xan Xoyskiy.",
      logo: "Karcher",
      telephonenumber: {
          number1: "(012) 465 75 11",  
          number2: "(055) 222 09 59",
          number3: "(012) 230 44 45"     
      }
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-15-7w6lj5rveh0ykfsonc39.jpg',
      name: "AIWA",
      location: "Rəşid Behbudov 71. Aquaparkın yanında",
      logo: "AIWA",
      telephonenumber: {
          number1: "(012) 440 93 26",   
          number2: "(077) 233 47 00"    
      }
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-16-tozrj42epv6l9gi80uan.jpg',
      name: "Azservis",
      location: "Bakı ş. Vladislav Plotnikov 33",
      logo: "ARDESTO",
      telephonenumber: {
          number1: "(050) 540 05 86", 
          number2: "(012) 449 81 81",
          number3: "(050) 540 05 86"    
      }
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-17-7v1ftphmze8ykw65unog.jpg',
      name: "Mixtech",
      location: "Bakı ş., 28 may küç., 13",
      logo: "Mi",
      telephonenumber: {
          number1: "(055) 233 53 03", 
          number2: "(077) 233 53 03"      
      }
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-18-5k8asx1ez6tu03hvqwl2.jpg',
      name: "Masterservis",
      location: "Həsən Əliyev, 33",
      logo: "Hotpoint",
      telephonenumber: {
          number1: "(070) 840 60 20", 
          number2: "(012) 441 58 31"      
      }
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-19-4bkrof153minsph2uvxj.jpg',
      name: "Masterservis",
      location: "Həsən Əliyev, 33",
      logo: "Indesit",
      telephonenumber: {
          number1: "(077) 840 60 20",  
          number2: "(012) 441 58 31"     
      }
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-20-c1jpfkwgya43bruilnh7.jpg',
      name: "Masterservis",
      location: "Həsən Əliyev, 33",
      logo: "ARISTON",
      telephonenumber: {
          number1: "(077) 840 60 20",
          number2: "(012) 441 58 31"       
      }
    },
    {
      img: 'https://texnomart.az/wp-content/uploads/2023/04/texnomart-21-hf8nocs0p1xgu69jr4vw.jpg',
      name: "Optimal",
      location: "Məhəmməd Hadi 73",
      logo: "Simfer",
      telephonenumber: {
          number1: "(077) 223 80 52",       
      }
    },
  ]

  let [Data,setData] = useState([])

  console.log(Data);

  const servicefunc = (a) => {
    let filter = servicedata.filter((item) => item.logo[0] === a);
    setData(filter); 
  }
  
  const defaulfunck = () => {
    setData(servicedata);
  };

  return (
    <>
    <Header/>
    <section className='service-sec'>
      <h2>Servislər</h2>

      <div className="a-z">
        <div onClick={defaulfunck} className="box">
          <span>All</span>
        </div>
        <div onClick={() => servicefunc('A')} className="box">
          <span>A</span>
        </div>
        <div onClick={() => servicefunc('B')} className="box">
          <span>B</span>
        </div>
        <div onClick={() => servicefunc('D')} className="box">
          <span>D</span>
        </div>
        <div onClick={() => servicefunc('F')} className="box">
          <span>F</span>
        </div>
        <div onClick={() => servicefunc('H')} className="box">
          <span>H</span>
        </div>
        <div onClick={() => servicefunc('I')} className="box">
          <span>I</span>
        </div>
        <div onClick={() => servicefunc('K')} className="box">
          <span>K</span>
        </div>
        <div onClick={() => servicefunc('L')} className="box">
          <span>L</span>
        </div>
        <div onClick={() => servicefunc('M')} className="box">
          <span>M</span>
        </div>
        <div onClick={() => servicefunc('P')} className="box">
          <span>P</span>
        </div>
        <div onClick={() => servicefunc('R')} className="box">
          <span>R</span>
        </div>
        <div onClick={() => servicefunc('S')} className="box">
          <span>S</span>
        </div>
        <div onClick={() => servicefunc('T')} className="box">
          <span>T</span>
        </div>
        <div onClick={() => servicefunc('V')} className="box">
          <span>V</span>
        </div>
      </div>

      <div className="inputbox">
        <div className="region">
        <span>Baku(21)</span>
        <span>Regions()</span>
        </div>
        <form action="#">
          <input type="text" placeholder='Search branchhes...'/>
          <IoMdSearch className='icone'/>
        </form>
      </div>      

      <div className="serviceboxs">
      
      {
        Data.length > 0 ?
        Data.map((item,index) => (
          <div key={index} className="servicebox">
          <div className="imgbox">
            <img src={item.img} alt="" />
          </div>
          <div className="text">
            <h3> {item.name} </h3>
            <p><IoLocationOutline /> {item.location} </p>
            <span style={{"display": item.telephonenumber.number1 ? "block" : "none"}}><FaPhoneAlt /> {item.telephonenumber.number1} </span>
            <span style={{"display": item.telephonenumber.number2 ? "block" : "none"}} ><FaPhoneAlt /> {item.telephonenumber.number2}</span>
            <span style={{"display": item.telephonenumber.number3 ? "block" : "none"}} ><FaPhoneAlt /> {item.telephonenumber.number3} </span>
            <span style={{"display": item.telephonenumber.number4 ? "block" : "none"}} ><FaPhoneAlt /> {item.telephonenumber.number4} </span>
            <span style={{"display": item.telephonenumber.number5 ? "block" : "none"}} ><FaPhoneAlt /> {item.telephonenumber.number5} </span>
            <span style={{"display": item.telephonenumber.number6 ? "block" : "none"}} ><FaPhoneAlt /> {item.telephonenumber.number6} </span>
            <span style={{"display": item.telephonenumber.number7 ? "block" : "none"}} ><FaPhoneAlt /> {item.telephonenumber.number7} </span>

          </div>
      </div>
        ))
        :
        servicedata.map((item,index) => (
          <div key={index} className="servicebox">
          <div className="imgbox">
            <img src={item.img} alt="" />
          </div>
          <div className="text">
            <h3> {item.name} </h3>
            <p><IoLocationOutline /> {item.location} </p>
            <span style={{"display": item.telephonenumber.number1 ? "block" : "none"}}><FaPhoneAlt /> {item.telephonenumber.number1} </span>
            <span style={{"display": item.telephonenumber.number2 ? "block" : "none"}} ><FaPhoneAlt /> {item.telephonenumber.number2}</span>
            <span style={{"display": item.telephonenumber.number3 ? "block" : "none"}} ><FaPhoneAlt /> {item.telephonenumber.number3} </span>
            <span style={{"display": item.telephonenumber.number4 ? "block" : "none"}} ><FaPhoneAlt /> {item.telephonenumber.number4} </span>
            <span style={{"display": item.telephonenumber.number5 ? "block" : "none"}} ><FaPhoneAlt /> {item.telephonenumber.number5} </span>
            <span style={{"display": item.telephonenumber.number6 ? "block" : "none"}} ><FaPhoneAlt /> {item.telephonenumber.number6} </span>
            <span style={{"display": item.telephonenumber.number7 ? "block" : "none"}} ><FaPhoneAlt /> {item.telephonenumber.number7} </span>

          </div>
      </div>
        ))
      }
      
      </div>  
    </section>
    <Footer/>
    </>
  )
}

export default Service
