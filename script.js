const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");
const lists = document.getElementsByClassName("list");

for (list of lists) {
    list.addEventListener("dragstart", function (e) {
        let selected = e.target;

        rightBox.addEventListener("dragover", e => {
            e.preventDefault();
        });
        
        rightBox.addEventListener("drop", e=> {
            e.preventDefault()
            rightBox.appendChild(selected);
            selected = null;
        });

        leftBox.addEventListener("dragover", e => {
            e.preventDefault();
        });
        
        leftBox.addEventListener("drop", e=> {
            e.preventDefault()
            leftBox.appendChild(selected);
            selected = null;
        });
    })
}
