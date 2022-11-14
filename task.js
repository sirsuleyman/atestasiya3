let messagesContainer = document.querySelector('.messagesContainer');

class Message {
    constructor(authorName, messageText) {
        this.authorName = authorName;
        this.time = new Date();
        this.messageText = messageText;
    }

    toString() {
        let hourStr = this.time.getHours() > 9 ? this.time.getHours() : `0${this.time.getHours()}`;
        let minuteStr = this.time.getMinutes() > 9 ? this.time.getMinutes() : `0${this.time.getMinutes()}`;

        return `${hourStr}:${minuteStr} ${this.authorName} : ${this.messageText}`;
    }

    toHtml() {
        let hourStr = this.time.getHours() > 9 ? this.time.getHours() : `0${this.time.getHours()}`;
        let minuteStr = this.time.getMinutes() > 9 ? this.time.getMinutes() : `0${this.time.getMinutes()}`;

        return `<li>${hourStr}:${minuteStr} ${this.authorName} : ${this.messageText}</li>`;
    }
}

class Messenger {
    constructor() {
        this._messages = [];
    }

    show_history() {
        messagesContainer.innerHTML = ''
        for (let i in this._messages) {
            messagesContainer.innerHTML += this._messages[i].toHtml();
        }
    }

    send(author, text) {
        this._messages.push(new Message(author, text));
    }
}

let messenger = new Messenger();
let btn = document.querySelector('#sendBtn');
let author = document.querySelector('#author');
let text = document.querySelector('#text');


btn.addEventListener("click", (e) =>
{
    if(author.value.length !== 0 && text.value.length !== 0  )
    {
        messenger.send(author.value,  text.value);
        messenger.show_history();
     }
    else {
        alert("Not valid message!");
    }
    text.value = '';
})







































// class Message {
//     constructor(name, text) {
//         this.name = name;
//         this.time = new Date();
//         this.text = text;
//     }

//     toString() {
//         let hour = this.time.getHours() > 9 ? this.time.getHours() : `0${this.time.getHours()}`;
//         let minute = this.time.getMinutes() > 9 ? this.time.getMinutes() : `0${this.time.getMinutes()}`;

//         return `${hour}:${minute} ${this.name} : ${this.text}`;
//     }
   
// }

// class Messenger {
//     constructor() {
//         this.messages = [];
//     }

//     show_history() {
//         for (let i = 0; i<this.messages.length; i++) {
//             console.log(this.messages[i].toString());
//         }
//     }

//     send(author, text) {
//         this.messages.push(new Message(author, text))
//     }
//     toHTML(){


//     }

// }

// let messenger = new Messenger()
// messenger.send('Brad Pitt', 'Angelina barisaq bagisla meni')
// messenger.send('Angelina', 'giden gitmisdir. Gitdiyi gun bitmisdir.')
// messenger.send('Brad','bruhhhh');
// messenger.show_history();