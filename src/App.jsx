import { Header } from "./components/Header";
import { ProductList } from "./components/Products/ProductList";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
