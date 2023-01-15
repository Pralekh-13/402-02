function showImage() {
    var text=document.getElementById("mainDiv")
   var  temp=document.createElement("h2")
   var temptext=document.createTextNode("Image element Added")

   temp.appendChild(temptext)
   text.appendChild(temp)

   var Img=document.createElement("img")
   Img.src="./Geekster.png"
   Img.style.width="10px;"
   text.appendChild(Img)
}
