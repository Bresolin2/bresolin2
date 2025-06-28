function loginAdmin() {
  const pass = document.getElementById('admin-pass').value;
  if (pass === 'admin123') {
    document.getElementById('admin-panel').style.display = 'block';
  } else {
    alert('Senha incorreta');
  }
}
