/* const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// เชื่อมต่อ MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'yourdatabase'
});

db.connect((err) => {
  if (err) {
    console.error('ไม่สามารถเชื่อมต่อกับฐานข้อมูลได้:', err);
    return;
  }
  console.log('เชื่อมต่อกับฐานข้อมูลสำเร็จ!');
});

// สร้าง route ตัวอย่าง
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send('ไม่สามารถดึงข้อมูลจากฐานข้อมูลได้');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); */

/* const express = require('express')
const app = express()
const port = 8000

app.get('/', (req,res) =>{
    res.send("Hellooooo")
})
 
app.listen(port , (req,res) => {
    console.log('http server run at '+ port)
}) */
    const express = require("express");
    const bodyParser = require("body-parser");
    const { downloadAndExtract } = require("./controllers/installController");  // เพิ่มการ import ฟังก์ชัน
    
    const app = express();
    const PORT = 3000;
    
    app.use(bodyParser.json());  // ใช้ bodyParser สำหรับรับข้อมูลแบบ JSON
    
    // เพิ่ม API ที่รับ POST request
    app.post("/api/install", downloadAndExtract);
    
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
    
    