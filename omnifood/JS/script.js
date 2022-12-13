console.log("Merhaba Dünya");

const benimAdım = "Hüseyin Bulut";
const h1 = document.querySelector(".ana-başlık");
console.log(benimAdım);
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = benimAdım;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
//   h1.style.transition = "all 0.6s";
// });

//////////////////////////////////////////////////////////

// GEÇERLİ YIL
const yılHt = document.querySelector(".yıl");
const olduğumuzYıl = new Date().getFullYear();
console.log("olduğumuzYıl");
yılHt.textContent = olduğumuzYıl;

//////////////////////////////////////////////////////////

// MOBİL NAV ÇALIŞMASI İÇN

const btnNavHt = document.querySelector(".btn--mobil-nav");
const headerHt = document.querySelector(".header");

btnNavHt.addEventListener("click", function () {
  headerHt.classList.toggle("nav-açık");
});

//////////////////////////////////////////////////////////

// YUMUŞAK KAYDIRMA İÇİN/////

const tümLinkler = document.querySelectorAll("a:link");

tümLinkler.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    //BAŞA DÖNMEK İÇİN  //

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //LİNKLERİN KAYMASI İÇİN ///
    if (href !== "#" && href.startsWith("#")) {
      const sectionHt = document.querySelector(href);
      sectionHt.scrollIntoView({ behavior: "smooth" });
    }

    //MOBİLDE AÇIK NAVİGASYONU KAPATMAK İÇİN//

    if (link.classList.contains("main-nav-link"))
      headerHt.classList.toggle("nav-açık");
  });
});

///////////////////////////////////////////////////////////
// YAPIŞKAN NAV

const bölümHerosuHt = document.querySelector(".bölüm-herosu");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("yapışkan");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("yapışkan");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(bölümHerosuHt);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .liste-öğesi:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .liste-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .teslin-edilenler-yüzleri {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-ikon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .alt-bilgi-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-listesi li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-listesi li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
