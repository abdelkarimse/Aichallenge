class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }
    this.state = false;
    this.messages = [];
}

display() {
    const {openButton, chatBox, sendButton} = this.args;

    this.prompt(chatBox)

    openButton.addEventListener('click', () => this.toggleState(chatBox))

    sendButton.addEventListener('click', () => this.onSendButton(chatBox))

    const node = chatBox.querySelector('input');
    node.addEventListener("keyup", ({key}) => {
        if (key === "Enter") {
            this.onSendButton(chatBox)
            
        }
    })
}

prompt(chatbox) {
    this.messages.push({ name: "Bot", message: "I am Bot, and I can help answer your simple queries." });
    this.updateChatText(chatbox)
}

toggleState(chatbox) {
    this.state = !this.state;

    if(this.state) {
        chatbox.classList.add('chatbox--active')
    } else {
        chatbox.classList.remove('chatbox--active')
    }
}

onSendButton(chatbox) {
    var textField = chatbox.querySelector('input');
    let text1 = textField.value
    if (text1 === "") {
        return;
    }

    let msg1 = { name: "User", message: text1 }
    this.messages.push(msg1);


    fetch('/predict', {
        method: 'POST',
        body: JSON.stringify({ message: text1 }),
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(r => r.json())
      .then(r => {
        let msg2 = { name: "Bot", message: r.answer };
        this.messages.push(msg2);
        this.updateChatText(chatbox)
        textField.value = ''

    }).catch((error) => {
        console.error('Error:', error);
        this.updateChatText(chatbox)
        textField.value = ''
      });
}

updateChatText(chatbox) {
    var html = '';
    this.messages.slice().reverse().forEach(function(item) {
        if (item.name === "Bot")
        {
            html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
        }
        else
        {
            html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
        }
      });

    const chatmessage = chatbox.querySelector('.chatbox__messages');
    chatmessage.innerHTML = html;
}
}

window.addEventListener('scroll', function() {
    var scrollValue = window.scrollY;
    var scrollImg = document.querySelector('.scroll-img');
  
    // Calculate the amount of transformation based on scroll position
    var transformValue = 'perspective(10px)'; 
    
    // Apply the transformation to the image
    scrollImg.style.transform = transformValue;
  });
  var lastScrollTop = 0;

  var lastScrollTop = 0;
  var headerSection = document.querySelector('.header_section');
  var button = document.querySelector('.chatbox__button button');
  
 var lastScrollTop = 0;
var headerSection = document.querySelector('.header_section');
var button = document.querySelector('.chatbox');

window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > 200) { // Check if scroll position is greater than 10 pixels
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            headerSection.classList.remove('fixed');
            button.classList.add('hidden');
        } else {
            // Scrolling up
            headerSection.classList.add('fixed');
            button.classList.remove('hidden');
        }
    }   
    else{
        headerSection.classList.add('fixed');


    }

    lastScrollTop = currentScroll; // Update last scroll position
}, false);

  

  

const chatbox = new Chatbox();
chatbox.display();