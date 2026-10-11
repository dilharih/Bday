(() => {
  const openingScene = document.querySelector(".opening-scene");
  const openCurtainsButton = document.querySelector(".open-curtains-button");
  const birthdayStory = document.querySelector("#birthday-story");
  const letterTitle = document.querySelector("#letter-title");
  const wishButton = document.querySelector(".make-a-wish-button");
  const celebrationScene = document.querySelector(".celebration-scene");
  const celebrationStatus = document.querySelector(".celebration-status");
  const finalMessage = document.querySelector("#final-message");
  const confettiLayer = document.querySelector(".confetti-layer");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let curtainIsOpening = false;

  document.body.classList.add("letter-is-visible");
  birthdayStory.setAttribute("inert", "");
  openingScene.hidden = false;
  document.body.classList.add("js-ready");

  function finishOpening() {
    openingScene.classList.add("is-open");
    birthdayStory.removeAttribute("inert");
    letterTitle.focus({ preventScroll: true });
  }

  openCurtainsButton.addEventListener("click", () => {
    if (curtainIsOpening) return;
    curtainIsOpening = true;
    openCurtainsButton.disabled = true;
    openingScene.classList.add("is-opening");

    if (reducedMotion.matches) {
      finishOpening();
      return;
    }

    window.setTimeout(finishOpening, 1900);
  });

  document.querySelectorAll(".wish-card").forEach((card) => {
    const copy = card.querySelector(".wish-copy");
    const prompt = card.querySelector(".wish-prompt");

    card.addEventListener("click", () => {
      const isExpanded = card.getAttribute("aria-expanded") === "true";
      card.setAttribute("aria-expanded", String(!isExpanded));
      copy.hidden = isExpanded;
      prompt.textContent = isExpanded ? "A wish for you" : "Close this wish";
    });
  });

  function releaseConfetti() {
    const colors = ["#c3a46a", "#f3e8d2", "#f4c875", "#84263a"];
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < 34; index += 1) {
      const piece = document.createElement("span");
      const angle = (Math.PI * 2 * index) / 34;
      const distance = 95 + (index % 5) * 23;
      piece.className = "confetti-piece";
      piece.style.setProperty("--confetti-x", `${Math.cos(angle) * distance}px`);
      piece.style.setProperty("--confetti-y", `${Math.sin(angle) * distance + 125}px`);
      piece.style.setProperty("--confetti-rotation", `${(index % 2 ? 1 : -1) * (180 + index * 19)}deg`);
      piece.style.setProperty("--confetti-color", colors[index % colors.length]);
      piece.style.animationDelay = `${(index % 7) * 18}ms`;
      fragment.append(piece);
    }

    confettiLayer.append(fragment);
    window.setTimeout(() => {
      confettiLayer.replaceChildren();
    }, reducedMotion.matches ? 0 : 2200);
  }

  wishButton.addEventListener("click", () => {
    if (wishButton.disabled) return;
    wishButton.disabled = true;
    wishButton.textContent = "Wish made";
    celebrationStatus.textContent = "May it find its way to you.";
    celebrationScene.classList.add("is-celebrating");
    finalMessage.hidden = false;
    releaseConfetti();
  });
})();
