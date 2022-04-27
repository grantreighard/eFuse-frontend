import Feed from './components/feed';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import PostsContextProvider from './contexts/postContext';

import './App.css';

function App() {
  return (
    <PostsContextProvider>
      <div className="App">
        <Feed />
      </div>
    </PostsContextProvider>
  );
}

library.add(fal, far, fas);

export default App;
