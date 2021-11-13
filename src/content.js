Array.from(document.getElementsByTagName("input")).forEach(e => {
  if(e.getAttribute("type") == "password"){
    e.setAttribute("type", "text");
    e.setAttribute("extype", "password");
  }else if(e.getAttribute("extype") == "password"){
    e.setAttribute("type", "password");
    e.setAttribute("extype", "");
  }
});
