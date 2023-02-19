let paralax__title = document.querySelector('.paralax__title'),
    inner__paralax = paralax__title.innerHTML;
    paralax__title.innerHTML = '';


function toCollect(i = 0) {
    paralax__title.innerHTML += inner__paralax[i]
    i++
    if (i < inner__paralax.length) {
        setTimeout(() => {
            toCollect(i)
        }, 200);
    }
}

toCollect()
const products = {
    plainBurger: {
        name: 'Qizil gel',
        price: 12000,
        kcall: 4.0,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'Saziq gel',
        price: 20000,
        kcall: 4.0,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'Kok gel',
        price: 25000,
        kcall: 4.0,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    }
}
const btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
addCart = document.querySelector('.addCart'),
receipt = document.querySelector('.receipt'),
receipt__window = document.querySelector('.receipt__window'),
receipt__window_out = document.querySelector('.receipt__window-out'),
receipt__window_btn = document.querySelector('.receipt__window-btn'),
header__timer = document.querySelector('.header__timer');
for (let i = 0; i < btnPlusOrMinus.length; i++) {
    const el = btnPlusOrMinus[i];
    el.addEventListener('click', function () {
        plusOrMinus(this)
    })
}
function plusOrMinus(element) {
    const parent = element.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        /* getAttribute bu html elementni atribut qiymatini oladi */
        out = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kcall = parent.querySelector('.main__product-kcall span'),
        elAttr = element.getAttribute('data-symbol');
    if (elAttr == '+') {
        products[parentId].amount++
    } else if (elAttr == '-') {
        products[parentId].amount--
    }
    out.innerHTML = products[parentId].amount
    price.innerHTML = products[parentId].Summ
    kcall.innerHTML = products[parentId].Kcall
}
let arreyProduct = [],
totalName = "",
totalPrice = 0,
totalKcall = 0;

addCart.addEventListener('click', function(){
    for (const key in products) {
        const po = products [key];
        if (po.amount > 0) {
          arreyProduct.push(po)  
            
        }
        po.price = po.Summ
        po.kcall = po.Kcall
    }
    for (let i = 0; i < arreyProduct.length; i++) {
        const el = arreyProduct[i];
        totalPrice += el.price
        totalKcall += el.kcall
        totalName += `${el.name}\n` 
    }   
receipt__window_out.innerHTML = `Buyutma: ${totalName }\nUmumiy hajim: ${totalKcall}
Umumiy summa: ${totalPrice} so'm`
receipt.style.display = 'flex'
setTimeout(() => {
    receipt.style.opacity = '1';
}, 100)
setTimeout(() => {
    receipt__window.style.top = '30%';
}, 200)
let amountOut = document.querySelectorAll('.main__product-num')
let priceOut = document.querySelectorAll('.main__product-price span')
let kcallOut = document.querySelectorAll('.main__product-kcall span')
for (let i = 0; i < amountOut.length; i++) {
    const el = amountOut [i];
    el.innerHTML = 0
    priceOut [i].innerHTML = 0
    kcallOut [i].innerHTML = 0
}
})
receipt__window_btn.addEventListener('click',function (){
location.reload()
})



let close = document.querySelector('.view__close')
close.addEventListener('click', function(){
    view.style.display = 'none'
})

let card = document.querySelector('.card__button')
card.addEventListener('click', function(){
    card_wrapper.style.marginTop = "160px"
}) 

let cardtwo = document.querySelector('.card__buttontwo')
cardtwo.addEventListener('click', function(){
    card_wrappertwo.style.marginTop = "160px"
})
let cardthree = document.querySelector('.card__buttonthree')
cardthree.addEventListener('click', function(){
    card_wrapperthree.style.marginTop = "160px"
})
let cardfour = document.querySelector('.card__buttonfour')
cardfour.addEventListener('click', function(){
    card_wrapperfour.style.marginTop = "160px"
})
card.addEventListener('dblclick', function(){
    card_wrapper.style.marginTop = "-200px"
})
cardtwo.addEventListener('dblclick', function(){
    card_wrappertwo.style.marginTop = "-200px"
})
cardthree.addEventListener('dblclick', function(){
    card_wrapperthree.style.marginTop = "-200px"
})
cardfour.addEventListener('dblclick', function(){
    card_wrapperfour.style.marginTop = "-200px"
})