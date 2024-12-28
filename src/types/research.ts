export type UserRole = 'Researcher' | 'Reviewer' | 'Investor';

export interface Proposal {
  id: number;
  title: string;
  researcher: string;
  status: string;
  fundingGoal: number;
  currentFunding: number;
  dueDate: string;
  description?: string;
  milestones?: Milestone[];
  reviews?: Review[];
}

export interface Milestone {
  id: number;
  title: string;
  status: 'Pending' | 'Completed' | 'Failed';
  dueDate: string;
}

export interface Review {
  id: number;
  reviewerId: string;
  comments: string;
  rating: number;
  date: string;
} 