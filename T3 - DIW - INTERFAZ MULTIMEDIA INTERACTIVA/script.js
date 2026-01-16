/* Lista de canciones */
const canciones = [
    { titulo: "Bussinesman", artista: "La Mano 1.9", src: "assets/Bussinesman.mp3" },
    { titulo: "Eurovision", artista: "Central Cee", src: "assets/Eurovision.mp3" },
    { titulo: "Phantom", artista: "EsDeeKic", src: "assets/Phantom.mp3" },
    { titulo: "Phantom", artista: "EsDeeKic", src: "assets/Phantom.mp3" },
    { titulo: "Mans Not Hot", artista: "Big Shaq", src: "assets/Mans not Hot.mp3" }
];

/* Mensajes de carga rotativos */
const mensajesCarga = ["JOINING SERVER...", "PREPARING ASSETS...", "ESTABLISHING CONNECTION..."];

/* Selección de elementos del DOM */
const audio = document.querySelector('audio');
const tituloTxt = document.querySelector('.titulo');
const artistaTxt = document.querySelector('.subtitulo');
const progressBar = document.querySelector('.progressbar');
const loadingTxt = document.querySelector('.loading-text');

/* Selección de botones */
const botones = document.querySelectorAll('button');
const btnPrev = botones[0], btnPlay = botones[1], btnNext = botones[2];
const btnVolDown = botones[3], btnMute = botones[4], btnVolUp = botones[5];

/* Selección aleatoria de canción inicial */
let indiceCancion = Math.floor(Math.random() * canciones.length);

/* Carga la canción según el índice */
function cargarCancion(indice) {
    const cancion = canciones[indice];
    audio.src = cancion.src;
    tituloTxt.innerText = cancion.titulo;
    artistaTxt.innerText = cancion.artista;
}

/* Controles de reproducción */
function togglePlay() {
    const icon = btnPlay.querySelector('i');
    if (audio.paused) {
        audio.play();
        icon.className = 'fas fa-pause';
    } else {
        audio.pause();
        icon.className = 'fas fa-play';
    }
}

/* Cambia a la canción siguiente o anterior */
function cambiarCancion(dir) {
    indiceCancion = (dir === 'sig') ? (indiceCancion + 1) % canciones.length : (indiceCancion - 1 + canciones.length) % canciones.length;
    cargarCancion(indiceCancion);
    audio.play();
    btnPlay.querySelector('i').className = 'fas fa-pause';
}

/* Modifica el volumen */
function modificarVolumen(cantidad) {
    /* Asegura que el volumen esté entre 0 y 1 */
    audio.volume = Math.min(1, Math.max(0, audio.volume + cantidad));
}

/* Activa o desactiva el mute */
function toggleMute() {
    audio.muted = !audio.muted;
    btnMute.querySelector('i').className = audio.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
}

/* Actualización de barra de progreso */
audio.addEventListener('timeupdate', () => {
    if (audio.duration) progressBar.value = (audio.currentTime / audio.duration) * 100;
});

/* Permite saltar a una parte específica al hacer clic en la barra de progreso */
progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
});

/* Rotación de mensajes de carga */
let msgIdx = 0;
setInterval(() => {
    msgIdx = (msgIdx + 1) % mensajesCarga.length;
    loadingTxt.innerText = mensajesCarga[msgIdx];
}, 3000);

/* --- NUEVOS CONTROLES POR TECLADO --- */
window.addEventListener('keydown', (e) => {
    switch(e.code) {
        case "Space":
            e.preventDefault(); /* Evita que la página baje al presionar espacio */
            togglePlay();
            break;
        case "ArrowRight":
            cambiarCancion('sig');
            break;
        case "ArrowLeft":
            cambiarCancion('prev');
            break;
        case "ArrowUp":
            e.preventDefault();
            modificarVolumen(0.1);
            break;
        case "ArrowDown":
            e.preventDefault();
            modificarVolumen(-0.1);
            break;
    }
});

/* Eventos de botones (Click) */
btnPlay.onclick = togglePlay;
btnPrev.onclick = () => cambiarCancion('prev');
btnNext.onclick = () => cambiarCancion('sig');
btnMute.onclick = toggleMute;
btnVolUp.onclick = () => modificarVolumen(0.1);
btnVolDown.onclick = () => modificarVolumen(-0.1);

/* Inicio automático y gestión de permisos del navegador */
window.onload = () => {
    cargarCancion(indiceCancion);
    
    audio.play().then(() => {
        btnPlay.querySelector('i').className = 'fas fa-pause';
    }).catch(() => {
        console.log("Autoplay bloqueado");
    });

    document.addEventListener('click', () => {
        if(audio.paused) {
            audio.play();
            btnPlay.querySelector('i').className = 'fas fa-pause';
        }
    }, { once: true });
};