import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Laydout";
import Amiibo from "./page/Amiibo";
import AmiiboSearchResult from "./page/AmiiboSearchResult";
import BOTW from "./page/BOTW";
import Main from "./page/Main";
import BotwLayout from "./layout/BotwLayout";
import BOTWCreaturesDetail from "./page/BOTWCreaturesDetail";
import DetailRoute from "./layout/DetailRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >

          <Route index element={<Main />} />

          <Route path="amiibo">
            <Route index element={<Amiibo />} />
            <Route path="search" element={<AmiiboSearchResult />} />
          </Route>

          <Route path="botw" element={<BotwLayout />}>
            <Route path="/botw">
              <Route index element={<BOTW category='all' />} />
              <Route path=":id" element={<DetailRoute />} />
            </Route>

            <Route path="creatures">
              <Route index element={<BOTW category='creatures' />} />
              <Route path=":id" element={<DetailRoute />} />
            </Route>

            <Route path="monsters">
              <Route index element={<BOTW category='monsters' />} />
              <Route path=":id" element={<DetailRoute />} />
            </Route>

            <Route path="materials">
              <Route index element={<BOTW category='materials' />} />
              <Route path=":id" element={<DetailRoute />} />
            </Route>

            <Route path="equipment">
              <Route index element={<BOTW category='equipment' />} />
              <Route path=":id" element={<DetailRoute />} />
            </Route>

            <Route path="treasure">
              <Route index element={<BOTW category='treasure' />} />
              <Route path=":id" element={<DetailRoute />} />
            </Route>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
