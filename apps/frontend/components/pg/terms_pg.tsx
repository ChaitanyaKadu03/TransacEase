"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart3 } from "lucide-react"
import Header_Home from "../sections/home/header"
import Footer_Home from "../sections/home/footer"

export default function Terms_Pg() {
    const [expandedItem, setExpandedItem] = useState<string | null>(null)

    const terms = [
        {
            title: "1. Terms",
            content: "By accessing the website at https://www.transacease.com, you are agreeing to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws."
        },
        {
            title: "2. Use License",
            content: "Permission is granted to temporarily download one copy of the materials (information or software) on TransacEase's website for personal, non-commercial transitory viewing only."
        },
        {
            title: "3. Disclaimer",
            content: "The materials on TransacEase's website are provided on an 'as is' basis. TransacEase makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
        },
        {
            title: "4. Limitations",
            content: "In no event shall TransacEase or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TransacEase's website, even if TransacEase or a TransacEase authorized representative has been notified orally or in writing of the possibility of such damage."
        },
        {
            title: "5. Accuracy of Materials",
            content: "The materials appearing on TransacEase's website could include technical, typographical, or photographic errors. TransacEase does not warrant that any of the materials on its website are accurate, complete or current. TransacEase may make changes to the materials contained on its website at any time without notice."
        },
        {
            title: "6. Links",
            content: "TransacEase has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TransacEase of the site. Use of any such linked website is at the user's own risk."
        },
        {
            title: "7. Modifications",
            content: "TransacEase may revise these Terms and Conditions for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions."
        },
        {
            title: "8. Governing Law",
            content: "These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
        }
    ]

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header_Home />

            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-center">Terms and Conditions</h1>
                        <Card className="mx-auto max-w-4xl">
                            <CardContent className="p-6">
                                <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                                <p className="mb-6">
                                    Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the
                                    TransacEase website and service operated by TransacEase, Inc. ("us", "we", or "our").
                                </p>
                                <Accordion type="single" collapsible value={expandedItem!} onValueChange={setExpandedItem}>
                                    {terms.map((term, index) => (
                                        <AccordionItem key={index} value={`item-${index}`}>
                                            <AccordionTrigger>{term.title}</AccordionTrigger>
                                            <AccordionContent>{term.content}</AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>

            <Footer_Home />
        </div>
    )
}