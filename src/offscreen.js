class Offscreen {
    constructor () {
        this.canvas = new OffscreenCanvas(1, 1);
        this.gl = this.canvas.getContext('webgl');
    }

    get width () {
        return this.canvas.width;
    }

    set width (w) {
        this.canvas.width = w;
    }

    get height () {
        return this.canvas.height;
    }

    set height (h) {
        this.canvas.height = h;
    }

    get bitmap () {
        return this.canvas.transferToImageBitmap();
    }
}

export default Offscreen;
