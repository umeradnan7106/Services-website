import Image from "next/image";
import growBetter from "../../../public/images/grow better.jpg";
import conversation from "../../../public/images/Crucial-conversation-scaled.jpg"

export default function OurStory() {
  return (
    <>
      {/* first section */}

      <div className="customize-max-width">
        <div className="customize-max-width flex lg:justify-between py-20 items-center gap-5 flex-wrap justify-center">
          <Image
            src={growBetter}
            alt="grow better"
            className="w-[520px]"
          ></Image>
          <div className="w-[500px]">
            <div className="text-3xl font-semibold py-2">
              Our Mission: Helping Millions of Organizations Grow Better
            </div>
            <div>
              We believe not just in growing bigger, but in growing better. And
              growing better means aligning the success of your own business
              with the success of your customers. Win-win!
            </div>
          </div> 
        </div>

        {/* second section */}

        <div className="customize-max-width flex lg:justify-between py-20 items-center gap-5 flex-wrap justify-center">
          <div className="w-[500px]">
            <div className="text-3xl font-semibold py-2">Our Story</div>
            <div>
              In 2004, fellow MIT graduate students Brian Halligan and Dharmesh
              Shah noticed a major shift in the way people shop and purchase
              products. Buyers did not want to be interrupted by ads, they
              wanted helpful information. In 2006, they founded HubSpot to help
              companies use that shift to grow better with inbound marketing. 
              <br /><br />
              Along the way, HubSpot expanded beyond marketing into a crafted,
              not cobbled suite of products that create the frictionless
              customer experience that buyers expect today. Expertly led by CEO
              Yamini Rangan, HubSpot uses its customer platform built on an
              AI-powered Smart CRM to help millions of scaling organizations
              grow better.
            </div>
          </div>
          <Image
            src={conversation}
            alt="grow better"
            className="w-[520px]"
          ></Image>
        </div>
      </div>
    </>
  );
}
