async function LoadHTML(id, file) {
    try{
        const ele = document.getElementById(id);
        const res = await fetch(file);
        if(!res.ok) throw new Error(`Khong the tai xuong ${file}`);
        ele.innerHTML = await res.text(); 
    }
    catch (err){
        console.log(err);
    }
}
LoadHTML("header", "pages/head.html")