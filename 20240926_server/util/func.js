const pokemon = require("pokemon");
const { keys } = require("../config/keys");


exports.createApiResponse = (status, message, data) => ({status,message,data})
exports.createPokemonsByLang = (count = 1, lang = 'ko') => Array(Number(count)).fill(0).map((v)=> pokemon.random(lang))
exports.createWeatherUrl = (city = "Seoul") => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keys.weather}`
exports.createCoinUrl = (name = "ALL") => `https://api.bithumb.com/public/ticker/${name}`
exports.createLolUrl = () => `https://ddragon.leagueoflegends.com/cdn/13.19.1/data/ko_KR/champion.json`