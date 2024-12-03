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

    return (
        <div>
        <h2>Data Utama</h2>
        <table>
            <thead>
                <tr>
                    <th>Nomor Pengajuan</th>
                    <th>Jenis Kegiatan</th>
                    <th>Uraian Pabean Asal</th>
                    <th>Uraian Cara Bayar</th>
                    <th>Tanggal Pengajuan</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{dataUtama.nomor_pengajuan}</td>
                    <td>{dataUtama.jenis_kegiatan}</td>
                    <td>{dataUtama.ur_pabean_asal}</td>
                    <td>{dataUtama.ur_cara_bayar}</td>
                    <td>{dataUtama.tanggal_pengajuan}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default DataUtama