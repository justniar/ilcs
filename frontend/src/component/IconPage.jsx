import React from 'react'

const IconPage = () => {
  return (
    <div className='w-full p-5 flex justify-center space-x-20'>
        <div className="flex flex-col space-y-2 items-center font-semibold cursor-pointer">
            <img width="50" height="50" src="https://img.icons8.com/dusk/50/city-buildings.png" alt="city-buildings" />
            <p>Pemberitahuan</p>
          </div>
          
          <div className="flex flex-col space-y-2 items-center font-semibold cursor-pointer">
            <img width="50" height="50" src="https://img.icons8.com/dusk/50/airport.png" alt="airport" />
            <p>Transportasi</p>
          </div>
          
          <div className="flex flex-col space-y-2 items-center font-semibold cursor-pointer">
            <img width="50" height="50" src="https://img.icons8.com/dusk/50/edit-property.png" alt="edit-property" />
            <p>Dokumen</p>
          </div>
          
          <div className="flex flex-col space-y-2 items-center font-semibold cursor-pointer">
            <img width="50" height="50" src="https://img.icons8.com/dusk/50/send-box.png" alt="send-box" />
            <p>Komoditi</p>
          </div>
          
          <div className="flex flex-col space-y-2 items-center font-semibold cursor-pointer">
            <img width="50" height="50" src="https://img.icons8.com/dusk/50/technical-support.png" alt="technical-support" />
            <p>Layanan</p>
          </div>  
    </div>
  )
}

export default IconPage