async function loadHTML(id, file) {
  try {
    const element = document.getElementById(id);
    if (!element) throw new Error(`Không tìm thấy phần tử có id="${id}"`);

    const res = await fetch(file);
    if (!res.ok) throw new Error(`Không thể tải file: ${file}`);

    element.innerHTML = await res.text();

    if (id === "siderbar") initSidebarEvents();

    return true;
  } catch (err) {
    console.error(`Lỗi loadHTML(${id}):`, err.message);
  }
}
//load main giao dien
async function loadPage(file) {
  const content = document.getElementById("content-hrms");
  if (!content) return;

  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Không thể tải file: ${file}`);

    content.innerHTML = await res.text();

    // Gọi init phù hợp
    if (file.includes("05.html") && typeof initAttendanceChart === "function") setTimeout(initAttendanceChart, 50);
    if (file.includes("06.html") && typeof initEmployeePage === "function") setTimeout(initEmployeePage, 50);
    if (file.includes("07.html") && typeof initAddEmployeePage === "function") setTimeout(initAddEmployeePage, 50);
    if (file.includes("19.html") && typeof initDepartmentPage === "function") setTimeout(initDepartmentPage, 50);
    if (file.includes("20.html") && typeof initAllDepartmentsPage === "function") setTimeout(initAllDepartmentsPage, 50);
    if (file.includes("21.html") && typeof initAllDepartmentsPage === "function");
  } catch (err) {
    content.innerHTML = `<p style="color:red;padding:20px;">${err.message}</p>`;
  }
}


loadHTML("siderbar", "./site/siderbar.html").then(() => {
  const sidebar = document.getElementById("siderbar");
  if (!sidebar) return;
  loadPage("./05.html");
});
loadHTML("header", "./site/header.html");


function initSidebarEvents() {
  const sidebar = document.getElementById("siderbar");
  if (!sidebar) return;

  sidebar.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    e.preventDefault();

    sidebar.querySelectorAll("li").forEach(li => li.classList.remove("siderbar-active"));
    a.closest("li")?.classList.add("siderbar-active");

    const path = a.getAttribute("href").replace("/", "");
    loadPage(`./${path}.html`);
  });
}

function initDepartmentPage() {
  console.log("Page 19 loaded ✅");

  // Lấy tất cả nút "View All"
  const viewAllBtns = document.querySelectorAll(".viewAlldepartments");

  if (!viewAllBtns.length) {
    console.warn("❌ Không tìm thấy nút View All");
    return;
  }

  // Gắn sự kiện click cho từng nút
  viewAllBtns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(`👉 Click View All ở phòng ${index + 1}`);

      // Có thể truyền tham số vào URL nếu cần, ví dụ:
      // loadPage(`./20.html?dept=${index+1}`);
      loadPage("./alldepartments/20.html");
    });
  });
}
