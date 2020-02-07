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
    shixiaobinya: 5,
    iry: 5,
    yanshuqi: 5,
    sakura_ling: 5,
    ceshi: 5,
    xiuyan_: 4,
    minecommandercn: 4,
    jacen_pvp: 4,
    drlee_lihr: 4,
    a_dish: 4,
    tanker: 4,
    "9527": 4,
    qiaol: true,
    subilan: true,
    sapherise: true,
    cropenfe: true,
    remind_z: true,
    sakura_white: 5,
    satorilong: 2,
    lingyu_chao: 2,
}

Object.freeze(player_wishes, whitelist, exist_players);