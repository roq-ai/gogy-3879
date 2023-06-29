import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  date: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
}
