const v_input_search = document.getElementById("input_search");
const id_songs_container = document.querySelector(".songs_container");
const v_no_results = document.querySelector(".no_results");


// El método Tiempo() crea un nuevo objeto 'fuenteAudio' de la Clase Audio utilizando la propiedad this.fuente de la Clase Song.(new Audio()) y, especificando, (new Audio(music/${this.fuente})), todo en la misma línea garantiza que la fuente del audio se establezca inmediatamente. Este método está utilizando un evento 'loadedmetadata' que se dispara cuando los metadatos del audio están cargados. Sin embargo, este proceso es asíncrono, lo que significa que mientras se espera a que los metadatos se carguen, el resto del código sigue ejecutándose.
// Si no se llamara a la función mostrarCanciones() dentro del método Tiempo entonces mostrarCanciones() se ejecutaría mucho antes de que se hayan completado los metadatos del método Tiempo(), por lo que la propiedad duracion todavía tendría su valor inicial de 0.
// Por lo tanto, llamar a mostrarCanciones(arr_songs) dentro del método Tiempo() asegura que las canciones se muestren en la interfaz de usuario solo después de que se hayan obtenido y formateado correctamente las duraciones de todas las canciones.
// En cuanto a utilizar un return en lugar de llamar directamente a mostrarCanciones(arr_songs, podrías modificar el método Tiempo() para que devuelva la duración formateada y luego llamar a mostrarCanciones(arr_songs) fuera del método Tiempo() con el valor devuelto. Sin embargo, como Tiempo() se ejecuta asincrónicamente debido al evento 'loadedmetadata', esto podría complicar la lógica y el flujo del programa. La forma en que está implementado actualmente, llamando a mostrarCanciones(arr_songs) dentro de Tiempo(), simplifica la lógica y garantiza que las canciones se muestren en el momento adecuado. 
// Entonces, se está utilizando una función mostrarCanciones(arr_songs) en lugar de un return porque no necesita devolver ningún valor específico de Tiempo() a otro lugar en el código. En su lugar, simplemente desea ejecutar alguna lógica después de que se haya cargado el archivo de audio.

class Song {
  static idCounter = 0;
  constructor({title, artist, imgSrc, src}) {
    this.id = ++Song.idCounter;
    this.titulo = title;
    this.artista = artist;
    this.duracion = 0;
    this.imgFuente = imgSrc;
    this.fuente = src;
    this.Tiempo(); 
  }

  Tiempo() {
    const fuenteAudio = new Audio(`music/${this.fuente}`); 
    fuenteAudio.addEventListener('loadedmetadata', () => {
      const time = fuenteAudio.duration;
      this.duracion = formatTime(time); 
      mostrarCanciones(arr_songs)
    });

    function formatTime(e) {
      let minutes = Math.floor(e / 60);
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      let seconds = Math.floor(e % 60); 
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      return `${minutes}:${seconds}`;
    }
  }
}

const arr_songs = [
  new Song({
    title: "Spanish Eddie",
    artist: "Laura Branigan",
    imgSrc: "Cover_Spanish_Eddie.png",
    src: "Spanish_Eddie.mp3"
  }),
  new Song({
    title: "Guardians Inferno",
    artist: "David Hasselhoff",
    imgSrc: "Cover_Guardians_Inferno.webp",
    src: "Guardians_Inferno.mp3"
  }),
];

// Función para mostrar todas las canciones
// Si no se encontraron coincidencias, mostrar el mensaje
// Limpiaa el contenido actual del elemento
// Iterar sobre algún array y crear elementos de lista para cada resultado
function mostrarCanciones(e) {
  id_songs_container.innerHTML = "";

  if (e.length === 0) {
    v_no_results.style.display = "flex";
    id_songs_container.appendChild(v_no_results);
  } else {
    e.forEach((element) => {
      const li = document.createElement("li");
      li.classList.add("song", "sngs_srch");

      li.innerHTML = `
        <div class="number_song">${element.id}</div>
        <div class="info_song">
          <div class="name_song">${element.titulo}</div>
          <div class="line_bottom">
            <div class="artist">${element.artista}</div>
            <div class="duration">${element.duracion}</div>
          </div>
        </div>
        <div class="btn_container">
          <a href="#"><img src="src/play.svg" alt="" class="icon play"></a>
          <a href="#"><img src="src/favorite.svg" alt="" class="icon favorite"></a>
          <a href="#"><img src="src/play_list.svg" alt="" class="icon play_list"></a>
        </div>
      `;

      id_songs_container.appendChild(li);
    });
  }
}

// SIEMPRE POR DEFECTO mostrar todas las canciones al cargar la página
mostrarCanciones(arr_songs);

// En el array que se proporciones filtrar las canciones que coincidan con el término de búsqueda
// Mostrar las canciones filtradas solo cuando se ejecute la función
function filtrarCanciones(array, e) {
  const resp_arr = array.filter((j) => {
    return (
      j.titulo.toLowerCase().includes(e.toLowerCase()) ||
      j.artista.toLowerCase().includes(e.toLowerCase())
    );
  });

  mostrarCanciones(resp_arr);
}

// Event listener para el evento 'keydown' en el input de búsqueda
// target. se refiere al elemento en el que se originó el evento.
// Verificar si la tecla presionada es "Enter"
// Obtener el término de búsqueda y quitar los espacios en blanco al principio y al final
// Verificar si el término de búsqueda no está vacío
// Filtrar canciones según el término de búsqueda guardado en la constante term
v_input_search.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const term = e.target.value.trim();

    if (term !== "") {
      filtrarCanciones(arr_songs, term);
    }
  }
});

// Event listener para el evento 'input' en el input de búsqueda
// 'input' es un evento/acción que ocurre en el DOM (Document Object Model) y pueden ser detectados y manipulados. Se detecta cuando el valor del input/elemento de entrada cambia.
// Obtener el término de búsqueda y quitar los espacios en blanco al principio y al final
// Verificar si el término de búsqueda está vacío
// Mostrar todas las canciones si el término de búsqueda está vacío
v_input_search.addEventListener("input", function (e) {
  const term = e.target.value.trim();

  if (term === "") {
    mostrarCanciones(arr_songs);
  }
});
