window.onload = function () {
  // Limpiar sessionStorage cuando se recarga la página
  sessionStorage.clear();

  // Restablecer absolutamente todos los iconos de reproducción; ya que siempre quedaba alguno rezagado
  const allPlayImgs = document.querySelectorAll(".iconPause");
  allPlayImgs.forEach((icon) => {
    icon.classList.remove("iconPause");
    icon.classList.add("play");
  });
};

class Song {
  static number = 1; // Propiedad estática, compartida entre todas las instancias
  constructor({
    idEstatico,
    titulo,
    artista,
    imagen,
    audio,
    album,
    ano,
    genero,
  }) {
    this.numb = Song.number++; // Acceder y luego incrementar la propiedad estática
    this.id = idEstatico;
    this.title = titulo;
    this.artist = artista;
    this.imgSrc = imagen;
    this.audioSrc = audio;
    this.album = album;
    this.year = ano;
    this.gender = genero;
  }
}

const arr_songs = [
  new Song({
    idEstatico: 1,
    titulo: "Spanish Eddie",
    artista: "Laura Branigan",
    imagen: "music/Cover_Spanish_Eddie.png",
    audio: "music/Spanish_Eddie.mp3",
    album: "Hold Me",
    ano: "1985",
    genero: "Disco",
  }),
  new Song({
    idEstatico: 2,
    titulo: "Guardians Inferno",
    artista: "David Hasselhoff",
    imagen: "music/Cover_Guardians_Inferno.webp",
    audio: "music/Guardians_Inferno.mp3",
    album: "",
    ano: "",
    genero: "",
  }),
  new Song({
    idEstatico: 3,
    titulo: "Billie Jean",
    artista: "Michael Jackson",
    imagen: "music/Cover_Billie_Jean.jpg",
    audio: "music/Billie_Jean.mp3",
    album: "Thriller",
    ano: "1982",
    genero: "Pop",
  }),
  new Song({
    idEstatico: 4,
    titulo: "Take On Me",
    artista: "a-ha",
    imagen: "music/Cover_Take_On_Me.jpg",
    audio: "music/Take_On_Me.mp3",
    album: "Hunting High and Low",
    ano: "1984",
    genero: "Synth-pop",
  }),
  new Song({
    idEstatico: 5,
    titulo: "Sweet Child o' Mine",
    artista: "Guns N' Roses",
    imagen: "music/Cover_Sweet_Child_O_Mine.jpg",
    audio: "music/Sweet_Child_O_Mine.mp3",
    album: "Appetite for Destruction",
    ano: "1987",
    genero: "Hard Rock",
  }),
  new Song({
    idEstatico: 6,
    titulo: "Livin' on a Prayer",
    artista: "Bon Jovi",
    imagen: "music/Cover_Livin_On_A_Prayer.jpg",
    audio: "music/Livin_On_A_Prayer.mp3",
    album: "Slippery When Wet",
    ano: "1986",
    genero: "Rock",
  }),
  new Song({
    idEstatico: 7,
    titulo: "Every Breath You Take",
    artista: "The Police",
    imagen: "music/Cover_Every_Breath_You_Take.jpg",
    audio: "music/Every_Breath_You_Take.mp3",
    album: "Synchronicity",
    ano: "1983",
    genero: "New Wave",
  }),
  new Song({
    idEstatico: 8,
    titulo: "Wake Me Up Before You Go-Go",
    artista: "Wham!",
    imagen: "music/Cover_Wake_Me_Up_Before_You_Go_Go.jpg",
    audio: "music/Wake_Me_Up_Before_You_Go_Go.mp3",
    album: "Make It Big",
    ano: "1984",
    genero: "Pop",
  }),
  new Song({
    idEstatico: 9,
    titulo: "Like a Virgin",
    artista: "Madonna",
    imagen: "music/Cover_Like_A_Virgin.jpg",
    audio: "music/Like_A_Virgin.mp3",
    album: "Like a Virgin",
    ano: "1984",
    genero: "Pop",
  }),
  new Song({
    idEstatico: 10,
    titulo: "Thriller",
    artista: "Michael Jackson",
    imagen: "music/Cover_Thriller.jpg",
    audio: "music/Thriller.mp3",
    album: "Thriller",
    ano: "1982",
    genero: "Pop",
  }),
  new Song({
    idEstatico: 11,
    titulo: "Another One Bites the Dust",
    artista: "Queen",
    imagen: "music/Cover_Another_One_Bites_The_Dust.jpg",
    audio: "music/Another_One_Bites_The_Dust.mp3",
    album: "The Game",
    ano: "1980",
    genero: "Funk rock",
  }),
  new Song({
    idEstatico: 12,
    titulo: "Don't You Want Me",
    artista: "The Human League",
    imagen: "music/Cover_Dont_You_Want_Me.jpg",
    audio: "music/Dont_You_Want_Me.mp3",
    album: "Dare",
    ano: "1981",
    genero: "Synth-pop",
  }),
  new Song({
    idEstatico: 13,
    titulo: "I Wanna Dance with Somebody (Who Loves Me)",
    artista: "Whitney Houston",
    imagen: "music/Cover_I_Wanna_Dance_With_Somebody.jpg",
    audio: "music/I_Wanna_Dance_With_Somebody.mp3",
    album: "Whitney",
    ano: "1987",
    genero: "Dance-pop",
  }),
  new Song({
    idEstatico: 14,
    titulo: "I Love Rock 'n Roll",
    artista: "Joan Jett & the Blackhearts",
    imagen: "music/Cover_I_Love_Rock_N_Roll.jpg",
    audio: "music/I_Love_Rock_N_Roll.mp3",
    album: "I Love Rock 'n Roll",
    ano: "1981",
    genero: "Hard Rock",
  }),
  new Song({
    idEstatico: 15,
    titulo: "Tainted Love",
    artista: "Soft Cell",
    imagen: "music/Cover_Tainted_Love.jpg",
    audio: "music/Tainted_Love.mp3",
    album: "Non-Stop Erotic Cabaret",
    ano: "1981",
    genero: "Synth-pop",
  }),
  new Song({
    idEstatico: 16,
    titulo: "Everytime You Go Away",
    artista: "Paul Young",
    imagen: "music/Cover_Everytime_You_Go_Away.jpg",
    audio: "music/Everytime_You_Go_Away.mp3",
    album: "The Secret of Association",
    ano: "1985",
    genero: "Pop",
  }),
  new Song({
    idEstatico: 17,
    titulo: "Eye of the Tiger",
    artista: "Survivor",
    imagen: "music/Cover_Eye_Of_The_Tiger.jpg",
    audio: "music/Eye_Of_The_Tiger.mp3",
    album: "Eye of the Tiger",
    ano: "1982",
    genero: "Rock",
  }),
  new Song({
    idEstatico: 18,
    titulo: "Girls Just Want to Have Fun",
    artista: "Cyndi Lauper",
    imagen: "music/Cover_Girls_Just_Want_To_Have_Fun.jpg",
    audio: "music/Girls_Just_Want_To_Have_Fun.mp3",
    album: "She's So Unusual",
    ano: "1983",
    genero: "New Wave",
  }),
  new Song({
    idEstatico: 19,
    titulo: "Time After Time",
    artista: "Cyndi Lauper",
    imagen: "music/Cover_Time_After_Time.jpg",
    audio: "music/Time_After_Time.mp3",
    album: "She's So Unusual",
    ano: "1983",
    genero: "Pop",
  }),
  new Song({
    idEstatico: 20,
    titulo: "Africa",
    artista: "Toto",
    imagen: "music/Cover_Africa.jpg",
    audio: "music/Africa.mp3",
    album: "Toto IV",
    ano: "1982",
    genero: "Rock",
  }),
  new Song({
    idEstatico: 21,
    titulo: "Sweet Dreams (Are Made of This)",
    artista: "Eurythmics",
    imagen: "music/Cover_Sweet_Dreams.jpg",
    audio: "music/Sweet_Dreams.mp3",
    album: "Sweet Dreams (Are Made of This)",
    ano: "1983",
    genero: "New Wave",
  }),
  new Song({
    idEstatico: 22,
    titulo: "Careless Whisper",
    artista: "George Michael",
    imagen: "music/Cover_Careless_Whisper.jpg",
    audio: "music/Careless_Whisper.mp3",
    album: "Make It Big",
    ano: "1984",
    genero: "R&B",
  }),
  new Song({
    idEstatico: 23,
    titulo: "Ghostbusters",
    artista: "Ray Parker Jr.",
    imagen: "music/Cover_Ghostbusters.jpg",
    audio: "music/Ghostbusters.mp3",
    album: "Ghostbusters: Original Soundtrack Album",
    ano: "1984",
    genero: "Pop",
  }),
  new Song({
    idEstatico: 24,
    titulo: "Footloose",
    artista: "Kenny Loggins",
    imagen: "music/Cover_Footloose.jpg",
    audio: "music/Footloose.mp3",
    album: "Footloose: Original Soundtrack of the Paramount Motion Picture",
    ano: "1984",
    genero: "Rock",
  }),
  new Song({
    idEstatico: 25,
    titulo: "I Want to Know What Love Is",
    artista: "Foreigner",
    imagen: "music/Cover_I_Want_To_Know_What_Love_Is.jpg",
    audio: "music/I_Want_To_Know_What_Love_Is.mp3",
    album: "Agent Provocateur",
    ano: "1984",
    genero: "Rock",
  }),
  new Song({
    idEstatico: 26,
    titulo: "Heaven Is a Place on Earth",
    artista: "Belinda Carlisle",
    imagen: "music/Cover_Heaven_Is_A_Place_On_Earth.jpg",
    audio: "music/Heaven_Is_A_Place_On_Earth.mp3",
    album: "Heaven on Earth",
    ano: "1987",
    genero: "Pop",
  }),
  new Song({
    idEstatico: 27,
    titulo: "The Power of Love",
    artista: "Huey Lewis and the News",
    imagen: "music/Cover_The_Power_Of_Love.jpg",
    audio: "music/The_Power_Of_Love.mp3",
    album: "Back to the Future: Original Motion Picture Soundtrack",
    ano: "1985",
    genero: "Rock",
  }),
  new Song({
    idEstatico: 28,
    titulo: "We Built This City",
    artista: "Starship",
    imagen: "music/Cover_We_Built_This_City.jpg",
    audio: "music/We_Built_This_City.mp3",
    album: "Knee Deep in the Hoopla",
    ano: "1985",
    genero: "Rock",
  }),
  new Song({
    idEstatico: 29,
    titulo: "Total Eclipse of the Heart",
    artista: "Bonnie Tyler",
    imagen: "music/Cover_Total_Eclipse_Of_The_Heart.jpg",
    audio: "music/Total_Eclipse_Of_The_Heart.mp3",
    album: "Faster Than the Speed of Night",
    ano: "1983",
    genero: "Pop",
  }),
  new Song({
    idEstatico: 30,
    titulo: "Owner of a Lonely Heart",
    artista: "Yes",
    imagen: "music/Cover_Owner_Of_A_Lonely_Heart.jpg",
    audio: "music/Owner_Of_A_Lonely_Heart.mp3",
    album: "90125",
    ano: "1983",
    genero: "Progressive Rock",
  }),
];

