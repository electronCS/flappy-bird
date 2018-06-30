function Pipe()
{
    this.gap = 160;
    this.top = this.gap * 0.5 + random(height - 2 * this.gap);

    //this.bottom = random(height/2);
    this.x = width;
    this.w = 50;
    this.highlight = false;
    this.passed = 0;
    this.vel = 2;

    this.show = function()
    {
        fill(0, 255, 0);
        if (this.highlight)
            fill(255, 0, 0);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, this.top + this.gap, this.w, height - this.top - this.gap)
        //rect(this.x, height - this.bottom, this.w, this.bottom);
    }

    this.hit = function(bird)
    {
        var s = 22;
        if (bird.y - s/2 < this.top || bird.y + s/2 > this.top + this.gap)
        {
            if (bird.x > this.x - s/2 && bird.x < this.x + this.w + s/2)
            {
                this.highlight = true;
                this.passed = -1;
                return true;
            }
        }
        this.highlight = false;
        return false;
    }

    this.update = function()
    {
        this.x -= this.vel;

    }

}
