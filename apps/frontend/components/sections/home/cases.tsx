import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Cases_Home = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Use Cases</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>For Individuals</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Track crypto, stocks, and other personal financial activities</li>
                                <li>Manage transactions via a clear and user-friendly interface</li>
                                <li>Get insights into your financial health and investment performance</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>For Companies</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Automate expense tracking by integrating TransacEase into your infrastructure</li>
                                <li>Reduce time spent on custom financial management solutions</li>
                                <li>Gain better visibility into company-wide expenses and financial trends</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default Cases_Home