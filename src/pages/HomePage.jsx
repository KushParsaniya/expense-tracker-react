import {Container} from "../components/containor/Container.jsx";
import HeroSection from "../components/herosection/HeroSection.jsx";
import Feature from "../components/homepage/Feature.jsx";


function HomePage() {


    return (
        <Container>
            <div className="container mx-auto p-6 relative min-h-screen bg-gradient-to-br from-sky-200 to-indigo-200">

                <HeroSection/>

                <section className="features grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Feature
                        title="Expense Categorization"
                        icon="fas fa-chart-line"
                        description="Organize expenses into clear categories for better insights"
                    />
                    <Feature
                        title="Expense Visualization"
                        icon="fas fa-chart-pie"
                        description="Visualize your spending with charts and graphs for quick analysis."
                    />
                    <Feature
                        title="Cloud-Based"
                        icon="fas fa-cloud"
                        description="Securely store your data in the cloud and access it from any device."
                    />
                    <Feature
                        title="Automated Reports"
                        icon="fas fa-envelope-open-text"
                        description="Receive customizable weekly or monthly expense reports directly to your inbox."
                    />

                    <Feature
                        title="More Coming Soon!"
                        icon="fas fa-cog fa-spin"
                        description="We're always adding exciting new features..."
                    />
                </section>

            </div>
        </Container>
    );
}

export default HomePage;
