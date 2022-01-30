function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onload = function() {
        let main = this.response.main;
        let weather = this.response.weather;

        document.getElementById("main").innerHTML = "Temperature: " + parseInt(main.temp - 273.15).toFixed(0) + "C°";
        document.getElementById("weather").innerHTML = "Weather: " + weather[0].description;

        let c = main.temp - 273.15
        let pokeapi = "https://pokeapi.co/api/v2/type/"
        let type = ""
        let pokename = ""

        if (c < 5) {
            type = "ice"
            document.getElementById("pokename").innerHTML = "ARTICUNO"
            document.getElementById("pokemon").src = "./pokemonimage/Articuno.png";
        } else if (c >= 5 && c < 10) {
            type = "water"
            document.getElementById("pokename").innerHTML = "GRENINJA"
            document.getElementById("pokemon").src = "./pokemonimage/Greninja.png";
        } else if (c >= 12 && c < 15) {
            type = "grass"
            document.getElementById("pokename").innerHTML = "SCEPTILE"
            document.getElementById("pokemon").src = "./pokemonimage/Sceptile.png";
        } else if (c >= 15 && c < 21) {
            type = "ground"
            document.getElementById("pokename").innerHTML = "DUGTRIO"
            document.getElementById("pokemon").src = "./pokemonimage/Dugtrio.png";
        } else if (c >= 23 && c < 27) {
            type = "bug"
            document.getElementById("pokename").innerHTML = "WEEDLE"
            document.getElementById("pokemon").src = "./pokemonimage/Weedle.png";
        } else if (c >= 27 && c < 33) {
            type = "rock"
            document.getElementById("pokename").innerHTML = "ONIX"
            document.getElementById("pokemon").src = "./pokemonimage/Onix.png";
        } else if (c > 33) {
            type = "fire"
            document.getElementById("pokename").innerHTML = "CHARIZARD"
            document.getElementById("pokemon").src = "./pokemonimage/Charizard.png";
        } else if (c == 11 || c == 22) {
            type = "normal"
            document.getElementById("pokename").innerHTML = "PIDGEOT"
            document.getElementById("pokemon").src = "./pokemonimage/Pidgeot.png";
        }

        if (weather[0].main == "Rain") {
            type = "electric"
            pokename = "PIKACHU"
            document.getElementById("pokename").innerHTML = "PIKACHU :O"
            document.getElementById("pokemon").src = "./pokemonimage/Pikachu.png";
        }

        let xhttp2 = new XMLHttpRequest();
        xhttp2.responseType = "json";
        xhttp2.onload = function() {
            document.getElementById("tipo").innerHTML = "Type: " + this.response.name;

        }
        xhttp2.open("GET", pokeapi + type);
        xhttp2.send();

    }

    let city = document.getElementById("city").value;
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a5fb522ac67d542d1ecc0aa5e105c9f4", true);
    xhttp.send();
}