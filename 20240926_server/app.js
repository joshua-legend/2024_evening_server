const express = require('express')
const app = express();
const { routers } = require('./config/routers');
const { createPokemonsByLang, createApiResponse, createWeatherUrl, createCoinUrl, createLolUrl } = require('./util/func');


// 포켓몬 - 갯수,언어
app.get(routers.pokemon,(req,res)=>{
    const { count, lang }= req.query
    res.json(createApiResponse(200,"데이터 성공",createPokemonsByLang(count,lang)))
})

//날씨
app.get(routers.weather, async (req,res)=>{
    const { city } = req.query
    const response = await fetch(createWeatherUrl(city), { method: 'GET' })
    const result = await response.json()
    if(response.ok){
        res.json(createApiResponse(200,"데이터 성공",result))
    }else{
        res.json(createApiResponse(400,"데이터 실패","그런 도시 없음"))
    }
})

app.get(routers.coin, async (req,res)=>{
    const { name } = req.query
    const response = await fetch(createCoinUrl(name), { method: 'GET' })
    const result = await response.json()
    if(response.ok){
        res.json(createApiResponse(200,"데이터 성공",result))
    }else{
        res.json(createApiResponse(400,"데이터 실패","그런 도시 없음"))
    }
})

// Data Dragon에서 챔피언 데이터 가져오기
app.get(routers.lol, async (req, res) => {
    const response = await fetch(createLolUrl());
    const result = await response.json();
    if (response.ok) {
        res.json(createApiResponse(200,"데이터 성공",result));
    } else {
        res.json(createApiResponse(400,"데이터 실패","그런 챔피언 없음"))
    }
});






//유튜브, 코인



app.listen(3000,()=> console.log("서버 시작함 ㅅㄱ"))