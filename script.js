function populateCubes() {
  document.getElementById('cube-area').innerHTML = '';
  let rows = parseInt(document.getElementById('rows').value);
  let columns = parseInt(document.getElementById('columns').value);

  const sizeX = 400.0 / rows;
  const sizeY = 400.0 / columns;

  const totalCubes = rows * columns;

  for (let i = 0; i < totalCubes; i++) {
    let background = Math.floor(Math.random() * 16777215).toString(16);

    document.getElementById(
      'cube-area'
    ).innerHTML += `<div style="width:${sizeX}px; height:${sizeY}px;background:#${background}"> </div>`;
  }
}