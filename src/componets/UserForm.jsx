import React,{useState,useEffect} from 'react';
import UsuarioServices from '../services/UsuarioServices';
const UserForm = (props)=>{
     const initialUserState = {
        id:null,
        identification:"",
        name:"",
        birthtDay:"",
        monthBirthtDay:"",
        address:"",
        cellPhone:"",
        email:"",
        password:"",
        zone:"",
        type:""
    
    }
    
  
    const [formState, setFormState] = useState(initialUserState);
    //componentDiMount
    useEffect(()=>{
        setFormState(props.user);
    },[props.user])



    const handleInputChange = (ev)=>{
        ev.preventDefault();
        const target = ev.target;
        const name = target.name;
        const value = target.value;
        setFormState({...formState, [name]:value})
    }

    async function handleSubmit (ev){
        ev.preventDefault();
        if(props.user && formState.id !== null){
            props.edit(formState)
        }else{
            try {
                const response = await UsuarioServices.crearUsuario(formState);
                props.add(response.data);
            } catch (error) {
                console.log(error)
            }
                
            //props.add(formState);
        }
       
        setFormState(initialUserState);
    }
    

    return (<form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name" value={formState.name} onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor ="identification" className="form-label">identification</label>
                    <input type="text" className="form-control" id="identification" name="identification" value={formState.identification} onChange={handleInputChange}/>
                </div>
                <div className="col-12">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="address" name="address" value={formState.address} onChange={handleInputChange}/>
                </div>
            
                <div className="col-md-6">
                    <label htmlFor="cellPhone" className="form-label">Edad</label>
                    <input type="text" className="form-control" id="cellPhone" name="cellPhone" value={formState.cellPhone} onChange={handleInputChange}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formState.email} onChange={handleInputChange}/>
                </div>
        
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Agregar</button>
                </div>
        </form>);
}

export default UserForm;