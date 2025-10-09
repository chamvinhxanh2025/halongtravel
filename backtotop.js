// Khi cuộn xuống 200px thì hiện nút
window.addEventListener("scroll", function () {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 200) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

// Khi bấm thì cuộn mượt lên đầu
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
