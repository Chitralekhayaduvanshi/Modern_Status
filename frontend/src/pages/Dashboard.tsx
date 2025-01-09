import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const { user, logout } = useAuth0();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Status Dashboard</h1>
          <div className="flex items-center gap-4">
            <span>{user?.email}</span>
            <Button variant="outline" onClick={() => logout()}>
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2>Welcome to the Dashboard</h2>
      </main>
    </div>
  );
} 