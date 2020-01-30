let input_playerID = document.getElementById("player-id")
let div_getPlayerID = document.getElementById("get-player-id");
let div_showWishAmount = document.getElementById("show-wish-amount");
let span_playerIDDisplay = document.getElementById("player-name");
let span_playerWishAmountDisplay = document.getElementById("wish-amount");
let player_id = "???";
const submit_button = document.getElementById("get-wish");

submit_button.onclick = () => {
    player_id = input_playerID.value;
    if (/^[a-zA-Z0-9_]{3,16}$/.test(player_id)) {
        div_getPlayerID.style.display = "none";
        div_showWishAmount.style.display = "grid";
        let amount = 0;
        if (typeof data[player_id] === "number") {
            span_playerWishAmountDisplay.classList.add("geq");
            amount = data[player_id];
        }
        span_playerIDDisplay.innerText = player_id;
        span_playerWishAmountDisplay.innerText = amount;
        
    } else {
        mdui.alert("玩家 ID 格式不正确。");
    }
}