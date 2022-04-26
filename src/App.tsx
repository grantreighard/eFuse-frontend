import Feed from './components/feed';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
  return (
    <div className="App">
      <Feed />
    </div>
  );
}

library.add(fal, far, fas);

export default App;