class Playlist {
  constructor({ nombreDeSeccion, ExtensionInterfazGrafica }) {
    this.Ext_InterfazGrafica = ExtensionInterfazGrafica;
    this.listName = nombreDeSeccion;
    this.songs = [];
  }

  addSong(e) {
    this.songs.push({ ...e });
    // Añadir una copia de la canción a la lista
  }
  removeSong(e) {
    // Buscar la canción en la lista de reproducción y removerla
    const indexInPlaylist = this.songs.findIndex((song) => song.id === e.id); //findIndex() es una función de comparación personalizada (song.id === e.id).

    // indexOf() usa una comparación directa del objeto.

    if (indexInPlaylist !== -1) {
      this.songs.splice(indexInPlaylist, 1);
    }

    // si estás trabajando con copias de las canciones en el array de la lista de reproducción (Playlist), entonces indexOf() con una comparación directa del objeto ya no funcionaría correctamente. Esto se debe a que indexOf() busca coincidencias exactas de objetos en el array, y las copias de objetos no serán consideradas iguales a las instancias originales.
  }
}

class Favoritos {
  constructor({ nombreDeSeccion, ExtensionInterfazGrafica }) {
    this.Ext_InterfazGrafica = ExtensionInterfazGrafica;
    this.listName = nombreDeSeccion;
    this.songs = [];
  }
  addSong(e) {
    this.songs.push({ ...e });
    // Añadir una copia de la canción a la lista
  }

