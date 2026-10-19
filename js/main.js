window.addEventListener("load", async () => {
  InputHandler.init();

  const game = new Game();
  await game.start();

  const menuOverlay     = document.getElementById("menu-overlay");
  const pauseOverlay    = document.getElementById("pause-overlay");
  const gameOverButtons = document.getElementById("game-over-buttons");
  const pauseBtn        = document.getElementById("pause-btn");
  const startBtn        = document.getElementById("start-btn");
  const retryBtn        = document.getElementById("retry-btn");
  const menuBtn         = document.getElementById("menu-btn");
  const levelButtons    = document.querySelectorAll(".level-btn");

  const pauseContinueBtn = document.getElementById("pause-continue-btn");
  const pauseRestartBtn  = document.getElementById("pause-restart-btn");
  const pauseMenuBtn     = document.getElementById("pause-menu-btn");

  let selectedLevel = 0;

  function selectLevel(idx) {
    selectedLevel = idx;
    levelButtons.forEach(b => {
      b.classList.toggle("selected", parseInt(b.dataset.level) === idx);
    });
  }
  selectLevel(0);

  levelButtons.forEach(btn => {
    btn.addEventListener("click", () => selectLevel(parseInt(btn.dataset.level)));
  });

  game.notifyUI = () => {
    menuOverlay.classList.toggle("hidden", !game.inMenu);
    pauseOverlay.classList.toggle("hidden", !game.paused);
    gameOverButtons.classList.toggle("hidden", !(game.gameOver && !game.inMenu));
    pauseBtn.classList.toggle("hidden", game.inMenu || game.introMode || game.paused || game.gameOver);
  };

  startBtn.addEventListener("click", () => {
    game.startFromMenu(selectedLevel);
  });

  retryBtn.addEventListener("click", () => game.retryLevel());
  menuBtn.addEventListener("click", () => {
    game.returnToMenu();
    selectLevel(game.currentLevelId);
  });

  pauseContinueBtn.addEventListener("click", () => game.unpause());
  pauseRestartBtn.addEventListener("click", () => game.retryLevel());
  pauseMenuBtn.addEventListener("click", () => {
    game.returnToMenu();
    selectLevel(game.currentLevelId);
  });

  pauseBtn.addEventListener("click", () => game.togglePause());

  // НОВОЕ: авто-пауза при уходе со вкладки / потере фокуса окна
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) game.pauseOnBlur();
  });
  window.addEventListener("blur", () => game.pauseOnBlur());

  game.notifyUI();
});