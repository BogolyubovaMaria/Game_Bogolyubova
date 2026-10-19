const CONFIG = {
  WINDOW_WIDTH: 1280,
  WINDOW_HEIGHT: 720,
  LEVEL_WIDTH: 2560,

  GRAVITY: -4,
  PLAYER_MOVEMENT_SPEED: 5,
  PLAYER_JUMP_SPEED: 75,
  PLAYER_START_X: 64,
  PLAYER_START_Y: 115,

  PLAYER_START_HEALTH: 2,
  PLAYER_START_SCROLLS: 1,
  PLAYER_MAX_SCROLLS: 2,

  SHIELD_DURATION: 10,
  SHIELD_COOLDOWN_TIME: 1.0,

  ORANGE_SPHERE_SPEED: 9,
  FIREBALL_SPEED: 5,

  ENEMY_ATTACK_COOLDOWN_IN_FRAMES: 140,

  ASSETS_PATH: "img/",
  RECORD_KEY: "flowalive_record",
};

const LEVELS = [
  {
    id: 0,
    name: "Полесье",
    levelWidth: 2560,
    groundEnd: 2800,
    groundGaps: [],
    clouds: [
      [400,120],[520,200],[600,270],[740,340],[870,340],
      [960,200],[1080,300],[1300,200],[1560,300]
    ],
    flowers: [[512,96],[256,96],[768,96],[980,96],[1200,96]],
    enemies: [[2000, 200]],
    scrolls: [[600, 290]],
    crown: [2200, 100],
    playerStart: [64, 115],
  },
  {
    id: 1,
    name: "Небеса",
    levelWidth: 2900,
    groundEnd: 3000,
    groundGaps: [],
    clouds: [
      [400,150],[520,230],[600,300],[740,370],[870,370],
      [1000,300],[1150,370],[1350,300],[1550,370],[1750,300],
      [1950,370],[2150,300],[2350,370]
    ],
    flowers: [[300,96],[512,96],[768,96],[1500,96],[2000,96]],
    enemies: [[1900, 300],[2300, 200]],
    scrolls: [[800, 300],[1600, 300]],
    crown: [2550, 100],
    playerStart: [64, 115],
  },
  {
    id: 2,
    name: "Испытание",
    levelWidth: 3000,
    groundEnd: 3200,
    groundGaps: [],
    clouds: [
      [400,120],[520,200],[650,280],[800,350],
      [950,280],[1100,350],[1250,280],[1400,350],
      [1600,280],[1800,350],[2000,280],[2200,350],[2400,280],[2600,350]
    ],
    flowers: [
      [512,96],[300,96],[768,96],[980,96],[1200,96],
      [1500,96],[1800,96],[2100,96],[2400,96]
    ],
    enemies: [[1900, 300],[2200, 200],[2500, 300]],
    scrolls: [[1100, 300],[1900, 300]],
    crown: [2850, 100],
    playerStart: [64, 115],
  },
];