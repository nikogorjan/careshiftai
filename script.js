/* CareShift — interactions (no backend) */
(function () {
  "use strict";

  /* ---------- Voices (real people from CareShift; quotes framed around the mission) ---------- */
  var voices = [
    {
      name: "Dr. Kymberlee Cox",
      role: "Chief Nursing Officer · Johns Hopkins Hospital",
      initials: "KC",
      color: "#002058",
      quote: "When handoffs are clear and consistent, nurses communicate better, spend less time piecing information together, and get to focus on what actually matters — the patient. That's the change worth fighting for."
    },
    {
      name: "Nadine Williamson",
      role: "Executive Senior Vice President · 1199SEIU United Healthcare Workers East",
      initials: "NW",
      color: "#0e6e76",
      quote: "This is the kind of change healthcare workers truly need — one that respects nurses' expertise, eases the burden, and strengthens communication at the moments that matter most."
    },
    {
      name: "Sara Stone",
      role: "Registered Nurse · Enhabit, Inc.",
      initials: "SS",
      color: "#2b6cb0",
      quote: "Anything that gives nurses back the time we lose to documentation — and protects the details that keep patients safe — has my full support."
    },
    {
      name: "Shannetta Simon, RN",
      role: "Registered Nurse · Children's of Alabama",
      initials: "SS",
      color: "#1ba4af",
      quote: "A handoff should help me organize my thoughts and feel confident that nothing critical is missed — supporting nurses instead of slowing us down. That's clarity, safety, and peace of mind at every shift change."
    },
    {
      name: "Sealena White",
      role: "Assistant Director ESP ITT, Clinical Instructor · Emory Healthcare",
      initials: "SW",
      color: "#4a5568",
      quote: "Handoffs should support sound clinical judgment and help nurses feel confident nothing important is overlooked. When something truly supports how nurses think and work, it has real value at the bedside."
    },
    {
      name: "Jorge Arenivar",
      role: "Case Manager · TIRR Memorial Hermann",
      initials: "JA",
      color: "#0a2f6e",
      quote: "Better handoffs mean information moves cleanly across the whole care team — safer discharges, better coordination, and real continuity of care for the people we serve."
    }
  ];

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* (Voices are rendered by the featured carousel below.) */

  /* ---------- Media: fill photos & videos when a URL is provided ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Photos — any .media-ph with a data-img URL (data-res lifts to bundled blob in standalone)
  document.querySelectorAll(".media-ph[data-img]").forEach(function (el) {
    var rid = el.getAttribute("data-res");
    var url = (rid && window.__resources && window.__resources[rid]) || el.getAttribute("data-img");
    if (url) { el.style.setProperty("--img", 'url("' + url + '")'); el.classList.add("has-img"); }
  });

  // Videos — any .js-video with a data-src URL (autoplay/muted/loop; honors reduced-motion)
  document.querySelectorAll(".js-video").forEach(function (video) {
    var rid = video.getAttribute("data-res");
    var src = (rid && window.__resources && window.__resources[rid]) || video.getAttribute("data-src");
    if (!src) return;
    video.src = src;
    video.classList.add("is-live");
    var ph = video.parentElement.querySelector(".media-ph");
    if (ph) ph.style.display = "none";
    if (reduce) {
      video.removeAttribute("autoplay");
      video.removeAttribute("loop");
      video.addEventListener("loadeddata", function () { video.pause(); });
      video.pause();
    }
  });

  /* ---------- Count-up for stat figures ---------- */
  function animateCount(numEl) {
    if (numEl.dataset.counted) return;
    numEl.dataset.counted = "1";
    var to = parseFloat(numEl.getAttribute("data-to"));
    var dec = parseInt(numEl.getAttribute("data-dec") || "0", 10);
    var suffix = numEl.getAttribute("data-suffix") || "";
    if (isNaN(to)) return;
    if (reduce) { numEl.textContent = to.toFixed(dec) + suffix; return; }
    var dur = 1400, start = null;
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      numEl.textContent = (to * eased).toFixed(dec) + suffix;
      if (p < 1) requestAnimationFrame(frame);
      else numEl.textContent = to.toFixed(dec) + suffix;
    }
    requestAnimationFrame(frame);
  }
  function onReveal(el) {
    var nums = el.querySelectorAll ? el.querySelectorAll(".num[data-to]") : [];
    nums.forEach(function (n) { animateCount(n); });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (r) { r.classList.add("is-in"); onReveal(r); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); onReveal(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (r) { io.observe(r); });

    // Robust fallback: some embedded/preview environments don't deliver
    // IntersectionObserver callbacks on scroll. Reveal anything in view
    // directly on scroll/resize/load so content never stays hidden.
    var revealInView = function () {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      reveals.forEach(function (r) {
        if (r.classList.contains("is-in")) return;
        var rect = r.getBoundingClientRect();
        if (rect.top < vh * 0.92 && rect.bottom > 0) {
          r.classList.add("is-in");
          onReveal(r);
          io.unobserve(r);
        }
      });
    };
    window.addEventListener("scroll", revealInView, { passive: true });
    window.addEventListener("resize", revealInView);
    revealInView();
    setTimeout(revealInView, 300);
  }

  /* ---------- Voices featured carousel ---------- */
  var vFeature = document.getElementById("voicesFeature");
  var vQuote = document.getElementById("vQuote");
  var vAvatar = document.getElementById("vAvatar");
  var vName = document.getElementById("vName");
  var vRole = document.getElementById("vRole");
  var vDots = document.getElementById("vDots");
  var vPrev = document.getElementById("vPrev");
  var vNext = document.getElementById("vNext");
  if (vFeature && vQuote && vDots) {
    var vIndex = 0, vTimer = null;
    voices.forEach(function (v, i) {
      var d = document.createElement("button");
      d.type = "button";
      d.className = "feature__dot" + (i === 0 ? " is-active" : "");
      d.setAttribute("role", "tab");
      d.setAttribute("aria-label", "Voice " + (i + 1) + ": " + v.name);
      d.addEventListener("click", function () { goTo(i, true); });
      vDots.appendChild(d);
    });
    var vDotEls = vDots.querySelectorAll(".feature__dot");

    function render(i) {
      var v = voices[i];
      vQuote.textContent = "\u201C" + v.quote + "\u201D";
      vAvatar.textContent = v.initials;
      vName.textContent = v.name;
      vRole.textContent = v.role;
      vDotEls.forEach(function (d, j) { d.classList.toggle("is-active", j === i); });
    }
    function goTo(i, user) {
      i = (i + voices.length) % voices.length;
      if (i === vIndex) { if (user) restart(); return; }
      vIndex = i;
      if (reduce) { render(i); }
      else {
        vFeature.classList.add("is-switching");
        setTimeout(function () { render(i); vFeature.classList.remove("is-switching"); }, 340);
      }
      if (user) restart();
    }
    render(0);

    vPrev.addEventListener("click", function () { goTo(vIndex - 1, true); });
    vNext.addEventListener("click", function () { goTo(vIndex + 1, true); });

    function start() { if (!reduce && !vTimer) vTimer = setInterval(function () { goTo(vIndex + 1, false); }, 7000); }
    function stop() { if (vTimer) { clearInterval(vTimer); vTimer = null; } }
    function restart() { stop(); start(); }
    [vFeature, document.querySelector(".feature__controls")].forEach(function (z) {
      if (!z) return;
      z.addEventListener("mouseenter", stop);
      z.addEventListener("mouseleave", start);
    });
    start();
  }

  /* ---------- Nav: shadow on scroll + mobile menu ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 8) nav.classList.add("is-stuck");
    else nav.classList.remove("is-stuck");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var toggle = document.getElementById("navToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("show-menu");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("show-menu");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Closing signup card ---------- */
  var submitBtn = document.getElementById("signupSubmit");
  var email = document.getElementById("email");
  var story = document.getElementById("story");
  var err = document.getElementById("signupError");
  var view = document.getElementById("signupView");
  var done = document.getElementById("signupDone");
  var doneMsg = document.getElementById("doneMsg");

  function validEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  }

  if (submitBtn && email) {
    var clearErr = function () {
      err.classList.remove("is-on");
      email.classList.remove("is-invalid");
    };
    email.addEventListener("input", clearErr);

    submitBtn.addEventListener("click", function () {
      if (!validEmail(email.value)) {
        err.textContent = "Please enter a valid email so we can keep you posted.";
        err.classList.add("is-on");
        email.classList.add("is-invalid");
        email.focus();
        return;
      }
      clearErr();
      var first = (document.getElementById("firstName").value || "").trim();
      var hasStory = story && story.value.trim().length > 0;
      var hi = first ? "Thank you, " + first + "." : "Thank you for being part of this.";
      done.querySelector("h3").textContent = hi;
      doneMsg.textContent = hasStory
        ? "We'll keep you posted — and thank you for trusting us with your story. We read every word."
        : "We'll keep you posted as the mission moves forward.";
      view.style.display = "none";
      done.classList.add("is-on");
    });
  }

  /* ---------- FAQ accordion ---------- */
  var faqBtns = Array.prototype.slice.call(document.querySelectorAll(".faq__q"));
  function closeFaq(btn) {
    var panel = btn.nextElementSibling;
    btn.setAttribute("aria-expanded", "false");
    panel.style.height = panel.scrollHeight + "px";
    requestAnimationFrame(function () { panel.style.height = "0px"; });
  }
  function openFaq(btn) {
    var panel = btn.nextElementSibling;
    btn.setAttribute("aria-expanded", "true");
    panel.style.height = panel.scrollHeight + "px";
    var clear = function () { if (btn.getAttribute("aria-expanded") === "true") panel.style.height = "auto"; panel.removeEventListener("transitionend", clear); };
    panel.addEventListener("transitionend", clear);
  }
  faqBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var isOpen = btn.getAttribute("aria-expanded") === "true";
      // one open at a time
      faqBtns.forEach(function (other) {
        if (other !== btn && other.getAttribute("aria-expanded") === "true") closeFaq(other);
      });
      if (isOpen) closeFaq(btn); else openFaq(btn);
    });
  });
  // keep an open "auto" panel correct on resize
  window.addEventListener("resize", function () {
    faqBtns.forEach(function (btn) {
      if (btn.getAttribute("aria-expanded") === "true") btn.nextElementSibling.style.height = "auto";
    });
  });
})();
