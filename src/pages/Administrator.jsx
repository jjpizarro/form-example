import UserForm from '../componets/UserForm';
import Table from '../componets/Table';
import React, {useState} from 'react';
import UsuarioServices from '../services/UsuarioServices';
const Administrator = ()=>{
    const columns= [{column:"Id",value:"id"},{column:"identification",value:"identification"},
    {column:"Name",value:"name"},{column:"Birtht Day",value:"birthtDay"},{column:"Month Birtht Day",value:"monthBirthtDay"}
    ,{column:"address",value:"address"},{column:"cellPhone",value:"cellPhone"},{column:"email",value:"email"}
    ,{column:"zone",value:"zone"},{column:"type",value:"type"}
  
  
  ]
      
    const initialState = {
      id:null,identification:"",
      name:"",birthtDay:"",monthBirthtDay:"",address:"",cellPhone:"",email:"",password:"",zone:"",type:""
  
  };
    const values = []
    const [userList, setUserList] = useState(values);
    const [userToEdit, setUserToEdit]=useState(initialState);
    

  React.useEffect(()=>{
     async function getListaUsuarios (){
       try{
         const response = await UsuarioServices.listarUsuarios();
         setUserList(response.data);
       }catch(error){
        console.log(error);
       }
      /*UsuarioServices.listarUsuarios().then(response =>{
        setUserList(response.data);
      }).catch(e =>{
        console.log(e);
      })*/
    }
    getListaUsuarios();
  },[]);


    const addUser = (user)=>{
      user.id = userList.length+1;
      setUserList([...userList, user]);
    }
  
    const deleteUser = (user)=>{
      setUserList(userList.filter(u => u.id !== user.id))
     
    }
  
    const activateEditMode = (user)=>{
        setUserToEdit(user);
     }
     const editUser = async (user)=>{
       try {
        const response = await UsuarioServices.actualizarUsiario(user);
        const itemIndex = userList.findIndex(data => data.id === response.data.id);
        setUserList([...userList.slice(0, itemIndex), response.data, ...userList.slice(itemIndex + 1)]);
       } catch (error) {
         
       }
        
   
     }
  
    return (
      <div className="container">
        <UserForm add = {addUser} edit= {editUser} user={userToEdit}/>
        <Table data={userList} columns={columns} onDelete = {deleteUser} onEdit = {activateEditMode}/>
      </div>
    );
}
export default Administrator;