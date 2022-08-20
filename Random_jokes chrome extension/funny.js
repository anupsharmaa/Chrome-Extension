fetch("https://api.chucknorris.io/jokes/random")
  .then(data=>data.json())
  .then(jokeData=>{


    const jokeText=jokeData.value;
    const jokeElement=document.getElementById('jokeElement');
    
    jokeElement.innerHTML=jokeText;
  }).catch((error) => {
    console.log(error);
  });
  

// http://api.icndb.com/jokes/random -- jokeData.value.joke;