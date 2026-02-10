const nameForm = document.querySelector('#nameForm');
const userForm = document.querySelector('#userForm');

const handleResponse = async (res) => {
  const content = document.querySelector('#content');

  switch (res.status) {
    case 200:
      content.innerHTML = `<b>Success</b>`;
      break;
    case 201:
      content.innerHTML = `<b>Created</b>`;
      break;
    case 204:
      content.innerHTML = `<b>Updated (No Content)</b>`;
      break;
    case 400:
      content.innerHTML = `<b>Bad Request</b>`;
      break;
    case 404:
      content.innerHTML = `<b>Not Found</b>`;
      break;
    default:
      content.innerHTML = `<b>Error code not implemented.</b>`;
      break;
  }

  const text = await res.text();
  if (text) {
    const data = JSON.parse(text);

    // Mandatory log
     
    console.log(data);

    if (data.message) {
      content.innerHTML += `<p>${data.message}</p>`;
    } else {
      content.innerHTML += `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    }
  }
}

nameForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const url = nameForm.getAttribute('action');
  const method = nameForm.getAttribute('method');

  const name = nameForm.querySelector('#nameField');
  const age = nameForm.querySelector('#ageField');

  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    },
    body: `name=${name.value}&age=${age.value}`,
  });

  handleResponse(res);
});

userForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const url = userForm.querySelector('#urlField').value;
  const method = userForm.querySelector('#methodSelect').value;
  
  const res = await fetch(url, {
    method,
    headers: {
      'Accept': 'application/json',
    },
  });

  handleResponse(res);
});
