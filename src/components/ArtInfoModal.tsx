import React, { useState } from "react";
import { Art } from "../app/art/art_list";
import Image from "next/image";

interface ArtInfoModalProps {
    project: Art; 
    setIsModalOpen: Function;
    isModalOpen: boolean;
    extraStyling: string;
}

const ArtInfoModal: React.FC<ArtInfoModalProps> = ({project, setIsModalOpen, isModalOpen, extraStyling}) => {
    const imageSourcesCount = project.imageSources.length;
    const [areImagesLoaded, setAreImagesLoaded] = useState(0);
    /**
     * @description handles closing modal window
     */
    const handleClose = () => {
        setIsModalOpen(false);
    }

    /**
     * @description handles rendering title information including project name, 
     */
    const renderTitleInfo = () => {
        return (
            <div className="art-title-section">
                <p className="art-info-title">{project.artwork}</p>
                <p className="art-details italics">{project.years} | {project.type}</p>
            </div>
        )
    }

     /**
     * @description handles rendering project description, 
     */
    const renderDescription = () => {
        return (
            <div className="art-description-container">
                <p className="description-line">{project.description}</p>
            </div>
        )
    }

     /**
     * @description handles rendering links 
     */
    const renderLinks = () => {
        return (
            <div className="art-link-container">
               {
                project.links.map((l, i) => (
                   <a href={l.href} target="_blank" className="link link-line" key={i}>{`${l.label} ⤴️`}</a>
                ))
               }
            </div>
        )
    }

    /**
     * @description renders media
     * @returns JSX component
     */
    const renderMedia = () => {
        return (
            <div className="art-media-container">
                {
                    areImagesLoaded === imageSourcesCount && <div className="absolute inset-0 flex justify-center items-center">
                        <div className="w-8 h-8 border-4 border-gray-300 border-t-primary-red rounded-full animate-spin"/>    
                    </div>
                }
                {
                    project.imageSources.map((image, i) => (
                        <Image 
                            key={i}
                            alt="project image"
                            className={`media-item transition-opacity duration-300 ${areImagesLoaded === imageSourcesCount ? "opacity-0" : "opacity-100"}`}
                                onLoadingComplete={() => {
                                setTimeout(() => setAreImagesLoaded(imageSourcesCount + 1), 0);
                                console.log(imageSourcesCount);
                            }}
                            src={image}
                        />
                    ))
                }
            </div>
        )    
    }

    /**
     * @description renders youtube player
     * @returns JSX component
     */
    const renderYoutubePlayer = () => {
        return (
            <div className="youtube-player-container">
                <iframe 
                width="560" 
                height="315" 
                src={project.embed} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                onLoadedData={() => {}}
                ></iframe>
            </div>
        );
    }

    const renderModal = () => {
        const modal = isModalOpen ? <div className={`art-modal-container ${extraStyling}`}>
             <div className="modal-actions">
                <div className="button" onClick={handleClose}>(close)</div>
            </div>
            <div className="art-info-container">
                {renderTitleInfo()}
                {project.description.length > 0 && renderDescription()}           
                {project.links.length > 0 && renderLinks()}
                {imageSourcesCount > 0 && renderMedia()}
                {project.embed && renderYoutubePlayer()}
            </div>
        </div> : null
        return modal;
    }
    return (
        <>
            {renderModal()}
        </>
    )
}

export default ArtInfoModal;