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
