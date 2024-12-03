const express = require('express');
const { Pool } = require('pg');
const app = express();
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ilcs',
  password: 'postgres',
  port: 5432, 
});

app.post('/saveDataPungutan', async (req, res) => {
  const {
    incoterms,
    valuta,
    kurs,
    nilai,
    biayaTambahan,
    biayaPengurangan,
    asuransi,
    freight,
    nilaiFOB,
    cif,
    cifRp,
    voluntaryDeclaration,
    flagKontainer
  } = req.body;

  if (!incoterms || !valuta || !nilai || !flagKontainer) {
    return res.status(400).json({ error: "Required fields are missing." });
  }

  try {
    const headerResult = await pool.query(
      `INSERT INTO DataPungutanHeaders (incoterms, valuta, kurs, flagKontainer) 
       VALUES ($1, $2, $3, $4) RETURNING header_id`,
      [incoterms, valuta, kurs, flagKontainer]
    );
    
    const header_id = headerResult.rows[0].header_id;

    await pool.query(
      `INSERT INTO DataPungutan (header_id, nilai, biayaTambahan, biayaPengurangan, asuransi, freight, nilaiFob, cif, cifRp, voluntaryDeclaration)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
      [header_id, nilai, biayaTambahan, biayaPengurangan, asuransi, freight, nilaiFOB, cif, cifRp, voluntaryDeclaration]
    );

    res.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
