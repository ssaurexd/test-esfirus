import { useContext } from 'react'
/*  */
import { InitContext } from '../context'


export const First = () => {

	/* state */
	const { methods } = useContext( InitContext )
	const {
		setFirstElementToFinal, 
		addItemToElement2Items
	} = methods

	/* functions */
	const onClickButton3 = (  ) => {

		const newItem = { id: 1, name: 'nuevo elemento 1' }
		addItemToElement2Items( 2, newItem )
	}

	const onClickButton2 = (  ) => {
		
		const idToCopy = 1
		setFirstElementToFinal( idToCopy )
	}

	return (
		<div className='first' >
			<h2>COMPONENTE 1</h2>
			<div className='btn-container gap-3 ' >
				<button
					onClick={ onClickButton2 }
					className='btn btn-primary'
				>
					2
				</button>
				<button
					onClick={ onClickButton3 }
					className='btn btn-primary'
				>
					3
				</button>
			</div>

			<div className='container mt-5 ' >
				<h3 className='text-center'>INFORMACIÓN</h3>
				<ul className="list-group">
					<li className="list-group-item">Botón No. 2: Queremos poder copiar el primer elemento y agregarlo como uno nuevo al final</li>
					<li className="list-group-item">Botón No. 3: Queremos añadir un elemento a los items del elemento copiado en el paso 2</li>
					<li className="list-group-item">Botón No. 4: Queremos poder guardar los elementos, llamando a la api para actualizar ( inventar endpoint, endpoint = https://jsonplaceholder.typicode.com/posts/4 )</li>
					<li className="list-group-item">Botón No. 4: tambien cumple con la condicion No. 5 - Crear otro componente que no sea pariente del actual y que nos muestre y modifique la misma informacion ( lo pase en uno pasa el otro )</li>

				</ul>
			</div>
		</div>
	)
}
