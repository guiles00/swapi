const getName = require("./getName");

async function processData(data){
  
  const planets = data.map(async (planet) => {

    //Get the residents name
    const residents = planet.residents.map(async (resident)=>{
      return getName(resident);
    });
    // Once its done add the names to the object
    const res_residents = await Promise.all(residents)
    planet.residents = res_residents;
    
    return planet;

  });

  //wait until all is done
  return await Promise.all(planets); 

}

module.exports = processData;