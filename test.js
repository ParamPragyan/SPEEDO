document.querySelector("button").addEventListener("click", (e) => {
  var imageLink =
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Rail_Business_Days_2022%2C_Plasser_%26_Theurer_EM_100_S%C5%BD_01.jpg",
    downloadSize = 11485374,
    time_start,
    time_end,
    downloadSrc = new Image();

  document.querySelector(".spinner-content").classList.add("hide");
  document.querySelector(".spin").classList.remove("hide");

  time_start = new Date().getTime();
  var cacheImg = "?nn=" + time_start;
  downloadSrc.src = imageLink + cacheImg;
  //    console.log(downloadSrc);

  downloadSrc.onload = function () {
    //this function will trigger once the image is loads
    time_end = new Date().getTime();
    var timeDuration = (time_end - time_start) / 1000,
      loadedBytes = downloadSize * 8,
      totalSpeed = (loadedBytes / timeDuration / 1024 / 1024).toFixed(2);

    document.querySelector(".content").innerHTML =
      totalSpeed + "<small>Mbps</small>";
    document.querySelector(".content").classList.add("add1");
    document.querySelector(".spinner-content").classList.remove("hide");
    document.querySelector(".spinner-content").classList.add("btn2");
    document.querySelector(".spin").classList.add("hide");
    document.querySelector(".content").classList.remove("hide");
    e.target.innerText = "TRY AGAIN";
  };
});
