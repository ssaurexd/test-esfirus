import { useContext } from 'react'
/*  */
import { InitContext } from '../context'


export const Second = () => {

	/* state */
	const { data, methods, isUpdating } = useContext( InitContext )
	const {
		updateElementsByApi
	} = methods


	/* functions */
	const onClickButton4 = (  ) => {
		
		updateElementsByApi()
	}

	return (
		<div className='second' >
			<h2>COMPONENTE 2</h2>

			<div className='btn-container gap-3' >
				<button 
					className="btn btn-primary mb-2" 
					type="button" 
					disabled={ isUpdating }
					onClick={ onClickButton4 }
				>
					{
						isUpdating
							? (
								<>
									<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
									<span className="visually-hidden">Loading...</span>
								</>
							)
							: '4'
					}
				</button>
			</div>
			{/* DATA */}
			<div className='container mt-5 ' >
				<h3>DATOS:</h3>
				<div className='accordion accordion-flush' id='accordionExample' >
					{
						data.length && data.map( ( item, index ) => (
							<div key={`level1-${ item.id }-${ index }`} className='accordion-item' >
								<h2 className="accordion-header" id={`headingOne-${ item.id }-${ index }`}>
									<button 
										className="accordion-button" 
										type="button" 
										data-bs-toggle="collapse" 
										data-bs-target={`#collapseOne-${ item.id }-${ index }`} 
										aria-expanded="true" 
										aria-controls="collapseOne"
									>
										{ item.name || item.title }
									</button>
								</h2>
								<div 
									id={`collapseOne-${ item.id }-${ index }`} 
									className="accordion-collapse collapse show" 
									aria-labelledby={`headingOne-${ item.id }-${ index }`} 
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										{
											item.body 
												? item.body
												: item.items?.length > 0  &&  item.items.map( ( item2, i ) => (
													<div key={`level2-${ item2.id }-${ i }`} >
														{ item2.name }
													</div>
												))
										}
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}