import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Form } from "../component/form";
import {Context} from "../store/appContext";
import { Contact } from "../component/contact";

export const Home = () => {

	//queremos visualizar los contactos en las cards que hemos creado en el componente contact.js. Donde están nuestros constactos? en el flux
	//primero importamos el contexto, para acceder al store
	const {store, actions} = useContext(Context);

	return (

		<div className="text-center mt-5">
			<Form></Form>

			
			{store.contacts.map((el, i) => <Contact key={i} index={i} fname={el.fname} email={el.email} phone={el.phone}/>)}



		</div>
	
	);
	
};
