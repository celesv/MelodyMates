const id_input_search = document.getElementById("input_search");
const v_no_results = document.querySelector(".no_results");
const id_canciones = document.getElementById("all_songs_search");
const id_playlist = document.getElementById("playlist");
const id_favoritos = document.getElementById("favoritos");
const id_music_player = document.getElementById("music_player");

class Song {
  static idCounter = 0;
  constructor({
    title,
    artist,
    imgSrc,
    audioSrc,
    album,
    year,
    gender,
    mifavorite = false,
    miplaylist = false,
  }) {
    this.id = ++Song.idCounter;
    this.titulo = title;
    this.artista = artist;
    this.imgFuente = imgSrc;
    this.fuente = audioSrc;
    this.duracion = 0;
    this.disco = album;
    this.ano = year;
    this.genero = gender;
    this.mi_fvrt = mifavorite;
    this.mi_plyslt = miplaylist;
  }

  // calculateDuration() {
  //   return new Promise((resolve, reject) => {
  //     const audio = new Audio();
  //     audio.src = this.fuente; // Establecer la fuente del audio
  //     audio.load(); // Cargar el audio para obtener metadatos
  //     audio.addEventListener("loadedmetadata", () => {
  //       this.duracion = formatTime(audio.duration); // Actualizar la duración
  //       audio.remove(); // Limpiar el elemento de audio
  //       resolve(); // Resolver la promesa una vez que se haya calculado la duración
  //     });
  //   });

  //   function formatTime(e) {
  //     let minutes = Math.floor(e / 60);
  //     minutes = minutes < 10 ? `0${minutes}` : minutes;
  //     let seconds = Math.floor(e % 60);
  //     seconds = seconds < 10 ? `0${seconds}` : seconds;
  //     return `${minutes}:${seconds}`;
  //   }
  // }
}

