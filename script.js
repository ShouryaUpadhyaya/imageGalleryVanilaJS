let imageInputAll = document.querySelectorAll(".inputFile");
const imageInputOne = document.querySelector(".inputFile");
const addImageCard = document.querySelector("#addImageCard");
const imageCardTemplate = document.querySelector("#imageCardTemplate");
const container = document.querySelector(".container");
let ImageInputCount = 1;

function makeLableForAndIdSame(imageInput) {
  if (!imageInput.dataset.addEventListener) {
    console.log("in makelabke ");
    let label = imageInput.parentNode;
    let id = `inputFile${ImageInputCount}`;
    imageInput.id = id;
    label.setAttribute("for", id);
    imageInput.addEventListener("change", inputFile);
    imageInput.dataset.addEventListener = "true";
    ImageInputCount++;
  }
}
function inputFile(e) {
  let filePath = URL.createObjectURL(e.target.files[0]);
  let imagePath = e.target.parentNode.querySelector("img");
  console.log(`before: ${filePath}, ${imagePath}`);
  imagePath.src = filePath;
  console.log(e.target.parentNode.querySelector("img"));
}
console.log(imageInputAll);
// imageInputAll.forEach(makeLableForAndIdSame);
makeLableForAndIdSame(imageInputOne);
addImageCard.addEventListener("click", (e) => {
  let tempCard = imageCardTemplate.cloneNode(true);
  tempCard.classList.remove("hidden");
  container.removeChild(addImageCard);
  container.appendChild(tempCard);
  container.appendChild(addImageCard);
  let imageInput = tempCard.querySelector(".inputFile");
  console.log(imageInput);
  // imageInputAll.forEach(makeLableForAndIdSame);

  makeLableForAndIdSame(imageInput);
});
