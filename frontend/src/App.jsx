import './App.css';
import DataEntitas from './component/Data Entitas';
import DataPungutan from './component/Data Pungutan';
import DataUtama from './component/DataUtama';
import Navbar from './component/Navbar';
import NavBeranda from './component/NavBeranda';


function App() {
  return (
    <>
    <div className='w-full flex flex-col'>
      <Navbar/>
      <NavBeranda/>
      <div className='w-80vw m-8 p-10 bg-white'>
        <div className='w-full p-5 flex justify-center space-x-20'>
          <div className="flex flex-col space-y-2 items-center font-semibold">
            <img width="50" height="50" src="https://img.icons8.com/dusk/50/city-buildings.png" alt="city-buildings" />
            <p>Pemberitahuan</p>
          </div>
          
          <div className="flex flex-col space-y-2 items-center font-semibold">
            <img width="50" height="50" src="https://img.icons8.com/dusk/50/airport.png" alt="airport" />
            <p>Transportasi</p>
          </div>
          
          <div className="flex flex-col space-y-2 items-center font-semibold">
            <img width="50" height="50" src="https://img.icons8.com/dusk/50/edit-property.png" alt="edit-property" />
            <p>Dokumen</p>
          </div>
          
          <div className="flex flex-col space-y-2 items-center font-semibold">
            <img width="50" height="50" src="https://img.icons8.com/dusk/50/send-box.png" alt="send-box" />
            <p>Komoditi</p>
          </div>
          
          <div className="flex flex-col space-y-2 items-center font-semibold">
            <img width="50" height="50" src="https://img.icons8.com/dusk/50/technical-support.png" alt="technical-support" />
            <p>Layanan</p>
          </div>
        </div>

        <div className='text-blue-900 font-bold'>
          <p>Data Pemberitahuan</p>
        </div>
        <DataUtama/>
        <DataEntitas/>
        <DataPungutan/>
      </div>
      
    </div>
    
    </>
  );
}

export default App;
