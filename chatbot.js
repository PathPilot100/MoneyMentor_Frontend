// Redirect if not logged in
const user = JSON.parse(localStorage.getItem('user'));
if (!user) {
  window.location.href = 'login.html';
}

// Chat functionality (mic removed)
document.querySelector('.send-btn').addEventListener('click', () => {
  const input = document.querySelector('.chat-input input');
  const msg = input.value.trim();
  if (!msg) return;

  const chatBox = document.querySelector('.chat-box');

  const userDiv = document.createElement('div');
  userDiv.className = 'chat user';
  userDiv.textContent = msg;
  chatBox.appendChild(userDiv);

  const botDiv = document.createElement('div');
  botDiv.className = 'chat bot';
  const botIcon = document.createElement('img');
  botIcon.src = 'assets/bot_icon.png';
  botIcon.className = 'bot-icon';
  const botMsg = document.createElement('p');
  botMsg.textContent = "Thinking...";
  botDiv.appendChild(botIcon);
  botDiv.appendChild(botMsg);
  chatBox.appendChild(botDiv);

  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    botMsg.textContent = `Here's a tip: Invest only after clearing debt!`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
});

// Logout
document.querySelector('.logout-btn').addEventListener('click', () => {
  localStorage.removeItem('user');
  window.location.href = 'login.html';
});
