const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    // console.log(event);
    insert.innerHTML = `
    <div className="color">
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${event.key === ' ' ? 'Space' : event.key}</td>
      <td>${event.keyCode}</td> 
      <td>${event.code}</td>
    </tr>
  </table>
    </div>`
})