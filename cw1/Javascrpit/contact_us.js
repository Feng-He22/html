const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const issueInput = document.querySelector('#issue');
const fileInput = document.querySelector('#file');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = nameInput.value;
  const email = emailInput.value;
  const issue = issueInput.value;
  const file = fileInput.files[0];
  
  const data = {
    name,
    email,
    issue
  };
  
  const text = JSON.stringify(data);
  const timestamp = new Date().getTime();
  const filename = `form-data-${timestamp}.txt`;
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  
  form.reset();
});

