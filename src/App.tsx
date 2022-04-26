import Feed from './components/feed';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from  '@fortawesome/pro-light-svg-icons'

import './App.css';

function App() {
  return (
    <div className="App">
      <Feed />
    </div>
  );
}

library.add(fal);

export default App;
