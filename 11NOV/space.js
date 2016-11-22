function space() {
    this.x = 0;
    this.y = 0;
    this.width = 20;
    this.height = 20;
    this.rotate = 0;
    this.showFlame = 0;
}
space.prototype.draw = function(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotate);
    ctx.strokeStyle = "#fff";
    ctx.moveTo(10, 0);
    ctx.lineTo(-10, 10);
    ctx.lineTo(-5, 0);
    ctx.lineTo(-10, -10);
    ctx.lineTo(10, 0);
    ctx.closePath();
    ctx.stroke();
    if (this.showFlame) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = "#f69";
        ctx.moveTo(-7.5, -5);
        ctx.lineTo(-15, 0);
        ctx.lineTo(-7.5, 5);
        ctx.stroke();
        ctx.restore()
    }
    ctx.restore();
}
