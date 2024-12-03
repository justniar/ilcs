import './App.css';
import DataEntitas from './component/Data Entitas';
import DataUtama from './component/DataUtama';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
    <div className='w-full flex flex-col'>
      <Navbar/>
      <DataUtama/>
      <DataEntitas/>
    </div>
    
    </>
  );
}

export default App;