  removeSong(e) {
    // Buscar la canción en la lista de reproducción y removerla
    const indexInPlaylist = this.songs.findIndex((song) => song.id === e.id); //findIndex() es una función de comparación personalizada (song.id === e.id).
    if (indexInPlaylist !== -1) {
      this.songs.splice(indexInPlaylist, 1);
    }
  }
}

class Canciones {
  constructor({
    nombreDeSeccion,
    ExtensionInterfazGrafica,
    cancionesArr = [],
  }) {
    this.listName = nombreDeSeccion;
    this.songs = cancionesArr;
    this.Ext_InterfazGrafica = ExtensionInterfazGrafica;
  }
}
class InterfazGrafica {
  constructor(instanciaReproductor) {
    this.Reproductor = instanciaReproductor;
    this.songs_container =
      document.getElementsByClassName("songs_container")[0]; // Selecciona el primer elemento con la clase "songs_container"
    this.id_playlist = document.getElementById("id_playlist");
    this.songs_container_favoritos =
      document.getElementsByClassName("songs_container")[2];
  }

  limpiarContenedor(e) {
    while (e.firstChild) {
      e.removeChild(e.firstChild);
    }
  }

  validarCancion(e) {
    const targetElement = e.target.closest("li.song");

    if (targetElement) {
      const songId = targetElement.getAttribute("data-id");
      console.log("ID de la canción:", songId);

      const insCancEncontrada = this.Reproductor.Canciones.songs.find(
        (i) => i.id === parseInt(songId)
      );

      return insCancEncontrada;
    }
  }

