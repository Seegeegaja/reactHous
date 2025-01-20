import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  let [menu, setMenu] = useState(["Home", "Shop", "About"]);
  let [price, setPrice] = useState([50, 55, 70]);
  let [products, setProducts] = useState([
    "역삼동 원룸",
    "천호동 원룸",
    "마포구 원룸",
  ]);
  let [content, setContent] = useState([
    "침실만 따로 있는 공용 셰어하우스입니다. 최대 2인 가능",
    "2층 원룸입니다. 비올 때 물 가씀 들어오는거 빼면 좋아요",
    "살기 좋아요. 주변에 편의점 10개 넘어요",
  ]);
  let [count, setCount] = useState([0, 0, 0]);
  let [showmodal, setShowModal] = useState(false);
  let [index, setIndex] = useState([0, 1, 2]);

  function addPohne(num) {
    let copy = [...count];
    copy[num] = copy[num] + 1;
    setCount([...copy]);
  }

  return (
    <div className="App">
      <div className="back-main">
        <div className="menu">
          {menu.map((x) => {
            return <a href="#">{x}</a>;
          })}
        </div>
        {products.map(function (x, y) {
          return (
            <div>
              <div className="product-list">
                <h4
                  onClick={() => {
                    setIndex(y);
                    if (index === y && showmodal) {
                      setShowModal(false);
                      setIndex(null);
                    } else {
                      setIndex(y);
                      setShowModal(true);
                    }
                  }}
                >
                  {products[y]}
                </h4>
                <span
                  onClick={() => {
                    addPohne(y);
                  }}
                >
                  ☎ 허위매물신고 {count[y]}
                </span>
              </div>
              <div className="product-list">
                <p>{price[y]}만원</p>
              </div>
            </div>
          );
        })}
      </div>
      {showmodal == true ? (
        <Modal content={content[index]} price={price[index]} />
      ) : null}
    </div>
  );
}

export default App;
