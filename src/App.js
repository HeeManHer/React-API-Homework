import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Laydout";
import Amiibo from "./page/Amiibo";
import AmiiboSearchResult from "./page/AmiiboSearchResult";
import Error from "./page/Error";
import Main from "./page/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main />} />
          <Route path="/amiibo">
            <Route index element={<Amiibo />} />
            <Route path="search" element={<AmiiboSearchResult />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
