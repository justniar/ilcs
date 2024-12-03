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
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Jenis Pemberitahuan</label>
            <select
              name="jenis_pemberitahuan"
              value={dataEntitas?.jenis_pemberitahuan || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            >
              <option>Free on Board</option>
            </select>
          </div>
          <div className="border-b-2"></div>
        </div>

        <h2>Pengusaha</h2>
        <div className="w-full flex gap-6 justify-between py-6">
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Jenis Identitas</label>
            <select
              name="jenis_identitas"
              value={dataEntitas?.jenis_identitas || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            >
              <option>Free on Board</option>
            </select>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">NIB</label>
            <input
              type="text"
              name="nib"
              value={dataEntitas?.nib || ''}
              onChange={handleChange}
              disabled={!dataEntitas?.nib}
              className={`border p-2 rounded mt-2 ${
                dataEntitas?.nib ? 'bg-gray-200' : ''
              }`}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold">Nomor Identitas</label>
            <input
              type="text"
              name="no_identitas"
              value={dataEntitas?.no_identitas || ''}
              onChange={handleChange}
              disabled={!dataEntitas?.no_identitas}
              className={`border p-2 rounded mt-2 ${
                dataEntitas?.no_identitas ? 'bg-gray-200' : ''
              }`}
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
            <label className="text-sm font-semibold">Nama Perusahaan</label>
            <input
              type="text"
              name="nama_perusahaan"
              value={dataEntitas?.nama_perusahaan || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            />
          </div>
        </div>

        <div className="w-full flex justify-between py-6">
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Provinsi</label>
            <input
              type="text"
              name="prov"
              value={dataEntitas?.prov || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">Kota/Kabupaten</label>
            <input
              type="text"
              name="kota"
              value={dataEntitas?.kota || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">Kecamatan</label>
            <input
              type="text"
              name="kecamatan"
              value={dataEntitas?.kecamatan || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">Kode Pos</label>
            <input
              type="text"
              name="kode_pos"
              value={dataEntitas?.kode_pos || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            />
          </div>

          <div className="flex w-60 flex-col">
            <label className="text-sm font-semibold">RT/RW</label>
            <input
              type="text"
              name="rt"
              value={dataEntitas?.rt || ''}
              onChange={handleChange}
              className="border p-2 rounded mt-2"
            />
          </div>
        </div>

      </form>
    </div>
  );
};

export default DataEntitas;