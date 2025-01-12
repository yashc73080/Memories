import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// Connecting to the div with ID of root
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);