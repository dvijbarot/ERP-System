import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();


export function tokenExpired(): boolean {
  // const expirationDate = helper.getTokenExpirationDate(localStorage.getItem('user'));
  return helper.isTokenExpired(sessionStorage.getItem('Token'));
}

export function getUserDetails(vItem: string): string {
  try {
    let values = [];
    const decodedToken = helper.decodeToken(sessionStorage.getItem('Token'));
    values = Object.keys(decodedToken).map(key => decodedToken[key]);
    switch (vItem) {
      case 'Username': return values[0]; break;
      case 'FirstName': return values[1]; break;
      case 'LastName': return values[2]; break;
      case 'Role': return values[3]; break;
      case 'AccessLevel': return values[4]; break;
      case 'Department': return values[5]; break;
      case 'Img': return values[6]; break;
      default : return 'Item Not Found'; break;
  }
  } catch (err) {
    console.log('No session found');
  }
}
