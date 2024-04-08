/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// permission
var btnPermission = document.getElementById("btn_permission");
if (Notification.permission !== "default") {
    btnPermission.style.display = "none";
} else {
    btnPermission.style.display = "inline-block";
}

btnPermission.onclick = () => {
    Notification.requestPermission();
};
// notificações
function spawnNotification(options) {
    var n = new Notification(options.title, options.opt);
    if (options.link !== "") {
        n.addEventListener("click", function() {
            n.close();
            window.focus();
            window.location.href = options.link;
        });
    }
}
// exemplo
// Exemplo de uso
spawnNotification({
    title: "Bem vindo ao Health!",
    opt: {
        body: "Espero que você esteja desfrutando de nossos serviços!",
        icon: "assets/icons/playstore.png", // Ícone opcional
    },
    link: "/detalhes-da-venda" // Link opcional
});