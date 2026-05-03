import{a as d,S as p,i as a}from"./assets/vendor-C9cvWQx7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="34651867-a9ff37d4e5e76304c6c99ac31",g="https://pixabay.com/api/";function y(s){return d.get(g,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:n,comments:f,downloads:m})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${i}" alt="${e}" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${t}</p>
          <p class="info-item"><b>Views:</b> ${n}</p>
          <p class="info-item"><b>Comments:</b> ${f}</p>
          <p class="info-item"><b>Downloads:</b> ${m}</p>
        </div>
      </a>
    </li>`).join("");c.innerHTML=r,b.refresh()}function S(){c.innerHTML=""}function q(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",P);function P(s){s.preventDefault();const r=s.currentTarget,i=r.elements["search-text"]?r.elements["search-text"].value.trim():"";if(i===""){a.warning({message:"Please enter a search query!"});return}S(),q(),y(i).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{a.error({message:"Something went wrong. Please try again later."}),console.error(o)}).finally(()=>{w(),u.reset()})}
//# sourceMappingURL=index.js.map
