var liked = false;

var eliminated = false;

let fillPlaylists = () => {
    const playlistsContainer = document.getElementById('playlists-container');

    let html = '';

    for (const playlist of data.playlists){
        let playlistId = playlist.playlistID;
        let playlistName = playlist.playlist_name;
        let playlistCreator = playlist.playlist_creator;
        let playlistImg = playlist.playlist_art;
        let playlistLikes = playlist.likeCount;

        html +=  '<div class="playlist-card">';
        html += '<div class="image-container">';
        html += `<img src="${playlistImg}" class="playlist-img">`;
        html += ' </div>';
        html += '<div class="description-container">';
        html += `<p style="display: none" class="playlistId">${playlistId}</p>`;
        html += `<p class="playlist-title">${playlistName}</p>`;
        html += `<p class="playlist-creator">Created by ${playlistCreator}</p>`;
        html += '<span class="like-count-container">'
        html += '<span class="likes-count">';
        html += '<svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>';
        html += `<span class="playlist-likes">${playlistLikes}</span>`;
        html += '</span>';
        html += '<span><svg class="trash-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg></span>';
        html += '</span>';
        html += '</div>';
        html += '</div>';
    }

    playlistsContainer.innerHTML = html;

}

let fillModal = (id) => {
    const body = document.getElementById('body');
    body.style.overflow = 'hidden';

    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    modal.style.display = 'flex';

    const playlistData = data.playlists[id];
    const imagePlaylist = document.getElementById('shuffle-disc-container');
    const playlistInfo = document.getElementById('playlist-info-modal');

    let playlistName = playlistData.playlist_name;
    let playlistCreator = playlistData.playlist_creator;
    let playlistImg = playlistData.playlist_art;

    imagePlaylist.innerHTML = `<img src="${playlistImg}" class="img-playlist-modal">` + '<button class="shuffle-button" id="shuffle-button">Shuffle</button>';
    playlistInfo.innerHTML = `<h3>${playlistName}</h3>` + `<p>Created by ${playlistCreator}</p>`;

    let songList = document.getElementById('songs-list');
    let songs = playlistData.songs;

    let html = '';

    for (let i = 0; i < songs.length; i++){
        let songName = songs[i].title;
        let songArtist = songs[i].artist;
        let songAlbum = songs[i].album;
        let songImg = songs[i].cover_art;
        let songDuration = songs[i].duration;

        html += '<div class="song">';
        html += `<img src="${songImg}" class="img-song">`;
        html += '<div class="song-details">';
        html += `<h4>${songName}</h4>`;
        html += `<p>${songArtist}</p>`;
        html += `<p>${songAlbum}</p>`;
        html += '</div>';
        html += '<div class="song-minutes">';
        html += `<p style="margin: 0;">${songDuration}</p>`;
        html += '</div>';
        html += '</div>';
    }

    songList.innerHTML = html;

    modalContent.addEventListener('click', event => {
        const shuffleButton = document.getElementById('shuffle-button');
        event.preventDefault();
        event.stopPropagation();

        if (event.target === shuffleButton){
            for (let i = 0; i < data.playlists[id].songs.length - 1; i++) {
                songList.appendChild(songList.children[Math.floor(Math.random() * (i + 1))]);
            }
        }


    });

    modal.addEventListener('click', event => {
        event.preventDefault();
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    });
}

fillPlaylists(data);

var playlistCard = document.getElementsByClassName('playlist-card');

for (let i = 0; i < playlistCard.length; i++){
    const heartIcon = document.getElementsByClassName('heart-icon');

    heartIcon[i].addEventListener('click', event => {
        liked = !liked;
        let likeCount = document.getElementsByClassName('playlist-likes');
        event.preventDefault();
        event.stopPropagation();
        if (liked){
            heartIcon[i].style.fill = '#e20000';
            likeCount[i].innerHTML = parseInt(likeCount[i].textContent) + 1;
            data.playlists[id].likeCount += 1;
        } else {
            heartIcon[i].style.fill = '#90949c';
            likeCount[i].innerHTML = parseInt(likeCount[i].textContent) - 1;
            data.playlists[id].likeCount -= 1;
        }
    });

    let id = document.getElementsByClassName('playlistId');

    const trashIcon = document.getElementsByClassName('trash-icon');
        trashIcon[i].addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            playlistCard[i].style.display = 'none';
            delete data.playlists[i];
        });

    playlistCard[i].addEventListener('click', event => {
        event.preventDefault();
        fillModal(i);
    });
}


let searchBar = document.getElementById('searchBar');

var playlistCard = document.getElementsByClassName('playlist-card');
var playlistsContainer = document.getElementById('playlists-container');

