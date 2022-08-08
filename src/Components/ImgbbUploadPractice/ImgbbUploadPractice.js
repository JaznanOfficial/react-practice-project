import React from "react";

const ImgbbUploadPractice = () => {

    const [imgbbUpload, setImgbbUpload] = React.useState({});
    const imghandler = (e) => {
        const image = e.target.files[0];
        setImgbbUpload(image);
    }
console.log(imgbbUpload);

    const imgUploadHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log(formData);
        formData.append('image', imgbbUpload);
        formData.set('key', '892d6fa24f7ab45d358c3ca78bdbd34c')
        fetch('https://api.imgbb.com/1/upload', {
            
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            }
            ).catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Hello This is image upload page</h1>
            <form action="" onSubmit={imgUploadHandler}>
                <input type={"file"} accept="image/*" onChange={imghandler} />
                <input type={"submit"} />
            </form>
        </div>
    );
};

export default ImgbbUploadPractice;
