let web_link
try{
  let len = document.querySelectorAll(".s-item__image").length
  for(var i = 0;i<= len-1;i++) {
    web_link=document.querySelectorAll(".s-item__image")[i].firstChild.href;
   if(web_link!=null||web_link!=""||web_link!=undefined){
    chrome.runtime.sendMessage({ href:web_link, recieved: "yes"},response => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(response.html, "text/html");
      let reserved = doc.querySelectorAll(".x-reserve-price>.ux-textspans").length;
      if(reserved!=0){
          console.log(doc.body.getElementsByClassName("x-item-title__mainTitle")[0].innerText);
          console.log("href of reserved not met: "+response.href)
          document.querySelectorAll(`a[href='${response.href}']`)[0].parentElement.parentElement.parentElement.parentElement.style.display="none"
        }
    });
   }
  }
}catch(err){
  console.log(err)
}


