import React from "react";
import PropTypes from "prop-types";

FormField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	isSurpriseMe: PropTypes.bool,
	onSurpriseMe: PropTypes.func,
};

function FormField(props) {
	const {
		label,
		name,
		value,
		type,
		placeholder,
		onChange,
		isSurpriseMe,
		onSurpriseMe,
	} = props;
	return (
		<div>
			<div className="flex items-center gap-2 mb-2">
				<label
					htmlFor={name}
					className="block text-sm font-medium text-gray-900"
				>
					{label}
				</label>
				{isSurpriseMe && (
					<button
						type="button"
						onClick={onSurpriseMe}
						className="font-semibold text-xs py-1 px-2 rounded-[5px] text-white bg-[#6469ff]"
					>
						Surprise Me
					</button>
				)}
			</div>
			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
			/>
		</div>
	);
}

export default FormField;
