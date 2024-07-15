import React, { useContext, useState } from "react";
import {Context} from "../store/appContext"

// 1 - creamos el formulario, recogemos los datos de los inputs con el ONCHANGE y los almacenamos en el estado. formdata, setFormdata
// funcion handleSubmit para evitar que se recargue la pagina y luego desde action. llama a la funcion añadir contacto a la que le pasamos los datos

export const Form=()=>{
    //importar la store
    const {store, actions} =useContext(Context)

    //para evitar que se recargue la pagina, onSubmit, handleSubmit- preventDefault
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formdata);
        actions.addContact(formdata)
    };

    //trabajando con inputs Existen 2 opciones para obtener datos de un formulario
    //const [fname, setFname]= useState('')
    //const [email, setEmail]= useState('')
    //const [phone, setPhone]= useState('')

    //OBJETO
    const [formdata, setFormdata]= useState({
        fname:'',
        email:'',
        phone:''
    }); 
   
    //obtener los 3 datos, necesitamos value en cada input  
    const handleChange = (e) =>{
        setFormdata({...formdata, [e.target.name]: e.target.value});
    }; //mientras todos los inputs tengan value y name se ejecutará esta funcion para todos
 
    return(
        <>
    <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <input type="text" className="form-control" placeholder="full name" value={formdata.fname} name="fname" onChange={handleChange}></input>
        <input type="text" className="form-control" placeholder="email" value={formdata.email} name="email" onChange={handleChange}></input> 
        <input type="text" className="form-control" placeholder="phone" name="phone" value={formdata.phone} onChange={handleChange}></input>
        <input type="submit" className="btn btn-primary" value={'añadir'}></input>

    </form>
    </>)
};