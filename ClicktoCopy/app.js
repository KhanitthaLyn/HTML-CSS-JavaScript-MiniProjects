const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

btn.addEventListener("click",(e)=>{
    coupon.select()
    coupon.setSelectionRange(0,999999)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent="copied!!"
    setTimeout(()=>{
        btn.textContent="copy"
    },3000)
})