const router=require('express').Router();
const Certificate=require('../models/Certificate');
const multer=require('multer');
const XLSX=require('xlsx');
const PDFDocument=require('pdfkit');

const upload=multer({dest:'uploads/'});

router.post('/upload',upload.single('file'),(req,res)=>{
 const wb=XLSX.readFile(req.file.path);
 const ws=wb.Sheets[wb.SheetNames[0]];
 const data=XLSX.utils.sheet_to_json(ws);
 Certificate.insertMany(data);
 res.send('Uploaded');
});

router.get('/:id',async(req,res)=>{
 const cert=await Certificate.findOne({certificateId:req.params.id});
 if(!cert) return res.status(404).send('Not Found');
 res.json(cert);
});

router.get('/pdf/:id',async(req,res)=>{
 const cert=await Certificate.findOne({certificateId:req.params.id});
 const doc=new PDFDocument();
 res.setHeader('Content-Type','application/pdf');
 doc.pipe(res);
 doc.text('Certificate Verification');
 doc.text(`Name: ${cert.studentName}`);
 doc.text(`Domain: ${cert.domain}`);
 doc.text(`Duration: ${cert.startDate} - ${cert.endDate}`);
 doc.end();
});

module.exports=router;