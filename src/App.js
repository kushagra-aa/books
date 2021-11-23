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
    title: "textbooks maths",
    detail: "class x",
  },
];
let mid = [
  {
    sno: 1,
    text: "class IX",
  },
  {
    sno: 2,
    text: "class X",
  },
  {
    sno: 3,
    text: "class XI",
  },
  {
    sno: 4,
    text: "class XII",
  },
  {
    sno: 5,
    text: "IIT",
  },
  {
    sno: 6,
    text: "NEET",
  },
  {
    sno: 6,
    text: "ICSE",
  },
  {
    sno: 6,
    text: "ICSE",
  },
  {
    sno: 7,
    text: "GOVT.",
  },
  {
    sno: 8,
    text: "ENGG.",
  },
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
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80",
      title: "Harry Porter 2",
      price: "200",
      discount: "60",
    },
    {
      img: "https://images.unsplash.com/photo-1519764340700-3db40311f21e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
      title: "Harry Porter 3",
      price: "700",
      discount: "50",
    },
    {
      img: "https://images.unsplash.com/photo-1547555999-14e818e09e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
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
      img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      title: "ISC Maths",
      price: "800",
      discount: "20",
    },
    {
      img: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
      title: "ISC Science",
      price: "400",
      discount: "50",
    },
    {
      img: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "ISC English",
      price: "500",
      discount: "40",
    },
    {
      img: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80",
      title: "ISC Hindi",
      price: "900",
      discount: "10",
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
