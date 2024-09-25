const pokemon = require("pokemon")
const { MAP } = require("../config/constants")

exports.breadCalc = (size,count) => MAP.SIZE[size.toUpperCase()] * Number(count)
exports.cafeCalc = (coffeePrice,coffeeCount,cookiePrice,cookieCount) => Number(coffeePrice) * Number(coffeeCount) + Number(cookiePrice) * Number(cookieCount)
exports.exchangeCalc = (nation,won) => MAP.NATION[nation.toUpperCase()] * Number(won)
exports.makePokemonList = (count) => Array(Number(count)).fill(0).map((v)=>({name:pokemon.random('ko')}))