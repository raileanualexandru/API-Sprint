//api adress
//https://sv443.net/jokeapi/v2/#getting-started
let i = 0;
document.getElementById("targetbtn").addEventListener("click", function () {
    fetch('https://sv443.net/jokeapi/v2/joke/Any?idRange=' + i)
        .then(response => response.json())
        .then(data => {

            if (data.type == "single") {
                document.getElementById("targetAdvice").innerHTML = data.joke;
            } else{
                document.getElementById("targetAdvice").innerHTML ="-"+ data.setup + " - " + data.delivery;
            }
            i++;
            if (i == 291) {
                i = 0;
            }
        });
});

