import React from 'react';
import PropTypes from 'prop-types';

import Crumb from './components/Crumb';


import './styles/index.scss';

function SimpleReactBreadcrumb({ crumbs }) {
	return (
		<nav aria-label="breadcrumb" className='simple-react-breadcrumb p-3'>
			<ol className="breadcrumb mb-0">
				{crumbs.map(({ text, link }, index, array) => (
					<Crumb
						text={text}
						link={link}
						isHome={index === 0}
						isActive={index === array.length - 1}
						key={`${text}-${link || 'nolink'}`}
					/>
				))}
			</ol>
		</nav>
	);
}

SimpleReactBreadcrumb.propTypes = {
	crumbs: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		link: PropTypes.string
	})).isRequired
};

export default SimpleReactBreadcrumb;
