import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';

const NavBeranda = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 text-blue-900 font-semibold shadow-md">
      <div className="flex items-center space-x-2 cursor-pointer">
        <p className="text-md">/ Beranda</p>
        <p className="text-md">/ SSCM OC</p>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 cursor-pointer">
          <ArrowBackIosIcon />
          <p className="text-blue-900">Beranda permohonan</p> 
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <HomeIcon />
          <p className="text-blue-900">Beranda Menu</p>
        </div>
      </div>
    </nav>  
  )
}

export default NavBeranda
