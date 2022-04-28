const pokemons = [
    {
        thumbnail: 'img/001.png',
        id:'N°01' ,
        name: 'bulbasaur',
        type: ['plant', 'poison']
    },
    {
        thumbnail: 'img/002.png',
        id:'N°02',
        name: 'charmander',
        type: ['fire']
    },
    {
        thumbnail: 'img/003.png',
        id:'N°03',
        name: 'caterpie',
        type: ['bug']
    },
    {
        thumbnail: 'img/004.png',
        id:'N°04',
        name: 'kaluna',
        type: ['bug', 'poison']
    },
    {
        thumbnail: 'img/005.png',
        id:'N°05',
        name: 'ratata',
        type: ['plant']
    },
    {
        thumbnail: 'img/006.png',
        id:'N°06',
        name: 'pikachu',
        type: ['normal']
    },
    {
        thumbnail: 'img/007.png',
        id:'N°07',
        name: 'vulpix',
        type: ['fire', 'plant']
    },
    {
        thumbnail: 'img/008.png',
        id:'N°08',
        name: 'jigglypuff',
        type: ['normal', 'fairy']
    },
    {
        thumbnail: 'img/009.png',
        id:'N°09',
        name: 'ice',
        type: ['fairy']
    },
    {
        thumbnail: 'img/010.png',
        id:'N°10',
        name: 'ground',
        type: ['electrical']
    },
    {
        thumbnail: 'img/011.png',
        id:'N°11',
        name: 'ghost',
        type: ['poison']
    },
    {
        thumbnail: 'img/012.png',
        id:'N°12',
        name: 'deer',
        type: ['fire']
    },
    {
        thumbnail: 'img/013.png',
        id:'N°13',
        name: 'dark',
        type: ['fairy']
    },
    {
        thumbnail: 'img/014.png',
        id:'N°14',
        name: 'stell',
        type: ['normal', 'electrical']
    },
    {
        thumbnail: 'img/015.png',
        id:'N°15',
        name: 'cat',
        type: ['fire']
    },
    {
        thumbnail: 'img/016.png',
        id:'N°16',
        name: 'rock',
        type: ['fairy', 'poison']
    },
];

//logo withoutHTML//////////////////////////////////////////////////////////////
/*const mainLogo = document.createElement('div');
mainLogo.id = 'logo';
document.body.append(mainLogo);
const titleLogo = document.createElement ('img');
titleLogo.className = 'pokemontitle';
titleLogo.src = 'img/pokemon_logo.png';
mainLogo.appendChild(titleLogo);
const ballLogo = document.createElement ('img');
ballLogo.className = 'pokeball';
ballLogo.src = 'img/pokeball.PNG';
mainLogo.appendChild(ballLogo);*/
//section///////////////////////////////////////////////////////////////////////
const mainSection = document.querySelector('.mainSection');

for (var i=0; i<pokemons.length; i++){

    const pokemoncontainer = document.createElement ('div');
    pokemoncontainer.className = 'container';
    mainSection.appendChild(pokemoncontainer);
    
    const imgContainer = document.createElement ('div');
    imgContainer.className = 'background-img';
    pokemoncontainer.appendChild(imgContainer);
    
    const image = document.createElement ('img');
    image.className = 'content-img';
    imgContainer.appendChild(image);
    image.src = pokemons[i].thumbnail;
    
    const number = document.createElement ('span');
    number.className = 'pokemonNumber';
    pokemoncontainer.appendChild(number);
    number.innerHTML = pokemons[i].id +"<br>";
    
    const name = document.createElement ('span');
    name.className = 'pokemonName';
    pokemoncontainer.appendChild(name);
    name.innerHTML = pokemons[i].name +"<br>";
    
    for (var j=0; j<pokemons[i].type.length; j++){
        const bt1 = document.createElement ('button');
        bt1.className = pokemons[i].type[j] +' '+ 'pokemonButton';
        pokemoncontainer.appendChild(bt1);
        bt1.innerHTML = pokemons[i].type[j];
    }
}



/*function capitalize(s){
    return s[0].toUpperCase() + s.slice(1);
}
console.log(capitalize(pokemons))*/