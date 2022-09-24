// ==UserScript==
// @name         Remove_Live
// @name:zh-CN   去除B站直播间播放器
// @namespace    https://github.com/Zhihui412
// @version      1.0
// @description  去除B站多余的直播播放器（滑稽）
// @author       hiuzh
// @include      https://live.bilibili.com/*
// @license      AGPL-3.0
// @icon         https://www.google.com/s2/favicons?sz=64&domain=git-scm.com
// ==/UserScript==

(() => {
    "use strict";
    //去除播放器的开关
    let VEnable = window.localStorage.getItem("VEnable") === "true";
    if (VEnable) {
        setTimeout(() => {
            document.getElementById("live-player").remove();
        }, 3000);
    }
    let btnArea = document.querySelector(".right-ctnr");
    let btn = document.createElement("button");
    btn.id = "removeLive";
    btn.textContent = VEnable ? "恢复播放器" : "移除播放器";
    btn.addEventListener("click", () => {
        VEnable = !VEnable;
        window.localStorage.setItem("VEnable", VEnable);
        btn.textContent = VEnable ? "恢复播放器" : "移除播放器";
        if (VEnable) {
            document.getElementById("live-player").remove();
        } else {
            window.location.reload();
        }
    });
    btnArea.insertBefore(btn, btnArea.children[0]);
})();