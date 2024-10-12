"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"
import Header_Home from "../sections/home/header"
import Footer_Home from "../sections/home/footer"

const plans = [
    {
        name: "Free",
        description: "For individuals just starting out",
        price: { monthly: "$0", annually: "$0" },
        features: [
            "Up to 100 transactions per month",
            "Basic reporting",
            "Email support"
        ]
    },
    {
        name: "Premium",
        description: "For power users and small businesses",
        price: { monthly: "$9.99", annually: "$99.99" },
        features: [
            "Unlimited transactions",
            "Advanced reporting and analytics",
            "Priority email support",
            "API access",
            "Data export"
        ]
    },
    {
        name: "Enterprise",
        description: "For large organizations with specific needs",
        price: { monthly: "Custom", annually: "Custom" },
        features: [
            "All Premium features",
            "Dedicated account manager",
            "Custom integrations",
            "On-premise deployment option",
            "24/7 phone support"
        ]
    }
]

export default function Pricing_Pg() {
    const [isAnnual, setIsAnnual] = useState(false)

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header_Home />

            <main className="flex-1 mt-[10vh] max-sm:mt-[6vh]">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Transparent Pricing</h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-12">
                            Choose the plan that fits your needs. All plans come with a 14-day free trial.
                        </p>
                        <div className="flex items-center justify-center space-x-4 mb-8">
                            <span className={`text-sm ${!isAnnual ? 'font-bold' : ''}`}>Monthly</span>
                            <Switch
                                checked={isAnnual}
                                onCheckedChange={setIsAnnual}
                            />
                            <span className={`text-sm ${isAnnual ? 'font-bold' : ''}`}>Annual (Save 20%)</span>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3">
                            {plans.map((plan, index) => (
                                <Card key={index} className={index === 1 ? "border-primary" : ""}>
                                    <CardHeader>
                                        <CardTitle>{plan.name}</CardTitle>
                                        <CardDescription>{plan.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-4xl font-bold mb-4">{isAnnual ? plan.price.annually : plan.price.monthly}</div>
                                        <div className="text-sm text-gray-500 mb-6">{isAnnual ? "per year" : "per month"}</div>
                                        <ul className="text-left space-y-2">
                                            {plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center">
                                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">{index === 2 ? "Contact Sales" : "Get Started"}</Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer_Home />
        </div>
    )
}