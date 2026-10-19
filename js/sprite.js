class Sprite {
  constructor(texture, x = 0, y = 0, scale = 1) {
    this.texture = texture || null;
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.w = this.texture ? this.texture.width  * scale : 32;
    this.h = this.texture ? this.texture.height * scale : 32;
  }
}

class Platform extends Sprite {
  constructor(texture, x, y, scale = 1) {
    super(texture, x, y, scale);
  }
}