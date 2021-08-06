
function sortByName(data){
  const sorted = data.sort((a,b)=>{
    return a.name > b.name ? 1 : -1;
  })
  return sorted;
}

function sortByHeight(data){
  const sorted = data.sort((a,b)=>{
    return a.height - b.height;
  })
  return sorted;
}

function sortByMass(data){
  const sorted = data.sort((a,b)=>{
    return a.mass - b.mass;
  })
  return sorted;
}

function sort(data, option){
  switch (option) {
    case 'name':
      console.log("sorted by name");  
      return sortByName(data); 
    case 'height':
      console.log("sorted by  height");
      return sortByHeight(data); 
    case 'mass':
      console.log("sorted by  mass");
      return sortByMass(data); 
    default:
      console.log("sorted by default");
     return data;
  }
}

module.exports = sort;