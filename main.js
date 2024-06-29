// const id_input_search = document.getElementById("input_search");
// const v_no_results = document.querySelector(".no_results");
// const id_canciones = document.getElementById("all_songs_search");
// const id_playlist = document.getElementById("playlist");
// const id_favoritos = document.getElementById("favoritos");
// const id_music_player = document.getElementById("music_player");

const songs_container = document.getElementsByClassName("songs_container")[0]; // Selecciona el primer elemento con la clase "songs_container"
// const song_sngs_srch = document.getElementsByClassName("song")[0];

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

// function crearHtml(arr_songs) {
//   const array_crearHtml = []; // Array para almacenar los elementos creados

//   arr_songs.forEach((e) => {
//     const numberSong = document.createElement("div");
//     numberSong.className = "number_song";
//     numberSong.textContent = e.numb;

//     const infoSong = document.createElement("div");
//     infoSong.className = "info_song";

//     const nameSong = document.createElement("div");
//     nameSong.className = "name_song";
//     nameSong.textContent = e.title;

//     const lineBottom = document.createElement("div");
//     lineBottom.className = "line_bottom";

//     const artist = document.createElement("div");
//     artist.className = "artist";
//     artist.textContent = e.artist;

//     const duration = document.createElement("div");
//     duration.className = "duration";
//     duration.textContent = "00:00";

//     const btnContainer = document.createElement("div");
//     btnContainer.className = "btn_container";

//     const playLink = document.createElement("a");
//     playLink.href = "";

//     const playImg = document.createElement("img");
//     playImg.src = "src/play.svg";
//     playImg.alt = "";
//     playImg.className = "icon play";

//     const favoriteLink = document.createElement("a");
//     favoriteLink.href = "";
//     favoriteLink.className = "favorite";

//     const favoriteImg = document.createElement("img");
//     favoriteImg.src = "src/favorite.svg";
//     favoriteImg.alt = "";
//     favoriteImg.className = "icon";

//     const playListLink = document.createElement("a");
//     playListLink.href = "";

//     const playListImg = document.createElement("img");
//     playListImg.src = "src/play_list.svg";
//     playListImg.alt = "";
//     playListImg.className = "icon play_list";

//     // Construir estructura del DOM

//     // Iconos
//     playLink.appendChild(playImg);
//     favoriteLink.appendChild(favoriteImg);
//     playListLink.appendChild(playListImg);

//     // Etiquetas a
//     btnContainer.appendChild(playLink);
//     btnContainer.appendChild(favoriteLink);
//     btnContainer.appendChild(playListLink);

//     lineBottom.appendChild(artist);
//     lineBottom.appendChild(duration);

//     infoSong.appendChild(nameSong);
//     infoSong.appendChild(lineBottom);

//     // Crear contenedor principal
//     const song_sngs_srch = document.createElement("li"); // Cambiado para crear un nuevo elemento div
//     song_sngs_srch.setAttribute("data-id", e.id); // Agregar atributo data-id
//     song_sngs_srch.className = "song sngs_srch";
//     song_sngs_srch.appendChild(numberSong);
//     song_sngs_srch.appendChild(infoSong);
//     song_sngs_srch.appendChild(btnContainer);

//     array_crearHtml.push(song_sngs_srch); // Añadir el elemento creado al array

//     favoriteLink.addEventListener("click", (e) => {
//       e.preventDefault();
//       const targetElement = e.target.closest("li.song");
//       if (targetElement) {
//         const songId = targetElement.getAttribute("data-id");
//         console.log("ID de la canción:", songId);
//       }
//     });

//     playListLink.addEventListener("click", (e) => {
//       e.preventDefault();
//       const targetElement = e.target.closest("li.song");
//       if (targetElement) {
//         const songId = targetElement.getAttribute("data-id");
//         console.log("ID de la canción:", songId);
//       }
//     });
    

//   });

//   return array_crearHtml; // Devolver el array completo fuera del forEach

// }

// Crear y añadir los nuevos elementos li (canciones) al DOM


class Playlist {
  constructor(nombreDeSeccion, cancionesArr = []) {
    this.listName = nombreDeSeccion;
    this.songs = cancionesArr.map(e => new Song(e));
    this.nextNumb = 1; // Inicializar el contador para el próximo número


  }

  addSong(song) {
    song.numb = this.nextNumb++;
    this.songs.push(song);
  }

  limpiarContenedor(e) {
    while (e.firstChild) {
        e.removeChild(e.firstChild);
    }
}

  // Otras funciones de la clase...
}



class Canciones {
  constructor(nombreDeSeccion, cancionesArr = []) {
    this.listName = nombreDeSeccion;
    this.songs = cancionesArr;
    this.Playlist = new Playlist("Playlist");
  }

