const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');
const playlistSongs = document.getElementById('playlistSongs');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn');
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');


const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn');

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider');
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay');

let songs = [
    {
        id: 1,
        title: "Consume",
        artist: "Chase Atlantic",
        album: "Beauty in Death",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.VwivM--7Xx_SmgsqXBLi8AAAAA&pid=Api&P=0&h=220",
        audioSrc: "audio/consume.mp3",
        videoBgSrc: "videos/consume.mp4",
        lyrics: [
            { time: 0.2, text: "She said, Careful, or you'll lose it" },
            { time: 4, text: "But girl, I'm only human," },
            { time: 7.1, text: "And I know there's a blade where your heart is" },
            { time: 10, text: "And you know how to use it" },
            { time: 13, text: "And you can take my flesh if you want girl" },
            { time: 16, text: "But, baby, don't abuse it (Calm down)" },
            { time: 19, text: "These voices in my head screaming, Run now (Don't run)" },
            { time: 22, text: "I'm praying that they're human" },
            { time: 25, text: "Please understand that I'm trying my hardest" },
            { time: 28, text: "My head's a mess, but I'm trying regardless" },
            { time: 31, text: "Anxiety is one hell of a problem" },
            { time: 34, text: "She's latching onto me, I can't resolve it" },
            { time: 37, text: "It's not right, it's not fair, it's not fair" },
            { time: 41.5, text: "It's not fair, it's not fair, it's not fair" },
            { time: 47, text: "Oh, no, no, no, ooh-ooh" },
        ]
    },
    {
        id: 2,
        title: "Stan",
        artist: "Eminem",
        album: "The Martial Mathers",
        albumArtUrl: "https://upload.wikimedia.org/wikipedia/en/e/e8/Eminem_-_Stan_CD_cover.jpg",
        audioSrc: "audio/Stan.mp3",
        videoBgSrc: "videos/stan.mp4",
        lyrics: [
            { time: 0.2, text: "And even if I could, It'd all be grey" },
            { time: 4, text: "But your picture on my wall" },
            { time: 6.9, text: "It reminds me that its not so bad," },
            { time: 11, text: "its not so bad (bad)" },
            { time: 13, text: "-" },
            { time: 13, text: "My tea's gone cold, I'm wondering Why" },
            { time: 17, text: "Got out of bet at all" },
            { time: 21, text: "The morning rain clouds up my window (window)" },
            { time: 25, text: "And I can't see at all" },
            { time: 28, text: "And even If I could, itd be all be grey" },
            { time: 31.8, text: "But your picture on my wall" },
            { time: 34.5    , text: " It reminds me that its not so bad, its not so bad (bad)" },
        ]   
    },
    {
        id: 3,
        title: "Sad",
        artist: "xxxtentacion",
        album: "genius",
        albumArtUrl: "https://images.genius.com/cefcf70065cf258281a354367542be42.1000x1000x1.jpg",
        audioSrc: "audio/sad.mp3",
        videoBgSrc: "videos/sad.mp4",
        lyrics: [
            { time: 4.7, text: "Who am I? Someone that's afraid to let go, uh" },
            { time: 8, text: "You decide if you're ever gonna let me know, yeah" },
            { time: 11, text: "Suicide if you ever try to let go, uh" },
            { time: 14.7, text: "I'm sad, I know, yeah, I'm sad, I know, yeah" },
            { time: 17.8, text: "Who am I? Someone that's afraid to let go, uh" },
            { time: 21, text: "You decide if you're ever gonna let me know, yeah" },
            { time: 24, text: "Suicide if you ever try to let go, uh" },
            { time: 27.3, text: "I'm sad, I know, yeah, I'm sad, I know, yeah" },
        ]   
    },
        {
        id: 4,
        title: "Lilith",
        artist: "Saint evangeline",
        album: "Saint",
        albumArtUrl: "https://f4.bcbits.com/img/a3982373264_10.jpg",
        audioSrc: "audio/lilith.mp3",
        videoBgSrc: "videos/young_and_beautiful.mp4",
        lyrics: [
            { time: 1.8, text: "Lilith, you siren" },
            { time: 6, text: "How could you do this to me?" },
            { time: 10.3, text: "Lilith, I'm dyin'" },
            { time: 15, text: "Why won't you set me free?" },
            { time: 18, text: "-" },
            { time: 18, text: "I tried to scream but lilies clouded my mind" },
            { time: 22, text: "The petals softly floating into my eyes" },
            { time: 26.5, text: "I felt your fingers slowly crawl up my spine" },
            { time: 31, text: "We didn't have to sink for you to be mine" },
        ]   
    },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 2;

function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active');
    homePage.classList.add('active');
    
    const profilePage = document.getElementById('profilePage');
    if (profilePage) {
        profilePage.classList.remove('active');
    }
    
    const settingsPage = document.getElementById('settingsPage');
    if (settingsPage) {
        settingsPage.classList.remove('active');
    }
    
    // Show right sidebar when returning to home
    const rightSidebar = document.querySelector('.right-sidebar');
    rightSidebar.style.display = 'flex';
    
    // Update navigation active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.getAttribute('data-page') === 'home') {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause();
    backgroundVideo.src = "";
    backgroundVideo.load();
    pauseTrack(); 
}

