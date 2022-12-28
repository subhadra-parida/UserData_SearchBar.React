import {useState} from "react";
import './App.css';
export default function Data(){
  const [firstName , setFirstName] = useState("") 
  const [lastName,setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [allData, setAllData] = useState([])
  const [filter, setFilter] = useState(false);
  const [searchbar, setSearchbarar] = useState([])
    return(
    <div>
      <input id="box" type="text" placeholder="search" onChange={(e)=>{
        setSearchbarar(e.target.value)
      }}/>
      <button id="search" onClick={()=>{
        // let search = prompt("Enter Something")
        if (searchbar.length>4){
          var newList=[]
          for (var i of allData){
            for (var j in i){
              if (i[j]===searchbar){
                newList.push(i)
                break
              }
            }
          }
          setSearchbarar(newList)
          setFilter(true)
        }
        else{
          alert("Please Enter more than 4 letter")
        }
        }}>SEARCH</button>  
        {}
        <input type="text" placeholder="firstName" value={firstName} onChange={(e)=>{
          setFirstName(e.target.value)
        }}/>
        <input type="text" placeholder="LastName" value={lastName} onChange={(e)=>{
          setLastName(e.target.value)
        }}/> 
        <input type="email" placeholder="Email" value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}/>  
        <input type="password" placeholder="Password" value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }}/>  
      
        <button onClick={()=>{
          let tempObj={
            FirstName : firstName,
            LastName : lastName,
            Email : email,
            Password : password,
          }
          console.log(tempObj)
          setAllData([...allData,tempObj])
          setFirstName("")
          setLastName("")
          setEmail("")
          setPassword("")
        }}>SUBMIT</button>
        {
       filter? searchbar.map((item,index)=>{
        // console.log(item)
        return(
          <div id="box2">
          <table>
            <tr>
              <td>{item.FirstName}</td>
              <td>{item.LastName}</td>
              <td>{item.Email}</td>
              <td>{item.Password}</td>
            </tr>
          </table>
        </div>
        )
      })
       :
        allData.map((item,index)=>{
          // console.log(item)
          return(
            <div>
            <table>
              <tr>
                <td>{item.FirstName}</td>
                <td>{item.LastName}</td>
                <td>{item.Email}</td>
                <td>{item.Password}</td>
              </tr>
            </table>
          </div>
          )
        })
        }
    </div>
  )
}

// import React, {usestate} from "react";
// export default function Form(){
//   const [data, setData] = usestate({
//     isAgree : false, gender : ""
//   })
//   // const handlechange = event =>{
//   //   const target = event.target
//   //   const name = target.name
//   //   const value = target.value
//   //   setData({
//   //     ...data,[name]:value
//   //   })
//   // }
// return(
//   <form>
//     <div>
//       <label>Male :</label>
//       <input type="radio"></input>
//       {/* <input type ="radio" name="gender" value="male"
//        onChange={handlechange} checked={data.gender === "male" }/>

//       <label>Female :</label>
//       <input type ="radio" name="gender" value="female" 
//       onChange={handlechange} checked={data.gender === "female" }/> */}
//     </div>
//     {/* <p>Gender : {data.gender}</p> */}
//   </form>
// )
// }
