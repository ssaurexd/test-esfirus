import { useContext } from 'react'
/*  */
import { InitContext } from '../context'
/*  */
import { DataList, Buttons } from './'


export const Second = () => {

	/* state */
	const { methods, isUpdating } = useContext( InitContext )
	const {
		updateElementsByApi,
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
	
	const onClickButton4 = (  ) => {
		
		updateElementsByApi()
	}

	return (
		<div className='col-sm-12 col-md-6 mt-5 justify-content-lg-center' >
			<h2 className='text-center'>COMPONENTE 2</h2>
			{/* BUTTONS */}
			<Buttons 
				isUpdating={ isUpdating } 
				onClickBtn2={ onClickButton2 }
				onClickBtn3={ onClickButton3 }
				onClickBtn4={ onClickButton4 }  
			/>
			{/* DATA */}
			<DataList accordionId={'second'} />
		</div>
	)
}