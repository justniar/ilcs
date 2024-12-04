import React from 'react';

const IconPage = ({ activePage }) => {
  const icons = [
    { name: 'Pemberitahuan', src: 'https://img.icons8.com/dusk/50/city-buildings.png' },
    { name: 'Transportasi', src: 'https://img.icons8.com/dusk/50/airport.png' },
    { name: 'Dokumen', src: 'https://img.icons8.com/dusk/50/edit-property.png' },
    { name: 'Komoditi', src: 'https://img.icons8.com/dusk/50/send-box.png' },
    { name: 'Layanan', src: 'https://img.icons8.com/dusk/50/technical-support.png' },
  ];

  return (
    <div className="w-full p-5 flex justify-center space-x-20">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`flex flex-col space-y-2 items-center font-semibold cursor-pointer ${
            activePage === icon.name ? 'text-blue-950' : 'text-gray-400'
          }`}
        >
          <img
            width="50"
            height="50"
            src={icon.src}
            alt={icon.name.toLowerCase()}
            style={{
              filter: activePage === icon.name ? 'none' : 'grayscale(100%)',
            }}
          />
          <p>{icon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default IconPage;
