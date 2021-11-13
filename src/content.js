function togglePasswords(hideonly=false){
  Array.from(document.getElementsByTagName("input")).forEach(e => {
    if((!hideonly) && e.getAttribute("type") == "password"){
      e.setAttribute("type", "text");
      e.setAttribute("extype", "password");
    }else if(e.getAttribute("extype") == "password"){
      e.setAttribute("type", "password");
      e.setAttribute("extype", "");
    }
  });
}

togglePasswords();

chrome.storage.sync.get("reveal_timeout", (data) => {
  let reveal_timeout = data.reveal_timeout;
  if(reveal_timeout > 0){
    setTimeout(()=>{
      // only hide on timeout
      togglePasswords(true);
    }, reveal_timeout*1000)
  }
});
