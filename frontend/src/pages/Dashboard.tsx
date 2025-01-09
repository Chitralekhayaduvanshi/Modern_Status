import { useQuery } from '@tanstack/react-query';
import { getStatuses } from '@/services/api';
import { Status } from '@/types/status';

export default function Dashboard() {
  const { data: statuses, isLoading, error } = useQuery<Status[]>({
    queryKey: ['statuses'],
    queryFn: getStatuses,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="loading loading-lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-destructive mb-2">Error Loading Statuses</h2>
          <p className="text-muted-foreground">
            {error instanceof Error ? error.message : 'An unexpected error occurred'}
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!statuses?.length) {
    return (
      <div className="min-h-screen bg-background">
        <nav className="border-b bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-xl font-bold text-foreground">Status Dashboard</h1>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="card p-6 text-center">
            <p className="text-muted-foreground">No status updates available</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-xl font-bold text-foreground">Status Dashboard</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-4">
          {statuses.map((status) => (
            <div key={status._id} className="card">
              <div className="card-header">
                <h2 className="text-lg font-semibold">{status.serviceName}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className={`badge ${
                      status.status === 'operational'
                        ? 'bg-green-100 text-green-800'
                        : status.status === 'degraded'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {status.status}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Last updated: {new Date(status.lastUpdated).toLocaleString()}
                  </span>
                </div>
              </div>
              {status.description && (
                <div className="card-content">
                  <p className="text-muted-foreground">{status.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 