class LocaleStorageService {
  static setToken(token: string) {
    localStorage.setItem('token', token);
  }

  static getToken() {
    return localStorage.getItem('token') || '';
  }

  static removeToken() {
    localStorage.removeItem('token');
  }

  static checkToken() {
    return localStorage.getItem('token') !== null;
  }
}

export { LocaleStorageService };
