const request = new XMLHttpRequest()

const lyrics = document.getElementById('lyrics')

resquest.open(
  'GET',
  "https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime"
)

resquest.onreadystatechange = function() {
  if(this.readyState === 4 && this.status === 200){
    const data = JSON.parse(this.responseText)["lyrics"]
    lyrics.innerHTML = '<h2>Lyrics</h2> <p>${data}</p>'
  }
}

request.send()