import { useQuery } from '@tanstack/react-query';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@/components/ui/button';
import { getStatuses } from '@/services/api';

const Dashboard = () => {
  const { logout, user } = useAuth0();
  const { data: statuses, isLoading } = useQuery({
    queryKey: ['statuses'],
    queryFn: getStatuses,
  });

  if (isLoading) {
    return <div>Loading statuses...</div>;
  }

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
        <div className="grid gap-4">
          {statuses?.map((status: any) => (
            <div
              key={status._id}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <h3 className="font-semibold">{status.serviceName}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className={`px-2 py-1 rounded text-sm ${
                  status.status === 'operational' ? 'bg-green-100 text-green-800' :
                  status.status === 'degraded' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {status.status}
                </span>
                <span className="text-sm text-gray-500">
                  Last updated: {new Date(status.lastUpdated).toLocaleString()}
                </span>
              </div>
              {status.description && (
                <p className="mt-2 text-sm text-gray-600">{status.description}</p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 