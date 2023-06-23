import QRCode from 'qrcode.react';
import { QrWrapper, QrWrap } from '@components/QR/styled/index';


const QRCodeGenerator = () => {
const path = 'http://localhost:3001/'; 

    return (
    <QrWrapper>
        <QrWrap>
            <QRCode value={path} size={180}  />
        </QrWrap>
        
    </QrWrapper> 
    );
};

export default QRCodeGenerator;
