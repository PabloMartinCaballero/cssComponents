const hamburguesa = document.querySelector('.burger-icon');
console.log(hamburguesa);

const navContainer = document.querySelector('.nav-container')
console.log(navContainer);


hamburguesa.addEventListener('click', ()=>{

    navContainer.classList.toggle('active')

})

