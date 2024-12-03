import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import EmergencyIcon from '@mui/icons-material/Emergency';
import { red } from '@mui/material/colors';

const DataPungutan = () => {
  const [dataPungutan, setDataPungutan] = useState({
    incoterms: '',
    valuta: '',
    kurs: '',
    nilai: '',
    biayaTambahan: '',
    biayaPengurangan: '',
    asuransi: '',
    asuransiBayarDi: '',
    freight: '',
    cif: '',
    cifRp: '',
    bruto: '',
    netto: '',
    nilaiFob: '',
    voluntaryDeclaration: '',
    flagKontainer: '',
  });

  useEffect(()=>{
    const fetchData = async () => {
        try{
            const response = await axios.get("http://10.8.3.199:1880/test/v2/dataPungutan?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2");
            
            if(response.data.status){
                setDataPungutan(response.data.data)
            } else {
                console.error("failed to fetch data: ", response.data.message)
            }
        } catch (err) {
            console.error("error fetching data: ", err);
        }
    };

    fetchData();
    
    }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataPungutan(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataPungutan);
  };

  return (
    <div className="p-6 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="w-full flex gap-6 justify-between">
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Incoterms <span className="text-red-500"><EmergencyIcon sx={{ color: 'red', fontSize: 5 }} /></span></label>
            <select
              name="incoterms"
              value={dataPungutan.incoterms}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
              required
            >
              <option>Free on Board</option>
            </select>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Valuta <span className="text-red-500"><EmergencyIcon sx={{ color: 'red', fontSize: 5 }} /></span></label>
            <select
              name="valuta"
              value={dataPungutan.valuta}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
              required
            >
              <option>Euro</option>
            </select>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Kurs</label>
            <input
              type="text"
              name="kurs"
              value={dataPungutan.kurs}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            />
          </div>
          <div className="w-[160px] h-[50px] bg-blue-950 rounded-lg flex items-center justify-center mt-5 cursor-pointer">
            <ChangeCircleIcon sx={{ color: 'white' }}/>
            </div>
        </div>

        <div className="w-full flex gap-1 justify-between py-6">
            <div className="flex flex-col">
                <label className="text-sm font-semibold">Nilai <span className="text-red-500"><EmergencyIcon sx={{ color: 'red', fontSize: 5 }} /></span></label>
                <input
                type="text"
                name="nilai"
                value={dataPungutan.nilai}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${dataPungutan.nilai ? 'bg-gray-200' : ''}`}
                required
                />
            </div>

            <div className="flex items-center pt-6 justify-center font-bold">
                <p> + </p>
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-semibold">Biaya Tambahan</label>
                <input
                type="text"
                name="biayaTambahan"
                value={dataPungutan.biayaTambahan}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${dataPungutan.biayaTambahan ? 'bg-gray-200' : ''}`}
                />
            </div>

            <div className="flex items-center pt-6 justify-center font-bold">
                <p> - </p>
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-semibold">Biaya Pengurangan</label>
                <input
                type="text"
                name="biayaPengurangan"
                value={dataPungutan.biayaPengurangan}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${dataPungutan.biayaPengurangan ? 'bg-gray-200' : ''}`}
                />
            </div>

            <div className="flex items-center pt-6 justify-center font-bold">
                <p> + </p>
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-semibold">Voluntary Declaration</label>
                <input
                type="text"
                name="voluntaryDeclaration"
                value={dataPungutan.voluntaryDeclaration}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${dataPungutan.voluntaryDeclaration ? 'bg-gray-200' : ''}`}
                />
            </div>

            <div className="flex items-center pt-6 justify-center font-bold">
                <p> = </p>
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-semibold">Nilai FOB</label>
                <input
                type="text"
                name="nilaiFOB"
                value={dataPungutan.nilaiFOB}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${dataPungutan.nilaiFOB ? 'bg-gray-200' : ''}`}
                />
            </div>
        </div>

        <div className="w-full flex gap-6 justify-between">
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Asuransi bayar di</label>
            <select
              name="bayardi"
              value={dataPungutan.asuransiBayarDi}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            >
              <option>Free on Board</option>
            </select>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Asuransi</label>
            <input
                type="text"
                name="asuransi"
                value={dataPungutan.asuransi}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${dataPungutan.asuransi ? 'bg-gray-200' : ''}`}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Freight</label>
            <input
              type="text"
              name="freight"
              value={dataPungutan.freight}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            />
          </div>
        </div>

        <div className="w-full flex justify-between py-6">
            <div className="flex flex-col">
                <label className="text-sm font-semibold">CIF</label>
                <input
                type="text"
                name="cif"
                value={dataPungutan.cif}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${dataPungutan.cif ? 'bg-gray-200' : ''}`}
                />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-semibold">CIF Rp</label>
                <input
                type="text"
                name="cifrp"
                value={dataPungutan.cifRp}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${dataPungutan.cifRp ? 'bg-gray-200' : ''}`}
                />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-semibold">Bruto</label>
                <input
                type="text"
                name="bruto"
                value={dataPungutan.bruto}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${dataPungutan.bruto ? 'bg-gray-200' : ''}`}
                />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-semibold">Netto</label>
                <input
                type="text"
                name="netto"
                value={dataPungutan.netto}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${dataPungutan.netto ? 'bg-gray-200' : ''}`}
                />
            </div>
            <div className="flex w-60 flex-col">
                <label className="text-sm font-semibold">Flag Kontainer <span className="text-red-500 align-top"><EmergencyIcon sx={{ color: 'red', fontSize: 5 }} /></span></label>
                <select
                    name="flag"
                    value={dataPungutan.flagKontainer}
                    onChange={handleChange}
                    className="border p-2 rounded mt-2"
                    required
                    >
                    <option>Kontainer</option>
                </select>
            </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
            <button type="button" className="bg-yellow-500 text-black font-medium px-4 py-2 rounded">Kelengkapan Data</button>
            <button type="submit" className="bg-blue-950 text-white font-semibold px-4 py-2 rounded mr-4">Simpan</button>
        </div>
      </form>
    </div>
  );
};

export default DataPungutan;
