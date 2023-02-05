
document.querySelector(".share-buttons").classList.add("hide");
document.querySelector("button").addEventListener("click", (e) => {
  var imageLink =
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Rail_Business_Days_2022%2C_Plasser_%26_Theurer_EM_100_S%C5%BD_01.jpg",
    downloadSize = 11485374,
    time_start,
    time_end,
    downloadSrc = new Image();
    console.log("hello");

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

    const link = encodeURI("\n"+"https://speedo-chi.vercel.app/");
    const msg = encodeURI(
      "\n" + "Clicking this will also allow you to check your internet speed 👇"
    );
    const dyanamic = totalSpeed + "Mbps";
    const title = encodeURI("My Speed is ");

    const twitter = document.querySelector(".twitter");
    twitter.href = `http://twitter.com/share?&title=${title}&text=${dyanamic}&text=${msg}&url=${link}`;

    document.querySelector(".content").classList.add("add1");
    document.querySelector(".spinner-content").classList.remove("hide");
    document.querySelector(".spinner-content").classList.add("btn2");
    document.querySelector(".spin").classList.add("hide");
    document.querySelector(".content").classList.remove("hide");
   document.querySelector(".share-buttons").classList.remove("hide");


    e.target.innerText = "TRY AGAIN";
  };
});
