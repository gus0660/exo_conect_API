document.querySelector('#fetch_dog').addEventListener('click', async () => {
    var fetchResult = await fetch('https://random.dog/woof.json')
})