import Navbar from "@components/Navbar";

export default function LoginLayout({children}){
    return(
        <html lang="en">
        <body style={{
            background:'url(/assets/bg.png)',
            backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw',
        }}>
            {children}
        </body>
        </html>
    )

}