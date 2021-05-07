import { AuthResult } from '../Store/models/AuthResult';
import { AccountsDB } from '../AccountsDB';
import { Account } from '../Store/models/Account';

export class AuthService {
  CheckLogin(acc: Account): AuthResult {
    let temp: string[] = [];
    if (!AccountsDB.has(acc.Login)) {
      temp.push('Неверный логин!');
    }

    if (AccountsDB.get(acc.Login)?.Password !== acc.Password) {
      temp.push('Неверный пароль!');
    }

    return {
      success:
        AccountsDB.has(acc.Login) &&
        AccountsDB.get(acc.Login)?.Password === acc.Password,
      account: AccountsDB.get(acc.Login),
      messages: { data: temp },
    };
  }
}
