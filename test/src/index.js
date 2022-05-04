import React from 'react';
import ReactDomClient from 'react-dom/client';

import SimpleReactBreadcrumb from '../../src/index.js';

ReactDomClient
	.createRoot(document.getElementById('app'))
	.render(
		<SimpleReactBreadcrumb crumbs={[
			{ text: 'Home', link: '#' },
			{ text: 'App', link: '#' },
			{ text: 'Placeholder' },
			{ text: 'Page', link: '#' }
		]} />
	);
