document.getElementById('drop').addEventListener('click', function() {
    var dropdownContainer = document.getElementById('dro');
    if (dropdownContainer.style.display === 'none' || dropdownContainer.style.display === '') {
        dropdownContainer.style.display = 'block';
    } else {
        dropdownContainer.style.display = 'none';
    }
});
document.getElementById('drop1').addEventListener('click', function() {
    var dropdownContainer = document.getElementById('dro1');
    if (dropdownContainer.style.display === 'none' || dropdownContainer.style.display === '') {
        dropdownContainer.style.display = 'block';
    } else {
        dropdownContainer.style.display = 'none';
    }
});