  crearHtmlEnCanciones(arrayEjemp, config = true) {
    const array_crearHtml = []; // Array para almacenar los elementos creados

    this.limpiarContenedor(this.songs_container); // Limpia el contenedor de la seccion Canciones para que las instancias de canciones se actualicen con la nueva funcionalidad de los botones

    arrayEjemp.forEach((e) => {
      const numberSong = document.createElement("div");
      numberSong.className = "number_song";
      numberSong.textContent = e.numb;

      const infoSong = document.createElement("div");
      infoSong.className = "info_song";

      const nameSong = document.createElement("div");
      nameSong.className = "name_song";
      nameSong.textContent = e.title;

      const lineBottom = document.createElement("div");
      lineBottom.className = "line_bottom";

      const artist = document.createElement("div");
      artist.className = "artist";
      artist.textContent = e.artist;

      const duration = document.createElement("div");
      duration.className = "duration";
      duration.textContent = "00:00";

      const btnContainer = document.createElement("div");
      btnContainer.className = "btn_container";

      const playLink = document.createElement("a");
      playLink.href = "";
      playLink.setAttribute("data-src", e.audioSrc); // Usar data-src en lugar de href

      const playImg = document.createElement("div");
      playImg.className = "icon";

      // Recuperar el estado del botón desde localStorage
      const storedState = sessionStorage.getItem(
        `isPlayingInCanciones-${e.id}`
      );
      const isPlaying = storedState === "true";
      playImg.classList.add(isPlaying ? "iconPause" : "play");

      const favoriteLink = document.createElement("a");
      favoriteLink.href = "";

      const favoriteImg = document.createElement("img");
      favoriteImg.src = "src/favorite.svg";
      favoriteImg.alt = "";
      favoriteImg.className = "icon favorite";

      const playListLink = document.createElement("a");
      playListLink.href = "";

      const playListImg = document.createElement("img");
      playListImg.src = "src/play_list.svg";
      playListImg.alt = "";
      playListImg.className = "icon play_list";

      // Construir estructura del DOM

      // Iconos
      playLink.appendChild(playImg);
      favoriteLink.appendChild(favoriteImg);
      playListLink.appendChild(playListImg);

      // Etiquetas a
      btnContainer.appendChild(playLink);
      btnContainer.appendChild(favoriteLink);
      btnContainer.appendChild(playListLink);

      //Funcionalidad de los botones

      // Boton Reproducir

      playLink.onclick = (i) => {
        i.preventDefault();

        // Limpiar sessionStorage
        arrayEjemp.forEach((s) => {
          sessionStorage.setItem(`isPlayingInCanciones-${s.id}`, false);
        });

        // Guardar el estado actual en localStorage
        const currentPlayingState = playImg.classList.contains("play");
        sessionStorage.setItem(
          `isPlayingInCanciones-${e.id}`,
          currentPlayingState
        );

        // Restablecer todos los iconos de reproducción
        const allPlayImgs = document.querySelectorAll(".iconPause");
        allPlayImgs.forEach((icon) => {
          icon.classList.remove("iconPause");
          icon.classList.add("play");
        });

        // Alternar el icono de reproducción
        playImg.classList.toggle("iconPause");

        if (
          this.Reproductor.currentSong === e &&
          !this.Reproductor.reproductorDeAudio.paused
        ) {
          playImg.classList.toggle("iconPause");
          sessionStorage.setItem(`isPlayingInCanciones-${e.id}`, true);
        }

        // Reproducir o pausar la cancion

        if (this.Reproductor.currentSong === e) {
          if (this.Reproductor.reproductorDeAudio.paused) {
            const resumeTime = this.Reproductor.reproductorDeAudio.currentTime; // Guardar la posición actual de reproducción
            this.Reproductor.playAudio();
            this.Reproductor.reproductorDeAudio.currentTime = resumeTime; // Reanudar desde la posición guardada

            // Se guarda la posición actual de reproducción en resumeTime, luego se inicia la reproducción llamando a this.Reproductor.playAudio(i, e) y se restaura la posición de reproducción a resumeTime.
          } else {
            this.Reproductor.pauseAudio();
          }
        } else {
          this.Reproductor.currentSong = e;
          this.Reproductor.reproductorDeAudio.src = e.audioSrc;
          this.Reproductor.playAudio();
        }
      };

      // Boton Playlist

      // const isInPlaylist = this.Reproductor.Playlist.songs.includes(e); // Al usar this.songs.push({ ...e }); para hacer una copia de la instancia, esta validacion ya no funcionaria.

      // Función de cómo validar si una canción está en la Playlist
      const isInPlaylist = this.Reproductor.Playlist.songs.some((song) =>
        this.compareSongs(song, e)
      );

      if (isInPlaylist) {
        playListImg.src = "src/trash_btn.svg";
        playListLink.onclick = (i) => {
          this.removerCancionPlaylist(i, config);
        };
      } else {
        playListLink.onclick = (i) => {
          this.agregarCancionPlaylist(i, config);
        };
      }

      // Boton Favoritos
      // const isFavorite = this.Reproductor.Favoritos.songs.includes(e); // Al usar this.songs.push({ ...e }); para hacer una copia de la instancia, esta validacion ya no funcionaria.

      // Función de cómo validar si una canción está en la Playlist
      const isFavorite = this.Reproductor.Favoritos.songs.some((song) =>
        this.compareSongs(song, e)
      );

      if (isFavorite) {
        favoriteLink.onclick = (i) => {
          this.removerCancionFavoritos(i, config);
        };
      } else {
        favoriteLink.onclick = (i) => {
          this.agregarCancionFavoritos(i, config);
        };
      }

      lineBottom.appendChild(artist);
      lineBottom.appendChild(duration);

      infoSong.appendChild(nameSong);
      infoSong.appendChild(lineBottom);

      // Crear contenedor principal de cada canción
      const song_sngs_li = document.createElement("li");
      song_sngs_li.setAttribute("data-id", e.id); // Agregar atributo data-id
      song_sngs_li.className = "song sngs_srch";
      song_sngs_li.appendChild(numberSong);
      song_sngs_li.appendChild(infoSong);
      song_sngs_li.appendChild(btnContainer);

      array_crearHtml.push(song_sngs_li); // Añadir el elemento html creado al array
    });

    return array_crearHtml; // Devolver el array completo fuera del forEach
  }

