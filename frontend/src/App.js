import React,{useState} from 'react';

export default function App(){
 const[id,setId]=useState('');
 const[data,setData]=useState(null);

 const search=async()=>{
  const r=await fetch('http://localhost:5000/api/certificates/'+id);
  setData(await r.json());
 };

 return(
  <div>
   <h2>Certificate Verification</h2>
   <input onChange={e=>setId(e.target.value)} placeholder="Certificate ID"/>
   <button onClick={search}>Verify</button>
   {data && <div>
    <p>{data.studentName}</p>
    <p>{data.domain}</p>
   </div>}
  </div>
 );
}