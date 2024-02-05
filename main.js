document.querySelector('#fetch_dog').addEventListener('click', async () => {
    
})
function refreshDog() {
    let fetchResult = await fetch('https://random.dog/woof.json')
    let data = await fetchResult.json()
    document.querySelector('#img_dog').src = data.url
}