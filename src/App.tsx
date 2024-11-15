import React, {useState} from "react";
import {Hero} from "./components/Hero";
import {ProjectsGrid} from "./components/ProjectsGrid";
import {BlogSlider} from "./components/BlogSlider";
import {ContactForm} from "./components/ContactForm";
import {Footer} from "./components/Footer";
import {CodeRequestModal} from "./components/CodeRequestModal";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState<string>("");

    const handleGetCode = (projectId: string) => {
        setSelectedProjectId(projectId);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Hero />
            <ProjectsGrid onGetCode={handleGetCode} />
            <BlogSlider />
            <Footer />

            <CodeRequestModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                projectId={selectedProjectId}
            />
        </div>
    );
}

export default App;
