import Header_Home from "../sections/home/header"
import Hero_Home from "../sections/home/hero"
import Features_Home from "../sections/home/features"
import Cases_Home from "../sections/home/cases"
import Footer_Home from "../sections/home/footer"

export default function HomePage() {

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header_Home />

            <main className="flex-1">
                <Hero_Home />

                <Features_Home />

                <Cases_Home />

                <section className="w-full py-12 md:py-12 lg:py-12 bg-gray-100 dark:bg-gray-800">
                    <div className="container mx-auto px-4">
                    </div>
                </section>
            </main>

            <Footer_Home />
        </div>
    )
}