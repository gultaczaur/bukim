import React from 'react'
import "./Corporatesales.scss"
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { MdPhoneInTalk } from 'react-icons/md'
import { TfiEmail } from 'react-icons/tfi'

const Corporatesales = () => {
  return (
    <section className='corporate-sec'>
        <h2>Korporativ satışlar</h2>

        <div className="corporate-text">
            <div className="img">
                <img src="https://texnomart.az/wp-content/uploads/2021/10/texnomart-texnomart-Korporativ-desk-vlw9pcoq1mih4jtrk6u0.png" alt="" />
            </div>
            <h4>Korporativ satışlar</h4>
            <p>Texnomart mağazalar şəbəkəsi olaraq yalnız pərakəndə satışlar yox, eyni zamanda korporativ müştərilərə topdan satış edən şirkət olduğumuzu da vurğulamalıyıq.</p>
            <p>Göstərdiyimiz bütün xidmətlərdə olduğu kimi, burada da hər bir müştərimizə fərdi yanaşma nümayiş etdiririk. Müştərilərimizə korporativ satışların təmin edilməsi məqsədi ilə özəl menecer təyin edilməsi buna nümunədir.</p>
            <p>Həmçinin, korporativ müştərilərimiz üçün eksklüziv şərtlər də tərəfimizdən təklif olunur.</p>
            <p>Bundan başqa, Texnomart olaraq korporativ məhsul alışı zamanı ödəmələri köçürmə yolu ilə etmə imkanı da yaradırıq.</p>
            <p>Qeyd etməliyik ki, bizimlə birgə korporativ əməkdaşlığa bazarda böyük pay sahibi şirkətlər və dövlət müəssisələri üstünlük verir.</p>
            <p>Müştərilərimiz korporativ satışlar zamanı texnomart.az saytında olmayan məhsulları belə sifarişlə əldə edə bilmək imkanına sahibdir.</p>
            <p>Bizimlə əməkdaşlıq üçün aşağıdakı əlaqə vasitələrindən birini seçə bilərsiniz:</p>
            <p><IoPhonePortraitOutline className='icone'/> 051 252 14 15</p>
            <p><MdPhoneInTalk className='icone'/> 012 488 07 77</p>
            <p><TfiEmail className='icone'/> corporate@texnomart.az</p>
        </div>
    </section>
  )
}

export default Corporatesales
