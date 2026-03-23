import Image from "next/image";
import Link from "next/link";

import InfoBox from "@/app/components/InfoBox/InfoBox";

import TwoColumnLayout from "../components/TwoColumnLayout/TwoColumnLayout";

const Page = () => (
  <main className="w-full">
    <TwoColumnLayout
      sideBarContent={
        <div className="flex flex-col md:flex-row-reverse md:items-start lg:flex-col">
          <InfoBox
            lines={[
              { label: "Name", value: "Kenner Toys" },
              { label: "Founded", value: "1947" },
              { label: "Pages", value: "12" },
            ]}
          />
          <p className="w-full md:w-1/2 lg:w-full mt-8 md:mt-0 lg:mt-8 md:mr-8 italic">
            Kenner Products was a toy company founded in 1947 in Cincinnati,
            Ohio. It became famous for producing the original Star Wars action
            figures and many other popular toy lines throughout the 20th
            century.
          </p>
        </div>
      }
    >
      <h1>History of Kenner Toys</h1>

      <p>
        The story of Kenner Products is one of the most influential chapters in
        the history of the modern toy industry. From modest beginnings in the
        1940s to its transformation into the powerhouse behind some of the most
        iconic action figures ever produced, Kenner played a decisive role in
        shaping how toys were marketed, designed, and collected. While the
        company produced many well-known toys across decades, its golden
        era—from the late 1970s through the mid-1990s—defined the action figure
        category and helped establish the template for licensed toy lines that
        still dominates today.
      </p>

      <h2>Early Years (1940s–1960s)</h2>
      <p>
        Kenner was founded in 1947 in Cincinnati, Ohio by brothers Albert
        Steiner and Phillip Steiner. The company’s name came from Kenner Street,
        the location of their early factory. In its early years Kenner focused
        on relatively simple toys—craft kits, chalk drawing sets, and novelty
        products—rather than highly engineered toys.
      </p>
      <p>
        Kenner gained early recognition for products like Easy‑Bake Oven,
        introduced in 1963. Using a light bulb as a heating element, the toy
        allowed children to bake small cakes safely at home and became one of
        the most successful toys of the decade. Kenner also released other
        memorable toys during this period, including Spirograph, a drawing toy
        that produced intricate geometric patterns.
      </p>
      <p>
        During this period Kenner established a reputation for clever product
        design and effective marketing. In 1967 the company was acquired by the
        food conglomerate General Mills, which provided financial stability and
        broader distribution channels. This acquisition would prove crucial in
        the company’s ability to secure major entertainment licenses in the
        following decade.
      </p>
    </TwoColumnLayout>
  </main>
);

export default Page;
