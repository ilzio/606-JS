
document.querySelector('#color').addEventListener('click', function() {
if (document.querySelector('#newonly').checked) {


    if (document.querySelector('#make').value == "Audi") {
    document.querySelector('#color').innerHTML ='<option value="Black">Black</option><option value="Red">Red</option><option value="White">White</option><option value="Silver">Silver</option>';

  } else if (document.querySelector('#make').value == "Ford") {
    document.querySelector('#color').innerHTML = '<option value="Black">Black</option>';

  } else if (document.querySelector('#make').value == "Toyota")
    document.querySelector('#color').innerHTML = '<option value="Black">Black</option><option value="Silver">Silver</option>';
  }
 else {
  document.querySelector('#color').innerHTML ='<option value="Black">Black</option><option value="Red">Red</option><option value="White">White</option><option value="Silver">Silver</option>';
}
});
