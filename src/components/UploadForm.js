// import React, {useState} from 'react';
// import ProgressBar from './ProgressBar';
// import './Gallery.css'

// function UploadForm() {

//     const [file, setFile] = useState(null);
//     const [error, setError] = useState(null);
//     const types = ['image/png', 'image/jpg', 'image/jpeg']

//     const changeHandler = (e) => {
//         let selected = e.target.files[0]

//         if (selected && types.includes(selected.type)) {
//             setFile(selected);
//             setError('')
//         } else {
//             setFile(null);
//             setError("select a valid file type");
//         }
//     }
     
    // return (
    //     <div>
    //         <form className="add_image_form">
                {/* <label className="add_image_label"><input type="file" className="add_image_input" onChange={changeHandler} />
                <span>+</span>
                </label> */}
                {/* <div className="output">
                    { error && <div className="error">{ error }</div>}
                    { file && <div className="file">{ file.name }</div>}
                    { file && <ProgressBar file={file} setFile={setFile} />}
                </div>
            </form>
        </div>
    )
}

export default UploadForm; */}