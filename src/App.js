import { useState } from 'react'
/* */
import './styles/index.css'
import { InitContext } from './context/initContext'
/*  */
import {
	First,
	Second
} from './components'


export const INITIAL_STATE = [{
	id: 1,
	name: 'Mis Datos',
	items: [
		{ id: 1, name: 'elemento 1' },
		{ id: 2, name: 'elemento 2' },
	]
}]
const App = () => {

	/* state */
	const [ initialState, setInitialState ] = useState( INITIAL_STATE )
	const [ isUpdating, setIsUpdating ] = useState( false )

	/* functions */
	/* 2.- Queremos poder copiar el primer elemento y agregarlo como uno nuevo al final */
	const setFirstElementToFinal = ( elementId ) => {

		const newElement = initialState.find( el => el.id === elementId )

		if( !newElement ) return

		const newId = 2
		const newInitialState = [
			...initialState,
			{
				...newElement,
				id: newId
			}
		]

		setInitialState( newInitialState )
	}

	/* 3.- Queremos añadir un elemento a los items del elemento copiado en el paso 2 */
	const addItemToElement2Items = ( id, itemToAdd ) => {

		const newInitialState = initialState.map( item => {
				
			if( item.id === id ) {
				
				const itemId = item.items.length + 1

				return {
					...item,
					items: [ ...item.items, {
						...itemToAdd,
						id: itemId,
						name: `Nuevo elemento ${ itemId }`
					}]
				}
			}

			return item
		})

		setInitialState( newInitialState )
	}

	/* 4.- Queremos poder guardar los elementos, llamando a la api para actualizar ( inventar endpoint ) */
	const updateElementsByApi = async (  ) => {
		
		setIsUpdating( true )

		try {
			
			const url = 'https://jsonplaceholder.typicode.com/posts/4'
			/* const body = JSON.stringify( initialState ) */
			const method = 'GET' // deberia ser PUT para actualizar pero la api no existe
			const resp = await fetch( url, {
				/* body, */ // aqui va el body pero con esta api no me deja enviar el body
				method
			})
			const data = await resp.json()

			setIsUpdating( false )
			setInitialState([ ...initialState, data ])
		} catch ( error ) {

			setIsUpdating( false )
            console.log("🚀 ~ file: App.js ~ line 82 ~ updateElementsByApi ~ error", error)
		}
	}

	/* regresar el stado al inicial */
	const resetState = (  ) => setInitialState( INITIAL_STATE )
	

	return (
		<InitContext.Provider
			value={{
				isUpdating,
				data: initialState,
				methods: {
					setFirstElementToFinal,
					addItemToElement2Items,
					updateElementsByApi,
					resetState
				}
			}}
		>
			<div className='container' >
				<div className='row' >
					<div className='col-12 mt-5 ' >
						<h3 className='text-center'>INFORMACIÓN</h3>
						<ul className="list-group">
							<li className="list-group-item">Botón No. 2: Queremos poder copiar el primer elemento y agregarlo como uno nuevo al final</li>
							<li className="list-group-item">Botón No. 3: Queremos añadir un elemento a los items del elemento copiado en el paso 2</li>
							<li className="list-group-item">Botón No. 4: Queremos poder guardar los elementos, llamando a la api para actualizar ( inventar endpoint, endpoint = https://jsonplaceholder.typicode.com/posts/4 )</li>
							<li className="list-group-item">Botón No. 4: tambien cumple con la condicion No. 5 - Crear otro componente que no sea pariente del actual y que nos muestre y modifique la misma informacion ( lo pase en uno pasa el otro )</li>

						</ul>
						<div className='container d-flex justify-content-center m-5' >
							<button
								className='btn btn-outline-danger'
								onClick={ resetState }
							>
								Resetear
							</button>
						</div>
					</div>

					{/* COMPONENTS */}
					<First />
					{/* 5.- Crear otro componente que no sea pariente del actual y que nos muestre y modifique la misma informacion ( lo pase en uno pasa el otro ) */}
					<Second />
				</div>
			</div>
		</InitContext.Provider>
	)
}

export default App