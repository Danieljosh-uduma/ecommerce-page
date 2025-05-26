import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Hero section at the top */}
            <Hero />

            {/* Main content area */}
            <main>{children}</main>

            {/* Footer at the bottom */}
            <Footer />
        </>
    );
}
