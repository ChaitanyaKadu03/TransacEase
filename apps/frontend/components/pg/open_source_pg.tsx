
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart3, Github } from "lucide-react"
import Header_Home from "../sections/home/header"
import Footer_Home from "../sections/home/footer"
import { useRouter } from "next/navigation"
import { useToast } from "../../hooks/use-toast"

export default function Open_Source_Pg() {
    const [expandedItem, setExpandedItem] = useState<string | null>(null)

    const { toast } = useToast()

    const router = useRouter()

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header_Home />

            <main className="flex-1 mt-[10vh] max-sm:mt-[6vh]">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Open Source Contribution</h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-12">
                            Join us in building the future of financial management software. Your contributions make a difference!
                        </p>
                        <Card className="mx-auto max-w-4xl mb-12">
                            <CardContent className="text-left p-6">
                                <Accordion type="single" collapsible value={expandedItem!} onValueChange={setExpandedItem}>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Why Contribute to Open Source?</AccordionTrigger>
                                        <AccordionContent>
                                            Contributing to open source projects allows you to improve your skills, collaborate with others,
                                            and make a positive impact on the software development community. It's also a great way to build
                                            your portfolio and gain recognition in the industry.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>How to Contribute</AccordionTrigger>
                                        <AccordionContent>
                                            <ol className="list-decimal pl-5 space-y-2">
                                                <li>Check out our GitHub repositories</li>
                                                <li>Read our contribution guidelines</li>
                                                <li>Pick an issue to work on or propose a new feature</li>
                                                <li>Fork the repository and create a pull request with your changes</li>
                                                <li>Engage with our community in discussions and code reviews</li>
                                            </ol>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Types of Contributions</AccordionTrigger>
                                        <AccordionContent>
                                            We welcome contributions of all kinds, including:
                                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                                <li>Bug fixes and issue resolutions</li>
                                                <li>New features and enhancements</li>
                                                <li>Documentation improvements</li>
                                                <li>Code optimizations</li>
                                                <li>Test coverage expansions</li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                        <div className="grid gap-8  md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Our GitHub Repositories</CardTitle>
                                    <CardDescription>Explore our open source projects</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button className="w-full" variant="outline" onClick={() => {
                                        router.push("https://github.com/ChaitanyaKadu03/TransacEase")
                                    }}>
                                        <Github className="mr-2 h-4 w-4" />
                                        View on GitHub
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Join Our Community</CardTitle>
                                    <CardDescription>Discuss ideas and get help</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button className="w-full" variant="outline" disabled
                                    // onClick={() => {
                                    //   toast({
                                    //     title: "Uh oh! Something went wrong.",
                                    //     description: "There was a problem with your request.",
                                    //   })
                                    // }}
                                    >
                                        Join Discord Server
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

            <Footer_Home />
        </div>
    )
}