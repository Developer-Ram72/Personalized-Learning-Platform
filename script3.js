document.addEventListener('DOMContentLoaded', () => {
    initChat()
})

function initChat() {
    fetch('/api/getStats')
        .then(res => res.json())
        .then(data => {
            document.getElementById('chatBox').innerHTML = `Welcome, ${data.user}! Status: ${data.status}`
        })
        .catch(() => {
            console.log('Error fetching stats')
        })
}

function sendMessage() {
    const userInput = document.getElementById('userInput').value
    if (userInput.trim() === '') return

    displayMessage('You', userInput)
    document.getElementById('userInput').value = ''

    fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
    })
        .then(res => res.json())
        .then(data => {
            displayMessage('Bot', data.reply)
        })
        .catch(() => {
            displayMessage('Bot', 'Error connecting to server.')
        })
}

function displayMessage(sender, message) {
    const chatBox = document.getElementById('chatBox')
    const msgDiv = document.createElement('div')
    msgDiv.textContent = `${sender}: ${message}`
    chatBox.appendChild(msgDiv)
    chatBox.scrollTop = chatBox.scrollHeight
}

function newChat() {
    document.getElementById('chatBox').innerHTML = ''
    initChat()
}

function toggleDropdown() {
    const dropdown = document.getElementById('dropdownContent')
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'
}
