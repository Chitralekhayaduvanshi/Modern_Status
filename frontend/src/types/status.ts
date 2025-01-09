export interface Status {
  _id: string;
  serviceName: string;
  status: 'operational' | 'degraded' | 'down';
  description?: string;
  lastUpdated: string;
}

export interface CreateStatusInput {
  serviceName: string;
  status: 'operational' | 'degraded' | 'down';
  description?: string;
}

export interface UpdateStatusInput extends Partial<CreateStatusInput> {} 