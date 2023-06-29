import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface RatingInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  score: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface RatingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
}
