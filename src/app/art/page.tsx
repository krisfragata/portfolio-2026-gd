'use client';
import React, { useState } from "react";
import { Art, artList } from "./art_list";
import ArtInfoModal from "@/components/ArtInfoModal";

const ArtProjects: React.FC = () => {
    // track state of info modal
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [openProject, setOpenProject] = useState<Art>({
        artwork: '',
        description: [],
        id: '0',
        imageSources: [],
        links: [],
        type: '',
        years: '',
    })

    /**
     * @description renders art list items
     * @returns JSX component
     */
    const renderArtList = () => {
        return artList.map((art:Art, index) => {
            return (
                <div 
                    className="art-item"
                    key={art.id}
                    onClick={() => {
                        const isOpen = isInfoModalOpen;
                        setIsInfoModalOpen(!isOpen);
                        setOpenProject(art);
                    }}
                >
                   {art.artwork} - <span className="italics">{art.type}</span> 
                </div>
            );
        })
    }

    // create method to close all info modals
    // create method to open specific info modal

    /**
     * @description render info modal
     * @returns JSX component
     */
    const renderInfoModal = () => {
        return (
            <ArtInfoModal 
                project={openProject}
                setIsModalOpen={setIsInfoModalOpen}
                isModalOpen={isInfoModalOpen}
                extraStyling=""
            />
        )
    }
    return (
        <div className="art-container">
            {renderArtList()}
            {renderInfoModal()}
        </div>
    );
};

export default ArtProjects