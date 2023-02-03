const configs = document.getElementById('configs');
const config = (config, configKey, optionsArray) => {
  const optionsDiv = document.createElement('div');
  const optionTable = document.createElement('table');
  const optTableHead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const tableHeader = document.createElement('th');
  tableHeader.textContent = config;
  optionTable.id = configKey;

  for (let optionNam of optionsArray) {
    let optTr = document.createElement('tr');
    let option = document.createElement('button');
    option.textContent = optionNam;
    optTr.appendChild(option)
    tbody.appendChild(optTr);
  }
  
  optionsDiv.classList.add('config');
  optionsDiv.appendChild(optionTable)
  optionTable.appendChild(optTableHead);
  optTableHead.appendChild(tableHeader);
  optionTable.appendChild(tbody);
  configs.appendChild(optionsDiv);
}

config('Cor de fundo', 'background-color', ['white', 'black', 'green', 'blue', 'yellow']);
config('Cor da fonte', 'color', ['black', 'red', 'white']);
config('Tamanho da fonte', 'font-size', ['8pt', '10pt', '12pt', '14pt', '20pt']);
config('Espaçamento entre as linhas', 'line-height', ['1', 'normal', '1.5', '2.0', '3.0']);
config('Tipo da fonte', 'font-family', ['Arial', 'Times New Roman']);

const buttons = document.getElementsByTagName('button');
const text = document.getElementsByClassName('text')[0];
for (let button of buttons) {
  button.addEventListener('click', (event) => {
    const optValue = event.target.textContent;
    const optKey = event.target.parentNode.parentNode.parentNode.id;
    text.style.cssText += `${optKey}:${optValue};`;
    localStorage.setItem(optKey, optValue);
  });
}

window.onload = () => {
  const tables = document.getElementsByTagName('table');
  for (let key of tables) {
    const value = localStorage.getItem(key.id);
    if (value !== null) {
      text.style.cssText += `${key.id}:${value};`
    }
  }
}