function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause();
    backgroundVideo.src = "";
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');
    
    // Hide right sidebar when playing music
    const rightSidebar = document.querySelector('.right-sidebar');
    rightSidebar.style.display = 'none';

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active');

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load();
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">No song available.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;

        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage();
        });

        listItem.addEventListener('mouseenter', () => {
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg');
            }
        });
        listItem.addEventListener('mouseleave', () => {
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause();
                backgroundVideo.src = ""
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg');
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Song not found!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "No Song";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lyrics not available.</p>";
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics);
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = '';
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lyrics not available for this song.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time);
        span.classList.add('lyric-line');
        lyricsContainer.appendChild(span);
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("There is no song to play.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error playing:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1) {
        audioPlayer.currentTime = 0;
        playTrack();
        return;
    }
    
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage();
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
    
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));

            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
    const settingsVolume = document.getElementById('settingsVolume');
    if (settingsVolume) {
        settingsVolume.value = e.target.value;
    }
});

// Event listener for speed slider
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
    const settingsSpeed = document.getElementById('settingsSpeed');
    const settingsSpeedDisplay = document.getElementById('settingsSpeedDisplay');
    if (settingsSpeed) {
        settingsSpeed.value = e.target.value;
    }
    if (settingsSpeedDisplay) {
        settingsSpeedDisplay.textContent = `${parseFloat(e.target.value).toFixed(2)}x`;
    }
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('repeat-off', 'repeat-one', 'repeat-all');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('repeat-off');
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('repeat-one');
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('repeat-all');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

backToHomeFromDetailBtn.addEventListener('click', showHomePage);
backToHomeBtn.addEventListener('click', showHomePage);

playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

function init() {
    console.log("Initializing...");
    console.log("Songs array length:", songs.length);
    console.log("songListElement:", songListElement);

    renderSongList();
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Music";
        playerTrackTitle.textContent = "No Song";
        playerTrackArtist.textContent = "Add a song";
        lyricsContainer.innerHTML = "<p>Please add songs from the list.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value;
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage();
    console.log("Initialization complete.");
}

// Navigation functionality
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            const page = item.getAttribute('data-page');
            handleNavigation(page);
        });
    });
}

function handleNavigation(page) {
    switch(page) {
        case 'home':
            showHomePage();
            break;
        case 'profile':
            showProfilePage();
            break;
        case 'settings':
            showSettingsPage();
            break;
        case 'messages':
            alert('Messages page - Coming soon!');
            break;
        case 'logout':
            if(confirm('Are you sure you want to exit?')) {
                window.open('', '_self').close();
            }
            break;
    }
}

