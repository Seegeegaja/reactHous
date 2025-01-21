import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Modal from "./Modal";
import Data from "./component/data";

function App() {
  const [data, setData] = useState(Data);
  let [menu, setMenu] = useState(["Home", "Shop", "About"]);
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
        <div  className="showMo">
          처음처럼 가격👆👇 상품명👆👇
        </div>
        <div>
          {showmodal == true ? 
          <Modal data={data} 
          index={index} 
          setShowModal={setShowModal}
          showmodal={showmodal}/> : null}
        </div>
        {data.map(function (x, y) {
          return (
            <div key={x.id}>
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
                  <img src={data[y].image}></img>
                  <br />
                  {data[y].title}
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
                <p>{data[y].price}만원</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
