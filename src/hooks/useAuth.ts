import { useContext } from 'react';
import { AuthContextType, AuthContext } from 'context/AuthContext';

export const useAuth = (): AuthContextType => {
  const userContext = useContext(AuthContext);
  if (!userContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return userContext;
};