  crearHtml(arrayEjemp) {
    const array_crearHtml = []; // Array para almacenar los elementos creados
  
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
  
      const playImg = document.createElement("img");
      playImg.src = "src/play.svg";
      playImg.alt = "";
      playImg.className = "icon play";
  
      const favoriteLink = document.createElement("a");
      favoriteLink.href = "";
      favoriteLink.className = "favorite";
  
      const favoriteImg = document.createElement("img");
      favoriteImg.src = "src/favorite.svg";
      favoriteImg.alt = "";
      favoriteImg.className = "icon";
  
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
  
      lineBottom.appendChild(artist);
      lineBottom.appendChild(duration);
  
      infoSong.appendChild(nameSong);
      infoSong.appendChild(lineBottom);
  
      // Crear contenedor principal de cada canción
      const song_sngs_srch = document.createElement("li"); 
      song_sngs_srch.setAttribute("data-id", e.id); // Agregar atributo data-id
      song_sngs_srch.className = "song sngs_srch";
      song_sngs_srch.appendChild(numberSong);
      song_sngs_srch.appendChild(infoSong);
      song_sngs_srch.appendChild(btnContainer);
  
      array_crearHtml.push(song_sngs_srch); // Añadir el elemento creado al array
  
      favoriteLink.addEventListener("click", (e) => {
        e.preventDefault();
        const targetElement = e.target.closest("li.song");
        if (targetElement) {
          const songId = targetElement.getAttribute("data-id");
          console.log("ID de la canción:", songId);
        }
      });
  
      playListLink.addEventListener("click", (e) => {
        e.preventDefault();
        const targetElement = e.target.closest("li.song");
        if (targetElement) {
          const songId = targetElement.getAttribute("data-id");
          console.log("ID de la canción:", songId);
      
          // Encontrar la instancia de la canción correspondiente al data-id
          const clickedSong = arr_songs.
          find(i => i.id === parseInt(songId));
          if (clickedSong) {
            this.agregarCancionesAPlaylist(clickedSong);
          } else {
            console.error("No se encontró la canción con el ID:", songId);
          }

    }});
      
  
    });
  
    return array_crearHtml; // Devolver el array completo fuera del forEach
  
  }
  
  agregarCancionesACanciones(arrayEjemp) {
    try {
      const elmntsLiDom = this.crearHtml(arrayEjemp);
      elmntsLiDom.forEach((e) => {
        songs_container.appendChild(e);
      });
      console.log(typeof(arrayEjemp)); //Cuando usas typeof para verificar el tipo de arrayEjemp, obtienes "object" porque en JavaScript, los arrays son un tipo especial de objeto. Todos los arrays en JavaScript tienen el tipo "object".
      console.log(`¿Es un array?`, Array.isArray(arrayEjemp)); // Si deseas asegurarte de que arrayEjemp es un array, puedes usar el método Array.isArray en lugar de typeof. Esto devolverá true si arrayEjemp es un array

    } catch (error) {
      console.error("Error al agregar canciones:", error); //  Captura cualquier error que ocurra durante la ejecución de forEach debido a las propiedades indefinidas de las instancias de la clase Song y lo imprimirá en la consola sin detener la ejecución del programa.
    }
  }


  agregarCancionesAPlaylist(EstoNOesArrayEsUnaInstancia) {
    try {

      console.log(`¿Es un array?`, Array.isArray(EstoNOesArrayEsUnaInstancia));

      const Cancion_Playlist = this.Playlist;
      const id_playlist = document.getElementById("id_playlist");

      const idCancion = EstoNOesArrayEsUnaInstancia.id;
      // Verificar si la canción ya está en la playlist
      const cancionExistente = this.Playlist.songs.find(e => e.id === idCancion);
  
      if (cancionExistente) {
        console.log(`La canción con ID ${idCancion} ya está en la playlist. No se agregará nuevamente.`);
        return; // Salir de la función si la canción ya está en la playlist
      }
      
      Cancion_Playlist.addSong(EstoNOesArrayEsUnaInstancia);
      console.log(`Canciones agregadas a la Playlist:`, EstoNOesArrayEsUnaInstancia.title);

      Cancion_Playlist.limpiarContenedor(id_playlist); // Limpiar antes de agregar las canciones, es decir, antes llamar al metodo this.crearHtml para evitar repeticiones de canciones
      

      const elmntsLiDom = this.crearHtml(this.Playlist.songs);
      elmntsLiDom.forEach((e) => {
        id_playlist.appendChild(e);
      });
    } catch (error) {
      console.error("Error al agregar canciones al PLaylist:", error); //  Captura cualquier error que ocurra durante la ejecución de forEach debido a las propiedades indefinidas de las instancias de la clase Song y lo imprimirá en la consola sin detener la ejecución del programa.
    }
  }
  
}

const seccCanciones = new Canciones("Canciones", arr_songs);
seccCanciones.agregarCancionesACanciones(arr_songs); // Mostrar canciones en html
console.log(seccCanciones.songs);
