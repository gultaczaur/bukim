import React, { createContext, useEffect, useState } from 'react'
export const GlobalContext = createContext()
import nav1 from '../Gallery/texno-fire-icon.svg'
import nav2 from '../Gallery/texno-phone.svg'
import nav3 from '../Gallery/texno-paltaryuyan-icon.svg'
import nav4 from '../Gallery/texno-tv.svg'
import nav5 from '../Gallery/texno-pc.svg'
import nav6 from '../Gallery/texno-fen.svg'
import nav7 from '../Gallery/texno-velo.svg'
import nav8 from '../Gallery/texno-saat.svg'
import nav9 from '../Gallery/texno-game.svg'
import nav10 from '../Gallery/texno-photo.svg'
import nav11 from '../Gallery/texno-outlet.svg'
import axios from 'axios'

const Context = ({ children }) => {

  const [cart, setCart] = useState([]);

  const phoneData = [
    {
      'id': 1,
      'title': 'Smartfon Samsung A04e 64GB Blue',
      'price': 229,
      'payment': 24.92,
      'month' : 12,
      'cash': 40,
      'image': 'https://texnomart.az/wp-content/uploads/2023/01/texnomart-Samsung-A04e-32GB-Blue-1ahoyx4cq2j8f97l0esv.jpg',
      'category': 'phoneData'
    },
    {
      'id': 2,
      'title': 'Smartfon Samsung A04e 64GB Black',
      'price': 229,
      'payment': 24.92,
      'month' : 12,
      'cash': 40,
      'image': 'https://texnomart.az/wp-content/uploads/2023/01/texnomart-Samsung-A04e-32GB-Black-c8vlgqxk15o0a2ywsreb.jpg',
      'category': 'phoneData'
    },
    {
      'id': 3,
      'title': 'Smartfon Xiaomi Max 64GB Black',
      'price': 269,
      'payment':22.42,
      'month' : 12,
      'cash': 20,
      'image': 'https://texnomart.az/wp-content/uploads/2023/01/texnomart-Smartfon-Samsung-A04e-32GB-Cooper-p8u0xgv3yb9weli71zt2.jpg',
      'category': 'phoneData'
    },
    {
      'id': 4,
      'title': 'Smartfon Samsung A04e 32GB Blue',
      'price': 269,
      'payment': 22.42,
      'month' : 12,
      'cash': 20,
      'image': 'https://texnomart.az/wp-content/uploads/2023/01/texnomart-Samsung-A04e-32GB-Blue-1ahoyx4cq2j8f97l0esv.jpg',
      'category': 'phoneData'
    },
    {
      'id': 5,
      'title': 'Smartfon Samsung A04e 32GB Black',
      'price': 269,
      'payment': 22.42,
      'month' : 12,
      'cash': 20,
      'image': 'https://texnomart.az/wp-content/uploads/2023/01/texnomart-Samsung-A04e-32GB-Black-c8vlgqxk15o0a2ywsreb.jpg',
      'category': 'phoneData'
    },
    {
      'id': 6,
      'title': 'Smartfon Xiaomi Poco X4 GT 8/128GB Blue',
      'price': 899,
      'payment': 74.92,
      'month' : 12,
      'cash': 70,
      'image': 'https://texnomart.az/wp-content/uploads/2023/01/texnomart-Smartfon-Xiaomi-Poco-X4-GT-Blue-1-y80ulg3nekm1i5x96avq.jpg',
      'category': 'phoneData'
    },
    {
      'id': 7,
      'title': 'Smartfon Xiaomi Poco X4 GT 8/128GB Black',
      'price': 849,
      'payment': 70.75,
      'month' : 12,
      'cash': 70,
      'image': 'https://texnomart.az/wp-content/uploads/2023/01/texnomart-Xiaomi-Poco-X4-GT-Black-lj307hmc8awfu4peb1o2.jpg',
      'category': 'phoneData'
    },
    {
      'id': 8,
      'title': 'Smartfon Xiaomi Poco F4 GT 8/128GB Black',
      'price': 1399,
      'payment': 116.58,
      'month' : 12,
      'cash': 140,
      'image': 'https://texnomart.az/wp-content/uploads/2023/01/texnomart-Xiaomi-Poco-F4-GT-Black-ntl1g6qu497xpe2i3cfs.jpg',
      'category': 'phoneData'
    },
    
  ]

  const baharMujdesi = [
    {
      'id': 1,
      'title': 'Elektrik Çaydan Gorenje K15DWW',
      'price': 129,
      'payment': 7.17,
      'month' : 18,
      'cash': 80,
      'image': 'https://texnomart.az/wp-content/uploads/2023/03/texnomart-Elektrik-Caydan-Gorenje-K15DWW-a3yt5cmq7sf91oxb02gj.jpg',
      'category': 'baharMujdesi'
    },
    {
      'id': 2,
      'title': 'Soyuducu Daewoo FKM331FLR0AZ',
      'price': 1299,
      'payment': 72.17,
      'month' : 18,
      'cash': 200,
      'image': 'https://texnomart.az/wp-content/uploads/2022/12/texnomart-FKM331FLROA-jp1ztiwslmcnyugk084q.jpg',
      'category': 'baharMujdesi'
    },
    {
      'id': 3,
      'title': 'Soyuducu Daewoo FUS089FWT0AZ',
      'price': 429,
      'payment': 23.83,
      'month' : 18,
      'cash': 70,
      'image': 'https://texnomart.az/wp-content/uploads/2022/11/texnomart-Daewoo-FUS089FWT0AZ-62hvx8c94lpaji75ogt3.jpg',
      'category': 'baharMujdesi'
    },
    {
      'id': 4,
      'title': 'Aspirator Simfer 7502B',
      'price': 189,
      'payment': 10.50,
      'month' : 18,
      'cash': 40,
      'image': 'https://texnomart.az/wp-content/uploads/2022/11/texnomart-Simfer-8502B-nzw3lyak9qpsfhg804et.jpg',
      'category': 'baharMujdesi'
    },
    {
      'id': 5,
      'title': 'Ütü Sencor SSI 2027BL',
      'price': 49,
      'payment': 2.72,
      'month' : 18,
      'cash': 10,
      'image': 'https://texnomart.az/wp-content/uploads/2022/09/texnomart-Sencor-SSI-2027BL-o3h9jwkevq7p5t1fnbl4.jpg',
      'category': 'baharMujdesi'
    },
    {
      'id': 6,
      'title': 'Soba Simfer F65MW3G1H',
      'price': 549,
      'payment': 30.50,
      'month' : 18,
      'cash': 70,
      'image': 'https://texnomart.az/wp-content/uploads/2022/06/texnomart-Simfer-F65MW3G1H-ujws69lx4pngm7bro0t1-300x300.jpg',
      'category': 'baharMujdesi'
    },
    {
      'id': 7,
      'title': 'Soba Simfer F65MI3G1H',
      'price': 569,
      'payment': 31.61,
      'month' : 18,
      'cash': 70,
      'image': 'https://texnomart.az/wp-content/uploads/2022/06/texnomart-Simfer-F65MI3G1H-rcl1fhuv3qgsi59eyj82-300x300.jpg',
      'category': 'baharMujdesi'
    },
    {
      'id': 8,
      'title': 'Bişirmə paneli Simfer H6M R3154 VI',
      'price': 369,
      'payment': 20.50,
      'month' : 18,
      'cash': 90,
      'image': 'https://texnomart.az/wp-content/uploads/2022/06/texnomart-Simfer-H6M-R3154-VI-8x0f2rkyon6cihms4juv-600x600.jpg',
      'category': 'baharMujdesi'
    },
    {
      'id': 9,
      'title': 'Paltaryuyan Samsung WW10T654CLXLP',
      'price': 2029,
      'payment': 112.72,
      'month' : 18,
      'cash': 450,
      'image': 'https://texnomart.az/wp-content/uploads/2022/06/texnomart-Samsung-WW10T654CLXLP-vznl06ku2rsxcjf9p41i-300x300.jpg',
      'category': 'baharMujdesi'
    },
    {
      'id': 10,
      'title': 'Paltaryuyan Beko DU 7112 PA1',
      'price': 949,
      'payment': 52.72,
      'month' : 18,
      'cash': 70,
      'image': 'https://texnomart.az/wp-content/uploads/2022/06/texnomart-Beko-DU-7112-PA1-glc9jw08rah5b13xvz2i-300x300.jpg',
      'category': 'baharMujdesi'
    },

  ]
  const baharEndirimleri = [
   
    {
      'id': 1,
      'title': 'Soyuducu Daewoo FKM331FLR0AZ',
      'price': 1299,
      'payment': 72.17,
      'month' : 18,
      'cash': 200,
      'image': 'https://texnomart.az/wp-content/uploads/2022/12/texnomart-FKM331FLROA-jp1ztiwslmcnyugk084q.jpg',
      'category': 'baharEndirimleri'
    },
    {
      'id': 2,
      'title': 'Soyuducu Daewoo FUS089FWT0AZ',
      'price': 429,
      'payment': 23.83,
      'month' : 18,
      'cash': 70,
      'image': 'https://texnomart.az/wp-content/uploads/2022/11/texnomart-Daewoo-FUS089FWT0AZ-62hvx8c94lpaji75ogt3.jpg',
      'category': 'baharEndirimleri'
    },
    
    {
      'id': 3,
      'title': 'Paltaryuyan Daewoo WM712T1WU0AZ',
      'price': 669,
      'payment': 37.17,
      'month' : 18,
      'cash': 120,
      'image': 'https://texnomart.az/wp-content/uploads/2022/11/texnomart-Daewoo-WM712T1WU0AZ-z3puxhybmr4j2gteak85.jpg',
      'category': 'baharEndirimleri'
    },
    {
      'id': 4,
      'title': 'Paltaryuyan Daewoo WM610T1SU0AZ',
      'price': 629,
      'payment': 34.94,
      'month' : 18,
      'cash': 100,
      'image': 'https://texnomart.az/wp-content/uploads/2022/11/texnomart-Daewoo-WM610T1SU0AZ-lewxvc819n7j5tba4oiy.jpg',
      'category': 'baharEndirimleri'
    },
    {
      'id': 5,
      'title': 'Paltaryuyan Daewoo WM612T1WU0AZ',
      'price': 629,
      'payment': 34.94,
      'month' : 18,
      'cash': 100,
      'image': 'https://texnomart.az/wp-content/uploads/2022/11/texnomart-Daewoo-WM712T1WU0AZ-z3puxhybmr4j2gteak85.jpg',
      'category': 'baharEndirimleri'
    }
    

  ]

  const nav = [
    {
      id: 1,
      name: 'Bahar müjdəsi endirimləri',
      src: nav1
    },
    {
      id: 2,
      name: 'Mobil cihazlar və planşetlər',
      src: nav2
    },
    {
      id: 3,
      name: 'Məişət texnikası',
      src: nav3
    },
    {
      id: 4,
      name: 'TV, audio və aksesuarlar',
      src: nav4
    },
    {
      id: 5,
      name: 'Kompüter texnikası',
      src: nav5
    },
    {
      id: 6,
      name: 'Gözəllik və sağlamlıq',
      src: nav6
    },
    {
      id: 7,
      name: 'Nəqliyyat',
      src: nav7
    },
    {
      id: 8,
      name: 'Saatlar va qolbaqlar',
      src: nav8
    },
    {
      id: 9,
      name: 'Oyunlar və əyləncə',
      src: nav9
    },
    {
      id: 10,
      name: 'Foto və video',
      src: nav10
    },
    {
      id: 11,
      name: 'Outlet',
      src: nav11
    }
  ]

  // const getPost = async () => {
  //   try {
  //     // PhoneData massivindəki hər bir obyekti ayrıca göndərmək üçün dövr istifadə edirik.
  //     for (const phone of baharEndirimleri) {
  //       const response = await axios.post(
  //         "https://6784ff4d1ec630ca33a6b6cb.mockapi.io/data",
  //         phone // JSON.stringify-dən istifadə etməyə ehtiyac yoxdur
  //       );
  //       console.log(response.data); // Hər uğurlu post cavabını konsolda göstərin
  //     }
  //   } catch (error) {
  //     console.error("Xəta baş verdi:", error);
  //   }
  // };
  // getPost()
  // useEffect(() => {
  //   getPost();
  // }, []);

  // const getPost = async () => {
  //  try {
  //   const response = await axios.post("https://6784ff4d1ec630ca33a6b6cb.mockapi.io/data", JSON.stringify(phoneData))
  //  } catch (error) {
  //   console.log(error);
  //  }
  // }
//   useEffect(() => {
//     getPost();
//    }, []);

  // const getPost = ()=> {
  //   try {
  //    fetch("https://6783b6388b6c7a1316f5510a.mockapi.io/product",{
  //      method: "POST",
  //      headers: {
  //        "Content-Type": "application/json",
  //    },
  //      body: JSON.stringify(phoneData)
  //  })
     
  //   } catch (error) {
  //    console.log(error);
  //   }
  //   getPost()
     
  // async function topla() {
  //   try {
  //     // Mövcud məlumatları əldə edin
  //     const response = await axios.get("https://6784ff4d1ec630ca33a6b6cb.mockapi.io/data");
  //     const data = response.data;
  
  //     // Hər bir mövcud elementi silin
  //     for (const item of data) {
  //       await axios.delete(`https://6784ff4d1ec630ca33a6b6cb.mockapi.io/data/${item.id}`);
  //       console.log(`Silindi: ${item.id}`);
  //     }
  
  //     console.log("Bütün məlumatlar silindi.");
  //   } catch (error) {
  //     console.error("Xəta baş verdi:", error);
  //   }
  // }
  
  // topla();
  
  


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };



  let data = {
    phoneData,
    nav,
    baharMujdesi,
    baharEndirimleri,
    cart, 
    addToCart
  }
  return (
    <GlobalContext.Provider value={data} >
      {children}
    </GlobalContext.Provider>
  )
}

export default Context