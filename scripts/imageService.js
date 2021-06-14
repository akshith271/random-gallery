const clientID = "00pUCYQQsfQFdw0jLGAyQz5xhz_wbP0EasNG65foIy4";
//this is the client id given by unsplash
const URL = "https://api.unsplash.com"; //we hit this API
const call = (url, body, method = "GET") => {
  //this calls the fetch below
  const config = {
    headers: {
      //we send this headers object to unsplash and it returns a response and we fetch it
      Authorization: "Client-ID " + clientID,
    },
  };
  return fetch(URL + url, config).then((res) => res.json());
  //returns the response in json
};

export default {
  random: function (count) {
    return call(`/photos/random?count=${count}`);
  },
  search: function (query) {
    return call(
      `/search/photos?query=${query}&per_page=100&content_filter=high`
    );
  },
};
