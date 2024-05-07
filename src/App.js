import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopNav from 'components/top-nav/top-nav';

import { ROUTES } from './router/routes';

import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route
            path={ROUTES.HOME.path}
            exact={true}
            element={ROUTES.HOME.element}
          />
          <Route
            path={ROUTES.LISTINGS.path}
            exact={true}
            element={ROUTES.LISTINGS.element}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
