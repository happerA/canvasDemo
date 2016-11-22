function arrow() {
    this.x = 0;
    this.y = 0;
    this.rotate = 0;
    this.color = '#f00';
}
arrow.prototype.draw = function(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotate);
    ctx.lineWidth = 5;
    ctx.fillColor = this.color;
    ctx.beginPath();
    ctx.moveTo(-50, -25);
    ctx.lineTo(0, -25);
    ctx.lineTo(0, -50);
    ctx.lineTo(50, 0);
    ctx.lineTo(0, 50);
    ctx.lineTo(0, 25);
    ctx.lineTo(-50, 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}