  compareSongs(song1, song2) {
    // Aquí se asume que las canciones tienen un campo 'id' único
    return song1.id === song2.id;
  }

  renderHtmlCanciones(arrayEjemp = this.Reproductor.Canciones.songs, config) {
    try {
      const elmntsLiDom = this.crearHtmlEnCanciones(arrayEjemp, config);
      elmntsLiDom.forEach((e) => {
        this.songs_container.appendChild(e);
      });

      console.log(typeof arrayEjemp); //Cuando usas typeof para verificar el tipo de arrayEjemp, obtienes "object" porque en JavaScript, los arrays son un tipo especial de objeto. Todos los arrays en JavaScript tienen el tipo "object".
      console.log(`¿Es un array?`, Array.isArray(arrayEjemp)); // Si deseas asegurarte de que arrayEjemp es un array, puedes usar el método Array.isArray en lugar de typeof. Esto devolverá true si arrayEjemp es un array
    } catch (error) {
      console.log("Error al renderizar canciones en Canciones:", error); //  Captura cualquier error que ocurra durante la ejecución de forEach debido a las propiedades indefinidas de las instancias de la clase Song y lo imprimirá en la consola sin detener la ejecución del programa.
    }
  }

  crearHtmlEnPlaylist(arrayEjemp, config = true) {
    const array_crearHtml = []; // Array para almacenar los elementos creados

    this.limpiarContenedor(this.id_playlist); // Limpia el contenedor de la seccion Playlist para actualizar las instancias de las canciones

    arrayEjemp.forEach((e) => {
      const numberSong = document.createElement("div");
      numberSong.className = "number_song";
      numberSong.textContent = e.numb;

      const infoSong = document.createElement("div");
      infoSong.className = "info_song";

      const nameSong = document.createElement("div");
      nameSong.className = "name_song";
      nameSong.textContent = e.title;

      const lineBottom = document.createElement("div");
      lineBottom.className = "line_bottom";

      const artist = document.createElement("div");
      artist.className = "artist";
      artist.textContent = e.artist;

      const duration = document.createElement("div");
      duration.className = "duration";
      duration.textContent = "00:00";

      const btnContainer = document.createElement("div");
      btnContainer.className = "btn_container";

      const playLink = document.createElement("a");
      playLink.href = "";
      playLink.setAttribute("data-src", e.audioSrc); // Usar data-src en lugar de href

      const playImg = document.createElement("div");
      playImg.className = "icon";

      // Recuperar el estado del botón desde localStorage
      const storedState = sessionStorage.getItem(`isPlayingInPlaylist-${e.id}`);
      const isPlaying = storedState === "true";
      playImg.classList.add(isPlaying ? "iconPause" : "play");

      const favoriteLink = document.createElement("a");
      favoriteLink.href = "";

      const favoriteImg = document.createElement("img");
      favoriteImg.src = "src/favorite.svg";
      favoriteImg.alt = "";
      favoriteImg.className = "icon favorite";

      const playListLink = document.createElement("a");
      playListLink.href = "";

      const playListImg = document.createElement("img");
      playListImg.src = "src/play_list.svg";
      playListImg.alt = "";
      playListImg.className = "icon play_list";

      // Construir estructura del DOM

      // Iconos
      playLink.appendChild(playImg);
      favoriteLink.appendChild(favoriteImg);
      playListLink.appendChild(playListImg);

      // Etiquetas a
      btnContainer.appendChild(playLink);
      btnContainer.appendChild(favoriteLink);
      btnContainer.appendChild(playListLink);

      //Funcionalidad de los botones

      // Boton Reproducir

      playLink.onclick = (i) => {
        i.preventDefault();

        // Limpiar sessionStorage
        arrayEjemp.forEach((s) => {
          sessionStorage.setItem(`isPlayingInPlaylist-${s.id}`, false);
        });

        // Guardar el estado actual en localStorage
        const currentPlayingState = playImg.classList.contains("play");
        sessionStorage.setItem(
          `isPlayingInPlaylist-${e.id}`,
          currentPlayingState
        );

        // Restablecer todos los iconos de reproducción
        const allPlayImgs = document.querySelectorAll(".iconPause");
        allPlayImgs.forEach((icon) => {
          icon.classList.remove("iconPause");
          icon.classList.add("play");
        });

        // Alternar el icono de reproducción
        playImg.classList.toggle("iconPause");

        if (
          this.Reproductor.currentSong === e &&
          !this.Reproductor.reproductorDeAudio.paused
        ) {
          playImg.classList.toggle("iconPause");
          sessionStorage.setItem(`isPlayingInPlaylist-${e.id}`, true);
        }

        if (this.Reproductor.currentSong === e) {
          if (this.Reproductor.reproductorDeAudio.paused) {
            const resumeTime = this.Reproductor.reproductorDeAudio.currentTime; // Guardar la posición actual de reproducción
            this.Reproductor.playAudio();
            this.Reproductor.reproductorDeAudio.currentTime = resumeTime; // Reanudar desde la posición guardada

            // Se guarda la posición actual de reproducción en resumeTime, luego se inicia la reproducción llamando a this.Reproductor.playAudio(i, e) y se restaura la posición de reproducción a resumeTime.
          } else {
            this.Reproductor.pauseAudio();
          }
        } else {
          this.Reproductor.currentSong = e;
          this.Reproductor.reproductorDeAudio.src = e.audioSrc;
          this.Reproductor.playAudio();
        }
      };

      const isInPlaylist = this.Reproductor.Playlist.songs.some((song) =>
        this.compareSongs(song, e)
      );

      if (isInPlaylist) {
        playListImg.src = "src/trash_btn.svg";
        playListLink.onclick = (i) => {
          this.removerCancionPlaylist(i, config);
        };
      } else {
        playListLink.onclick = (i) => {
          this.agregarCancionPlaylist(i, config);
        };
      }

      const isFavorite = this.Reproductor.Favoritos.songs.some((song) =>
        this.compareSongs(song, e)
      );

      if (isFavorite) {
        favoriteLink.onclick = (i) => {
          this.removerCancionFavoritos(i, config);
        };
      } else {
        favoriteLink.onclick = (i) => {
          this.agregarCancionFavoritos(i, config);
        };
      }

      lineBottom.appendChild(artist);
      lineBottom.appendChild(duration);

      infoSong.appendChild(nameSong);
      infoSong.appendChild(lineBottom);

      // Crear contenedor principal de cada canción
      const song_sngs_li = document.createElement("li");
      song_sngs_li.setAttribute("data-id", e.id); // Agregar atributo data-id
      song_sngs_li.className = "song plylst";
      song_sngs_li.appendChild(numberSong);
      song_sngs_li.appendChild(infoSong);
      song_sngs_li.appendChild(btnContainer);

      array_crearHtml.push(song_sngs_li); // Añadir el elemento html creado al array
    });

    return array_crearHtml; // Devolver el array completo con los elementos html fuera del forEach
  }

