import React from 'react'
import "./Wishlist.scss"
import { IoCloseCircleOutline } from 'react-icons/io5'

const Wishlist = () => {
  return (
    <section className='wishlistsection'>
        <h2>İstək siyahısı</h2> 

        <div className="wisboxs">
           <div className="wistext">
            <div className="textbox">
                <h2 className='textbox-h2'><span>İnformasiya</span></h2>
                <p className='textbox-p'>İstifadəçi hesabınıza daxil olmaqla istək siyahınıza əlavə etdiyiniz məhsulları yaddaşda saxlaya bilərsiniz. Əgər hesabınız yoxdursa qeydiyyatdan keçməyinizi tövsiyyə edirik.</p>
            </div>
            <div className="Passagelog">
                <h2 className='textbox-h2'><span>Hesabım</span></h2>
                <p><span>Daxil ol</span></p>
            </div>
           </div>
           <div className="wislisproducts">
            <div className="wislisproducts-text">
                <div className="producbox">
                    <span>Product</span>
                </div>
                <div className="product-name producbox">
                    <span>Product name</span>
                </div>
                <div className="stock-status producbox">
                    <span>Stock status</span>
                </div>
                <div className="unit-price producbox">
                    <span>Unit price</span>
                </div>
                <div className="order producbox">
                    <span>ORDER</span>
                </div>

            </div>
            <div className="wislisproduct">
                <div className="img">
                    <img src="https://texnomart.az/wp-content/uploads/2023/01/texnomart-Samsung-A04e-32GB-Black-c8vlgqxk15o0a2ywsreb-300x300.jpg" alt="" />
                </div>
                <div className="title img">
                    <span>Smartfon Samsung A04e 32GB Black</span>
                </div>
                <div className="stock img">
                    <span>Out of stock</span>
                </div>
                <div className="price img">
                    <span>999 <span>$</span></span>
                </div>
                <div className="delete img">
                <IoCloseCircleOutline className='delete-icone'/>
                </div>
            </div>
           </div>
        </div>   
    </section>
  )
}

export default Wishlist
