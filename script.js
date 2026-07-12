// ===== Dashboard JS =====

// Log that the dashboard loaded
console.log("Dashboard loaded successfully.");


// ===== Simple Notepad System =====

// Create modal elements dynamically
const modal = document.createElement("div");
modal.id = "modal";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.background = "rgba(0,0,0,0.7)";
modal.style.backdropFilter = "blur(3px)";
modal.style.zIndex = "9999";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";

const modalContent = document.createElement("div");
modalContent.style.background = "#1e1e1e";
modalContent.style.padding = "20px";
modalContent.style.borderRadius = "10px";
modalContent.style.width = "90%";
modalContent.style.maxWidth = "600px";
modalContent.style.color = "#fff";

modal.appendChild(modalContent);
document.body.appendChild(modal);


// ===== Notepad UI =====
function openNotepad() {
    modalContent.innerHTML = `
        <h2>Personal Notepad</h2>
        <textarea id="noteArea" style="
            width:100%;
            height:200px;
            background:#121212;
            color:#fff;
            border:1px solid #333;
            border-radius:5px;
            padding:10px;
            resize:none;
        ">${localStorage.getItem("dashboardNote") || ""}</textarea>

        <button id="saveNote" style="
            margin-top:10px;
            padding:10px 20px;
            background:#333;
            color:#fff;
            border:none;
            border-radius:5px;
            cursor:pointer;
        ">Save</button>

        <button id="closeModal" style="
            margin-top:10px;
            margin-left:10px;
            padding:10px 20px;
            background:#555;
            color:#fff;
            border:none;
            border-radius:5px;
            cursor:pointer;
        ">Close</button>
    `;

    modal.style.display = "flex";

    document.getElementById("saveNote").onclick = () => {
        const text = document.getElementById("noteArea").value;
        localStorage.setItem("dashboardNote", text);
        alert("Note saved!");
    };

    document.getElementById("closeModal").onclick = () => {
        modal.style.display = "none";
    };
}


// ===== Tile Click Handling =====
document.querySelectorAll(".tile").forEach(tile => {
    tile.addEventListener("click", (e) => {
        const section = tile.getAttribute("href");

        if (section === "#notes") {
            e.preventDefault();
            openNotepad();
        }
    });
});
