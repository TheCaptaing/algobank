class User {
    constructor(name, surname, phone, email, gender) {
        this.name = name
        this.surname = surname
        this.phone = phone
        this.email = email
        this.gender = gender
    }
}
class Card {
    constructor(number, name, month, year, cvv, balance) {
        this.number = number
        this.name = name
        this.month = month
        this.year = year
        this.cvv = cvv
        this.balance = balance
    }
}

let a = document.querySelector('.card-number')
let b = document.querySelector('.card-expire-month')
let c = document.querySelector('.card-expire-year')
let d = document.querySelector('.card-holder-name')
let e = document.querySelector('.card-holder-surname')
let f = document.querySelector('.card-holder-phone')
let g = document.querySelector('.card-holder-email')
let h = document.querySelector('.card-holder-gender')
let y = document.querySelector('.create-card-btn')
let cvv = 100
let cards = []

y.addEventListener('click', function() {
    let holder = new User(
        d.value,
        e.value,
        f.value,
        g.value,
        h.value)
    let card = new Card(
        a.value,
        holder,
        b.value,
        c.value,
        cvv,
        1000)
    cvv += 1
    cards.push(card)

})
