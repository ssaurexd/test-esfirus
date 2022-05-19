import { useContext } from 'react'
import PropTypes from 'prop-types'
/*  */
import { InitContext } from '../context'


const Buttons = ({ onClickBtn2, onClickBtn3, onClickBtn4 }) => {

	const { isUpdating } = useContext( InitContext )

	return (
		<div className='d-flex justify-content-center gap-3' >
			<button
				onClick={ onClickBtn2 }
				className='btn btn-primary'
			>
				2
			</button>
			<button
				onClick={ onClickBtn3 }
				className='btn btn-primary'
			>
				3
			</button>
			<button 
				className="btn btn-primary" 
				type="button" 
				disabled={ isUpdating }
				onClick={ onClickBtn4 }
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
	)
}

Buttons.propTypes = {
	onClickBtn2: PropTypes.func.isRequired,
	onClickBtn3: PropTypes.func.isRequired,
	onClickBtn4: PropTypes.func.isRequired
}

export default Buttons