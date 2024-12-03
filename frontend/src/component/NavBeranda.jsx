import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';

const NavBeranda = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 text-blue-900 shadow-md">
      <div className="flex items-center space-x-2">
        <p className="text-lg">/ Beranda</p>
        <p className="text-lg">/ SSCM OC</p>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <ArrowBackIosIcon />
          <p className="text-blue-900">Beranda permohonan</p> 
        </div>
        <div className="flex items-center space-x-2">
          <HomeIcon />
          <p className="text-blue-900">Beranda Menu</p>
        </div>
      </div>
    </nav>  
  )
}

export default NavBeranda
