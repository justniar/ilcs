import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataEntitas = () => {
  const [dataEntitas, setDataEntitas] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://10.8.3.199:1880/test/v2/dataEntitas?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2'
        );

        if (response.data.status) {
          setDataEntitas(response.data.data);
        } else {
          console.error('Failed to fetch data: ', response.data.message);
        }
      } catch (err) {
        console.error('Error fetching data: ', err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataEntitas((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', dataEntitas);
  };

  return (
    <div className="p-6 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="w-full flex gap-6 justify-between">
          <div className="w-[350px] flex flex-col pb-5">
            <label className="text-sm font-semibold">Jenis Pemberitahuan <span className="text-red-500">*</span></label>
            <select
              name="jenis_pemberitahuan"
              value={dataEntitas?.jenis_pemberitahuan || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
              required
            >
              <option>{dataEntitas?.jenis_pemberitahuan}</option>
            </select>
          </div>
        </div>
        <div className="w-full border-b-2 border-gray"></div>

        <div>
          <h2 className='py-3 font-bold text-lg'>Pengusaha <span className="text-red-500">*</span></h2>
          <div className='w-10 border-b-4 border-blue-500'></div>
        </div>
        
        <div className="w-full flex gap-6 justify-between py-6">
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Jenis Identitas <span className="text-red-500">*</span></label>
            <select
              name="jenis_identitas"
              value={dataEntitas?.jenis_identitas || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
              required
            >
              <option>Free on Board</option>
            </select>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">NIB <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="nib"
              value={dataEntitas?.nib || ''}
              onChange={handleChange}
              disabled={!dataEntitas?.nib}
              className={`border p-2 rounded mt-2 ${
                dataEntitas?.nib ? 'bg-gray-200' : ''
              }`}
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Nomor Identitas <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="no_identitas"
              value={dataEntitas?.no_identitas || ''}
              onChange={handleChange}
              disabled={!dataEntitas?.no_identitas}
              className={`border p-2 rounded mt-2 ${
                dataEntitas?.no_identitas ? 'bg-gray-200' : ''
              }`}
              required
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-6 justify-between">
          <div className="col-span-1 flex flex-col">
            <label className="text-sm font-semibold">
              Nomor Identitas (16 Digit)
            </label>
            <input
              type="text"
              name="no_identitas"
              value={dataEntitas?.no_identitas || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="text-sm font-semibold">Nama Perusahaan <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="nama_perusahaan"
              value={dataEntitas?.nama_perusahaan || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
              required
            />
          </div>
        </div>

        <div className="w-full flex justify-between py-6">
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Provinsi <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="prov"
              value={dataEntitas?.prov || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">Kota/Kabupaten <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="kota"
              value={dataEntitas?.kota || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">Kecamatan <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="kecamatan"
              value={dataEntitas?.kecamatan || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">Kode Pos <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="kode_pos"
              value={dataEntitas?.kode_pos || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
              required
            />
          </div>

          <div className="flex w-60 flex-col">
            <label className="text-sm font-semibold">RT/RW <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="rt"
              value={dataEntitas?.rt || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
              required
            />
          </div>
        </div>
        <div className="w-full flex gap-6 justify-between py-3">
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Telephone <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="Telephone"
              value={dataEntitas?.telephone || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
              required
            />
          </div>

          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="Email"
              value={dataEntitas?.email || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
              required
            />
          </div>

          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Status <span className="text-red-500">*</span></label>
            <select
              name="status"
              value={dataEntitas?.status || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
              required
            >
              <option>{dataEntitas?.status}</option>
            </select>
          </div>
        </div>

      </form>
    </div>
  );
};

export default DataEntitas;
