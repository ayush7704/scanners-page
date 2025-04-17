import { globaldata } from "./context";
import menu_qr from '../../assets/scanners/mannu_dhaba_menu_qr.png'
import payment from '../../assets/cardimgs/payment.png'
import paymentQR from '../../assets/scanners/paymentQR3.png'
import feedback from '../../assets/scanners/mannu_dhaba_feedback_qr.png'
import wifiQR from '../../assets/scanners/Mannu_Dhaba_WiFi_QR.png'
import wifi from '../../assets/cardimgs/freewifi.png'
import menuIMG from '../../assets/cardimgs/menu.png'
import feedIMG from '../../assets/cardimgs/feed.png'

const WifiIcon = <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20"><g fill="none"><path fill="url(#fluentColorWifi200)" d="M10 6a8.98 8.98 0 0 0-6.95 3.282A1 1 0 1 1 1.507 8.01A10.98 10.98 0 0 1 10 4a10.98 10.98 0 0 1 8.494 4.01a1 1 0 1 1-1.543 1.272A8.98 8.98 0 0 0 10 6"/><path fill="url(#fluentColorWifi201)" d="M5.25 11.334A5.99 5.99 0 0 1 10 9c1.932 0 3.651.912 4.75 2.334a1 1 0 0 0 1.582-1.223A7.99 7.99 0 0 0 10 7a7.99 7.99 0 0 0-6.333 3.11a1 1 0 0 0 1.583 1.224"/><path fill="url(#fluentColorWifi202)" d="M7.488 13.359A3 3 0 0 1 10 12c1.05 0 1.974.539 2.512 1.359a1 1 0 1 0 1.673-1.096A5 5 0 0 0 10 10a5 5 0 0 0-4.185 2.263a1 1 0 1 0 1.673 1.096"/><path fill="url(#fluentColorWifi203)" d="M10 16.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"/><defs><radialGradient id="fluentColorWifi200" cx="0" cy="0" r="1" gradientTransform="matrix(0 -11 15.3509 0 10 15)" gradientUnits="userSpaceOnUse"><stop offset=".114" stop-color="#8B52F4"/><stop offset="1" stop-color="#EA71EF"/></radialGradient><radialGradient id="fluentColorWifi201" cx="0" cy="0" r="1" gradientTransform="matrix(0 -11 15.3509 0 10 15)" gradientUnits="userSpaceOnUse"><stop offset=".114" stop-color="#8B52F4"/><stop offset="1" stop-color="#EA71EF"/></radialGradient><radialGradient id="fluentColorWifi202" cx="0" cy="0" r="1" gradientTransform="matrix(0 -11 15.3509 0 10 15)" gradientUnits="userSpaceOnUse"><stop offset=".114" stop-color="#8B52F4"/><stop offset="1" stop-color="#EA71EF"/></radialGradient><radialGradient id="fluentColorWifi203" cx="0" cy="0" r="1" gradientTransform="matrix(0 -11 15.3509 0 10 15)" gradientUnits="userSpaceOnUse"><stop offset=".114" stop-color="#8B52F4"/><stop offset="1" stop-color="#EA71EF"/></radialGradient></defs></g></svg>
// cardIcon:WifiIcon

const WifiIcon2 = <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M.69 6.997A17.93 17.93 0 0 1 12 3c4.285 0 8.22 1.497 11.31 3.997L21.425 9.33A14.94 14.94 0 0 0 12 6C8.43 6 5.15 7.248 2.575 9.33zm3.141 3.89A12.95 12.95 0 0 1 12 8a12.95 12.95 0 0 1 8.169 2.886l-1.886 2.334A9.96 9.96 0 0 0 12 11c-2.38 0-4.567.832-6.284 2.22zm3.142 3.89A7.97 7.97 0 0 1 12 13c1.904 0 3.653.665 5.027 1.776l-1.885 2.334A4.98 4.98 0 0 0 12 16c-1.19 0-2.283.416-3.142 1.11zm3.142 3.89A3 3 0 0 1 12 18c.714 0 1.37.25 1.885.666L12 21z"/></svg>

const cardsData = [
    {cardName:"menu",subline:"Scan to view our menu",steps:["Open Google Lens or a QR code scanner app.","Scan the QR code.","Tap the link that pops up to see our menu online."],scannner_img:menu_qr,imgs:[menuIMG]},
    {cardName:"free wifi",subline:"Stay Connected – Scan for Free Wi-Fi!",steps:["Open WiFi, Google Lens, or a QR scanner app.","Scan the QR code.","Connect & share your meal with friends online."],scannner_img:wifiQR,imgs:[wifi]},
    {cardName:"feedback",subline:"Scan to Share Your Experience",steps:["Open Google Lens or a QR code scanner app.","Point it at the QR code to scan.", "Access our feedback form and share your experience."],scannner_img:feedback,imgs:[feedIMG]},
    {cardName:"payment",subline:"Scan to Complete Your Payment",steps:["Open your preferred UPI app (Google Pay, PhonePe, Paytm) or any other..","Scan the payment QR code on this page.",`Verify the Receiver name: ("Manohar nagar").`,"Confirm payment and show to Manager."],scannner_img:paymentQR,imgs:[payment]},
]

function ContextProvider({children}){
return(
    <globaldata.Provider value={{cardsData}}>
        {children}
    </globaldata.Provider>
)
}
export default ContextProvider