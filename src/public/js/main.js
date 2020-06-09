const socket = io();

socket.on('new sms', (data) => {
  console.log('Nuevo SmS');

  const smsList = document.getElementById('sms');

  const li = document.createElement('li');
  li.classList = 'list-group-item list-group-item-warning list-group-item-action';

  const paragraph = document.createElement('p');
  paragraph.appendChild(document.createTextNode(data.Body));

  const from = document.createElement('span');
  from.appendChild(document.createTextNode(data.From));

  li.appendChild(paragraph);
  li.appendChild(from);
  smsList.prepend(li);
});
