import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const { user, logout } = useAuth0();

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-foreground">Status Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">{user?.email}</span>
            <Button 
              variant="outline" 
              onClick={() => logout()}
              className="hover-effect focus-ring"
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-semibold">Welcome to the Dashboard</h2>
          </div>
          <div className="card-content">
            <p className="text-muted-foreground">Your content goes here</p>
          </div>
        </div>
      </main>
    </div>
  );
} 