import React from 'react';
import './App.css';
import Footer from 'layouts/Footer';
import { Route, Routes } from 'react-router-dom';
import Main from 'views/Main';
import Authentication from 'views/Authentication';
import Search from 'views/Search';
import User from 'views/User';
import BoardDetail from 'views/Board/Detail';
import BoardWrite from 'views/Board/Write';
import BoardUpdate from 'views/Board/Update';
import Container from 'layouts/Container';
import { MAIN_PATH, AUTH_PATH, SEARCH_PATH, USER_PATH, BOARD_PATH, BOARD_WRITE_PATH, BOARD_UPDATE_PATH, BOARD_DETAIL_PATH } from 'constant';

// component: Application component
function App() {

  // render: Application Component Rendering

  // description: Main Page: "/"
  // description: SignIn/Up Page: "/auth"
  // description: Search Page: "/search/:word"
  // description: Board Detail Page: "/board/:boardNumber"
  // description: Board Write Page: "/board/write"
  // description: Board Update Page: "/board/update/:boardNumber"
  // description: User Page: "/user/:userEmail"

  return (
    <Routes>
      <Route element={<Container/>}>
        <Route path={MAIN_PATH()} element={<Main />} />
        <Route path={AUTH_PATH()} element={<Authentication />} />
        <Route path={SEARCH_PATH(':searchWord')} element={<Search />} />
        <Route path={USER_PATH(':userEmail')} element={<User />} />
        <Route path={BOARD_PATH()}>
          <Route path={BOARD_WRITE_PATH()} element={<BoardWrite />} />
          <Route path={BOARD_UPDATE_PATH(':boardNumber')} element={<BoardUpdate />} />
          <Route path={BOARD_DETAIL_PATH(':boardNumber')} element={<BoardDetail />} />
        </Route>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Route>
    </Routes>
  );
}

export default App;