  renderHtmlPlaylist(arrayEjemp = this.Reproductor.Playlist.songs, config) {
    try {
      let contadorNumb = 1;
      const elmntsLiDom = this.crearHtmlEnPlaylist(arrayEjemp);
      const nuevoelmntsLiDom = elmntsLiDom.map((e) => {
        const numberElement = e.querySelector(".number_song");
        if (numberElement) {
          // Modificar el número dentro del elemento
          numberElement.textContent = contadorNumb++;
          console.log("funciona el numb");
        }
        return e;
      });

      nuevoelmntsLiDom.forEach((e) => {
        this.id_playlist.appendChild(e);
      });
    } catch (error) {
      console.log("Error al renderizar canciones en Playlist:", error);
    }
  }

  agregarCancionPlaylist(e, config) {
    e.preventDefault();

    const resultInsCancEncontrada = this.validarCancion(e);

    this.Reproductor.Playlist.addSong(resultInsCancEncontrada);

    this.renderHtmlFavoritos();

    this.renderHtmlPlaylist();

    this.renderHtmlCanciones();
  }

  removerCancionPlaylist(e, config) {
    e.preventDefault();

    console.log("Cancion removida de la Playlist");

    const resultInsCancEncontrada = this.validarCancion(e);

    this.Reproductor.Playlist.removeSong(resultInsCancEncontrada);

    this.renderHtmlFavoritos();

    this.renderHtmlPlaylist();
    this.renderHtmlCanciones();
  }

