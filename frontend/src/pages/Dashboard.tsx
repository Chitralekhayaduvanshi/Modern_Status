import { useQuery } from '@tanstack/react-query';
import api from '../services/api';
import { DashboardItem } from '@/types/dashboard';

export default function Dashboard() {
  const { data, isLoading, error } = useQuery<DashboardItem[]>({
    queryKey: ['dashboard-data'],
    queryFn: async () => {
      const response = await api.get('/api/dashboard');
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
} 