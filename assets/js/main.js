
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




})(jQuery);