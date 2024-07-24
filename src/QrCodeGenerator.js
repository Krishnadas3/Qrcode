

import React, {useState} from "react";
import QRCode from "qrcode.react";


const QrcodeGenerator = () =>{
    const [text,setText] = useState('')

    const handleChange = (event) =>{
        setText(event.target.value)
    }

    console.log("hello ");

    return(
        <div style={{textAlign: 'center',marginTop: '50px'}}>
            <h1>Qr code Generator</h1>
            <input type="text"
              value={text}
              onChange={handleChange}
              placeholder="enter text here "
              style={{padding: '10px' , fontSize: '16px',width: '300px'}}
            />

            <div style={{marginTop:'20px'}}>
                {text && <QRCode value={text}/>}
            </div>
        </div>
    )
}


export default QrcodeGenerator