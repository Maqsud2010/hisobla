// for(let i = 0;i<700; i++){
//     document.write(`
//     <img src="https://picsum.photos/id/${i}/536/354"  /> 
//     `)
// }
let selectLang=prompt("SelectLang")
let wordsuzb ="Ma'lum olamda intergalaktik materiyadan tashqari galaktikalar, galaktikalar klasterlari va superklastlar deb ataladigan kattaroq tuzilmalar mavjud. Bugungi kunda ilg'or texnologiyalar mavjud bo'lishiga qaramay, biz uning o'lchamini aniq bilmaymiz. "


if(selectLang === "uzb"){
    let count=+prompt("SIZGA QANCHA SO'Z KERAK")
    let wordsArrayuzb=wordsuzb.split(" ")



    for (let i=0; i < count; i++){
        let random = Math.floor(Math.random() * wordsArrayuzb.length)
        document.write(`
        <span>${wordsArrayuzb[random]}</span>
        `)
    }
}

let wordsrus ="Я́блоко — сочный плод яблони, который употребляется в пищу в свежем и запеченном виде, служит сырьём в кулинарии и для приготовления напитков. Наибольшее распространение получила яблоня домашняя, реже выращивают яблоню сливолистную. Размер красных, зелёных, жёлтых или оранжевых шаровидных плодов 5—13 см в диаметре. Происходит из Центральной Азии, где до сих пор произрастает дикорастущий предок яблони домашней — яблоня Сиверса[1]. На сегодняшний день существует множество сортов этого вида яблони, произрастающих в различных климатических условиях. По времени созревания отличают летние, осенние и зимние сорта, более поздние сорта отличаются хорошей стойкостью."


if(selectLang === "rus"){
    let count=+prompt("СКОЛЬКО СЛОВ ВАМ НУЖНО")
    let wordsArrayrus=wordsrus.split(" ")



    for (let i=0; i < count; i++){
        let random = Math.floor(Math.random() * wordsArrayrus.length)
        document.write(`
        <span>${wordsArrayrus[random]}</span>
        `)
    }
}
let wordseng ="An apple is a round, edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found. Apples have been grown for thousands of years in Asia and Europe and were introduced to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.Apples grown from seed tend to be very different from those of their parents, and the resultant fruit frequently lacks desired characteristics. Generally, apple cultivars are propagated by clonal grafting onto rootstocks. Apple trees grown without rootstocks tend to be larger and much slower to fruit after planting. Rootstocks are used to control the speed of growth and the size of the resulting tree, allowing for easier harvesting.There are more than 7,500 cultivars of apples. Different cultivars are bred for various tastes and uses, including cooking, eating raw, and cider production. Trees and fruit are prone to fungal, bacterial, and pest problems, which can be controlled by a number of organic and non-organic means. In 2010, the fruit's genome was sequenced as part of research on disease control and selective breeding in apple production."
if(selectLang === "eng"){
    let count=+prompt("HOW MANY WORDS DO YOU NEED")
    let wordsArrayeng=wordseng.split(" ")



    for (let i=0; i < count; i++){
        let random = Math.floor(Math.random() * wordsArrayeng.length)
        document.write(`
        <span>${wordsArrayeng[random]}</span>
        `)
    }
}