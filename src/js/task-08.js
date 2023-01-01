const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, handelSub);

function handelSub(event) {
    event.preventDefault()
    const {
        elements : {email, password},
    } = event.currentTarget

    if (email.value.trim === `` || password.value === ``) {
        return alert (`Всі поля повинні бути заповнені!`)
    }
    const userInfo = { email: email.value, password: password.value }
    
    console.log(userInfo)
    event.currentTarget.reset()
}
