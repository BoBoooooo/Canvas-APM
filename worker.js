let animationWorker = null;
self.onmessage = function(e) {
  console.log('worker', e.data);
  switch (e.data.msg) {
    case 'start':
      if (!animationWorker) {
        importScripts('./animation.js');
        animationWorker = new Animation(e.data.canvas.getContext('2d'));
      }
      animationWorker.start();
      break;
    case 'stop':
      animationWorker.stop();
      break;
  }
};