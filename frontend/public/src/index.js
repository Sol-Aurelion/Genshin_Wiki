const GenshinCharacters = document.querySelectorAll(".infoTab");
const GenshinName = document.querySelector("#CharacterDataName");
const GenshinWeapon = document.querySelector("#CharacterDataWeapon");
const GenshinImage = document.querySelector(".GenshinImg")

let CharacterElementArray = ["Anemo"];
let CharacterNameArray = ["Jean"];
let CharacterImgArray = ["/frontend/public/image/temp/Jean.jpg"];

GenshinCharacters.forEach((GenshinCharacter, index) =>{
    GenshinCharacter.addEventListener('click', function(){
        GenshinName.innerText = CharacterElementArray[index];
        GenshinWeapon.innerText = CharacterNameArray[index];
        GenshinImage.src = CharacterImgArray[index];
    })
} );