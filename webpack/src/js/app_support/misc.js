function readCookie(n) {
  let a = `; ${document.cookie}`.match(`;\\s*${n}=([^;]+)`);
  return a ? a[1] : '';
}

function showCookieBanner(){
  if(!readCookie('cookieBannerDismissed')){
    var banner_wrapper = document.createElement('div');
    banner_wrapper.setAttribute("id", "cookieBanner");
    banner_wrapper.style.cssText = `
      font-size: 0.7rem;
      background-color: #ddd;
      color: #444;
      max-width: 200px;
      padding: 16px;
      position: fixed;
      bottom: 0;
      left: 0;`;

    var banner_text = document.createElement('p');
    banner_text.innerHTML = `
      This website uses cookies to ensure you get the best experience. By continuing to use this site, you are agreeing to our use of cookies.&nbsp;
      <br />
      <a href="/privacy">Learn more</a>`;
    banner_wrapper.appendChild(banner_text);

    var banner_link = document.createElement('a');
    banner_link.innerHTML = `Got it`;
    banner_link.style.cssText = `
      margin-top: 8px;
      padding: 4px;
      border: 1px solid #444;
      display: inline-block;
      cursor: pointer;`;
    banner_link.addEventListener('click', function(){
      document.cookie = "cookieBannerDismissed=true";
      banner_wrapper.style.display = "none";
    })
    banner_wrapper.appendChild(banner_link);

    document.body.appendChild(banner_wrapper);
  }
}

export {readCookie, showCookieBanner};
