// Core
import React from 'react'
import PropTypes from 'prop-types'
// Style
import './style.css'
// Utils
import {noop} from 'utils'


const Button = props => {
	return (
		<button
			{...props}
			className={`button ${props.className}`}
			onClick={props.onClick}
			onBlur={props.onBlur}
			>
			{props.children}
		</button>
	)
}

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	onBlur: PropTypes.func,
}

Button.defaultProps = {
	onClick: noop,
	onBlur: noop,
}

export default Button;