searchBar.addEventListener('keyup', event => {
    event.preventDefault();
    let searchValue = event.target.value;

    let filteredPlaylists = data.playlists.filter(function (item) {

        return item.playlist_name.toLowerCase().includes(searchValue.toLowerCase());
    })

    let html = '';

    for (const playlist of filteredPlaylists){
        let playlistId = playlist.playlistID;
        let playlistName = playlist.playlist_name;
        let playlistCreator = playlist.playlist_creator;
        let playlistImg = playlist.playlist_art;
        let playlistLikes = playlist.likeCount;

        html +=  '<div class="playlist-card">';
        html += '<div class="image-container">';
        html += `<img src="${playlistImg}" class="playlist-img">`;
        html += ' </div>';
        html += '<div class="description-container">';
        html += `<p style="display: none" class="playlistId">${playlistId}</p>`;
        html += `<p class="playlist-title">${playlistName}</p>`;
        html += `<p class="playlist-creator">Created by ${playlistCreator}</p>`;
        html += '<span class="like-count-container">'
        html += '<span class="likes-count">';
        html += '<svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>';
        html += `<span class="playlist-likes">${playlistLikes}</span>`;
        html += '</span>';
        html += '<span><svg class="trash-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg></span>';
        html += '</span>';
        html += '</div>';
        html += '</div>';
    }

    playlistsContainer.innerHTML = html;

    let sort = document.getElementsByClassName('sort-button')[0];

    if(sort.value === ""){
        for (let i = 0; i < playlistCard.length; i++){
            playlistCard[i].style.display = 'flex';
        }
    } else if(sort.value === "name"){
        let arr = [].slice.call(playlistCard);
        arr.sort((a, b) => {
            let nameA = a.getElementsByClassName('playlist-title')[0].textContent;
            let nameB = b.getElementsByClassName('playlist-title')[0].textContent;
            if (nameA < nameB) {
                return -1;
            } else {
                return 1;
            }
        })

        playlistsContainer = document.getElementById('playlists-container');

        for (let i = 0; i < arr.length; i++){
            playlistsContainer.appendChild(arr[i]);
        }

    } else if(sort.value === "like"){
        let arr = [].slice.call(playlistCard);
        arr.sort((a, b) => {
            let likesA = a.getElementsByClassName('playlist-likes')[0].textContent;
            let likesB = b.getElementsByClassName('playlist-likes')[0].textContent;
            if (likesA < likesB) {
                return 1;
            } else {
                return -1;
            }
        });

        playlistsContainer = document.getElementById('playlists-container');

        for (let i = 0; i < arr.length; i++){
            playlistsContainer.appendChild(arr[i]);
        }


    }

    let id = document.getElementsByClassName('playlistId');

    for (let i = 0; i < playlistCard.length; i++){
        const heartIcon = document.getElementsByClassName('heart-icon');
        console.log(id);

        heartIcon[i].addEventListener('click', event => {
            liked = !liked;
            let likeCount = document.getElementsByClassName('playlist-likes');
            event.preventDefault();
            event.stopPropagation();
            if (liked){
                heartIcon[i].style.fill = '#e20000';
                likeCount[i].innerHTML = parseInt(likeCount[i].textContent) + 1;
                data.playlists[id[i].innerHTML].likeCount += 1;
            } else {
                heartIcon[i].style.fill = '#90949c';
                likeCount[i].innerHTML = parseInt(likeCount[i].textContent) - 1;
                data.playlists[id[i].innerHTML].likeCount -= 1;
            }
        });

        const trashIcon = document.getElementsByClassName('trash-icon');
        trashIcon[i].addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            playlistCard[i].style.display = 'none';
            delete data.playlists[id[i].innerHTML];
        });


        playlistCard[i].addEventListener('click', event => {
            event.preventDefault();
            fillModal(id[i].innerHTML);
        });
    }
})

let sort = document.getElementsByClassName('sort-button')[0];

sort.addEventListener('change', event => {
    const playlistCard = document.getElementsByClassName('playlist-card');
    let id;

    if(event.target.value === ""){
        for (let i = 0; i < playlistCard.length; i++){
            playlistCard[i].style.display = 'flex';
        }
    } else if(event.target.value === "name"){
        let arr = [].slice.call(playlistCard);
        arr.sort((a, b) => {
            let nameA = a.getElementsByClassName('playlist-title')[0].textContent;
            let nameB = b.getElementsByClassName('playlist-title')[0].textContent;
            if (nameA < nameB) {
                return -1;
            } else {
                return 1;
            }
        })

        let playlistContainer = document.getElementById('playlists-container');

        for (let i = 0; i < arr.length; i++){
            playlistContainer.appendChild(arr[i]);
        }

        id = document.getElementsByClassName('playlistId');

        for (let i = 0; i < playlistCard.length; i++){
            playlistCard[i].addEventListener('click', event => {
                event.preventDefault();
                fillModal(id[i].innerHTML);
            });
        }

    } else if(event.target.value === "like"){
        let arr = [].slice.call(playlistCard);
        arr.sort((a, b) => {
            let likesA = a.getElementsByClassName('playlist-likes')[0].textContent;
            let likesB = b.getElementsByClassName('playlist-likes')[0].textContent;
            if (likesA < likesB) {
                return 1;
            } else {
                return -1;
            }
        });

        console.log(arr);

        let playlistContainer = document.getElementById('playlists-container');

        for (let i = 0; i < arr.length; i++){
            playlistContainer.appendChild(arr[i]);
        }

        id = document.getElementsByClassName('playlistId');

        for (let i = 0; i < playlistCard.length; i++){
            playlistCard[i].addEventListener('click', event => {
                event.preventDefault();
                fillModal(id[i].innerHTML);
            });
        }

    }
});
