const audio = $('#audio');
const songs = [
    { label: 'Virao', src: '../assets/01 Virao.mp3', comments: [] },
    { label: 'Pa que no me puedas olvidar', src: '../assets/02 Pa que no me puedas olvidar.mp3', comments: [] },
    { label: 'Te quiero de colores', src: '../assets/03 Te quiero de colores.mp3', comments: [] },
    { label: 'Tanto swing', src: '../assets/04 Tanto swing.mp3', comments: [] },
    { label: 'Aunque sea poco', src: '../assets/05 Aunque sea poco.mp3', comments: [] }
]

let index = 0;
$('#playbutton').addEventListener('click', function(){
    if(audio.paused){
        $('#playbutton').innerHTML = "pause"
        audio.play();
    } else {
        $('#playbutton').innerHTML = "play_arrow"
        audio.pause();
    }
})

// Prev song
$('#backbutton').addEventListener('click', prevSong)
$('#nextbutton').addEventListener('click', nextSong)
audio.addEventListener("ended", nextSong);
$('#form').addEventListener('submit', onSubmit);


// Funciones
function $(str, parent = document){
    return parent.querySelector(str)
}

function nextSong(){
    index++;
    if(index === songs.length){
        index = 0;
    }
    play();
}

function prevSong(){
    if(!index){
        index = songs.length-1;
    } else {
        index--;
    }
    play();
}

function play(){
    $('#songtitle').innerHTML = songs[index].label;
    $('#playbutton').innerHTML = "pause"
    audio.src = songs[index].src;
    audio.play();
    viewComments();
}

function onSubmit(e){
    e.preventDefault();

    songs[index].comments.push($('#comment').value)
    $('#comment').value = '';

    viewComments();
}

function viewComments(){
    $('#comments').innerHTML = songs[index].comments.reduce(function(acc, comment){
        return acc += `
        <div class="my-m">
            <span>${comment}</span>
        </div>`
    }, '')
                            
}