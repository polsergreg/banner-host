(function () {
  const banners = [
    {
      image: "https://123reklama.ru/img/1win.png",
      link: "https://your-ad1.com"
    },
    {
      image: "https://123reklama.ru/img/mostbet.png",
      link: "https://your-ad2.com"
    },
    {
      image: "https://123reklama.ru/img/vavada.png",
      link: "https://your-ad3.com"
    }
  ];

  const style = document.createElement("style");
  style.innerHTML = 
    #bottom-banner {
      position: fixed;
      bottom: -200px;
      width: 100%;
      background: #000;
      text-align: center;
      padding: 10px 0;
      z-index: 9999;
      box-shadow: 0 -2px 8px rgba(0,0,0,0.4);
      transition: bottom 0.5s ease-in-out;
    }

    #bottom-banner.show {
      bottom: 0;
    }

    #bottom-banner img {
      max-width: 100%;
      height: auto;
    }

    #close-banner {
      position: absolute;
      top: 5px;
      right: 15px;
      font-size: 24px;
      color: #fff;
      cursor: pointer;
      background: rgba(0,0,0,0.5);
      padding: 2px 8px;
      border-radius: 4px;
    }
  ;
  document.head.appendChild(style);

  const banner = document.createElement("div");
  banner.id = "bottom-banner";
  banner.innerHTML = 
    <a id="banner-link" href="#" target="_blank">
      <img id="banner-image" src="#" alt="Реклама" />
    </a>
    <span id="close-banner">&times;</span>
  ;
  document.body.appendChild(banner);

  const img = document.getElementById("banner-image");
  const link = document.getElementById("banner-link");

  let currentIndex = 0;

  function showBanner(index) {
    img.src = banners[index].image;
    link.href = banners[index].link;
  }

  function rotateBanner() {
    currentIndex = (currentIndex + 1) % banners.length;
    showBanner(currentIndex);
  }

  document.addEventListener("DOMContentLoaded", function () {
    showBanner(currentIndex);
    setTimeout(() => banner.classList.add("show"), 300);
    setInterval(rotateBanner, 10000);
  });

  document.getElementById("close-banner").onclick = () => {
    banner.style.display = "none";
  };
})();