const arr_songs = [
  new Song({
    title: "Spanish Eddie",
    artist: "Laura Branigan",
    imgSrc: "music/Cover_Spanish_Eddie.png",
    audioSrc: "music/Spanish_Eddie.mp3",
    album: "Hold Me",
    year: "1985",
    gender: "Disco",
  }),
  new Song({
    title: "Guardians Inferno",
    artist: "David Hasselhoff",
    imgSrc: "music/Cover_Guardians_Inferno.webp",
    audioSrc: "music/Guardians_Inferno.mp3",
  }),
  new Song({
    title: "Billie Jean",
    artist: "Michael Jackson",
    imgSrc: "music/Cover_Billie_Jean.jpg",
    audioSrc: "music/Billie_Jean.mp3",
    album: "Thriller",
    year: "1982",
    gender: "Pop",
  }),
  new Song({
    title: "Take On Me",
    artist: "a-ha",
    imgSrc: "music/Cover_Take_On_Me.jpg",
    audioSrc: "music/Take_On_Me.mp3",
    album: "Hunting High and Low",
    year: "1984",
    gender: "Synth-pop",
  }),
  new Song({
    title: "Sweet Child o' Mine",
    artist: "Guns N' Roses",
    imgSrc: "music/Cover_Sweet_Child_O_Mine.jpg",
    audioSrc: "music/Sweet_Child_O_Mine.mp3",
    album: "Appetite for Destruction",
    year: "1987",
    gender: "Hard Rock",
  }),
  new Song({
    title: "Livin' on a Prayer",
    artist: "Bon Jovi",
    imgSrc: "music/Cover_Livin_On_A_Prayer.jpg",
    audioSrc: "music/Livin_On_A_Prayer.mp3",
    album: "Slippery When Wet",
    year: "1986",
    gender: "Rock",
  }),
  new Song({
    title: "Every Breath You Take",
    artist: "The Police",
    imgSrc: "music/Cover_Every_Breath_You_Take.jpg",
    audioSrc: "music/Every_Breath_You_Take.mp3",
    album: "Synchronicity",
    year: "1983",
    gender: "New Wave",
  }),
  new Song({
    title: "Wake Me Up Before You Go-Go",
    artist: "Wham!",
    imgSrc: "music/Cover_Wake_Me_Up_Before_You_Go_Go.jpg",
    audioSrc: "music/Wake_Me_Up_Before_You_Go_Go.mp3",
    album: "Make It Big",
    year: "1984",
    gender: "Pop",
  }),
  new Song({
    title: "Like a Virgin",
    artist: "Madonna",
    imgSrc: "music/Cover_Like_A_Virgin.jpg",
    audioSrc: "music/Like_A_Virgin.mp3",
    album: "Like a Virgin",
    year: "1984",
    gender: "Pop",
  }),
  new Song({
    title: "Thriller",
    artist: "Michael Jackson",
    imgSrc: "music/Cover_Thriller.jpg",
    audioSrc: "music/Thriller.mp3",
    album: "Thriller",
    year: "1982",
    gender: "Pop",
  }),
  new Song({
    title: "Another One Bites the Dust",
    artist: "Queen",
    imgSrc: "music/Cover_Another_One_Bites_The_Dust.jpg",
    audioSrc: "music/Another_One_Bites_The_Dust.mp3",
    album: "The Game",
    year: "1980",
    gender: "Funk rock",
  }),
  new Song({
    title: "Don't You Want Me",
    artist: "The Human League",
    imgSrc: "music/Cover_Dont_You_Want_Me.jpg",
    audioSrc: "music/Dont_You_Want_Me.mp3",
    album: "Dare",
    year: "1981",
    gender: "Synth-pop",
  }),
  new Song({
    title: "I Wanna Dance with Somebody (Who Loves Me)",
    artist: "Whitney Houston",
    imgSrc: "music/Cover_I_Wanna_Dance_With_Somebody.jpg",
    audioSrc: "music/I_Wanna_Dance_With_Somebody.mp3",
    album: "Whitney",
    year: "1987",
    gender: "Dance-pop",
  }),
  new Song({
    title: "I Love Rock 'n Roll",
    artist: "Joan Jett & the Blackhearts",
    imgSrc: "music/Cover_I_Love_Rock_N_Roll.jpg",
    audioSrc: "music/I_Love_Rock_N_Roll.mp3",
    album: "I Love Rock 'n Roll",
    year: "1981",
    gender: "Hard Rock",
  }),
  new Song({
    title: "Tainted Love",
    artist: "Soft Cell",
    imgSrc: "music/Cover_Tainted_Love.jpg",
    audioSrc: "music/Tainted_Love.mp3",
    album: "Non-Stop Erotic Cabaret",
    year: "1981",
    gender: "Synth-pop",
  }),
  new Song({
    title: "Everytime You Go Away",
    artist: "Paul Young",
    imgSrc: "music/Cover_Everytime_You_Go_Away.jpg",
    audioSrc: "music/Everytime_You_Go_Away.mp3",
    album: "The Secret of Association",
    year: "1985",
    gender: "Pop",
  }),
  new Song({
    title: "Eye of the Tiger",
    artist: "Survivor",
    imgSrc: "music/Cover_Eye_Of_The_Tiger.jpg",
    audioSrc: "music/Eye_Of_The_Tiger.mp3",
    album: "Eye of the Tiger",
    year: "1982",
    gender: "Rock",
  }),
  new Song({
    title: "Girls Just Want to Have Fun",
    artist: "Cyndi Lauper",
    imgSrc: "music/Cover_Girls_Just_Want_To_Have_Fun.jpg",
    audioSrc: "music/Girls_Just_Want_To_Have_Fun.mp3",
    album: "She's So Unusual",
    year: "1983",
    gender: "New Wave",
  }),
  new Song({
    title: "Time After Time",
    artist: "Cyndi Lauper",
    imgSrc: "music/Cover_Time_After_Time.jpg",
    audioSrc: "music/Time_After_Time.mp3",
    album: "She's So Unusual",
    year: "1983",
    gender: "Pop",
  }),
  new Song({
    title: "Africa",
    artist: "Toto",
    imgSrc: "music/Cover_Africa.jpg",
    audioSrc: "music/Africa.mp3",
    album: "Toto IV",
    year: "1982",
    gender: "Rock",
  }),
  new Song({
    title: "Sweet Dreams (Are Made of This)",
    artist: "Eurythmics",
    imgSrc: "music/Cover_Sweet_Dreams.jpg",
    audioSrc: "music/Sweet_Dreams.mp3",
    album: "Sweet Dreams (Are Made of This)",
    year: "1983",
    gender: "New Wave",
  }),
  new Song({
    title: "Careless Whisper",
    artist: "George Michael",
    imgSrc: "music/Cover_Careless_Whisper.jpg",
    audioSrc: "music/Careless_Whisper.mp3",
    album: "Make It Big",
    year: "1984",
    gender: "R&B",
  }),
  new Song({
    title: "Ghostbusters",
    artist: "Ray Parker Jr.",
    imgSrc: "music/Cover_Ghostbusters.jpg",
    audioSrc: "music/Ghostbusters.mp3",
    album: "Ghostbusters: Original Soundtrack Album",
    year: "1984",
    gender: "Pop",
  }),
  new Song({
    title: "Footloose",
    artist: "Kenny Loggins",
    imgSrc: "music/Cover_Footloose.jpg",
    audioSrc: "music/Footloose.mp3",
    album: "Footloose: Original Soundtrack of the Paramount Motion Picture",
    year: "1984",
    gender: "Rock",
  }),
  new Song({
    title: "I Want to Know What Love Is",
    artist: "Foreigner",
    imgSrc: "music/Cover_I_Want_To_Know_What_Love_Is.jpg",
    audioSrc: "music/I_Want_To_Know_What_Love_Is.mp3",
    album: "Agent Provocateur",
    year: "1984",
    gender: "Rock",
  }),
  new Song({
    title: "Heaven Is a Place on Earth",
    artist: "Belinda Carlisle",
    imgSrc: "music/Cover_Heaven_Is_A_Place_On_Earth.jpg",
    audioSrc: "music/Heaven_Is_A_Place_On_Earth.mp3",
    album: "Heaven on Earth",
    year: "1987",
    gender: "Pop",
  }),
  new Song({
    title: "The Power of Love",
    artist: "Huey Lewis and the News",
    imgSrc: "music/Cover_The_Power_Of_Love.jpg",
    audioSrc: "music/The_Power_Of_Love.mp3",
    album: "Back to the Future: Original Motion Picture Soundtrack",
    year: "1985",
    gender: "Rock",
  }),
  new Song({
    title: "We Built This City",
    artist: "Starship",
    imgSrc: "music/Cover_We_Built_This_City.jpg",
    audioSrc: "music/We_Built_This_City.mp3",
    album: "Knee Deep in the Hoopla",
    year: "1985",
    gender: "Rock",
  }),
  new Song({
    title: "Total Eclipse of the Heart",
    artist: "Bonnie Tyler",
    imgSrc: "music/Cover_Total_Eclipse_Of_The_Heart.jpg",
    audioSrc: "music/Total_Eclipse_Of_The_Heart.mp3",
    album: "Faster Than the Speed of Night",
    year: "1983",
    gender: "Pop",
  }),
  new Song({
    title: "Owner of a Lonely Heart",
    artist: "Yes",
    imgSrc: "music/Cover_Owner_Of_A_Lonely_Heart.jpg",
    audioSrc: "music/Owner_Of_A_Lonely_Heart.mp3",
    album: "90125",
    year: "1983",
    gender: "Progressive Rock",
  }),
];

