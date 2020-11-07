function checkParam() {
    var urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has("id")){
        var articleId = urlParams.get("id");
        return articleId;
    } else {
        window.location.href = "index.html";
    }
}

function getArticlebyId(id) {
    var content = "";
    $.ajax({
        type: "GET",
        url: "http://matmacsystemfile.altervista.org/matteovisotto/api/getArticleById.php",
        data: "id="+id,
        dataType: "json",
        success: function (msg) {
            content = msg;
        },
        error: function () {
            content =  null;
        },
        async: false,
    });
    return content;
}

function getAllArticles(){
    var content = "";
  $.ajax({
      type: "GET",
      url: "http://matmacsystemfile.altervista.org/matteovisotto/api/getArticles.php",
      data: "",
      dataType: "html",
      success: function (msg) {
          content = msg;
      },
      error: function () {
          content = null;
      },
      async: false,
  });
  return content;
}

function getHomeArticles(limit) {
    var content = "";
    $.ajax({
        type: "GET",
        url: "http://192.168.64.2/matteovisotto/api/getLimitArticles.php",
        data: "limit="+limit,
        dataType: "html",
        success: function (msg) {
            content = msg;
        },
        error: function () {
            content = null;
        },
        async: false,
    });
    return content;
}
