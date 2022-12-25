
import './App.css';
import Cart from './Components/Cart/Cart';
import AllCatigories from './Components/Filter/AllCatigories';
import Jewels from './Components/JewelsComponent/Jewels';
import Picture from './Picture';

function App() {
  return (
    <div>
    <div>
    <Picture/>
    </div>
  
    <div className="App">
      <div className='block'>
      <AllCatigories/>
      <Cart/>
      </div>

      <div className='block'>
      <Jewels/>
      </div>
      
    </div>
    </div>
  );
}

export default App;
