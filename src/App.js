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
	const setFirstElementToFinal = ( elementId, items = [] ) => {

		initialState.forEach( ( item ) => {

			const newElement = item['items']?.find( el => el.id === elementId )

			if( !newElement ) return

			setInitialState( preInitialState => {

				const data = preInitialState.find( item => item.id === 2 )
			
				if( data ) return preInitialState

				const newInitialState = [
					...preInitialState,
					{
						...newElement,
						id: item.id + 1, //id 2
						items
					}
				]

				return newInitialState
			})
		})
	}

	/* 3.- Queremos añadir un elemento a los items del elemento copiado en el paso 2 */
	const addItemToElement2Items = ( id, itemToAdd ) => {
		
		setInitialState( preInitialState => {
			
			const data = preInitialState.find( item => item.id === id )
			
			if( !data ) return preInitialState

			return preInitialState.map( item => {
				
				if( item.id === id ) {

					return {
						...data,
						items: [ ...item.items, itemToAdd ]
					}
				}

				return item
			})
		})
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

	return (
		<InitContext.Provider
			value={{
				isUpdating,
				data: initialState,
				methods: {
					setFirstElementToFinal,
					addItemToElement2Items,
					updateElementsByApi
				}
			}}
		>
			<div className='container-fluid app' >
				<First />
				{/* 5.- Crear otro componente que no sea pariente del actual y que nos muestre y modifique la misma informacion ( lo pase en uno pasa el otro ) */}
				<Second />
			</div>
		</InitContext.Provider>
	)
}

export default App