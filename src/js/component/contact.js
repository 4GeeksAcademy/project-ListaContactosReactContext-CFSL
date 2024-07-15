import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const Contact = ({fname, email, phone, index}) => {
    const {store, actions} = useContext(Context);

    const handleClick = () => {
        actions.delContact(index)
    }

    return (
        <div className="card">
		    <h2>{fname}</h2>  
            <p>{email}</p>
            <p>{phone}</p>
            <button className="btn btn-danger" onClick={handleClick}>Eliminar</button>
	    </div>
    );
};