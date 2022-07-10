const myForm = document.querySelector('#myForm').addEventListener('submit', e => {
    e.preventDefault();
});

const inpFile = document.querySelector('#inpFile');
const sumbmit_btn = document.querySelector('#upload-btn')

sumbmit_btn.addEventListener('click', Upload);



function Upload(){
    const endpoint = 'server.php';
    const formData = new FormData();


    formData.append('inpFile', inpFile.files[0]);

    fetch(endpoint, {
        method: 'post',
        body: formData
    }).catch(console.error);

}