const link = encodeURI("https://speedo-chi.vercel.app/");
const msg = encodeURIComponent(
  "                " +
    "                " +
    "              " +
    "              " +
    "              " +
    "              " +
    "Check your internet speed with just one tap."
);
const dynamic = document.querySelector(".content").innerText;
const title = encodeURIComponent("'SPEEDO'");

const twitter = document.querySelector(".twitter");
twitter.href = `http://twitter.com/share?&title=${title}&text=${msg}&url=${link}&text=${dynamic}`;
