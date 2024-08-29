document.getElementById("btn").addEventListener('click', () => {
    document.getElementById("fi").click();
});

document.getElementById("fi").addEventListener('change', () => {
    const file = event.target.files[0];
    const filePreview = document.querySelector(".filePreview");

    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const fileType = file.type.split('/')[0];
            filePreview.style.display = "block";
            filePreview.innerHTML = ""; 

            if (fileType === 'image') {
                filePreview.innerHTML = `<img src="${e.target.result}" style="max-width: 100%; max-height: 500px;">`;
            } else if (fileType === 'video') {
                filePreview.innerHTML = `<video controls src="${e.target.result}" style="max-width: 100%; max-height: 500px;"></video>`;
            } else if (file.type === 'application/pdf') {
                filePreview.innerHTML = `<iframe src="${e.target.result}" style="width: 100%; height: 500px;"></iframe>`;
            } else {
                filePreview.innerHTML = "Unsupported file type";
            }
        };


        reader.readAsDataURL(file);
    } else {
        filePreview.innerHTML = "No file selected";
    }
});
