const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[],
			users: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			delUser: async(username) => {
				try {
					const resp= await fetch('https://playground.4geeks.com/todo/users/' + username, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json'
						}
					});
					const data= await resp.json() //la respuesta la pasamos a json
					console.log(data)
					} catch (error) {
					console.log('Error en addUser',error)
				}
			},

			addUser: async(username) => {
				try {
					const resp= await fetch('https://playground.4geeks.com/todo/users/' + username, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						//body: JSON.stringify()
					});
					const data= await resp.json() //la respuesta la pasamos a json
					console.log(data)
					} catch (error) {
					console.log('Error en addUser',error)
				}
			},

			getUsers: async () => {
				try {
					const resp= await fetch('https://playground.4geeks.com/todo/users');
					const data= await resp.json() //la respuesta la pasamos a json
					//guardamos la informacion en el store
					setStore({users: data.users}) //en la variable users añadimos los datos de la respuesta del fetch (variable users no existe, pero se crea auto)
				} catch (error) {
					console.log('Error en getUser',error)
				}
			},

			//funcion eliminar contacto, con el parametro index
			delContact: (contact) => {
				
				//creamos una variable para almacenar lo que hay en contact
				let aux= getStore().contacts;
				aux.splice(contact, 1);
				setStore({contacts: aux})

			},
			//funcion añadir contactos que recibe data, datos que los pondremos en el setStore. Para que en contactas poner el valor (todo lo que esta en el store y añadir los datos)
			addContact: (data)=> {
				setStore({contacts: [...getStore().contacts, data]}) 
				//manten todo lo que esta en el store en el contacto y añade los datos (data)
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
