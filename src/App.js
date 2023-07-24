import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { ProdutosPage } from './pages/Produtos/ProdutosPage';
import { HeaderPartial } from './partials/HeaderPartial/HeaderPartial';
import { CarrinhoPage } from './pages/Carrinho/CarrinhoPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPartial />
        <Routes>
          <Route path='/' element={<ProdutosPage />}/>
          <Route path='/carrinho' element={<CarrinhoPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