const v_songs_container = document.querySelector(".songs_container");

class List {
  constructor({ name, songs = [], section }) {
    this.nombre = name;
    this.canciones = songs;
    this.seccion = section;
  }

  vaciarSeccion() {
    const v_songs_container = this.seccion.querySelector(".songs_container");
    v_songs_container.innerHTML = `<p class="no_results"> No se encontraron canciones en ${this.nombre}</p>`;
  }

  renderList() {
    const v_songs_container = this.seccion.querySelector(".songs_container");

    v_songs_container.innerHTML = "";

    if (this.canciones.length === 0) {
      v_songs_container.innerHTML = `<p class="no_results"> No se encontraron canciones en ${this.nombre}</p>`;
    }

    this.canciones.forEach((j, index) => {
      const li = document.createElement("li");
      li.classList.add("song");

      li.innerHTML = `
  <div class="number_song">${index + 1}</div>
  <div class="info_song">
    <div class="name_song">${j.titulo}</div>
      <div class="line_bottom">
        <div class="artist">${j.artista}</div>
        <div class="duration">${j.duracion}</div>
      </div>
    </div>
    <div class="btn_container">
      <a href="#" class="play" data-index="${index}"><img src="src/play.svg" alt="" class="icon"></a>
      <a href="#" class="favorite" onClick="ins_Favoritos.addCancion(this.canciones[${index}])"><img src="src/favorite.svg" alt="" class="icon"></a>
      <a href="#" class="play_list"><img src="src/play_list.svg" alt="" class="icon"></a>
    </div>
  </div>
`;

      v_songs_container.appendChild(li);
    });
  }

  addCancion(e) {
    if (!this.canciones.includes(e)) {
      // if(this.nombre === 'Favoritos') e.mi_fvrt = true
      // if(this.nombre === 'Playlist') e.mi_plyslt = true
      this.canciones.push(e);
      console.log(`Canción agregada - ID: ${e.id}`, e);
      this.renderList();
    }
  }

  removeCancion(e) {
    const index = this.canciones.indexOf(e);
    if (index === -1) {
      return; // No es necesario poner else aquí, ya que se sale de la función si no se encuentra el elemento
    }
    this.canciones.splice(index, 1);
    this.renderList();
  }
}

