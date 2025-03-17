import { useRef, useState } from "react"
import Burgers from "./components/burgers"
import Cart from "./components/cart"
import CartIcon from "./assets/icons/cart"

function App() {
  const [list, setList] = useState([]);
  const [val, setVal] = useState("");
  const [left, setLeft] = useState("100%");
  const modal = useRef(null)


  const hideCart = (e) => {
    if (e.target === modal.current) {
      setLeft("100%")
    }
  }

  return (
    <div className="max-w-[1320px] w-[80%] mx-[auto] my-[100px]">
      <div className="flex">
        <input
          type="text"
          placeholder="Axtar..."
          className="w-[60%] mx-[auto] block border border-gray-400 p-2 rounded-lg outline-none focus:border-[#0f6ec8f4]"
          onChange={(e) => setVal(e.target.value.toLowerCase())}
        />
        <div className="relative"
          onClick={() => setLeft("0")}
        >
          <CartIcon />
          {list.length ?
            <span className="absolute top-[-10px] right-[-10px] text-[13px] text-[violet]">{list.reduce((acc, item) => acc += item.count, 0)}</span> : null
          }
        </div>
      </div>
      <div className="mt-[30px]">
        <Burgers
          list={list}
          setList={setList}
          val={val}
        />
      </div>
      <div
        className={`fixed top-0 right-[0] bottom-0 bg-[#2926269e] w-full  backdrop-blur-[10px] flex justify-end transition-[.3s]`}
        onClick={hideCart}
        style={{ left: left }}
        ref={modal}
      >
        <Cart
          list={list}
          setList={setList}
        />
      </div>
    </div >
  )
}

export default App