import ReactDOM from 'react-dom/client';
import App from './app';

const appContainer = document.getElementById('app') as Element;

const root = ReactDOM.createRoot(appContainer);

root.render(<App />);
