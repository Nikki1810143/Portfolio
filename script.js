window.onload = () => {
  // Hide the loading screen after the page has loaded
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  }, 2000); // 2 seconds delay for the loading screen
}