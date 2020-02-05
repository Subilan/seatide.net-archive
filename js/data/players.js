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
    shixiaobinya: 3,
    iry: 3,
    yanshuqi: 3,
    sakura_ling: 3,
    ceshi: 5,
    xiuyan_: 3,
    minecommandercn: 2,
    jacen_pvp: 2,
    drlee_lihr: 2,
    a_dish: 2,
    tanker: 2,
    "9527": 2,
    qiaol: true,
    subilan: true,
    sapherise: true,
    cropenfe: true,
}

Object.freeze(player_wishes, whitelist, exist_players);