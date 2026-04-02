import Image from "next/image";

import ContactForm from "../components/ContactForm/ContactForm";
import OneColumnLayout from "../components/OneColumnLayout/OneColumnLayout";

const Page = () => (
  <OneColumnLayout>
    <h1>About ActionToyGuide.com</h1>

    <p>
      <Image
        src="/we-really-do-care.webp"
        alt="We really do care"
        width={300}
        height={400}
        className="float-right ml-8 mb-8 border-8 border-white"
      />
      The idea for ActionToyGuide.com is one I toyed (pun intended!) around with
      for ages, without really acting on it. I have been collecting vintage
      action figures and toys basically my whole life, and the products from
      Kenner hold a special place for me. The Action Toy Guides are a key
      element of Kenner history and collecting, and every fan knows about them,
      and have probably flicked through them endlessly, crossing out wants and
      haves. So the purpose of this small website is simply to combine my
      fondness for Kenner toys with my skills in web development and provide a
      resource for the collecting community to browse and enjoy these pack-in
      catalogs in one, collected place.
    </p>

    <p>
      In order to build the website, I first registrered the domain name and
      then headed to eBay to obtain a complete collection, as I had none in my
      possession. Luckily, they are not that difficult to come by. I believe, I
      have sourced every variant - but please let me know if any are missing
      from the archive! Next step was to scan and edit each individual page, a
      pretty arduous process for 400+ pages, I might add.
    </p>
    <p>
      While no major changes to the site are planned, small tweaks are
      implemented when necessary, and I always welcome feedback and suggestions.
    </p>
    <p>Enjoy!</p>
  </OneColumnLayout>
);

export default Page;
