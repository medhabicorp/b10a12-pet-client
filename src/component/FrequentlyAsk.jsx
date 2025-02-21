import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import SectionTitle from "./SectionTitle";

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};
const FrequentlyAsk = () => {



    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <section class="bg-gray-50 dark:bg-gray-900 py-8">
            <div class="w-11/12 mx-auto">
                <div class="text-center mb-10">

                    <SectionTitle
                        heading={"Frequently Asked Questions"}
                        subHeading={"Find quick answers to common questions about our adoption process."}
                    ></SectionTitle>
                </div>
                <div class=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* let Content:*/}
                    <div>
                        {/* box -1  */}
                        <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
                            <AccordionHeader className="text-secondary dark:text-white" onClick={() => handleOpen(1)}>How do I adopt a pet?</AccordionHeader>
                            <AccordionBody >
                                <p className="text-info dark:text-white">Browse pets on our platform, select one, and click "Adopt." Follow the steps provided.</p>
                            </AccordionBody>
                        </Accordion>
                        {/* box-2 */}
                        <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
                            <AccordionHeader className="text-secondary dark:text-white" onClick={() => handleOpen(2)}>
                                What documents are needed for adoption?
                            </AccordionHeader>
                            <AccordionBody>
                                <p className="text-info dark:text-white"> A government-issued ID, proof of residence, and a completed adoption form.</p>
                            </AccordionBody>
                        </Accordion>
                        {/* box-3 */}
                        <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
                            <AccordionHeader className="text-secondary dark:text-white" onClick={() => handleOpen(3)}>
                                How long does the adoption process take?
                            </AccordionHeader>
                            <AccordionBody>
                                <p className="text-info dark:text-white">The process usually takes 2-3 days after submitting all the required documents.</p>
                            </AccordionBody>
                        </Accordion>
                        {/* box-4 */}
                        <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
                            <AccordionHeader className="text-secondary dark:text-white" onClick={() => handleOpen(4)}>
                                Can I adopt more than one pet?
                            </AccordionHeader>
                            <AccordionBody>
                                <p className="text-info dark:text-white"> Yes, you can adopt multiple pets if you meet the adoption criteria.</p>
                            </AccordionBody>
                        </Accordion>
                        {/* box-5 */}
                        <Accordion open={open === 5} animate={CUSTOM_ANIMATION}>
                            <AccordionHeader className="text-secondary dark:text-white" onClick={() => handleOpen(5)}>
                                Is there an adoption fee?
                            </AccordionHeader>
                            <AccordionBody>
                                <p className="text-info dark:text-white"> Yes, the fee covers vaccinations, microchipping, and spaying/neutering.</p>
                            </AccordionBody>
                        </Accordion>

                    </div>

                    {/* <!-- right image--> */}
                    <div class="relative">
                        <div class="rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src="https://i.ibb.co/swzTmFq/image.png"
                                alt="Adopt a pet"
                                class="w-full h-auto"
                            />
                        </div>
                        <div
                            class="absolute inset-0 bg-gradient-to-tr from-primary to-transparent opacity-20 rounded-lg"
                        ></div>
                    </div>


                </div>
            </div>

        </section>

    );
};

export default FrequentlyAsk;