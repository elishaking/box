const art = document.getElementById("art");

setInterval(() => {
  art.style.height = art.style.height === "0vh" ? "50vh" : "0vh";
}, 700);
