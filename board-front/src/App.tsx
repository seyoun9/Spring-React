import React, { useState } from 'react';
import './App.css';
import BoardItem from 'components/BoardItem';
import Top3Item from 'components/Top3Item';
import CommentItem from 'components/CommentItem';
import { latestBoardListMock, top3BoardListMock, commentListMock, favoriteListMock } from 'mocks';
import FavoriteItem from 'components/FavoriteItem';
import InputBox from 'components/InputBox';

function App() {

  const [value, setValue] = useState<string>('');

  return (
    <>
      {/* <div style={{ display: 'flex', justifyContent: 'center', gap: '24px'}}>
        {top3BoardListMock.map(top3ListItem => <Top3Item top3ListItem={top3ListItem}/>)}
      </div> */}
      {/* <div style={{ padding: '0 20px', display: 'flex', columnGap: '30px', rowGap: '20px'}}>
        {favoriteListMock.map(favoriteListItem => <FavoriteItem favoriteListItem={favoriteListItem}/>)}
      </div> */}
      <InputBox label='이메일' type='text' error={false} placeholder='이메일 주소를 입력해주세요.' value={value} setValue={setValue}/>

    </>
  );
}

export default App;
