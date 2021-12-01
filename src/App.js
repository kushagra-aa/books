import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import banner1 from "./assets/banners/top-picks.png";
import banner2 from "./assets/banners/kids-books.png";

let top = [
  {
    sno: 1,
    img: banner1,
    title: "Top Picks Banner",
  },
  {
    sno: 2,
    img: banner2,
    title: "Kids Books Banner",
  },
];
let authors = [
  {
    sno: 1,
    title: "Stephen King",
    img: "https://byliner.com/wp-content/uploads/2019/09/Stephen-King.png",
  },
  {
    sno: 2,
    title: "J.K. Rowling",
    img: "https://byliner.com/wp-content/uploads/2021/02/200610-jk-rowling-al-1348_c9a1eed578999b876d0ef072061a87c3-e1614868715128.jpg",
  },
  {
    sno: 3,
    title: "Amy Tan",
    img: "https://byliner.com/wp-content/uploads/2021/02/22sugarcalling-superJumbo-e1614869197313.jpg",
  },
  {
    sno: 4,
    title: "Tana French",
    img: "https://byliner.com/wp-content/uploads/2021/02/tana-french-author-portrait-e1614870701475.jpg",
  },
  {
    sno: 5,
    title: "George R.R Martin",
    img: "https://byliner.com/wp-content/uploads/2019/09/George-R.R-Martin.png",
  },
  {
    sno: 6,
    title: "Danzy Senna",
    img: "https://byliner.com/wp-content/uploads/2021/02/page-header-e1614871265282.jpg",
  },
  {
    sno: 8,
    title: "Gillian Flynn",
    img: "https://byliner.com/wp-content/uploads/2019/09/Gillian-Flynn.png",
  },
];
let genres = [
  {
    img: "https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Romance",
  },
  {
    img: "https://images.unsplash.com/photo-1637168974468-1cc2a370b4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    title: "SiFi",
  },
  {
    img: "https://images.unsplash.com/photo-1603145066679-c172b5914220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    title: "Fantasy",
  },
];
let topPicks = {
  title: "Top Picks",
  books: [
    {
      img: "https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-1.jpg&w=1920&q=75",
      title: "Harry Potter and the Philosopher's Stone",
      price: "500",
      discount: "50.1",
    },
    {
      img: "https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-2.jpg&w=1920&q=75",
      title: "Harry Potter and the Chamber of Secrets",
      price: "200",
      discount: "60",
    },
    {
      img: "https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-3.jpg&w=1920&q=75",
      title: "Harry Potter and the Prisoner of Azkaban",
      price: "700",
      discount: "50",
    },
    {
      img: "https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-4.jpg&w=1920&q=75",
      title: "Harry Potter and the Goblet of Fire",
      price: "500",
      discount: "20",
    },
  ],
};
let bestSellers = {
  title: "Best Sellers",
  books: [
    {
      img: "https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-5.jpg&w=1920&q=75",
      title: "Harry Potter and the Order of the Phoenix",
      price: "800",
      discount: "20",
    },
    {
      img: "https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-6.jpg&w=1920&q=75",
      title: "Harry Potter and the Half-Blood Prince",
      price: "400",
      discount: "50",
    },
    {
      img: "https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-7.jpg&w=1920&q=75",
      title: "Harry Potter and the Deathly Hallows",
      price: "500",
      discount: "40",
    },
    {
      img: "https://www.wizardingworld.com/_next/image?url=%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-8.jpg&w=1920&q=75",
      title: "Harry Potter and the Cursed Child - Parts One and Two",
      price: "900",
      discount: "10",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <Header />
      <Home
        top={top}
        authors={authors}
        genres={genres}
        topPicks={topPicks}
        bestSellers={bestSellers}
      />
      <Footer />
    </div>
  );
}

export default App;
