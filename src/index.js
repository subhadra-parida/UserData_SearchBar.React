import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React, {usestate} from "react";
// export default function Form(){
//   const [data, setData] = usestate({
//     isAgree : false, gender : ""
//   })
//   const handlechange = event =>{
//     const target = event.target
//     const name = target.name
//     const value = target.value
//     setData({
//       ...data,[name]:value
//     })
//   }
// return(
//   <form>
//     <div>
//       <label>Male :</label>
//       <input type ="radio" name="gender" value="male"
//        onChange={handlechange} checked={data.gender === "male" }/>

//       <label>Female :</label>
//       <input type ="radio" name="gender" value="female" 
//       onChange={handlechange} checked={data.gender === "female" }/>
//     </div>
//     <p>Gender : {data.gender}</p>
//   </form>
// )
// }
