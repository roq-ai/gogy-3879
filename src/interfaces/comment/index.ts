import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CommentInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  text?: string;
  image?: string;
  video?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface CommentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  text?: string;
  image?: string;
  video?: string;
}
