let clickProm = new Promise((resolve) => {
  let buttInt = setInterval(() => {
    let sideBtn = document.querySelector(".side-menu__toggle");
    if (sideBtn !== null) {
      clearInterval(buttInt);
      sideBtn.click();
      resolve();
    }
  }, 1000);
});
