const outPuts = document.querySelectorAll('.controls input')
outPuts.forEach(output => output.addEventListener('change', handleUpdate))

function handleUpdate(){
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)     
 }

 