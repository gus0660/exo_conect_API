document.querySelector('#fetch_dog').addEventListener('click', async () => {
    let fetchResult = await fetch('https://random.dog/woof.json')
    let data = await fetchResult.json()
    console.log(data)
})