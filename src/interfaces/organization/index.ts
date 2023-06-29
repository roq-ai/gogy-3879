import { BookingInterface } from 'interfaces/booking';
import { CommentInterface } from 'interfaces/comment';
import { RatingInterface } from 'interfaces/rating';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  booking?: BookingInterface[];
  comment?: CommentInterface[];
  rating?: RatingInterface[];
  user?: UserInterface;
  _count?: {
    booking?: number;
    comment?: number;
    rating?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
