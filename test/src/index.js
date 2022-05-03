import React from 'react';
import ReactDomClient from 'react-dom/client';

import SimpleBreadcrumb from '../../src/index.js';

ReactDomClient
	.createRoot(document.getElementById('app'))
	.render(
		<SimpleBreadcrumb crumbs={[
			{ text: 'Home', link: '#' },
			{ text: 'App', link: '#' },
			{ text: 'Placeholder' },
			{ text: 'Page', link: '#' }
		]} />
	);
