let menu=document.querySelector('.menu')
let navBar=document.querySelector('.navBar')
let i=0
let btn_saber_mais=document.querySelector('.btn-saber-mais')
menu.addEventListener('click',()=>{
    navBar.classList.toggle('hidden')

    if(i==0){
    menu.setAttribute('src','public/assets/cancelar(1).png')
    menu.style.height='30px'
    menu.style.width='30px'
    menu.style.padding='25px 0px 0px 0px'
    i=1
    }
                    
    else{
    menu.setAttribute('src','public/assets/icons8-cardápio.svg')
    i=0
    }
        })

function mudarTela(){
    if(window.innerWidth<768){
    navBar.classList.add('hidden')
    menu.setAttribute('src','public/assets/icons8-cardápio.svg')
    i=0
        }

    else{
    navBar.classList.add('hidden')
    }
        }

btn_saber_mais.addEventListener('click',()=>{
    alert('Botão Clicado com sucesso!')
})