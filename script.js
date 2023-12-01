onReady();

function onReady() {
  console.log('Javascript is working!');
}

function addFire(){
  console.log('fire button clicked');
  const fireDiv = document.getElementById('emojiBlock');
  fireDiv.innerHTML += '<div>🔥</div>'
}

function addIce(){
  console.log('ice button clicked');
  const fireDiv = document.getElementById('emojiBlock');
  fireDiv.innerHTML += '<div>❄️</div>'
}

function submitInfo(event) {
  // check info in event
  // console.log('submit clicked', event);
  // console.log('affirmation text', affirmation.value)

  let comment = document.getElementById('affirmation').value;
  let person = document.getElementById('author').value;

  tablePath = document.getElementById('tableBody')
  tablePath.innerHTML += `<tr><td>${comment}</td><td>${person}</td><td><button onclick="deleteInfo(event)">❌</button></td></tr>`;
  event.preventDefault()
}

function deleteInfo(event) {
  // Console log to find path to correct node of entire row data
  // console.log('test', event.target.parentNode.parentNode)
  
  event.target.parentNode.parentNode.remove();

  event.preventDefault()
}