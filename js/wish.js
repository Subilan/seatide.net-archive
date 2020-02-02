let input_playerID = document.getElementById("player-id")
let div_getPlayerID = document.getElementById("get-player-id");
let div_showWishAmount = document.getElementById("show-wish-amount");
let span_playerIDDisplay = document.getElementById("player-name");
let span_playerWishAmountDisplay = document.getElementById("wish-amount");
let player_id = "???";
const submit_button = document.getElementById("get-wish");

function fadeIn(HTMLElement) {
    let c = HTMLElement.classList;
    c.add("animated");
    c.add("fast");
    c.add("fadeIn");
}

const main = () => {
    player_id = input_playerID.value.toLowerCase();
    if (!exist_players.includes(player_id)) {
        if (document.querySelectorAll(".mdui-dialog").length === 0) mdui.alert("玩家不存在。");
        return false;
    }
    if (/^[a-zA-Z0-9_]{3,16}$/.test(player_id)) {
        div_getPlayerID.style.display = "none";
        div_showWishAmount.style.display = "grid";
        fadeIn(div_showWishAmount);
        let amount = 0;
        if (typeof player_wishes[player_id] === "number" || player_wishes[player_id] === true) {
            span_playerWishAmountDisplay.classList.add("geq");
            amount = player_wishes[player_id];
        }
        span_playerIDDisplay.innerText = player_id;
        span_playerWishAmountDisplay.innerText = amount === true ? "无限制" : amount;
        return true;
    } else {
        if (document.querySelectorAll(".mdui-dialog").length === 0) mdui.alert("玩家 ID 格式不正确。");
        return false;
    }
}

submit_button.onclick = main;
input_playerID.onkeydown = e => {
    if (e.keyCode === 13) {
        main();
    }
}