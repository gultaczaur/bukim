import React, { useState, useEffect } from 'react';
import "./Wishlist.scss";
import { IoCloseCircleOutline } from 'react-icons/io5';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const navigate = useNavigate()

    // Lokal storage-dən məlumatları oxumaq
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('favorites')) || [];
        setWishlist(storedWishlist);
    }, []);

    // Məhsul silmək funksiyası
    const handleRemove = (id) => {
        const updatedWishlist = wishlist.filter((item) => item.id !== id);
        setWishlist(updatedWishlist);
        localStorage.setItem('favorites', JSON.stringify(updatedWishlist));
    };

    return (
        <>
            <Header />
            <section className='wishlistsection'>
                <h2>İstək siyahısı</h2>
                <div className="wisboxs">
                    <div className="wistext">
                        <div className="textbox">
                            <h2 className='textbox-h2'><span>İnformasiya</span></h2>
                            <p className='textbox-p'>
                                İstifadəçi hesabınıza daxil olmaqla istək siyahınıza əlavə etdiyiniz məhsulları yaddaşda saxlaya bilərsiniz. 
                                Əgər hesabınız yoxdursa qeydiyyatdan keçməyinizi tövsiyyə edirik.
                            </p>
                        </div>
                        <div className="Passagelog">
                            <h2 className='textbox-h2'><span>Hesabım</span></h2>
                            <p><span onClick={()=>navigate("/login")}>Daxil ol</span></p>
                        </div>
                    </div>
                    <div className="wislisproducts">
                        <div className="wislisproducts-text">
                            <div className="producbox"><span>Product</span></div>
                            <div className="product-name producbox"><span>Product name</span></div>
                            <div className="stock-status producbox"><span>Stock status</span></div>
                            <div className="unit-price producbox"><span>Unit price</span></div>
                            <div className="order producbox"><span>ORDER</span></div>
                        </div>

                        {/* Dinamik məhsul siyahısı */}
                        {wishlist.map((item) => (
                            <div className="wislisproduct" key={item.id}>
                                <div className="img">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="title img">
                                    <span>{item.title}</span>
                                </div>
                                <div className="stock img">
                                    <span>{item.stock ? 'In stock' : 'Out of stock'}</span>
                                </div>
                                <div className="price img">
                                    <span>{item.price} <span>$</span></span>
                                </div>
                                <div className="delete img">
                                    <IoCloseCircleOutline
                                        className='delete-icone'
                                        onClick={() => handleRemove(item.id)}
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Əgər siyahı boşdursa */}
                        {wishlist.length === 0 && (
                            <div className="empty-message">
                                <p>İstək siyahınız boşdur.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Wishlist;
