let inp = document.getElementById("timeoutInput");

function updateValue(){
  let reveal_timeout = parseFloat(inp.value);
  chrome.storage.sync.set({ reveal_timeout });
  document.getElementById("savedlbl").style.opacity = 1;
  setTimeout(()=>{
    document.getElementById("savedlbl").style.opacity = 0;
  }, 500)
}

// document.getElementById("saveButton").addEventListener("click", updateValue);
inp.addEventListener("change", updateValue);

chrome.storage.sync.get("reveal_timeout", (data) => {
  inp.value = data.reveal_timeout;
});