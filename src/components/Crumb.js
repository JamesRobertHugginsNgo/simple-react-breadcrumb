import React from 'react';
import PropTypes from 'prop-types';

function Crumb({ text, link, isHome = false, isActive = false }) {
	let content;
	if (isHome) {
		content = (<><i className="bi bi-house-door-fill"></i> {text}</>);
	} else {
		content = text;
	}
	if (!isActive && link) {
		content = (<a href={link}>{content}</a>);
	}

	let element;
	if (isActive) {
		element = (<li className="breadcrumb-item active" aria-current="page">{content}</li>);
	} else {
		element = (<li className="breadcrumb-item" aria-current="page">{content}</li>);
	}

	return element;
}

Crumb.propTypes = {
	text: PropTypes.string.isRequired,
	link: PropTypes.string,
	isHome: PropTypes.bool,
	isActive: PropTypes.bool
};

export default Crumb;
