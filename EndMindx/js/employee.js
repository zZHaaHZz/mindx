function initEmployeePage() {
    console.log("Employee page loaded ✅");

    // ========== 1️⃣ Render danh sách nhân viên ==========
    const tbody = document.getElementById("employee-body");
    if (tbody) {
        tbody.innerHTML = "";
        for (let i = 1; i <= 12; i++) {
            tbody.innerHTML += `
        <tr class="td-body">
          <td class="td-tbl-emp td-name"><img src="img/avatar.jpg" alt=""><p>Bùi Quang Hà ${i}</p></td>
          <td class="td-tbl-emp td-id">${345321000 + i}</td>
          <td class="td-tbl-emp td-depart">Development</td>
          <td class="td-tbl-emp td-des">JS Developer</td>
          <td class="td-tbl-emp td-type">Office</td>
          <td class="td-tbl-emp td-status"><div class="box-td-stt-permanent">Permanent</div></td>
          <td class="td-tbl-emp td-acction">
            <i class="fa-solid fa-eye"></i>
            <i class="fa-solid fa-pen"></i>
            <i class="fa-solid fa-trash"></i>
          </td>
        </tr>`;
        }
    }

    // ========== 2️⃣ Sự kiện mở / đóng Popup Filter ==========
    const filterBtn = document.querySelector(".fillter");
    const popup = document.getElementById("popup");
    const container = document.querySelector(".main-content-emloyee");
    const closePopup = document.getElementById("closePopup");
    const applyPopup = document.getElementById("applyPopup");

    if (filterBtn && popup && container) {
        filterBtn.addEventListener("click", () => {
            popup.classList.add("show");
            container.style.filter = "blur(6px)";
        });
    }

    if (closePopup) {
        closePopup.addEventListener("click", () => {
            popup.classList.remove("show");
            container.style.filter = "none";
        });
    }

    if (applyPopup) {
        applyPopup.addEventListener("click", () => {
            popup.classList.remove("show");
            container.style.filter = "none";
        });
    }

    // ========== 3️⃣ Nút Add New Employee ==========
    const addBtn = document.querySelector(".btn-add-emloyee");
    if (addBtn) {
        addBtn.addEventListener("click", (e) => {
            e.preventDefault();
            loadPage("./07.html"); // Load trang 07 vào content
        });
    }
}
