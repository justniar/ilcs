import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataEntitas = () => {
  const [dataEntitas, setDataEntitas] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
        try{
            const response = await axios.get("http://10.8.3.199:1880/test/v2/dataEntitas?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2");
            
            if(response.data.status){
                setDataEntitas(response.data.data)
            } else {
                console.error("failed to fetch data: ", response.data.message)
            }
        } catch (err) {
            console.error("error fetching data: ", err);
        }
    };
    fetchData();
}, [])

if (!dataEntitas){
    return <p>Loading data ...</p>
}

  return (
    <div className="form-container">
      <h2>Data Pemberitahuan</h2>

      <div className="tabs">
        <button className="tab-button active">Data Utama</button>
        <button className="tab-button">Data Entitas</button>
        <button className="tab-button">Data Pungutan</button>
      </div>

      <form className="data-form">
        <label htmlFor="jenisPemberitahuan">Jenis Pemberitahuan*</label>
        <select
          id="jenisPemberitahuan"
          name="jenisPemberitahuan"
          value={dataEntitas.jenisPemberitahuan}
          onChange={(e) => setDataEntitas({ ...dataEntitas, jenisPemberitahuan: e.target.value })}
        >
          <option value="PENGUSAHA">PENGUSAHA</option>
        </select>

        <fieldset>
          <legend>Pengusaha</legend>

          <label htmlFor="nib">NIB</label>
          <input type="text" id="nib" name="nib" value={dataEntitas.nib} readOnly />

          <label htmlFor="namaPerusahaan">Nama Perusahaan*</label>
          <input type="text" id="namaPerusahaan" name="namaPerusahaan" value={dataEntitas.namaPerusahaan} readOnly />

          <label htmlFor="noIdentitas">No Identitas*</label>
          <input type="text" id="noIdentitas" name="noIdentitas" value={dataEntitas.noIdentitas} readOnly />

          <label htmlFor="provinsi">Provinsi*</label>
          <input type="text" id="provinsi" name="provinsi" value={dataEntitas.provinsi} readOnly />

          <label htmlFor="kotaKabupaten">Kota/Kabupaten*</label>
          <input type="text" id="kotaKabupaten" name="kotaKabupaten" value={dataEntitas.kotaKabupaten} readOnly />

          <label htmlFor="kecamatan">Kecamatan*</label>
          <input type="text" id="kecamatan" name="kecamatan" value={dataEntitas.kecamatan} readOnly />

          <label htmlFor="kodePos">Kode Pos*</label>
          <input type="text" id="kodePos" name="kodePos" value={dataEntitas.kodePos} readOnly />

          <label htmlFor="telepon">Telepon*</label>
          <input type="text" id="telepon" name="telepon" value={dataEntitas.telepon} readOnly />

          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" value={dataEntitas.email} readOnly />

          <label htmlFor="status">Status*</label>
          <input type="text" id="status" name="status" value={dataEntitas.status} readOnly />
        </fieldset>
      </form>
    </div>
  );
};

export default DataEntitas;