function showProfilePage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.remove('active');
    
    const settingsPage = document.getElementById('settingsPage');
    if (settingsPage) {
        settingsPage.classList.remove('active');
    }
    
    let profilePage = document.getElementById('profilePage');
    if (!profilePage) {
        profilePage = document.createElement('div');
        profilePage.id = 'profilePage';
        profilePage.className = 'page';
        profilePage.innerHTML = `
            <button class="back-btn" onclick="showHomePage()"><i class="fas fa-arrow-left"></i>Back</button>
            <div class="profile-page-container">
                <div class="creator-card">
                    <div class="creator-avatar">
                        <video autoplay loop muted>
                            <source src="videos/background.mp4" type="video/mp4">
                        </video>
                    </div>
                    <h2>Rokkie_or_Nath</h2>
                    <p class="creator-title">Full Stack Developer & Music Enthusiast</p>
                    <p class="creator-bio">Creator of EchoVerse - A passion project combining my love for music and web development. Building beautiful, functional applications one beat at a time.</p>
                    
                    <div class="social-links">
                        <a href="https://github.com/Rokkie-or-Nath" target="_blank" class="social-link github">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.facebook.com/nathaniel.roque.923" target="_blank" class="social-link facebook">
                            <i class="fab fa-facebook"></i>
                            <span>Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/rokkie_or_nath/" target="_blank" class="social-link instagram">
                            <i class="fab fa-instagram"></i>
                            <span>Instagram</span>
                        </a>
                        <a href="https://www.tiktok.com/@rokkie_or_nath" target="_blank" class="social-link tiktok">
                            <i class="fab fa-tiktok"></i>
                            <span>TikTok</span>
                        </a>
                        <a href="https://discord.com/channels/@rokkie110140" target="_blank" class="social-link discord">
                            <i class="fab fa-discord"></i>
                            <span>Discord</span>
                        </a>
                        <a href="https://x.com/Rokkie_or_Nath" target="_blank" class="social-link twitter">
                            <i class="fab fa-twitter"></i>
                            <span>Twitter</span>
                        </a>
                    </div>
                    
                    <div class="creator-stats">
                        <div class="stat">
                            <span class="stat-number">${songs.length}</span>
                            <span class="stat-label">Songs Added</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">2025</span>
                            <span class="stat-label">Year Created</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number"><div class="echoverse-logo"><span class="echo">Echo</span><span class="verse">Verse</span></div></span>
                            <span class="stat-label">Music Platform</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(profilePage);
    }
    profilePage.classList.add('active');
}

function showSettingsPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.remove('active');
    
    const profilePage = document.getElementById('profilePage');
    if (profilePage) {
        profilePage.classList.remove('active');
    }
    
    let settingsPage = document.getElementById('settingsPage');
    if (!settingsPage) {
        settingsPage = document.createElement('div');
        settingsPage.id = 'settingsPage';
        settingsPage.className = 'page';
        settingsPage.innerHTML = `
            <button class="back-btn" onclick="showHomePage()"><i class="fas fa-arrow-left"></i>Back</button>
            <div class="profile-page-container">
                <div class="creator-card">
                    <h2>Settings</h2>
                    <div style="text-align: left; margin-top: 2rem; width: 100%;">
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; margin-bottom: 0.5rem; color: #a78bfa; font-size: 1rem;">Volume</label>
                            <input type="range" id="settingsVolume" min="0" max="1" step="0.01" value="${audioPlayer.volume}" style="width: 100%; height: 6px; background: #404040; border-radius: 3px;">
                        </div>
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; margin-bottom: 0.5rem; color: #a78bfa; font-size: 1rem;">Playback Speed</label>
                            <input type="range" id="settingsSpeed" min="0.5" max="2" step="0.25" value="${audioPlayer.playbackRate}" style="width: 100%; height: 6px; background: #404040; border-radius: 3px;">
                            <span id="settingsSpeedDisplay" style="color: #8b5cf6; font-size: 0.9rem; margin-top: 0.5rem; display: inline-block;">${audioPlayer.playbackRate.toFixed(2)}x</span>
                        </div>
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: flex; align-items: center; color: #a78bfa; font-size: 1rem; cursor: pointer;">
                                <input type="checkbox" id="settingsAutoplay" checked style="margin-right: 0.5rem; width: 18px; height: 18px;"> Autoplay Next Song
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(settingsPage);
        
        document.getElementById('settingsVolume').addEventListener('input', (e) => {
            audioPlayer.volume = e.target.value;
            playerVolumeSlider.value = e.target.value;
        });
        
        document.getElementById('settingsSpeed').addEventListener('input', (e) => {
            audioPlayer.playbackRate = parseFloat(e.target.value);
            playerSpeedSlider.value = e.target.value;
            document.getElementById('settingsSpeedDisplay').textContent = `${parseFloat(e.target.value).toFixed(2)}x`;
            currentSpeedDisplay.textContent = `${parseFloat(e.target.value).toFixed(2)}x`;
        });
    } else {
        // Update values if page already exists
        const settingsVolume = document.getElementById('settingsVolume');
        const settingsSpeed = document.getElementById('settingsSpeed');
        const settingsSpeedDisplay = document.getElementById('settingsSpeedDisplay');
        if (settingsVolume) settingsVolume.value = audioPlayer.volume;
        if (settingsSpeed) settingsSpeed.value = audioPlayer.playbackRate;
        if (settingsSpeedDisplay) settingsSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
    }
    settingsPage.classList.add('active');
}

// Playlist functionality
function renderPlaylist(filteredSongs = songs) {
    playlistSongs.innerHTML = '';
    if (filteredSongs.length === 0) {
        playlistSongs.innerHTML = '<li class="loading-songs">No songs found</li>';
        return;
    }
    filteredSongs.forEach((song, index) => {
        const originalIndex = songs.indexOf(song);
        const listItem = document.createElement('li');
        listItem.setAttribute('data-index', originalIndex);
        if (originalIndex === currentSongIndex) {
            listItem.classList.add('active');
        }
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="playlist-song-art">
            <div class="playlist-song-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>
        `;
        listItem.addEventListener('click', () => {
            currentSongIndex = originalIndex;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage();
            updatePlaylistActive();
        });
        playlistSongs.appendChild(listItem);
    });
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredSongs = songs.filter(song => 
            song.title.toLowerCase().includes(searchTerm)
        );
        renderPlaylist(filteredSongs);
    });
}

function updatePlaylistActive() {
    const playlistItems = playlistSongs.querySelectorAll('li');
    playlistItems.forEach((item, index) => {
        if (index === currentSongIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Search toggle functionality
function initSearchToggle() {
    const searchToggleBtn = document.getElementById('searchToggleBtn');
    const leftSidebar = document.querySelector('.left-sidebar');
    const leftSidebarIcon = document.querySelector('.left-sidebar-icon');
    
    searchToggleBtn.addEventListener('click', () => {
        leftSidebar.classList.toggle('active');
    });
    
    leftSidebarIcon.addEventListener('click', () => {
        leftSidebar.classList.remove('active');
    });
}

function init() {
    renderSongList();
    renderPlaylist();
    initNavigation();
    initSearch();
    initSearchToggle();
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Music";
        playerTrackTitle.textContent = "No Song";
        playerTrackArtist.textContent = "Add a song";
        lyricsContainer.innerHTML = "<p>Please add songs from the list.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value;
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage();
}

init();