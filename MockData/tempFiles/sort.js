function sortByName(data){
  
  const sorted = data.sort((a,b)=>{
    return a.name > b.name ? 1 : -1;
  })

  return sorted;
}


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


// const s_name = sortByName(data);
// console.log(s_name);

// const s_height = sortByHeight(data);
// console.log(s_height);

// const s_mass = sortByMass(data);
// console.log(s_mass);