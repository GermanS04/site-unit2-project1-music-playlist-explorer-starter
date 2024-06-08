
let randomID = Math.floor(Math.random() * data.playlists.length);

let playlist = data.playlists[randomID];

console.log(randomID);

const playlistIMG = document.getElementsByClassName("playlist-card-img");
playlistIMG[0].src = playlist.playlist_art;

const playlistTitle = document.getElementsByClassName("playlist-title");
playlistTitle[0].textContent = playlist.playlist_name;

const playlistCreator = document.getElementsByClassName("playlist-creator");
playlistCreator[0].textContent = playlist.playlist_creator;

const songsList = document.getElementsByTagName("ul")[0];
const songItem = document.getElementsByTagName("li")[0];

const playlistSongs = playlist.songs;

playlistSongs.forEach(song => {
    let songs = document.createElement('li');
    songs.innerHTML = songItem.innerHTML;
    songItem.remove();

    let songIMG = songs.getElementsByClassName("song-img")[0];
    let songDetails = songs.getElementsByClassName("song-details")[0];
    let songMinutes = songs.getElementsByClassName('song-minutes')[0];

    songIMG.src = song.cover_art;

    let html = "";

    html += `<h4>${song.title}</h4>`;
    html += `<p>${song.artist}</p>`;
    html += `<p>${song.album}</p>`;

    songDetails.innerHTML = html;

    html = "";
    html += `<p>${song.duration}</p>`;

    songMinutes.innerHTML = html;

    songsList.appendChild(songs);

    console.log(songItem.innerHTML);

})
