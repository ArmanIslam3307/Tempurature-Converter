let form = document.querySelector("#form")
let celsiusInput = document.querySelector("#celcius")
let fahrenheitInput = document.querySelector("#farenheight")
let kelvinInput = document.querySelector("#kelvin")

// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     let c = parseFloat(celsiusInput.value)
//     let f = parseFloat(fahrenheitInput.value)
//     let k = parseFloat(kelvinInput.value)

//     if (c) {
//         fahrenheitInput.value = (c * 9 / 5) + 32
//         kelvinInput.value = c + 273.15
//     }

//     else if (f) {
//         celsiusInput.value = (f - 32) * 5 / 9
//         kelvinInput.value = (f - 32) * 5 / 9 + 273.15
//     }

//     else if (MediaKeyMessageEvent) {
//         celsiusInput.value = k - 273.15
//         fahrenheitInput.value = (k - 273.15) * 9 / 5 + 32
//     }
// })





// function blurEvent(inp){
//     inp.addEventListener("blur",()=>{
//     let c = parseFloat(celsiusInput.value)
//     let f = parseFloat(fahrenheitInput.value)
//     let k = parseFloat(kelvinInput.value)

//     if (c) {
//         fahrenheitInput.value = (c * 9 / 5) + 32
//         kelvinInput.value = c + 273.15
//     }

//     else if (f) {
//         celsiusInput.value = (f - 32) * 5 / 9
//         kelvinInput.value = (f - 32) * 5 / 9 + 273.15
//     }

//     else if (k) {
//         celsiusInput.value = k - 273.15
//         fahrenheitInput.value = (k - 273.15) * 9 / 5 + 32
//     }else{
//         kelvinInput.value = ""
//         celsiusInput.value=""
//         fahrenheitInput.value=""
//     }
//     })

// }
// blurEvent(celsiusInput)
// blurEvent(fahrenheitInput)
// blurEvent(kelvinInput)

function convert(from) {
    let c = parseFloat(celsiusInput.value);
    let f = parseFloat(fahrenheitInput.value);
    let k = parseFloat(kelvinInput.value);

    if (from === "c" && c) {
        fahrenheitInput.value = (c * 9 / 5 + 32).toFixed(2);
        kelvinInput.value = (c + 273.15).toFixed(2);
    }
    else if (from === "f" && f) {
        celsiusInput.value = ((f - 32) * 5 / 9).toFixed(2);
        kelvinInput.value = ((f - 32) * 5 / 9 + 273.15).toFixed(2);
    }
    else if (from === "k" && k) {
        celsiusInput.value = (k - 273.15).toFixed(2);
        fahrenheitInput.value = ((k - 273.15) * 9 / 5 + 32).toFixed(2);
    }
}

celsiusInput.addEventListener("change", () => convert("c"));
fahrenheitInput.addEventListener("change", () => convert("f"));
kelvinInput.addEventListener("change", () => convert("k"));

