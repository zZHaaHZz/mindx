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
    if (file.includes("12.html") && typeof initShowEmployeePage === "function") setTimeout(initShowEmployeePage, 50);


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
