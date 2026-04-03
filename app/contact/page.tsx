import Image from "next/image";

import ContactForm from "../components/ContactForm/ContactForm";
import OneColumnLayout from "../components/OneColumnLayout/OneColumnLayout";

const Page = () => (
  <OneColumnLayout>
    <h1>Get in touch</h1>

    <p>Feedback, suggestions, and inquiries are welcome!</p>

    <ContactForm />
  </OneColumnLayout>
);

export default Page;
