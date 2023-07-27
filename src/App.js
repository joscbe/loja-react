import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { ProdutosPage } from './pages/Produtos/ProdutosPage';
import { HeaderPartial } from './partials/HeaderPartial/HeaderPartial';
import { CarrinhoPage } from './pages/Carrinho/CarrinhoPage';
import { AppContext } from "./store/AppContext";

const initialState = {
  cart: [],
  activeProductId: null,
  type: null,
  products: []
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState}>
          <HeaderPartial />
          <Routes>
            <Route path='/' element={<ProdutosPage />}/>
            <Route path='/carrinho' element={<CarrinhoPage />}/>
          </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
