var trash = document.getElementsByClassName('fa-trash');
const colors = document.querySelectorAll('.color');
 // inside the main.js "JSON"
const moods = {
  red: "angry",
  blue: "sad",
  green: "lucky",
  purple: "royal",
  yellow: "happy"
}
//loop throung the length of the array of buttons
for (let i = 0; i < colors.length; i++) {
      // add an event listener for the buttons
  colors[i].addEventListener('click', () => {
    //allows user to chose a color, classList, list of all properties object 1
    //key value pairs
    const userColor = colors[i].classList[1];
    //all the message input values and fills in the inpur. reasigning the value of the input to moods [userColor]
    document.querySelector('.messageInput').value = moods[userColor]
    // fetch request if you want to directly make post request for /messages endpoint
  })
}
//method copies Array instance from an iterable object.
Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const name =
    //text content, represents content of descendants
     this.parentNode.parentNode.childNodes[1].innerText;
    const msg = this.parentNode.parentNode.childNodes[3].innerText;
    fetch('messages', {
      //the head, for the delete functionality
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
      //turns objects to a string
      body: JSON.stringify({
        name: name,
        msg: msg,
      }),
      //then... refreshes the page
    }).then(function (response) {
      window.location.reload();
    });
  });
});
