import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './container/App';
import { Login, About, Home, Register, WorkSpace } from "./components/index";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import store from './store/store';
import { Provider } from 'react-redux';
import { AuthProvider, RequireAuth } from 'react-auth-kit';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AuthProvider
        authType={'cookie'}
        authName={'_auth'}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path='login' element={<Login />} />
              <Route path='about' element={<About />} />
              <Route path='register' element={<Register />} />
              <Route path='workspace' element={<RequireAuth loginPath='/login'><WorkSpace /></RequireAuth>}>
              </Route>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
