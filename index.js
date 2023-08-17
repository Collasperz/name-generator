let fast;
    let p = document.getElementById('gen')
    let btn = document.querySelector('button')
    let mainsound = document.getElementById('music')
    mainsound.volume = "0.5"
    async function generateName() {
      if (!fast) {
        btn.disabled = true
        let spin = document.getElementById('spin')
        spin.play()
        fast = setInterval(generateName, 0)
        setTimeout(function () {
          clearInterval(fast)
          fast = null
          spin.addEventListener('ended', function () {
            btn.disabled = false
          })
        }, 4000)
      }
      let response = await fetch('https://raw.githubusercontent.com/dominictarr/random-name/master/first-names.json')
      let names = await response.json()
      p.innerText = names[Math.floor(Math.random() * names.length)]
    }