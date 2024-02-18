const craetName = document.querySelector(".enter-name");
const craetEmail = document.querySelector(".enter-email");
const craetIMG = document.querySelector(".enter-img");
const create = document.querySelector(".button5");
const block = document.querySelector(".block");
task5()
function task5() {
    block.innerHTML = ''
    let task = JSON.parse(localStorage.getItem('task'))||[]
    task.map((el) => {
    block.innerHTML += `
    <div class='block'>
    <p>${el.crtName}</p>
    <p>${el.crtEmail}</p>
    </div>
    `
    })
    
    
}
create.addEventListener("click" ,() => {
    let task = JSON.parse(localStorage.getItem("task")) || []
    let newBlocks1 = {
        id: 1,
        crtName: craetName.value,
        crtEmail: craetEmail.value,
        crtImg: craetIMG.value,
    }
    task.push(newBlocks1);
    localStorage.setItem("task",JSON.stringify(task));
    craetName.value = "";
    craetEmail.value = "";
    craetIMG.value = "";
    task5()
})
