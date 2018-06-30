function Bird()
{
  this.y = height/2;
  this.x = 64;
  this.velocity = 0;
  this.gravity = 0.4;
  this.radius = 16;

  this.show = function()
  {
    fill(255);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }

  this.up = function()
  {
      //this.velocity -= this.gravity * 20;
      this.velocity = -11;
  }

  this.update = function()
  {
      this.y += this.velocity;
      this.velocity += this.gravity;
      this.velocity *= 0.95;

      if (this.y > height)
      {
        this.y = height;
        this.velocity = 0;
      }

      if (this.y < 0)
      {
        this.y = 0;
        this.velocity = 0;
      }
  }
}