const ins_Canciones = new List({
  name: "Canciones",
  songs: arr_songs,
  section: id_canciones,
});
const ins_Playlist = new List({
  name: "Playlist",
  // No proporcionas un valor específico para songs, por lo que se utiliza automáticamente el parámetro con un valor [] por defecto
  section: id_playlist,
});
const ins_Favoritos = new List({
  name: "Favoritos",
  // No proporcionas un valor específico para songs, por lo que se utiliza automáticamente el parámetro con un valor [] por defecto
  section: id_favoritos,
});

ins_Canciones.renderList();
ins_Playlist.vaciarSeccion();
ins_Favoritos.vaciarSeccion();

class Reproductor {
  constructor(element) {
    this.el = element;
  }

  render(e) {
    this.el.innerHTML = "";
    this.el.innerHTML = `
    <div class="outer">
        <img class="rectangle_cover" src="imgs/rectangle.png" alt="">
        <div class="inner">
            <img class="album_cover" src="${e.imgFuente}" alt="">
        </div>
    </div>
    <div id="controls">
        <div class="controls_center">
            <a id="previous_btn" onClick="prevSong()">
                <img src="src/previous.svg" alt="" class="btn_control previous">
            </a>
            <div class="outer_play">
                <a id="play_btn" onClick="playPause()">
                    <img src="src/circle_btn.png" alt="" class="btn_control circle_play">
                    <a href="" class="play_img play play_control">
                        <img src="src/play_big.svg" alt="" class="btn_control">
                    </a>
                    <a href="" class="pause_btn pause">
                        <img src="src/pause_control.svg" alt="" class="btn_control">
                    </a>
                </a>
            </div>
            <a id="forward_btn" onClick="nextSong()">
                <img src="src/forward.svg" alt="" class="btn_control forward">
            </a>
        </div>
        <a id="volume_on" class="volume" onClick="mute()">
            <img src="src/volume.svg" alt="" class="btn_control volume">
        </a>
        <a id="volume_off" class="volume" onClick="mute()">
            <img src="src/not_volume.svg" alt="" class="btn_control not_volume">
        </a>
    </div>
    <ul id="song_details">
        <div class="cell">
            <li class="ttl cancion">Canción</li>
            <li class="info nombre_cancion">${e.titulo}</li>
        </div>
        <div class="cell">
            <li class="ttl artista">Artista</li>
            <li class="info nombre_artista">${e.artista}</li>
        </div>
        <div class="cell">
            <li class="ttl duracion">Duración</li>
            <li class="info time">${e.duracion}</li>
        </div>
        <div class="cell">
            <li class="ttl album">Álbum</li>
            <li class="info nombre_album">${e.disco}</li>
        </div>
        <div class="cell">
            <li class="ttl year">Año</li>
            <li class="info number_year">${e.ano}</li>
        </div>
        <div class="cell">
            <li class="ttl genero">Género</li>
            <li class="info nombre_genero">${e.genero}</li>
        </div>
    </ul>`;
  }
}

const ins_reproductor = new Reproductor(
  document.getElementById("music_player")
);
// El elemento con id "music_player" es el elemento que va a contener el reproductor de música,
// por lo que se le pasa como parámetro a la clase Reproductor en su constructor.

ins_reproductor.render(arr_songs[1]);

const v_input_search = document.getElementById("input_search");

v_input_search.addEventListener("input", () => {
  let v_search_text = v_input_search.value.toLowerCase();
  let v_new_list = arr_songs.filter(
    (song) =>
      song.titulo.toLowerCase().includes(v_search_text) ||
      song.artista.toLowerCase().includes(v_search_text)
  );
  ins_Canciones.canciones = v_new_list; // Actualiza la lista de canciones en ins_Canciones
  ins_Canciones.renderList(); // Renderiza la lista actualizada
});

const audio = new Audio(
  "music/Spanish_Eddie.mp3"
);

audio.addEventListener("ended", () => {
  alert("termino el audio, paso al siguiente");
  audio.src = "music/Guardians_Inferno.mp3";
  audio.play();
});

// const v_play = document.querySelectorAll("play");

// v_play.forEach((j) => j.addEventListener("click", (e) => {
//   e.preventDefault();
//   audio.play();
// }));

const v_play = document.querySelector(".play");

v_play.addEventListener("click", (e) => {
  e.preventDefault();
  audio.play();
});


const id_play_btn = document.getElementById("play_btn");

id_play_btn.addEventListener("click", () => {
  e.preventDefault();
})
