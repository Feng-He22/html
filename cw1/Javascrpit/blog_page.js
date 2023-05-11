const messageList = document.querySelector('#message-list');
const messageForm = document.querySelector('#message-form');
const STORAGE_KEY = 'messages';

function getMessagesFromStorage() {
  const messagesJson = localStorage.getItem(STORAGE_KEY);
  return messagesJson ? JSON.parse(messagesJson) : [];
}

function saveMessagesToStorage(messages) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

function displayMessages() {
  messageList.innerHTML = '';
  const messages = getMessagesFromStorage();
  messages.forEach(({ name, message }, index) => {
    const messageItem = document.createElement('div');
    messageItem.classList.add('message-list');
    const messageName = document.createElement('h3');
    messageName.textContent = name;
    const messageContent = document.createElement('p');
    messageContent.textContent = message;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
      messages.splice(index, 1);
      saveMessagesToStorage(messages);
      displayMessages();
    });
    messageItem.appendChild(messageName);
    messageItem.appendChild(messageContent);
    messageItem.appendChild(deleteButton);
    messageList.appendChild(messageItem);
  });
}

  

  function handleMessageSubmit(name, message) {
    const messages = getMessagesFromStorage();
    messages.push({ name, message });
    saveMessagesToStorage(messages);
    messageForm.reset();
    displayMessages();
  }
  
messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const message = document.querySelector('#message').value;
  handleMessageSubmit(name, message);
});

displayMessages();
