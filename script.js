document.getElementById("learnMoreBtn").addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById("features").offsetTop,
    behavior: "smooth"
  });
});
