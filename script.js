fetch('data.csv')
  .then(response => response.text())
  .then(data => {
    const tableBody = document.querySelector('#myTable tbody');
    data.trim().split('\n').forEach(row => {
      const cells = row.split(',');
      const tr = document.createElement('tr');
      cells.forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      });
      tableBody.appendChild(tr);
    });
  });