export class RegisterWithExternal {
  firstName: string;
  lastName: string;
  userId: string;
  accessToken: string;
  provider: string;
  email: string;
  //userName: string;

  constructor(firstName: string, lastName: string, userId: string, accessToken: string, provider: string, email: string/*, userName: string*/) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userId = userId;
    this.accessToken = accessToken;
    this.provider = provider;
    this.email = email;
    //this.userName = userName;
  }
}
