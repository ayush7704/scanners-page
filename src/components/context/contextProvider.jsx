import { globaldata } from "./context";
import menu_qr from '../../assets/scanners/mannu_dhaba_menu_qr.png'
import payment from '../../assets/cardimgs/payment.png'
import paymentQR from '../../assets/scanners/paymentQR3.png'
import feedback from '../../assets/scanners/mannu_dhaba_feedback_qr.png'
import wifiQR from '../../assets/scanners/Mannu_Dhaba_WiFi_QR.png'
import wifi from '../../assets/cardimgs/freewifi.png'
import menuIMG from '../../assets/cardimgs/menu.png'
import feedIMG from '../../assets/cardimgs/feed.png'

const cardsData = [
    {cardName:"menu",subline:"Scan to view our menu",steps:["Open Google Lens or a QR code scanner app on your phone.","Scan the QR code.","Tap the link that appears to view our menu online."],scannner_img:menu_qr,imgs:[menuIMG]},
    {cardName:"free wifi",subline:"Stay Connected – Scan for Free Wi-Fi!",steps:["Open wifi or Google Lens or a QR code scanner app.","Scan the QR code.","Connect & share your meal with friends online."],scannner_img:wifiQR,imgs:[wifi]},
    {cardName:"feedback",subline:"Scan to Share Your Experience",steps:["Open Google Lens or a QR code scanner app.","Point it at the QR code to scan.", "Access our feedback form and share your experience."],scannner_img:feedback,imgs:[feedIMG]},
    {cardName:"payment",subline:"Scan to Complete Your Payment",steps:["Open your preferred UPI app (Google Pay, PhonePe, Paytm) or any other..","Scan the payment QR code on this page.",`Verify the Receiver: ("Manohar nagar").`,"Confirm payment and show to Manager."],scannner_img:paymentQR,imgs:[payment]},
]

function ContextProvider({children}){
return(
    <globaldata.Provider value={{cardsData}}>
        {children}
    </globaldata.Provider>
)
}
export default ContextProvider