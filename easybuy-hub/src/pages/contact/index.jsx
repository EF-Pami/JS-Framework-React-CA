import ContactForm from "../../components/Contact";
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        document.title = "EasyBuy-Hub | contact";
    }, [])

    return (
        <div>
            <ContactForm />
        </div>
    )
}