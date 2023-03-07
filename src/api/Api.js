class Api {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  search(value) {
    return fetch(`${this._baseUrl}search/photos?query=${value}`, {
      headers: {
        Authorization: `Client-ID ${this._apiKey}`,
      },
    }).then((res) => res.json());
  }
}

const api = new Api({
  baseUrl: "https://api.unsplash.com/",
  apiKey: "KHgwpplY_B9NZ7ZRyTbVEuxYxidSE7eDan8inHlatds",
});

export default api;
