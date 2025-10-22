// ✅ Hàm load file HTML vào phần tử theo id
async function loadHTML(id, file) {
    try {
        const element = document.getElementById(id);
        if (!element) throw new Error(`Không tìm thấy phần tử có id="${id}"`);

        const res = await fetch(file);
        if (!res.ok) throw new Error(`Không thể tải file: ${file}`);

        element.innerHTML = await res.text();

        if (id === "siderbar") initSidebarEvents();

        return true; // Cho phép dùng .then()
    } catch (err) {
        console.error(`Lỗi loadHTML(${id}):`, err.message);
    }
}

//load employee
function attachAddEmployeeEvents(activeIndex = 0) {
  const tabs = document.querySelectorAll(".top-main-content-add-employee p");
  if (tabs.length === 0) return;

  // Set lại active ban đầu
  tabs.forEach((p, i) => {
    p.classList.toggle("top-main-content-add-employee-active", i === activeIndex);
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      const pages = ["07.html", "08.html", "09.html", "10.html"];
      if (pages[index]) {
        loadPage(pages[index], index); // Gọi lại và truyền index active
      }
    });
  });
}

// ✅ Load sidebar trước → sau đó load dashboard mặc định
loadHTML("siderbar", "./site/siderbar.html").then(() => {
    const sidebar = document.getElementById("siderbar");
    if (!sidebar) return;

    // Gắn active cho Dashboard (/05)
    const dashboardLink = sidebar.querySelector('a[href="/05"]');
    if (dashboardLink) {
        dashboardLink.closest("li")?.classList.add("siderbar-active");
    }

    // Load trang Dashboard mặc định
    loadPage("./05.html");
});

// ✅ Load header song song
loadHTML("header", "./site/header.html");


// ✅ Hàm load nội dung trang vào content
async function loadPage(file) {
    const content = document.getElementById("content-hrms");
    if (!content) return;

    try {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Không thể tải: ${file}`);

        content.innerHTML = await res.text();

        // ⬇️ Thêm đoạn này để chạy code riêng cho từng trang
        if (file.includes("05.html")) {
            // Đợi một chút để DOM render xong
            setTimeout(() => {
                if (typeof initAttendanceChart === "function") {
                    initAttendanceChart();
                } else {
                    console.warn("⚠️ Hàm initAttendanceChart chưa được định nghĩa hoặc chưa load chart.js");
                }
            }, 50);
        }
        if (file.includes("06.html")) {
            setTimeout(() => {
                if (typeof initEmployeePage === "function") {
                    initEmployeePage();
                } else {
                    console.warn("⚠️ Hàm initEmployeePage chưa được load (employee.js)");
                }
            }, 50);
        }
        attachAddEmployeeEvents();

    } catch (err) {
        content.innerHTML = `<p style="color:red;padding:20px;">${err.message}</p>`;
    }
}



// ✅ Gắn sự kiện click sidebar
function initSidebarEvents() {
    const sidebar = document.getElementById("siderbar");
    if (!sidebar) return;

    sidebar.addEventListener("click", (e) => {
        const a = e.target.closest("a");
        if (!a) return;
        e.preventDefault();

        // Xóa active cũ
        sidebar.querySelectorAll("li").forEach(li =>
            li.classList.remove("siderbar-active")
        );

        // Thêm active mới
        a.closest("li")?.classList.add("siderbar-active");

        // Lấy file tương ứng "/05" → "05.html"
        const path = a.getAttribute("href").replace("/", "");
        loadPage(`./${path}.html`);
    });
}

