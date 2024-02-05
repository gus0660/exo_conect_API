document.querySelector('#fetch_dog').addEventListener('click', () => {
    console.log(fetch('https://random.dog/woof.json'))
})