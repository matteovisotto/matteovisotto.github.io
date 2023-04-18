$(window).ready(function() {
   var articleId =  checkParam();
   var articleJSON = getArticlebyId(articleId);
   if(articleJSON != null){
      if(articleJSON != 0) {
         document.getElementById("loadError").hidden = true;
         document.getElementById("articleDiv").hidden = false;
         var obj = JSON.parse(articleJSON);
         fillPage(obj.title, obj.author, obj.date, obj.image, obj.content);
      } else {
         document.getElementById("loadError").hidden = false;
         document.getElementById("articleDiv").hidden = true;
      }
   } else {
      document.getElementById("loadError").hidden = false;
      document.getElementById("articleDiv").hidden = true;
   }
});

function fillPage(title, author, date, image, content){
   document.getElementById("articleTitle").innerText = title;
   document.getElementById("articleAuthor").innerText = author;
   document.getElementById("articleDate").innerText = date;
   document.getElementById("articleImage").src = image;
   document.getElementById("articleContent").innerHTML = content;

}