  crearHtmlEnFavoritos(arrayEjemp, config = true) {
    const array_crearHtml = []; // Array para almacenar los elementos creados

    this.limpiarContenedor(this.songs_container_favoritos); // Limpia el contenedor de la seccion Playlist para actualizar las instancias de las canciones

    arrayEjemp.forEach((e) => {
      const numberSong = document.createElement("div");
      numberSong.className = "number_song";
      numberSong.textContent = e.numb;

      const infoSong = document.createElement("div");
      infoSong.className = "info_song";

      const nameSong = document.createElement("div");
      nameSong.className = "name_song";
      nameSong.textContent = e.title;

      const lineBottom = document.createElement("div");
      lineBottom.className = "line_bottom";

      const artist = document.createElement("div");
      artist.className = "artist";
      artist.textContent = e.artist;

      const duration = document.createElement("div");
      duration.className = "duration";
      duration.textContent = "00:00";

      const btnContainer = document.createElement("div");
      btnContainer.className = "btn_container";

      const playLink = document.createElement("a");
      playLink.href = "";
      playLink.setAttribute("data-src", e.audioSrc); // Usar data-src en lugar de href

      const playImg = document.createElement("div");
      playImg.className = "icon";

      // Recuperar el estado del botón desde localStorage
      const storedState = sessionStorage.getItem(
        `isPlayingInFavoritos-${e.id}`
      );
      const isPlaying = storedState === "true";
      playImg.classList.add(isPlaying ? "iconPause" : "play");

      const favoriteLink = document.createElement("a");
      favoriteLink.href = "";

      const favoriteImg = document.createElement("img");
      favoriteImg.src = "src/favorite.svg";
      favoriteImg.alt = "";
      favoriteImg.className = "icon favorite";

      const playListLink = document.createElement("a");
      playListLink.href = "";

      const playListImg = document.createElement("img");
      playListImg.src = "src/play_list.svg";
      playListImg.alt = "";
      playListImg.className = "icon play_list";

      // Construir estructura del DOM

      // Iconos
      playLink.appendChild(playImg);
      favoriteLink.appendChild(favoriteImg);
      playListLink.appendChild(playListImg);

      // Etiquetas a
      btnContainer.appendChild(playLink);
      btnContainer.appendChild(favoriteLink);
      btnContainer.appendChild(playListLink);

      //Funcionalidad de los botones

      // Boton Reproducir
      playLink.onclick = (i) => {
        i.preventDefault();

        // Limpiar sessionStorage
        arrayEjemp.forEach((s) => {
          sessionStorage.setItem(`isPlayingInFavoritos-${s.id}`, false);
        });

        // Guardar el estado actual en localStorage
        const currentPlayingState = playImg.classList.contains("play");
        sessionStorage.setItem(
          `isPlayingInFavoritos-${e.id}`,
          currentPlayingState
        );

        // Restablecer todos los iconos de reproducción
        const allPlayImgs = document.querySelectorAll(".iconPause");
        allPlayImgs.forEach((icon) => {
          icon.classList.remove("iconPause");
          icon.classList.add("play");
        });

        // Alternar el icono de reproducción
        playImg.classList.toggle("iconPause");

        if (
          this.Reproductor.currentSong === e &&
          !this.Reproductor.reproductorDeAudio.paused
        ) {
          playImg.classList.toggle("iconPause");
          sessionStorage.setItem(`isPlayingInFavoritos-${e.id}`, true);
        }

        if (this.Reproductor.currentSong === e) {
          if (this.Reproductor.reproductorDeAudio.paused) {
            const resumeTime = this.Reproductor.reproductorDeAudio.currentTime; // Guardar la posición actual de reproducción
            this.Reproductor.playAudio();
            this.Reproductor.reproductorDeAudio.currentTime = resumeTime; // Reanudar desde la posición guardada

            // Se guarda la posición actual de reproducción en resumeTime, luego se inicia la reproducción llamando a this.Reproductor.playAudio(i, e) y se restaura la posición de reproducción a resumeTime.
          } else {
            this.Reproductor.pauseAudio();
          }
        } else {
          this.Reproductor.currentSong = e;
          this.Reproductor.reproductorDeAudio.src = e.audioSrc;
          this.Reproductor.playAudio();
        }
      };

      const isInPlaylist = this.Reproductor.Playlist.songs.some((song) =>
        this.compareSongs(song, e)
      );

      if (isInPlaylist) {
        playListImg.src = "src/trash_btn.svg";
        playListLink.onclick = (i) => {
          this.removerCancionPlaylist(i, config);
        };
      } else {
        playListLink.onclick = (i) => {
          this.agregarCancionPlaylist(i, config);
        };
      }

      const isFavorite = this.Reproductor.Favoritos.songs.some((song) =>
        this.compareSongs(song, e)
      );

      if (isFavorite) {
        favoriteLink.onclick = (i) => {
          this.removerCancionFavoritos(i, config);
        };
      } else {
        favoriteLink.onclick = (i) => {
          this.agregarCancionFavoritos(i, config);
        };
      }

      lineBottom.appendChild(artist);
      lineBottom.appendChild(duration);

      infoSong.appendChild(nameSong);
      infoSong.appendChild(lineBottom);

      // Crear contenedor principal de cada canción
      const song_sngs_li = document.createElement("li");
      song_sngs_li.setAttribute("data-id", e.id); // Agregar atributo data-id
      song_sngs_li.className = "song fvrts";
      song_sngs_li.appendChild(numberSong);
      song_sngs_li.appendChild(infoSong);
      song_sngs_li.appendChild(btnContainer);

      array_crearHtml.push(song_sngs_li); // Añadir el elemento html creado al array
    });

    return array_crearHtml; // Devolver el array completo con los elementos html fuera del forEach
  }

