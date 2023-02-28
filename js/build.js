const blocks = document.getElementsByClassName("block");

var storage = window.localStorage;

$(document).ready(function() {

    Save();
    ShowHomeList();
    
    $(".block").click(function(){
        ClearBlockGray();
        
        $(this).addClass("selected-block");

        let saveHTML = document.getElementById("block-div").innerHTML;
        storage.setItem("build-save", saveHTML);
    })

});

function ClearBlockGray(){
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        $(block).removeClass("selected-block");
    }
}

function CreateWorld(){
    let a = 0;
    let b = 1;
    let c = 2;
    let d = 3;
    let e = 1;
    let f = 2;
    let g = 3;

    for (let i = 0; i < 4; i++) {

        let block = document.createElement("img");
        block.src = "./img/Blocks/grass.png";
        block.style.height = "10vh";
        block.style.position = "absolute";
        block.style.top = `${i * 5.25}vh`;
        block.style.left = `50%`;
        block.style.transform = "translate(-50%, -50%)";
        block.style.zIndex = a;
        block.classList.add("block");

        let blockDiv = document.createElement("div");
        blockDiv.classList.add("block-div");
        $(blockDiv).append(block);

        $(".blocks").append(blockDiv);
        a += 2;
    }

    for (let i = 0; i < 3; i++) {

        let block = document.createElement("img");
        block.src = "./img/Blocks/grass.png";
        block.style.height = "10vh";
        block.style.position = "absolute";
        block.style.top = `${i * 5.25 + 2.625}vh`;
        block.style.left = `50%`;
        block.style.transform = "translate(-5%, -50%)";
        block.style.zIndex = b;
        block.classList.add("block");
        let blockDiv = document.createElement("div");
        blockDiv.classList.add("block-div");
        $(blockDiv).append(block);

        $(".blocks").append(blockDiv);
        b += 2;
    }

    for (let i = 0; i < 2; i++) {

        let block = document.createElement("img");
        block.src = "./img/Blocks/grass.png";
        block.style.height = "10vh";
        block.style.position = "absolute";
        block.style.top = `${i * 5.25 + 5.25}vh`;
        block.style.left = `50%`;
        block.style.transform = "translate(40%, -50%)";
        block.style.zIndex = c;
        block.classList.add("block");
        let blockDiv = document.createElement("div");
        blockDiv.classList.add("block-div");
        $(blockDiv).append(block);

        $(".blocks").append(blockDiv);
        c += 2;
    }

    for (let i = 0; i < 1; i++) {

        let block = document.createElement("img");
        block.src = "./img/Blocks/grass.png";
        block.style.height = "10vh";
        block.style.position = "absolute";
        block.style.top = `${i * 5.25 + 7.875}vh`;
        block.style.left = `50%`;
        block.style.transform = "translate(85%, -50%)";
        block.style.zIndex = d;
        block.classList.add("block");
        let blockDiv = document.createElement("div");
        blockDiv.classList.add("block-div");
        $(blockDiv).append(block);

        $(".blocks").append(blockDiv);
        d += 2;
    }

    for (let i = 0; i < 3; i++) {

        let block = document.createElement("img");
        block.src = "./img/Blocks/grass.png";
        block.style.height = "10vh";
        block.style.position = "absolute";
        block.style.top = `${i * 5.25 + 2.625}vh`;
        block.style.left = `50%`;
        block.style.transform = "translate(-95%, -50%)";
        block.style.zIndex = e;
        block.classList.add("block");
        let blockDiv = document.createElement("div");
        blockDiv.classList.add("block-div");
        $(blockDiv).append(block);

        $(".blocks").append(blockDiv);
        e += 2;
    }

    for (let i = 0; i < 2; i++) {

        let block = document.createElement("img");
        block.src = "./img/Blocks/grass.png";
        block.style.height = "10vh";
        block.style.position = "absolute";
        block.style.top = `${i * 5.25 + 5.25}vh`;
        block.style.left = `50%`;
        block.style.transform = "translate(-140%, -50%)";
        block.style.zIndex = f;
        block.classList.add("block");
        let blockDiv = document.createElement("div");
        blockDiv.classList.add("block-div");
        $(blockDiv).append(block);

        $(".blocks").append(blockDiv);
        f += 2;
    }

    for (let i = 0; i < 1; i++) {

        let block = document.createElement("img");
        block.src = "./img/Blocks/grass.png";
        block.style.height = "10vh";
        block.style.position = "absolute";
        block.style.top = `${i * 5.25 + 7.875}vh`;
        block.style.left = `50%`;
        block.style.transform = "translate(-185%, -50%)";
        block.style.zIndex = g;
        block.classList.add("block");
        let blockDiv = document.createElement("div");
        blockDiv.classList.add("block-div");
        $(blockDiv).append(block);

        $(".blocks").append(blockDiv);
        g += 2;
    }

}

function Save(){
    
    //Get save
    let save = storage.getItem("build-save");

    //If there is an unsaved world, create a new world.
    if(save == null){
        CreateWorld();

        let blocks = document.getElementById("block-div");
        let saveHTML = blocks.innerHTML;
        storage.setItem("build-save", saveHTML);
    } else {
        let saveHTML = storage.getItem("build-save");
        let blocks = document.getElementById("block-div");
        $(blocks).append(`${saveHTML}`);
    }

}

function ShowHomeList(){
    //Create home-list bar dynamic
    for (let i = 1; i < 8; i++) {
        $(".homes").append(`
            <div class="home-div">
                <img src="./img/Houses/house${i}.png" alt="">
                <button onclick="BuildHome('./img/Houses/house${i}.png')">BUILD</button>
            </div>
        `)
    }
}

function BuildHome(uri){

    if($(".selected-block").parent().hasClass("builded")){

    } else {

        let home = document.createElement("img");

        home.src = uri;
        home.style.height = "5vh";
        home.style.position = "absolute";
        home.style.zIndex = $(".selected-block").css('z-index') + 8;
        home.style.top = $(".selected-block").css('top');
        home.style.left = $(".selected-block").css('left');
        home.style.transform = $(".selected-block").css('transform') + "translate(50%, -15%)";

        $(".selected-block").parent().append(home);
        $(".selected-block").parent().addClass("builded");
        
    }

    let saveHTML = document.getElementById("block-div").innerHTML;
    storage.setItem("build-save", saveHTML);

}
