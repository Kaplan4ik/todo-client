import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom/client';

import { env } from 'environment/constants';
import App from 'features/app/App';
import './index.css';

const domain = env.auth0Domain;
const clientId = env.auth0ClientId;
const audience = env.auth0Audience;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    audience={audience}
    scope='openid profile email'
  >
    <App />
  </Auth0Provider>,
);
