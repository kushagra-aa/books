import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

let top = [
  {
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
    title: "sell your Books & earn money",
    detail: "pickup from home",
  },
  {
    img: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "sell your Books & earn money",
    detail: "pickup from home",
  },
];
let mid = [
  "class IX",
  "class X",
  "class XI",
  "class XII",
  "IIT",
  "NEET",
  "ICSE",
  "GOVT.",
  "ENGG.",
];
let btm = [
  {
    img: "https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Romance",
  },
  {
    img: "https://images.unsplash.com/photo-1637168974468-1cc2a370b4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    title: "SiFi",
  },
];
let feat = {
  title: "Featured Novels",
  books: [
    {
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Harry Porter 1",
      price: "500",
      discount: "50.1",
    },
    {
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Harry Porter 2",
      price: "200",
      discount: "60",
    },
    {
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Harry Porter 3",
      price: "700",
      discount: "50",
    },
    {
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Harry Porter 4",
      price: "500",
      discount: "20",
    },
  ],
};
let isc = {
  title: "ISC Board best picks",
  books: [
    {
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Harry Porter 1",
      price: "500",
      discount: "50.1",
    },
    {
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Harry Porter 2",
      price: "200",
      discount: "60",
    },
    {
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Harry Porter 3",
      price: "700",
      discount: "50",
    },
    {
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Harry Porter 4",
      price: "500",
      discount: "20",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <Header />
      <Home top={top} mid={mid} btm={btm} feat={feat} isc={isc} />
      <Footer />
    </div>
  );
}

export default App;
