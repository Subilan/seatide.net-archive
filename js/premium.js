import { CountUp } from "./countUp.min.js";

window.onload = () => {
    let div_Packages = document.getElementById("packages");
    let div_Hero = document.getElementById("hero");

    document.getElementById("continue").onclick = () => {
        div_Hero.style.display = 'none';
        div_Packages.style.display = IsPC() ? 'flex' : 'block';
        if (!IsPC()) div_Packages.classList.add('mobile');
    }

    function IsPC(){  
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
        var flag = true;  
        for (var v = 0; v < Agents.length; v++) {  
            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
        }  
        return flag;  
     }

    let cards = [
        {
            title: "应用能源套餐",
            subtitle: "物资包",
            content: [
                {
                    name: "ME 储存单元 64K",
                    count: 6
                },
                "ME 驱动器",
                "ME 控制器",
                "ME 终端面板",
                "ME 储存<span class='badge'>送电缆</span>"
            ],
            price: 40,
            off_price: 60
        },
        {
            title: "工业助力套餐",
            subtitle: "物资包",
            content: [
                {
                    count: 4,
                    name: "终极混合太阳能"
                },
                "红 MFSU",
                {
                    count: 4,
                    name: "能量水晶"
                },
                {
                    count: 64,
                    name: "碳板"
                },
                {
                    count: 32,
                    name: "玻璃纤维"
                },
                {
                    count: 64,
                    name: "普通电线板"
                },
                {
                    count: 16,
                    name: "高级电线板"
                },
                {
                    add: 6.66,
                    name: "纳米套装"
                }
            ],
            price: 70,
            add_price: 6.66,
            add_price_for: "纳米一套"
        },
    ];

    function createCard(json, index) {
        let list = '内包含\n<ul>';
        for (let i = 0; i < json.content.length; i++) {
            list = list + '<li>' + (typeof json.content[i].add === "number" ? `<span class="accent">+￥${json.content[i].add} 得</span>` : "") + ((typeof json.content[i].count === "number" && typeof json.content[i].add !== "number") ? `<span class="accent">${json.content[i].count}×</span>` : "") + `${typeof json.content[i] === "object" ? json.content[i].name : json.content[i]}</li>`;
        }
        let off_price = typeof json.off_price === "number" ? `<span id="off-price" class="off-num"><del>${json.off_price}</del></span>` : "";
        return `
    <div class="card mdui-shadow-2 mdui-hoverable">
        <div class="card-title">
            <h1 id="card-title" class="main">${json.title}</h1>
            <h2 id="card-subtitle" class="desc">${json.subtitle}</h2>
        </div>
        <div class="mdui-divider"></div>
        <p id="card-content">${list}</p>
        <div class="price-container">
            <span class="price">
                <span class="symbol">￥</span>
                <span id="price" class="num">${json.price}</span>
                ${off_price}
            </span>
        </div>
        <!--<button id="commit-${index}" class="commit-btn mdui-btn mdui-btn-raised mdui-color-theme mdui-btn-icon">
            <i class="mdui-icon material-icons">arrow_forward</i>
        </button>-->
    </div>`;
    }

    let packages_html = "";

    for (let i = 0; i < cards.length; i++) {
        packages_html = packages_html + createCard(cards[i], i);
    }

    div_Packages.innerHTML = packages_html;
}
