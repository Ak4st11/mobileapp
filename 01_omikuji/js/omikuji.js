"use strict";

window.addEventListener("DOMContentLoaded",
    function () {
        //ページ本体が読み込まれたときにタイミングで実行するコード

        //ヘッダーのテキストエフェクト
        $("header").textillate({
            loop: false,
            minDisplayTime: 2000,
            initialDelay: 2000,
            autoStart: true,
            in: {
                effect: "fadeInLeftBig",
                delayScale: 1.5,
                delay: 50,
                sync: false,
                shuffle: true
            }
        });
        // おみくじボタン(id="btn1") ボヤァと表示させる
        $(function () {
            ScrollReveal().reveal("#btn1", { duration: 9000 });
        });

        this.setTimeout(
            function () {

                //ポップアップメッセージ
                let popMessage = "いらっしゃい！おみくじ引いてって！";
                window.alert(popMessage);
            },
            "5000"
        );


    }, false
);
let soundEndflag = "0"; //sound control
//おみくじボタン
const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");

btn1.addEventListener("click",
    function () {
        // sound control
        if (soundEndflag === "1") {
            soundControl("end", "");
        }

        // let n = Math.floor(Math.random() * 3);

        // switch (n) {
        //     case 0:
        //         btn1.textContent = "Very Happy!!";
        //         btn1.style.color = "#FF0000";
        //         btn1.style.fontSize = "40px"
        //         break;
        //     case 1:
        //         btn1.textContent = "Happy!";
        //         btn1.style.color = "#fff001";
        //         btn1.style.fontSize = "30px"
        //         break;
        //     case 2:
        //         btn1.textContent = "Unhappy...";
        //         btn1.style.color = "#261e1c";
        //         btn1.style.fontSize = "20px"
        //         break;
        // }

        btn1.style.transition = "1s";

        let resultText = ["大吉!!!!!", "吉!!!!", "中吉!!!", "小吉!!", "末吉!", "凶。。"];
        let resultColor = ["#ff0000", "#c71585", "#ff1493", "#ff69b4", "#ff8c00", "#1e90ff",];
        let resultFontSize = ["90px", "80px", "70px", "60px", "50px", "40px"];
        let resultMaxSpeed = [10, 10, 8, 5, 5, 5];
        let resultMaxSize = [30, 30, 20, 15, 20, 20];
        let resultImage = [
            "img/star.png",
            "img/sakura_hanabira.png",
            "img/sakura_hanabira.png",
            "img/sakura_hanabira.png",
            "img/leaf.png",
            "img/snowflakes.png"
        ];
        let resultSound = [
            "sound/omikuji_sound1.mp3",
            "sound/omikuji_sound2.mp3",
            "sound/omikuji_sound2.mp3",
            "sound/omikuji_sound2.mp3",
            "sound/omikuji_sound2.mp3",
            "sound/omikuji_sound3.mp3",
        ];

        let n = Math.floor(Math.random() * resultText.length);
        omikujiText.textContent = resultText[n];
        omikujiText.style.color = resultColor[n];
        omikujiText.style.fontSize = resultFontSize[n];


        //sound control
        w_sound = resultSound[n];
        soundControl("start", w_sound); //サウンド
        soundEndflag = "1";



        //snowfall stop
        $(document).snowfall("clear");
        // jQueryのsnowfall
        $(document).ready(function () {
            $(document).snowfall({
                maxSpeed: resultMaxSpeed[n],
                minSpeed: 1,
                maxSize: resultMaxSize[n],
                minSize: 1,
                image: resultImage[n]
            });
        });



    }, false
);


//sound control
let w_sound
let music
function soundControl(status, w_sound) {
    if (status === "start") {
        music = new Audio(w_sound);
        music.currentTime = 0;
        music.play();
    } else if (status === "end") {
        music.pause();
        music.currentTime = 0;

    }

}

