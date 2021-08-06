const getName = require("./getName");

function processData(data){
  
 const planets = data.map(async (planet)=>{
    
    const residents = planet.residents.map(async (resident)=>{
      return getName(resident);
    })
    
    return Promise.all(residents).then((residents)=>{
      planet.residents = residents;
      return planet;
    });

  });
  
  return Promise.all(planets).then((data)=>{
    return data;
  })

}

module.exports = processData;