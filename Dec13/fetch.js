fetch("https://randomuser.me/api/")
  .then((response) => {
     return response.json()
  })
  .then(data =>{
    console.log(data);
    console.log(data.results[0].dob.age);
    console.log(data.results[0].email);
    
  })
  .catch((err) => {
    console.log(err);
  });
