axios.get('https://api.github.com/users/Guuisr07')
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.warn(error);
    });