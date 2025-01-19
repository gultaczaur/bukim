import { useContext, useState, useEffect } from "react";
import "./search.css";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { GiScales } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import Footer from "../../Components/Footer/Footer";
import { GlobalContext } from "../../Context/Context";
import Header from "../../Components/Header/Header";
import Cards from "../../Components/Cards/Cards";

const Search = () => {
  const { phoneData, baharMujdesi, baharEndirimleri } = useContext(GlobalContext);
  const navigate = useNavigate();

  const combinedData = [...phoneData, ...baharMujdesi, ...baharEndirimleri];

  const [sortedProducts, setSortedProducts] = useState(combinedData);
  const [searchQuery, setSearchQuery] = useState("");



  const handleSearch = (value) => {
    setSearchQuery(value);

    const filteredProducts = combinedData.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setSortedProducts(filteredProducts);
  };

  // const handleSort = (sortType) => {
  //   let sorted = [...sortedProducts];

  //   if (sortType === "a-z") {
  //     sorted.sort((a, b) => a.name.localeCompare(b.name));
  //   } else if (sortType === "z-a") {
  //     sorted.sort((a, b) => b.name.localeCompare(a.name));
  //   } else if (sortType === "ucuzdan-bahaliya") {
  //     sorted.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
  //   } else if (sortType === "bahalidan-ucuza") {
  //     sorted.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
  //   }

  //   setSortedProducts(sorted);
  // };
  const handleSort = (sortType) => {
    let sorted = [...sortedProducts];

    if (sortType === "a-z") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "z-a") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortType === "ucuzdan-bahaliya") {
      sorted.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    } else if (sortType === "bahalidan-ucuza") {
      sorted.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    }

    setSortedProducts(sorted);
  };

  const handleGoBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const hoverEffect = (selector, hoverIn, hoverOut) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        el.addEventListener("mouseover", hoverIn);
        el.addEventListener("mouseout", hoverOut);
      });

      return () => {
        elements.forEach((el) => {
          el.removeEventListener("mouseover", hoverIn);
          el.removeEventListener("mouseout", hoverOut);
        });
      };
    };

    const productHoverIn = (e) => {
      const randomColor = ["red", "blue", "green", "yellow"][Math.floor(Math.random() * 4)];
      e.target.style.color = randomColor;
      e.target.style.transform = "scale(1.1)";
    };

    const productHoverOut = (e) => {
      e.target.style.color = "";
      e.target.style.transform = "scale(1)";
    };

    return hoverEffect(".product-name, .product-description, .title", productHoverIn, productHoverOut);
  }, []);

  return (
    <>
      <Header />
      <div className="search-page">
        <div className="inpRes">
          <div className="search-res">
            <div className="search-container">
              <input
                type="text"
                value={searchQuery}
                placeholder="Search by name..."
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="search-res2">
            <div className="sorting-buttons">
              <button onClick={() => handleSort("a-z")}>A-Z</button>
              <button onClick={() => handleSort("z-a")}>Z-A</button>
              <button onClick={() => handleSort("ucuzdan-bahaliya")}>
                Ucuzdan-bahaliya
              </button>
              <button onClick={() => handleSort("bahalidan-ucuza")}>
                Bahalidan-ucuza
              </button>
            </div>
          </div>
        </div>
        <h1 className="title">Sizin Üçün Tapdıq</h1>
        <div className="product-grid">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => <Cards key={product.id} item={product} />)
          ) : (
            <p className="no-results">Belə bir məhsul mövcud deyil</p>
          )}

        </div>
        <Footer />
      </div>
    </>
  );
};

export default Search;
