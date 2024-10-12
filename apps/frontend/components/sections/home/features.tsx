import React from 'react'

import { BarChart3, Building, ChevronRight, Lock, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'

const Features_Home = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Key Features</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { icon: Lock, title: "Secure Authentication", description: "Google Sign-In Authentication via Auth.js for secure and fast user access." },
                        { icon: BarChart3, title: "Transaction Management", description: "Add, update, delete, and track transactions with an intuitive interface." },
                        { icon: User, title: "Individual Tracking", description: "Perfect for managing personal investments in crypto, stocks, and more." },
                        { icon: Building, title: "Company Integration", description: "Seamlessly integrate with your company's infrastructure for expense tracking." },
                    ].map((feature, index) => (
                        <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                            <CardHeader>
                                <feature.icon className="h-8 w-8 mb-3" />
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features_Home