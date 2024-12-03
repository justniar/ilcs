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
      <div className='w-80vw m-8 p-10 bg-white'>
        <div className='w-full p-5 flex justify-center space-x-20'>
          <div className="flex flex-col items-center">
            <img width="64" height="64" src="https://img.icons8.com/dusk/64/city-buildings.png" alt="city-buildings" />
            <p>Pemberitahuan</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img width="64" height="64" src="https://img.icons8.com/dusk/64/airport.png" alt="airport" />
            <p>Transportasi</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img width="64" height="64" src="https://img.icons8.com/dusk/64/edit-property.png" alt="edit-property" />
            <p>Dokumen</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img width="64" height="64" src="https://img.icons8.com/dusk/64/send-box.png" alt="send-box" />
            <p>Komoditi</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img width="64" height="64" src="https://img.icons8.com/dusk/64/technical-support.png" alt="technical-support" />
            <p>Layanan</p>
          </div>
        </div>

        <div className='text-blue-900 font-bold'>
          <p>Data Pemberitahuan</p>
        </div>
        <DataUtama/>
        <DataEntitas/>
      </div>
      
    </div>
    
    </>
  );
}

export default App;
