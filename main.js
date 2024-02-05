document.querySelector("#fetch_dog").addEventListener("click", async () => {});
async function refreshDog() {
  let fetchResult = await fetch("https://random.dog/woof.json");
  let data = await fetchResult.json();
  if (data.url.include(".mp4")) {
    refreshDog();
    return;
  }
  document.querySelector("#img_dog").src = data.url;
}
