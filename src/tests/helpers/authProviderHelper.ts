import type { Auth0ContextInterface } from '@auth0/auth0-react';
import * as useAuth0 from '@auth0/auth0-react';
import { vi } from 'vitest';

export function authProviderHelper() {
  const mockAuth0 = {
    isAuthenticated: true,
    user: { name: 'Test User', email: 'testuser@example.com' },
    logout: vi.fn(),
    loginWithRedirect: vi.fn(),
    getAccessTokenSilently: vi.fn().mockReturnValue('test-token'),
  } as unknown as Auth0ContextInterface;
  vi.spyOn(useAuth0, 'useAuth0').mockReturnValue(mockAuth0);
}