  renderHtmlFavoritos(arrayEjemp = this.Reproductor.Favoritos.songs, config) {
    try {
      let contadorNumb = 1;
      const elmntsLiDom = this.crearHtmlEnFavoritos(arrayEjemp);
      const nuevoelmntsLiDom = elmntsLiDom.map((e) => {
        const numberElement = e.querySelector(".number_song");
        if (numberElement) {
          // Modificar el número dentro del elemento
          numberElement.textContent = contadorNumb++;
          console.log("funciona el numb");
        }
        return e;
      });

      nuevoelmntsLiDom.forEach((e) => {
        this.songs_container_favoritos.appendChild(e);
      });
    } catch (error) {
      console.log("Error al renderizar canciones en Playlist:", error);
    }
  }

  agregarCancionFavoritos(e, config) {
    e.preventDefault();
    const resultInsCancEncontrada = this.validarCancion(e);
    this.Reproductor.Favoritos.songs.push(resultInsCancEncontrada);
    this.renderHtmlFavoritos();
    this.renderHtmlPlaylist();
    this.renderHtmlCanciones();
  }

  removerCancionFavoritos(e, config) {
    e.preventDefault();
    console.log("Cancion removida de Favoritos");
    const resultInsCancEncontrada = this.validarCancion(e);
    this.Reproductor.Favoritos.removeSong(resultInsCancEncontrada);
    this.renderHtmlFavoritos();
    this.renderHtmlPlaylist();
    this.renderHtmlCanciones();
  }
}

class Reproductor {
  constructor() {
    this.InterfazGrafica = new InterfazGrafica(this);
    this.Canciones = new Canciones({
      nombreDeSeccion: "Canciones",
      cancionesArr: arr_songs,
      ExtensionInterfazGrafica: this.InterfazGrafica,
    });
    this.Playlist = new Playlist("Playlist", this.InterfazGrafica);
    this.Favoritos = new Favoritos("Favoritos", this.InterfazGrafica);
    this.InterfazGrafica.renderHtmlCanciones(); // Llamada al metodo de la clase InterfazGrafica que agrega todas las canciones al contenedor de la seccion Canciones
    this.imput_search = document.getElementById("input_search");
    this.reproductorDeAudio = new Audio();
    this.reproductorDeAudio.volume = 0.2;
    this.currentSong = null; // Para rastrear la canción actual. Inicialización como null para indicar que ninguna canción se está reproduciendo al principio
  }

  playAudio() {
    // const getSongId = e.target.closest("li.song").getAttribute("data-id");
    // const instanciaSong = this.Canciones.songs.find(
    //   (i) => i.id === parseInt(getSongId)
    // ); // Todas estas validaciones que habia hecho para encontrar el id de la cancion y a su vez hallar la instancia de la cancion en su respectivo array, no era necesario porque al usar el forEach se tenia acceso a la instancia y aunque el eventlistener escucha el evento clic sobre el DOM (i) como es un callback de una funcion tambien podia pasar la instancia de la cancion (e) como argumento en el callback de la funcion.

    this.reproductorDeAudio.play();
  }

  pauseAudio() {
    this.reproductorDeAudio.pause();
  }
}

const reproductor = new Reproductor();

// if (e.target.closest("#" + this.Reproductor.Canciones.id_playlist.id)) //Estamos concatenando "#" + this.Reproductor.Canciones.id_playlist.id, lo cual produce un selector CSS válido (#id_del_elemento). Esto le permite a closest() buscar el elemento adecuado en el DOM según su ID.
