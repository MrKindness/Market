import { Account } from './Account';

export interface AuthResult {
  success: boolean;
  messages?: {data: string[]};
  account?: Account;
}
