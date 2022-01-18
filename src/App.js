
import { Userform } from './component/Userform';
import { UserList } from './component/UserList';
import {useState} from 'react'
function App() {
const [Users, setusers] = useState([{key:1,name:'fkafk',age:23,phn:34456,email:'afkafka'}]);
const updateusers =(user)=>{
setusers((prev)=>{
  return [...prev,user]
})
}
  return (
    <div>
      <Userform setusers={updateusers}></Userform>
    <br/>

      <UserList users={Users}></UserList>
     </div>
  );
}

export default App;
