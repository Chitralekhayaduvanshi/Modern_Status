import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@/components/ui/button';

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="card p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Modern Status</h1>
        <Button 
          className="w-full"
          onClick={() => loginWithRedirect()}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
} 