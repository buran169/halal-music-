function openPage(page) {
  window.location.href = page;
}

document.getElementById("search").addEventListener("keyup", function(e) {
  if (e.key === "Enter") {
    alert("Searching: " + e.target.value);
  }
});
