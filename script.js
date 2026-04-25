const toggle = document.querySelector(".menu-toggle");
const nav= document.querySelector(".nav-links");
if(toggle && nav){
    toggle.addEventListener("clik", ()=>{
        nav.classList.toggle("active");
    });
}

const saludo = document.querySelector("#saludo");
const hora = new Date().getHours();
if(hora < 12){
    saludo.textContent = "Buenos dias";
}
else if(hora < 18){
    saludo.textContent = "buenas tardes";
}
else{
    saludo.textContent = "buenas noches";
}
const botonInfo= document.querySelector("#btn-info");
const infoExtra= document.querySelector("#info-extra");
if(botonInfo && infoExtra){
botonInfo.addEventListener("click", ()=>{
    if(infoExtra.style.display === "none"){
        infoExtra.style.display = "block";
    }
    else{
        infoExtra.style.display = "none";
    }
});
}
const darkBtn= 
document.querySelector("#dark-mode-btn");
function actualizarTexto(){
    if
    (document.body.classList.contains("dark")){
        darkBtn.textContent= "Modo Claro";
    } else {
        darkBtn.textContent= "Modo oscuro"
    }
}
darkBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if
    (document.body.classList.contains("dark"))
    {
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "light");
    }
    actualizarTexto();
});
if (localStorage.getItem("modo") === "dark"){
    document.body.classList.add("dark");
}
actualizarTexto()

console.log("dark mode conectado");
AOS.init();

document.addEventListener("DOMContentLoaded", () => {
    const form=
    document.querySelector("#contact-form");
    const mensaje=
    document.querySelector("#form-msg");
    console.log("form detectado:", form);
    console.log("mensaje detectado:", mensaje);
    if(form && mensaje){
        form.addEventListener("submit",(e)=>{
        e.preventDefault();
        mensaje.textContent = "Mensaje enviado coorectamente ✅";
        form.reset();    
        });
    }
});
// AOs.init();
const Saludo=
document.querySelector("#saludo");
saludo.style.opacity= 0;
setTimeout(() =>{
    saludo.style.opacity= 1;
    saludo.style.opacity= "opacity 1s ease";
}, 500);


const projects = [
    {
        title: "Landing page",
        description: "Pagina moderna creada en HTML y CSS",
        image: "images/portafolio.png",
        github: "https://github.com/ergboonline-creator/landing-page",
        category: "html"
    },
    {
        title: "Formulario interactivo",
        description: "Formulario con validacion en JavaScript",
        image: "images/form.png",
        github: "https://github.com/ergboonline-creator/formulario",
        category: "js"
    },
    {
        title: "Modo oscuro",
        description: "Implementacion de dark mode con LocalStorage",
        image: "images/dark.png",
        github: "https://github.com/ergboonline-creator/dark-mode",
        category: "js"
    }
];
const container= 
document.querySelector("#projects-container");
function renderProjects(filter) {
    const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);
    container.innerHTML = ""; // limpiar antes de renderizar

filtered.forEach(project => {
    const card =
    document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
    <img src="${project.image}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.github}" target="_blank">Ver proyecto</a>
    `;
    const modal =
document.getElementById("modal");
const modalTitle =
document.getElementById("modal-title");
const modalDescription =
document.getElementById("modal-description");
const modalLink =
document.getElementById("modal-link");
const closeModal =
document.getElementById("close-modal");
card.addEventListener("click", () =>
    {
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalLink.textContent = project.github;
    modal.classList.remove("hidden");
});
    container.appendChild(card);
});
}

document.addEventListener("DOMContentLoaded", () =>{
    const closeModal = 
    document.getElementById("close-modal");
    closeModal.addEventListener("click", ()=>
{
renderProjects("all");
    modal.classList.add("hidden");
});
});
const buttons =
document.querySelectorAll(".filters button");
buttons.forEach(btn =>{
    btn.addEventListener("click", () =>{  
    buttons.forEach(b =>
        b.classList.remove("active"));
        btn.classList.add("active");
        const filter =
        btn.getAttribute("data-filter");
        renderProjects(filter);
});
});