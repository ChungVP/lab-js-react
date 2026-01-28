import { useState } from 'react'
import './App.css'

function App() {

  const [user, setUser] = useState({
    name: "chung",
    email: "chung@gmail.com",
    age: "20"
  });

  const updateUser = ()=>{
    setUser(user => {
      user.name = document.getElementById("newName").value;
      user.email = document.getElementById("newEmail").value;
      user.age = document.getElementById("newAge").value;
      console.log(user);
      document.getElementById("name").innerHTML = "Name: " + user.name;
      document.getElementById("email").innerHTML = "Email: " + user.email;
      document.getElementById("age").innerHTML = "Age: " + user.age;
      return user;
    });
  }

  return (
    <>
        <h1>Rename for user {user.name}!</h1><br />

        <label htmlFor="">New Name:</label>
        <input type="text" name="" id="newName" /><br />
        <label htmlFor="">New Email:</label>
        <input type="text" name="" id="newEmail" /><br />
        <label htmlFor="">New Age:</label>
        <input type="text" name="" id="newAge" />
        <br />
        <button onClick={
          () => updateUser()
        }>Click to change another user!</button>
        <br />

      <label htmlFor="" id='name'>Name: {user.name}</label><br />
      <label htmlFor="" id='email'>Email: {user.email}</label><br />
      <label htmlFor="" id='age'>Age: {user.age}</label>
    </>
  )
}

export default App
