import { OperationResult } from '../Store/models/OperationResult';
import { AccountsDB } from '../AccountsDB';
import { Account } from '../Store/models/Account';

export class AuthService {
  CheckLogin(acc: Account): OperationResult {
    if (
      AccountsDB.has(acc.Login) &&
      AccountsDB.get(acc.Login)?.Password === acc.Password
    ) {
      return { success: true };
    } else {
      let temp: OperationResult = { success: false, messages: [] };
      if (!AccountsDB.has(acc.Login)) {
        temp.messages?.push('Неверный логин!');
      }
      if (AccountsDB.get(acc.Login)?.Password !== acc.Password) {
        temp.messages?.push('Неверный пароль!');
      }
      return temp;
    }
  }
}
