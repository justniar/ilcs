import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DataUtama = () => {
    const [dataUtama, setDataUtama] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get("https://api-hub.ilcs.co.id/test/v2/dataUtama?nomor_pengajuan=20120B388FAE20240402000001");
                
                if(response.data.status){
                    setDataUtama(response.data.data)
                } else {
                    console.error("failed to fetch data: ", response.data.message)
                }
            } catch (err) {
                console.error("error fetching data: ", err);
            }
        };
        fetchData();
    }, [])

    if (!dataUtama){
        return <p>Loading data ...</p>
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataUtama(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
      
    return (
        <div>
        <h2>Data Utama</h2>
        <div className="p-6 mx-auto">
            <form onChange={handleChange}>
                <div className="w-full flex gap-6 py-2 justify-between">
                    <div className="w-full flex flex-col">
                        <label className="text-sm font-semibold">Nomor Pengajuan</label>
                        <input
                        type="text"
                        name="freight"
                        value={dataUtama.nomor_pengajuan}
                        onChange={handleChange}
                        className={`border p-2 rounded mt-2 ${dataUtama.jenis_kegiatan ? 'bg-gray-200' : ''}`}
                        />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="text-sm font-semibold">Tanggal Pengajuan</label>
                        <input
                            type="text"
                            name="asuransi"
                            value={dataUtama.tanggal_pengajuan}
                            onChange={handleChange}
                            className={`border p-2 rounded mt-2 ${dataUtama.jenis_kegiatan ? 'bg-gray-200' : ''}`}
                        />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="text-sm font-semibold">Nomor Pendaftaran</label>
                        <input
                        type="text"
                        name="freight"
                        placeholder='Nomor Pendaftaran'
                        value={dataUtama.nomor_pendaftaran}
                        onChange={handleChange}
                        className="border p-2 rounded mt-2"
                        />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="text-sm font-semibold">Tanggal Pendaftaran</label>
                        <input
                        type="text"
                        name="freight"
                        placeholder='Tanggal Pendaftaran'
                        value={dataUtama.tanggal_pendaftaran}
                        onChange={handleChange}
                        className="border p-2 rounded mt-2"
                        />
                    </div>
                </div>

                <div className="w-full flex gap-6 py-2 justify-between">
                    <div className="w-full flex flex-col">
                        <label className="text-sm font-semibold">Kantor Pabean</label>
                        <select
                        name="kantor pabean"
                        value={dataUtama.ur_pabean_asal}
                        onChange={handleChange}
                        className="border p-2 rounded mt-2"
                        >
                        <option>{dataUtama.ur_pabean_asal}</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="text-sm font-semibold">SKEP Fasilitas</label>
                        <select
                        name="incoterms"
                        value={dataUtama.kd_skep_fasilitas}
                        onChange={handleChange}
                        className="border p-2 rounded mt-2"
                        >
                        <option>{dataUtama.kd_skep_fasilitas}</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="text-sm font-semibold">Jenis PIB</label>
                        <select
                        name="incoterms"
                        value={dataUtama.ur_jenis_pib}
                        onChange={handleChange}
                        className="border p-2 rounded mt-2"
                        >
                        <option>{dataUtama.ur_jenis_pib}</option>
                        </select>
                    </div>
                    </div>

                    <div className="w-full flex py-2 gap-6 justify-between">
                        <div className="w-full flex flex-col">
                            <label className="text-sm font-semibold">Jenis Impor</label>
                            <select
                            name="kantor pabean"
                            value={dataUtama.ur_jenis_impor}
                            onChange={handleChange}
                            className="border p-2 rounded mt-2"
                            >
                            <option>{dataUtama.ur_jenis_impor}</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col">
                            <label className="text-sm font-semibold">Cara Pembayaran</label>
                            <select
                            name="incoterms"
                            value={dataUtama.ur_cara_bayar}
                            onChange={handleChange}
                            className="border p-2 rounded mt-2"
                            >
                            <option>{dataUtama.ur_cara_bayar}</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col">
                            <label className="text-sm font-semibold">Transaksi</label>
                            <select
                            name="incoterms"
                            value={dataUtama.ur_transaksi_impor}
                            onChange={handleChange}
                            className="border p-2 rounded mt-2"
                            >
                            <option>{dataUtama.ur_transaksi_impor}</option>
                            </select>
                        </div>
                    </div>
            </form>    
        </div>
    </div>
    )
}

export default DataUtama