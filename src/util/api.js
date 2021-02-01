const { domain } = require("../data/config.json");
const url = `${domain}/api`;

const fetch = require("node-fetch");

const api = async (category, method, version) => {
  if (!version) {
    version = "v1";
  }
  let uri = `${url}/${version}/${category}/${method}`;
  let response = await fetch(uri);
  let data = await response.json();
  return data.img;
};
module.exports = api;
