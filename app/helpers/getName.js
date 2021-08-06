const axios = require("axios");

async function getName(url){

  const result = await axios({
    method: 'get', 
    url,
  }); 

  return result.data.name;
}

module.exports = getName;