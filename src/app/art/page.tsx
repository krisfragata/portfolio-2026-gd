import React from "react";
import { Art, artList } from "./art_list";

const ArtProjects: React.FC = () => {
    /**
     * @description renders art list items
     * @returns JSX component
     */
    const renderArtList = () => {
        return artList.map((art:Art, index) => {
            return (
                <div className="art-item" key={art.id}>
                   {art.artwork} - <span className="italics">{art.details}</span> 
                </div>
            );
        })
    }
    return (
        <div className="art-container">
            {renderArtList()}
        </div>
    );
};

export default ArtProjects