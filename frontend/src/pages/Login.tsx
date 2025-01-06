import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@/components/ui/button';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Status Page Login</h1>
        <Button 
          className="w-full"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </Button>
      </div>
    </div>
  );
};

export default Login; 