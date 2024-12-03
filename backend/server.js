const express = require('express');
const { Pool } = require('pg'); 
const app = express();
app.use(express.json());

const pool = new Pool({
  user: 'your_user',
  host: 'localhost',
  database: 'postgres',
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
    nilaiFob, 
    cif, 
    cifRp, 
    voluntaryDeclaration, 
    flagKontainer
  } = req.body;

  if (!incoterms || !valuta || !nilai || !flagKontainer) {
    return res.status(400).json({ error: "Required fields are missing" });
  }

  try {
    const calculatedNilaiFob = nilai + biayaTambahan - biayaPengurangan + voluntaryDeclaration;
    const calculatedCif = calculatedNilaiFob + asuransi + freight;
    const calculatedCifRp = calculatedCif * kurs;

    const result = await pool.query(
      `INSERT INTO DataPungutan (incoterms, valuta, kurs, nilai, biayaTambahan, biayaPengurangan, asuransi, freight, nilaiFob, cif, cifRp, voluntaryDeclaration, flagKontainer)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
      [incoterms, valuta, kurs, nilai, biayaTambahan, biayaPengurangan, asuransi, freight, calculatedNilaiFob, calculatedCif, calculatedCifRp, voluntaryDeclaration, flagKontainer]
    );
    
    res.status(200).json({ message: "Data saved successfully", data: result.rows });
  } catch (error) {
    console.error("Error saving data: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
