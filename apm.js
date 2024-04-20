let lastTime = performance.now();
let frames = 0;

const loop = () => {
    const currentTime = performance.now();
    frames += 1;
    if (currentTime > 1000 + lastTime) {
        fps = Math.round((frames * 1000) / (currentTime - lastTime));
        frames = 0;
        lastTime = currentTime;
        document.querySelector("#fps").innerText = 'fps:' + fps;

      }
    window.requestAnimationFrame(loop);
}

loop();