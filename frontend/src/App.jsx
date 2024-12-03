import './App.css';
import DataEntitas from './component/Data Entitas';
import DataUtama from './component/DataUtama';
import Navbar from './component/Navbar';
import NavBeranda from './component/NavBeranda';

function App() {
  return (
    <>
    <div className='w-full flex flex-col'>
      <Navbar/>
      <NavBeranda/>
      <DataUtama/>
      <DataEntitas/>
    </div>
    
    </>
  );
}

export default App;
