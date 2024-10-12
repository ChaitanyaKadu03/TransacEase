"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header_Home from "../sections/home/header"
import Footer_Home from "../sections/home/footer"

export default function About_Pg() {
    const [activeTab, setActiveTab] = useState("mission")

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header_Home />

            <main className="flex-1 mt-[10vh] max-sm:mt-[6vh]">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">About TransacEase</h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-12">
                            Simplifying financial management for individuals and businesses alike.
                        </p>
                        <Card className="mx-auto max-w-4xl">
                            <CardContent className="p-6">
                                <Tabs value={activeTab} onValueChange={setActiveTab}>
                                    <TabsList className="grid w-full grid-cols-3">
                                        <TabsTrigger value="mission">Our Mission</TabsTrigger>
                                        <TabsTrigger value="team">Our Team</TabsTrigger>
                                        <TabsTrigger value="values">Our Values</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="mission" className="mt-6">
                                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                                        <p>
                                            TransacEase was founded in 2023 with a simple mission: to make financial management accessible and
                                            effortless for everyone. We aim to simplify the complexities of tracking transactions, managing
                                            investments, and monitoring expenses for both individuals and businesses.
                                        </p>
                                    </TabsContent>
                                    <TabsContent value="team" className="mt-6">
                                        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                                        <p>
                                            Our team consists of passionate finance experts and software engineers who came together to create
                                            a platform that addresses the real-world challenges faced by individuals and companies in managing
                                            their finances. With diverse backgrounds and expertise, we're committed to continuous innovation.
                                        </p>
                                    </TabsContent>
                                    <TabsContent value="values" className="mt-6">
                                        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                                        <ul className="list-disc pl-5 space-y-2 text-left">
                                            <li>Simplicity: We believe financial management should be straightforward and accessible.</li>
                                            <li>Security: Protecting our users' financial data is our top priority.</li>
                                            <li>Innovation: We continuously evolve our platform to meet the changing needs of our users.</li>
                                            <li>Transparency: We maintain open communication with our users and within our team.</li>
                                        </ul>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>

            <Footer_Home />
        </div>
    )
}