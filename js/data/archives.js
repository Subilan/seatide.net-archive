let available_stage = [null, 1, 2];
let archives = [null];
// 世界存档
let world = "";
// 模组包
let modpack = "";
// 简单整合包
let pack = ""
for (let i = 1; i < available_stage.length; i++) {
    let k = available_stage[i];
    let prefix = "http://seatide.oss-cn-beijing.aliyuncs.com/archive/stage-" + k + "/";
    world = prefix + "world.7z";
    modpack = prefix + "modpack.7z";
    pack = prefix + "pack-latest.7z";
    archives.push({world, modpack, pack});
}

var template = document.getElementById("button-template");
var list = document.getElementById("download-list");
var button = [];
for (let i = 1; i < available_stage.length; i++) {
    let cn_num = TransformToChinese(i);
    let world = archives[i].world;
    let modpack = archives[i].modpack;
    let pack = archives[i].pack;
    button[i] = template.cloneNode(false);
    list.appendChild(button[i]);
    button[i].innerText = "周目" + cn_num;
    button[i].onclick = () => {
        mdui.dialog({
            title: cn_num + "周目数据下载",
            content: `
            <div class="mdui-typo mdui-theme-accent-amber">
                <ul>
                    <li><a target="_blank" href="${world}">世界</a></li>
                    <li><a target="_blank" href="${modpack}">模组包</a></li>
                    <li><a target="_blank" href="${pack}">整合包</a></li>
                </ul>
            </div>`,
            buttons: [
                {
                    text: "OK"
                }
            ]
        })
    }
    button[i].style.display = "block"
}