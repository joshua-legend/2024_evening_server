// import "" from "" [브라우저 한정] <- type:"module"로 바꾸면 됨
// require() [윈도우 한정]

const express  = require("express")
const app = express()
const { breadCalc, cafeCalc, makePokemonList, exchangeCalc } = require("./util/calcFunc")
const { ROUTERS } = require("./config/routers")
const { createGetRoute } = require("./util/routeFunc")
const { DATA } = require("./data/data")
const { WHEATER_API_KEY } = require("./config/api_key")

createGetRoute(ROUTERS.DOG, DATA.DOG)
createGetRoute(ROUTERS.CAT, DATA.CAT)
createGetRoute(ROUTERS.ICECREAM, DATA.ICECREAM)

app.get(ROUTERS.BREAD,(req,res)=>{
    const { size , count } = req.query
    res.json({breadTotal: breadCalc(size,count)})
})
app.get(ROUTERS.CAFE,(req,res)=>{
    const { coffeePrice, coffeeCount, cookiePrice, cookieCount } = req.query
    res.json({cafeTotal: cafeCalc(coffeePrice,coffeeCount,cookiePrice,cookieCount)})
})
app.get(ROUTERS.EXCHANGE,(req,res)=>{
    const { won, nation } = req.query;
    res.json({exchangeResult: exchangeCalc(nation,won) })
})
app.get(ROUTERS.POKEMON,(req,res)=>{
    const { count } = req.query;
    res.json({pokemonList: makePokemonList(count)})
})

app.get(ROUTERS.WHEATER, (req,res)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Incheon&appid=${WHEATER_API_KEY}`
    fetch(url, { method: 'GET' })
    .then((v)=> v.json())
    .then((v)=>{
        res.json(v)
    })
})

app.listen(3000,()=>{
    console.log("서버 시작함 ㅅㄱ")
})