import React, { useState } from 'react'
import "./Question.scss"
import { TiMinus, TiPlus } from 'react-icons/ti'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Question = () => {

    let [disicone,setdisicone] = useState({
        box1: true,
        box2:true,
        box3:true,
        box4:true,
        box5:true,
        box6:true,
        box7:true
    })
    let [animeicon,setanimeicone] = useState({
        box1: true,
        box2:true,
        box3:true,
        box4:true,
        box5:true,
        box6:true,
        box7:true
    })
    

    const animefunc = (a) => {
        setanimeicone((prevState) => ({
            ...prevState,
            [a]: !prevState[a] 
        }));
        setTimeout(() => {
            setdisicone((prevState) => ({
                ...prevState,
                [a]: !prevState[a] 
            })); 
        }, 100);    
    }


  return (
    <>
    <Header/>
    <section className='question-sec'>

        <h3>Tez-tez verilən suallar</h3>  

        <div className="quest-boxs">
            <div onClick={() => animefunc("box1")} className={animeicon.box1 ? "questbox" : "questbox quest-boxs-start"}>
                <h2>Alış veriş zamanı taksit kartları keçərlidir?</h2>
                <p>Texnomart mağazalar şəbəkəsində alış-veriş zamanı siz, BirKart, Tamkart, Bolkart, Albalı və Worldcard, Smilecard taksit kartlarınız ilə <span>İLKİN ÖDƏNİŞSİZ, FAİZSİZ və KOMİSSİYASIZ</span> 18 ayadək faizsiz ödəmə edə bilərəsiniz.</p>
                <div className="icone">
                <TiPlus style={{"display": disicone.box1 ? "block" : "none" }} className={animeicon ? "plusStart" : "plusEnd"}/>
                <TiMinus style={{"display": disicone.box1 ? "none" : "block" }} className={animeicon ? "minusEnd" : "minusStart"}/>
                </div>
            </div>  
            <div onClick={() => animefunc("box2")} className={animeicon.box2 ? "questbox" : "questbox quest-boxs-start"}>
                <h2>Aylıq kredit borcunu online ödəmək mümkündür?</h2>
                <p>Mağazaya yaxınlaşmadan “MilliÖn” terminalı vasitəsi ilə aylıq kredit borcunuzu online şəkildə ödəyə bilərsiniz.
Eyni zamanda kredit ödənişlərini online qaydada linkə daxil olaraq plastik kartlar (Visa, Master) vasitəsi ilə də ödəyə bilərsiniz: Link:<a href="https://million.az/">https://million.az/</a></p>
                <div className="icone">
                <TiPlus style={{"display": disicone.box2 ? "block" : "none" }} className={animeicon.box2 ? "plusStart" : "plusEnd"}/>
                <TiMinus style={{"display": disicone.box2 ? "none" : "block" }} className={animeicon.box2 ? "minusEnd" : "minusStart"}/>
                </div>
            </div>   
            <div onClick={() => animefunc("box3")} className={animeicon.box3 ? "questbox" : "questbox quest-boxs-start"}>
                <h2>Online sifariş hansı şəhərlərdə keçərlidir?</h2>
                <p>Naxçıvan MR istisna olmaqla Respublika ərazisində olan bütün bölgələrdən olan şəxslər saytdan online sifarişdən yararlana bilərlər.</p>
                <div className="icone">
                <TiPlus style={{"display": disicone.box3 ? "block" : "none" }} className={animeicon.box3 ? "plusStart" : "plusEnd"}/>
                <TiMinus style={{"display": disicone.box3 ? "none" : "block" }} className={animeicon.box3 ? "minusEnd" : "minusStart"}/>
                </div>
            </div> 
            <div onClick={() => animefunc("box4")} className={animeicon.box4 ? "questbox" : "questbox quest-boxs-start"}>
                <h2>Məhsulu geri qaytarmaq mümkündür?</h2>
                <p>Texnomart mağazalar şəbəkəsindən əldə etdiyiniz məhsulu alınma günü nəzərə alınmama şərti ilə 14 gün ərzində dəyişdirə və ya qaytara bilərsiniz. Ətraflı məlumatı <a href="https://beta.texnomart.az/return-policy">geri qaytarılma siyasəti</a> bölməmizdən əldə edə bilərsiniz.</p>
                <div className="icone">
                <TiPlus style={{"display": disicone.box4 ? "block" : "none" }} className={animeicon.box4 ? "plusStart" : "plusEnd"}/>
                <TiMinus style={{"display": disicone.box4 ? "none" : "block" }} className={animeicon.box4 ? "minusEnd" : "minusStart"}/>
                </div>
            </div> 
            <div onClick={() => animefunc("box5")} className={animeicon.box5 ? "questbox boxheightendtader" : "questbox boxheightstartader"}>
                <h2>Online alış zamanı hansı ödəniş növləri keçərlidir?</h2>
                <p>Saytdan online sifariş zamanı aşağıda qeyd edilmiş ödəniş növləri keçərlidir:
                    <em>1. Qapıda nağd ödəniş</em>
                    <em>2. Saytda online ödəniş</em>
                    <em>3. BirKart ilə ödəniş</em>
                    <em>4. Tamkart ilə ödəniş</em>
                    <em>Nəzərinizə çatdırmaq istəyirik ki, online ödəniş zamanı “BirKart ilə ödəniş” və “Tamkart ilə ödəniş” seçimləri ilə sizə təklif olunan aylardan birini seçərək məhsulunuzu taksitlə əldə edə bilərsiniz.</em>
                </p>
                <div className="icone">
                <TiPlus style={{"display": disicone.box5 ? "block" : "none" }} className={animeicon.box5 ? "plusStart" : "plusEnd"}/>
                <TiMinus style={{"display": disicone.box5 ? "none" : "block" }} className={animeicon.box5 ? "minusEnd" : "minusStart"}/>
                </div>
            </div> 
            <div onClick={() => animefunc("box6")} className={animeicon.box6 ? "questbox" : "questbox quest-boxs-start"}>
                <h2>Quraşdırılma neçə gün ərzində həyata keçirilir?</h2>
                <p>Paltaryuyan və qabyuyanların quraşdırılması Bakı şəhər daxilində çatdırılmadan sonrakı 1 gün ərzində, bölgələrdə isə 3 gün ərzində həyata keçirilir.

Kondisionerlərin quraşdırılması Bakı şəhər daxilində çatdırılmadan sonrakı 1 gün ərzində, bölgələrdə isə 3 gün ərzində həyata keçirilir. Yay fəslində bu müddət 5 günə kimi ola bilər.</p>
                <div className="icone">
                <TiPlus style={{"display": disicone.box6 ? "block" : "none" }} className={animeicon.box6 ? "plusStart" : "plusEnd"}/>
                <TiMinus style={{"display": disicone.box6 ? "none" : "block" }} className={animeicon.box6 ? "minusEnd" : "minusStart"}/>
                </div>
            </div> 
            <div onClick={() => animefunc("box7")} className={animeicon.box7 ? "questbox boxheightendtader" : "questbox boxheightstartader"}>
                <h2>Mağazalarınız harada yerləşir?</h2>
                <p>
                    <em style={{marginBottom: "20px"}}>Bakı şəhəri ərazisində yerləşən mağazalarımızın siyahısı:
                    Babək, Bakıxanov, Əcəmi, Nərimanov, Sədərək</em>

                    <em style={{marginBottom: "20px"}}>Bölgələrdə yerləşən mağazalarımızın siyahısı:
                    Ağcabədi, Ağdaş, Ağsu, Bərdə, Gəncə, Göyçay, İmişli, İsmayıllı, Lənkəran, Masallı, Mingəçevir, Nərimanov, Quba, Sabirabad, Salyan, Şəki, Şəmkir, Şirvan, Sumqayıt, Tovuz, Xaçmaz, Xırdalan, Yevlax və Zaqatala</em>

                    <em style={{marginBottom: "20px"}}>Mağazalarımızın ünvan və əlaqə nömrələri ilə aşağıdakı linkdən ətraflı məlumat əldə edə bilərsiniz: <a href="">Magazalar!</a></em>
                </p>
                <div className="icone">
                <TiPlus style={{"display": disicone.box7 ? "block" : "none" }} className={animeicon.box7 ? "plusStart" : "plusEnd"}/>
                <TiMinus style={{"display": disicone.box7 ? "none" : "block" }} className={animeicon.box7 ? "minusEnd" : "minusStart"}/>
                </div>
            </div> 
        </div>    
    </section>
    <Footer/>
    </>
  )
}

export default Question
