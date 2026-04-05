import Link from "next/link";

import Figure from "../components/Figure/Figure";
import OneColumnLayout from "../components/OneColumnLayout/OneColumnLayout";

const Page = () => (
  <OneColumnLayout>
    <h1>About ActionToyGuide.com</h1>

    <Figure
      src="/we-really-do-care.webp"
      alt="We really do care"
      width={300}
      height={400}
      caption="We really do care!"
    />

    <p>
      You have reached <strong>ActionToyGuide.com</strong>, the one-stop
      resource for vintage Kenner action figure pack-in catalogs.
    </p>

    <h2>Site history</h2>

    <p>
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
      While no major changes to the site are planned, small tweaks are
      implemented when necessary, and I always{" "}
      <Link href="/contact">welcome feedback and suggestions</Link>.
    </p>
    <p>Enjoy!</p>

    <h2>Sites we love</h2>

    <p>
      <a
        href="https://www.figurerealm.com/actionfigure"
        target="_blank"
        rel="noopener noreferrer"
      >
        Figure Realm
      </a>
      <br />
      Expansive database of every conceivable action figure line.
    </p>

    <p>
      <a
        href="http://www.theswca.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        The Star Wars Collectors Archive
      </a>
      <br />
      The definitive resource for all things vintage Star Wars collecting.
    </p>

    <p>
      <a
        href="https://commons.wikimedia.org/wiki/File:Kenner_logo.svg"
        target="_blank"
        rel="noopener noreferrer"
      >
        Wikimedia Commons
      </a>
      <br />
      For our awesome Kenner logo.
    </p>
  </OneColumnLayout>
);

export default Page;
