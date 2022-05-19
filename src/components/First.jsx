import { useContext } from 'react'
/*  */
import { InitContext } from '../context'
/*  */
import { Buttons, DataList } from './'


export const First = () => {

	/* state */
	const { methods } = useContext( InitContext )
	const {
		setFirstElementToFinal, 
		addItemToElement2Items,
		updateElementsByApi
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

	const onClickButton4 = (  ) => {
		
		updateElementsByApi()
	}

	return (
		<div className='col-sm-12 col-md-6 mt-5 justify-content-center' >
			<h2 className='text-center'>COMPONENTE 1</h2>
			{/* BUTTONS */}
			<Buttons 
				onClickBtn2={ onClickButton2 }
				onClickBtn3={ onClickButton3 }
				onClickBtn4={ onClickButton4 }  
			/>

			{/* DATA */}
			<DataList />
		</div>
	)
}
