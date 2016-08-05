import style from '../css/index.styl';
import Whitewater from './vendor/whitewater.js';
import whichAnimationEvent from './utils/which-animation-event';

class App {
  constructor() {
    this.animationComplete = false;
    this.videoLoaded = false;
    this.video = document.getElementById('background-video');
    this.videoContainer = document.querySelectorAll('.background')[0];
    this.loader = document.querySelector('.loader');
    this.enterSiteButton = document.querySelector('.enter-site');
    const animationEvent = whichAnimationEvent();
    this.enterSiteButton.addEventListener(animationEvent, () => {
      this.animationComplete = true;
      this.revealIfReady();
    }, false);
    var md = new MobileDetect(window.navigator.userAgent);
    if (!md.mobile()) {
      this.initHTML5Video();
    } else {
      this.video.classList.add("hidden");
      this.initMobileVideo();
    }
  }

  initHTML5Video() {
    this.video.addEventListener("canplay", () => {
      this.videoReady = true;
      this.revealIfReady();
    });
  }

  initMobileVideo() {
    var canvas = document.getElementById('mobile-video');
    var source = '//anthony-howe.s3-accelerate.amazonaws.com/lucea';
    var options = {
        autoplay: true,
        loop: true,
        controls: true
    }
    setTimeout(()=> {this.videoContainer.classList.add("loading")}, 2000);
    new Whitewater(canvas, source, options);
    document.addEventListener('whitewaterload', () => {
      this.videoReady = true;
      this.revealIfReady();
    });
  }

  revealIfReady() {
    if (this.videoReady && this.animationComplete)
      this.revealVideo();
  }

  revealVideo() {
    this.loader.style.display = "none";
    this.videoContainer.classList.remove("loading");
    this.videoContainer.classList.add("loaded");
  }
}

new App();
