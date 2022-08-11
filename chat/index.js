const chatWidget = document.getElementsByClassName('chat-widget')[0]
const chatWidgetInput = document.getElementById('chat-widget__input')
const chatWidgetMessages = document.getElementById('chat-widget__messages')

const answers = [
    'Пошли вон!',
    'Дураки',
    'Козлы',
    'Какашки'
]

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active')
})

document.addEventListener('keypress', event => {
    if(event.key === 'Enter') {
        const random = Math.floor(Math.random() * answers.length)

        chatWidgetMessages.innerHTML += `<div class="message message_client">
            <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
            <div class="message__text">
                ${chatWidgetInput.value}
            </div>
        </div>`

        chatWidgetInput.value = ''

        chatWidgetMessages.innerHTML += `<div class="message">
            <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
            <div class="message__text">
                ${answers[random]}
            </div>
        </div>`
    } 
})