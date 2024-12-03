import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

const DataPungutan = () => {
  const [formData, setFormData] = useState({
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

  useEffect(() => {
    axios.get('http://10.8.3.199:1880/test/v2/dataPungutan?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2')
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-6 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="w-full flex gap-6 justify-between">
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Incoterms</label>
            <select
              name="incoterms"
              value={formData.incoterms}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            >
              <option>Free on Board</option>
            </select>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Valuta</label>
            <select
              name="valuta"
              value={formData.valuta}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            >
              <option>Euro</option>
            </select>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Kurs</label>
            <input
              type="text"
              name="kurs"
              value={formData.kurs}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            />
          </div>
          <div className="w-[160px] h-[50px] bg-blue-950 rounded-lg flex items-center justify-center mt-5">
            <ChangeCircleIcon sx={{ color: 'white' }}/>
            </div>
        </div>

        <div className="w-full flex gap-4 justify-between py-6">
            <div className="flex flex-col">
                <label className="text-sm font-semibold">Nilai</label>
                <input
                type="text"
                name="nilai"
                value={formData.nilai}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${formData.nilai ? 'bg-gray-200' : ''}`}
                />
            </div>

            <div className="flex items-center justify-center">
                <p> + </p>
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-semibold">Biaya Tambahan</label>
                <input
                type="text"
                name="biayaTambahan"
                value={formData.biayaTambahan}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${formData.biayaTambahan ? 'bg-gray-200' : ''}`}
                />
            </div>

            <div className="flex items-center justify-center">
                <p> - </p>
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-semibold">Biaya Pengurangan</label>
                <input
                type="text"
                name="biayaPengurangan"
                value={formData.biayaPengurangan}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${formData.biayaPengurangan ? 'bg-gray-200' : ''}`}
                />
            </div>

            <div className="flex items-center justify-center">
                <p> + </p>
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-semibold">Voluntary Declaration</label>
                <input
                type="text"
                name="voluntaryDeclaration"
                value={formData.voluntaryDeclaration}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${formData.voluntaryDeclaration ? 'bg-gray-200' : ''}`}
                />
            </div>

            <div className="flex py-5 items-center justify-center">
                <p> = </p>
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-semibold">Nilai FOB</label>
                <input
                type="text"
                name="nilaiFOB"
                value={formData.nilaiFOB}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${formData.nilaiFOB ? 'bg-gray-200' : ''}`}
                />
            </div>
        </div>

        <div className="w-full flex gap-6 justify-between">
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Asuransi bayar di</label>
            <select
              name="incoterms"
              value={formData.incoterms}
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
                name="nilai"
                value={formData.nilai}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${formData.nilai ? 'bg-gray-200' : ''}`}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Freight</label>
            <input
              type="text"
              name="kurs"
              value={formData.kurs}
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
                name="nilai"
                value={formData.nilai}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${formData.nilai ? 'bg-gray-200' : ''}`}
                />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-semibold">CIF Rp</label>
                <input
                type="text"
                name="biayaTambahan"
                value={formData.biayaTambahan}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${formData.biayaTambahan ? 'bg-gray-200' : ''}`}
                />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-semibold">Bruto</label>
                <input
                type="text"
                name="biayaPengurangan"
                value={formData.biayaPengurangan}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${formData.biayaPengurangan ? 'bg-gray-200' : ''}`}
                />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-semibold">Netto</label>
                <input
                type="text"
                name="voluntaryDeclaration"
                value={formData.voluntaryDeclaration}
                onChange={handleChange}
                className={`border p-2 rounded mt-2 ${formData.voluntaryDeclaration ? 'bg-gray-200' : ''}`}
                />
            </div>
            <div className="flex w-60 flex-col">
                <label className="text-sm font-semibold">Flag Kontainer</label>
                <select
                    name="incoterms"
                    value={formData.incoterms}
                    onChange={handleChange}
                    className="border p-2 rounded mt-2"
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
