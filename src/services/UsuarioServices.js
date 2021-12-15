import http from './http-config';

const listarUsuarios = ()=>{
    return http.get('/api/user/all');
}
const crearUsuario = (data)=>{
    return http.post("/api/user/new",data);
}
const actualizarUsiario = (data) =>{
    return http.put('/api/user/update',data)
}
const exportedFunctions = {
    listarUsuarios,
    crearUsuario,
    actualizarUsiario
}
export default exportedFunctions;