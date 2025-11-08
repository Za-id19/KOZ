document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navlinks");
  const overlay = document.getElementById("overlay");

  // فتح القائمة
  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  // إغلاق القائمة عند الضغط على الخلفية
  overlay.addEventListener("click", function () {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
  });
});
