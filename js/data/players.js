let xhr = new XMLHttpRequest();
let whitelist = {};
let exist_players = [];
xhr.open('get', '/whitelist.json');
xhr.send();
xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE) {
        let json = new String(xhr.responseText);
        whitelist = JSON.parse(json);

        whitelist.forEach(k => {
            exist_players.push(k.name.toLowerCase());
        });
    }
}

let player_wishes = {
    qiaol: true,
    subilan: true,
    sapherise: true,
    cropenfe: true,
    remind_z: true
}

Object.freeze(player_wishes, whitelist, exist_players);
