(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Contact form: validates client-side. Connect a form backend
  // (e.g. Formspree, Netlify Forms or your own endpoint) in sendEnquiry().
  var form = document.getElementById("enquiry-form");
  if (!form) return;

  function sendEnquiry(data) {
    return Promise.resolve(data);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var ok = true;
    form.querySelectorAll("[required]").forEach(function (input) {
      var err = document.getElementById(input.id + "-err");
      var valid = input.checkValidity();
      if (err) err.hidden = valid;
      input.setAttribute("aria-invalid", String(!valid));
      if (!valid) ok = false;
    });
    if (!ok) {
      var first = form.querySelector("[aria-invalid='true']");
      if (first) first.focus();
      return;
    }
    var data = Object.fromEntries(new FormData(form).entries());
    sendEnquiry(data).then(function () {
      var done = document.getElementById("form-done");
      document.getElementById("done-name").textContent = (data.name || "").split(" ")[0] || "there";
      form.hidden = true;
      done.hidden = false;
      done.focus();
    });
  });
})();
