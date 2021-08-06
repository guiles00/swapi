const axios = require("axios");
const PEOPLE_URL = "https://swapi.dev/api/people";
const PLANETS_URL = "https://swapi.dev/api/planets";

const sort = require("../helpers/sort");
const processData = require("../helpers/processData");

module.exports = function(){

  const getPeople = async function(req, res){

    const { sortBy } = req.query;
    
    try {

      let data = [];
      let next = PEOPLE_URL;

      do {        
        //get the first and then do a loop until nex is null
        result = await axios({
          method: 'get', 
          url: next,
        }); 

        next = result.data.next;
        data = data.concat(result.data.results)
        
      } while(next !== null)
      
      //we need all the data so we can order it by "sortBy"
      res.send(sort(data,sortBy));

    } catch (error) {
      console.log(error.message);
      res.status(500).send({"data": error.message});
    }
  }
 
  const getPlanets = async function(req, res) {

    try {

      let data = [];
      let next = PLANETS_URL;

      do {        
        //get the first and then do a loop until nex is null
        result = await axios({
          method: 'get', 
          url: next,
        }); 

        next = result.data.next;
        data = data.concat(result.data.results)
        
      } while(next !== null)
      
      const data2 = await processData(data);
      
      //we need all the data so we can get the residents name
      res.send(data2);

    } catch (error) {
      console.log(error.message);
      res.status(500).send({"data": error.message});
    }
  }

  return { getPeople, getPlanets }
}