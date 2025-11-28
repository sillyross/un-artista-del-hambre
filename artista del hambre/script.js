document.addEventListener("DOMContentLoaded", () => {
  const zoomables = document.querySelectorAll(".zoomable");
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  const img = document.createElement("img");
  lightbox.appendChild(img);

  zoomables.forEach(image => {
    image.addEventListener("click", () => {
      img.src = image.src;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const abrirModal = document.getElementById("abrirModal");
  const cerrar = document.querySelector(".cerrar");

  abrirModal.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


let calificacion = 0;
const estrellas = document.querySelectorAll('.estrella');

estrellas.forEach(estrella => {
  estrella.addEventListener('click', () => {
    calificacion = parseInt(estrella.getAttribute('data-valor'));
    actualizarEstrellas(calificacion);
  });
});

function actualizarEstrellas(valor) {
  estrellas.forEach(e => {
    const val = parseInt(e.getAttribute('data-valor'));
    e.classList.toggle('seleccionada', val <= valor);
  });
}

document.getElementById('form-comentario').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const texto = document.getElementById('comentario').value.trim();
  if (nombre && texto && calificacion > 0) {
    const contenedor = document.getElementById('comentarios');
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario');
    nuevoComentario.innerHTML = `
      <h4>${nombre}</h4>
      <p>${texto}</p>
      <p>Calificación: ${'★'.repeat(calificacion)}${'☆'.repeat(5 - calificacion)}</p>
    `;
    contenedor.prepend(nuevoComentario);
    this.reset();
    actualizarEstrellas(0);
    calificacion = 0;
  } else {
    alert("Por favor completa todos los campos y selecciona una calificación.");
  }
});

