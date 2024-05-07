export default class ApiListings {
  static baseUrl = process.env.REACT_APP_SIMPLYRETS_API_URL;
  static apiKey = process.env.REACT_APP_SIMPLYRETS_API_KEY;
  static secret = process.env.REACT_APP_SIMPLYRETS_SECRET_KEY;
  static apiCredentials = btoa(`${this.apiKey}:${this.secret}`);

  static getListings() {
    return new Promise((resolve, reject) => {
      fetch(this.baseUrl, {
        method: 'GET',
        headers: {
          Authorization: `Basic ${this.apiCredentials}`,
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => {
          console.error('Error:', error);
          reject(error);
        });
    });
  }
}
