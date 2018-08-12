const drumkit = (function(){
  const keys          = document.querySelectorAll('.dk-key');
  const volume        = document.querySelector('.dk-volume--trigger');
  const volumeFill    = document.querySelector('.dk-volume--fill');
  const volumeUnfill  = document.querySelector('.dk-volume--unfill');
  const volumeWidth   = volume.offsetWidth;

  let volumePercentageValue = 100;
  let staticVolumeValue = 100;

  const eventHandler = ({ keyCode }) => {
    const audio = document.querySelector(`audio[data-key="${keyCode}"`);
    const key = document.querySelector(`.dk-key[data-key="${keyCode}"`)
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    audio.volume = staticVolumeValue / 100;
    key.classList.add('dk-playing');
  };

  function removeTransition ({ propertyName }) {
    if (propertyName !== 'transform') return;

    this.classList.remove('dk-playing');
  };

  const keysEventSet = (keys) => {
    if (!keys) return;

    keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
  };

  const volumeCoords = ({ offsetX }) => {
    volumePercentageValue = offsetX * 100 / volumeWidth; // convert to percentage formula
  };

  const setVolumeBorderRadius = () => {
    if (volumeFill.offsetWidth >= 249) {
      volumeFill.style.borderTopRightRadius = '7px';
      volumeFill.style.borderBottomRightRadius = '7px';
    } else {
      volumeFill.style.borderTopRightRadius = '0px';
      volumeFill.style.borderBottomRightRadius = '0px';
    }

    if (volumeUnfill >= 249) {
      volumeUnfill.style.borderTopLeftRadius = '7px';
      volumeUnfill.style.borderBottomLeftRadius = '7px';
    } else {
      volumeUnfill.style.borderTopLeftRadius = '0px';
      volumeUnfill.style.borderBottomLeftRadius = '0px';
    }
  }

  const volumeEventSet = (volume) => {
    if (!volume) return;

    volume.addEventListener('mousemove', volumeCoords);

    volume.addEventListener('mousedown', () => {
      staticVolumeValue = volumePercentageValue;

      volumeFill.style.width = `${volumePercentageValue}%`;
      volumeUnfill.style.width = `${100 - volumePercentageValue}%`;
      volumeUnfill.style.left = `${volumePercentageValue}%`;

      setVolumeBorderRadius();
    });

  };

  const init = () => {
    keysEventSet(keys);
    volumeEventSet(volume);
  
    setVolumeBorderRadius();
    
    window.addEventListener('keydown', eventHandler);
  };

  init();
}())