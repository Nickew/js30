const boxShadow = (function(){
  const controls = document.querySelectorAll('.options input');
  const rangeControls = document.querySelectorAll('.options input[type=range]');

  function handleControls () {
    const suffix = this.dataset.size || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  controls.forEach(el => el.addEventListener('change', handleControls));
  rangeControls.forEach(el => el.addEventListener('mousemove', handleControls));

}())