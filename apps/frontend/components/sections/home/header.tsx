"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from 'lucide-react'

const Header_Home = () => {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Pricing', path: '/api/pricing' },
        { name: 'About Us', path: '/api/about-us' },
        { name: 'Contribute', path: '/api/open-source-contribution' },
    ]

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <motion.a
                    className="flex items-center justify-center group"
                    href="/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 14L11 10L15 14L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="ml-2 text-2xl font-bold text-primary">
                        TransacEase
                    </span>
                </motion.a>
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button
                                className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                                onClick={() => router.push(item.path)}
                            >
                                {item.name}
                            </button>
                            <motion.div
                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.div>
                    ))}
                </nav>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-gray-700 dark:text-gray-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={isMenuOpen ? 'close' : 'open'}
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </motion.div>
                    </AnimatePresence>
                </Button>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="flex flex-col items-center gap-4 py-4">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.name}
                                    className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                                    onClick={() => {
                                        router.push(item.path)
                                        setIsMenuOpen(false)
                                    }}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Header_Home