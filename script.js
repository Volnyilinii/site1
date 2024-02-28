games = ['Cyberpunk 2077', 'Genshin Impact', 'Dota']

let games_list = document.querySelector('.games_list')
for (let i = 0; i < games.length; i += 1) {
   games_list.innerHTML += '<li>' + games[i] + '</li>'
}
