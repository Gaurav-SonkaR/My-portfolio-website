// code of dynamic progress bar

function progress(languageId, max) {
  const progressBar = document.getElementById(languageId);
  let value = parseInt(progressBar.getAttribute("value"));

  const intervalId = setInterval(() => {
    if (value >= max) {
      clearInterval(intervalId);
      return;
    }

    value += 5;
    progressBar.setAttribute("value", value);
  }, 1000);
}

progress("py", 80);
progress("java", 60);
progress("cpp", 60);
progress("c", 60);