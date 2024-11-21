const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    if(weight === "" || isNaN(weight)){
        return result.innerHTML = "Your weigh"
    }else if(height === "" || isNaN(height)){
        return result.innerHTML = "Your height"
    }else{
        //cm => m
        height = height/100
        let bmi = (weight/Math.pow(height,2)).toFixed(2)
        //measurements
        if(bmi<18.5){
            showResult(bmi,"Mild Thinness","blue")
        }else if(bmi>=18.5 && bmi<=24.9){
            showResult(bmi,"Normal","green")
        }else if(bmi>=25 && bmi<=29.9){
            showResult(bmi,"Overweight","red")
        }else{
            showResult(bmi,"Obese Class I","purple")
        }
    }
})

function showResult(bmi,message,color){
    result.style.backgroundColor = color
    return result.innerHTML = `Result = ${bmi} (${message})`
}