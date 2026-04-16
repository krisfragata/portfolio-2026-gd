import { StaticImport } from "next/dist/shared/lib/get-img-props";

/** SVISUALIZE IMPORTS */
import svisualizeScreenShot from '@/../public/art/svisualize/screenshot.png';
import svisualizeGif from '@/../public/art/svisualize/SvisualizeGif1.gif';

/** KIN IMPORTS */
import bananaSplitCover from '@/../public/art/kin/banana_split_cover_photo.png';
import bananaSplitLanding from '@/../public/art/kin/banana_split_landing.png';
import bananaSplitGif from '@/../public/art/kin/banana_split.gif';
import cycleCover from '@/../public/art/kin/cycle.jpg';
import firstEncountersCover from '@/../public/art/kin/first_encounters.png';

/** PEOPLE'S GOLD IMPORTS */
import peoplesGold1 from '@/../public/art/peoples_gold/peoples_gold1.jpg';
import peoplesGold2 from '@/../public/art/peoples_gold/peoples_gold2.jpg';
import peoplesGold3 from '@/../public/art/peoples_gold/peoples_gold3.jpg';
import peoplesGold4 from '@/../public/art/peoples_gold/peoples_gold4.jpg';
import peoplesGold5 from '@/../public/art/peoples_gold/peoples_gold5.jpg';

/** SAWYER LEVY IMPORTS */
import sawyerLogo from '@/../public/art/sawyer/sawyerLogo.png';
import sawyerLanding from '@/../public/art/sawyer/landingScreenshot.png';
import sawyerGif from '@/../public/art/sawyer/sawyer_landing.gif';

/** DAILY DOSE IMPORTS */
import dailyDose1 from '@/../public/art/daily_dose/daily_dose1.gif';
import dailyDose2 from '@/../public/art/daily_dose/daily_dose2.gif';
import dailyDose3 from '@/../public/art/daily_dose/daily_dose3.gif';
import { JSX } from "react";

export interface Art {
    artwork: string;
    type: string;
    id: string;
    imageSources: StaticImport[];
    links: Link[];
    years: string;
    description: string[];
    embed: JSX;
}

interface Link {
    label: string;
    href: string;
}

export const artList:Art[] = [
    {
        artwork: 'Svisualize Landing Page',
        type: 'web design & development',
        years: 'march 2024',
        id: 'svisualize',
        imageSources: [svisualizeScreenShot, svisualizeGif],
        links: [{
            label: 'svisualize.dev',
            href: 'https://svisualize.dev',
        }],
        description: ["Under OSLabs' tech accelerator I designed and deployed an accessible nad responsive landing page for our developer tool, Svisualize. I used TailwindCSS, SvelteKit, and TypeScript."],
        embed: '',
    },
   
    {
        artwork: 'Kin/Kris Fragata Music',
        type: 'creative direction, marketing & production',
        years: '2020 - present',
        id: 'kin',
        imageSources: [bananaSplitCover, bananaSplitLanding, bananaSplitGif, cycleCover, firstEncountersCover],
        links: [
        ],
        description: [
            "An ongoing musical/video/writing project, Kin, previously Kris Fragata, is an exploration into self, filipino culture, and family.",
            "The works below are cover photos and marketing used in the musical releases under Kris Fragata.",
            "The cover photo for Cycle (photo #4) was produced and edited by Avery Johnson."
        ],
        embed: '',
    },
    // {
    //     artwork: 'Streamline Coaching',
    //     type: 'branding & web design',
    //     id: 'streamline'
    // },
    {
        artwork: "The People's Gold",
        type: 'product photography',
        id: 'peoplegold',
        years: 'feb 2023',
        imageSources: [peoplesGold1, peoplesGold2, peoplesGold3, peoplesGold4, peoplesGold5],
        links: [],
        description: [],
        embed: '',
    },
    {
        artwork: 'Sawyer Levy Training',
        type: 'brand identity & web design',
        id: 'sawyer',
        years: '2022',
        imageSources: [sawyerLogo, sawyerLanding, sawyerGif],
        links: [],
        description: [],
        embed: '',
    },
    {
        artwork: 'Kensho',
        type: 'fashion video production',
        id: 'kensho',
        years: 'spring 2021',
        imageSources: [],
        links: [
            {
                label: 'youtube',
                href: 'https://www.youtube.com/watch?v=W65kpK7aqN4',
            }
        ],
        description: [],
        embed: 'https://www.youtube.com/embed/W65kpK7aqN4?si=6z9dVOBUS6HX_mNm'
    },
    {
        artwork: 'Daily Dose',
        type: 'web development',
        id: 'daily',
        years: 'spring 2021',
        imageSources: [dailyDose1, dailyDose2, dailyDose3],
        links: [
            {
                label: 'website',
                href: 'https://andrianalevytsky.github.io/dailydose/',
            }
        ],
        description: [
             "For Daily Dose, I worked with graphic designer, Andriana Levytsky, to create an interactive gallery using HTML5 Canvas and a bit of math.",
            "This was my first collaborative coding project, and the project that birthed my love for programming. I found HTML5 Canvas to be finnicky but rewarding. With the right logic and math one can so many fun things.",
        ],
        embed: '',
    },
     {
        artwork: "Lucy's Music Video",
        type: 'videography, creative direction',
        id: 'lucy',
        imageSources: [],
        years: 'fall 2023',
        links: [
            {
                label: 'youtube',
                href: 'https://youtu.be/qMOT-39YdNk',
            }
        ],
        description: ["A video passion project made solely out of the love for the song, 'I hope that you think of me' by Pity Part and Lucys.",
            "At the time, I was living in a 2 story white house in the town of Charlemont (population 800).",
            "I wanted to express the solitude that the town invoked in me while showcasing the beautiful landscape.",
            "My friend, Kloee Wheeler, helped in filming many of the shots, including the awesome drone footage."
        ],
        embed: 'https://www.youtube.com/embed/qMOT-39YdNk?si=woJtT-QpCXBRJAx8',
    },
    {
        artwork: 'If Forever Were in a Moment',
        type: 'videography',
        years: 'winter 2024',
        id: 'forever',
        imageSources: [],
        links: [
            {
                label: 'youtube',
                href: 'https://www.youtube.com/watch?v=7a0PofVFlxA'
            }
        ],
        description: [
            "This is a visual poem and was inspired by the books Stay True by Hua Hsu and A Tale for The Time Being by Ruth Oseki"
        ],
        embed: 'https://www.youtube.com/embed/7a0PofVFlxA?si=IWoInRbkKehaxGSZ',
    },
    {
        artwork: 'Leonardo DiCaprio on Climate Change',
        type: 'motion graphics',
        years: 'fall 2019',
        id: 'leo',
        imageSources: [],
        links: [
            {
                label: 'youtube',
                href: 'https://youtu.be/UZ13uiMqIP0',
            }
        ],
        description: [],
        embed: 'https://www.youtube.com/embed/UZ13uiMqIP0?si=ry656GniwXlUvRX7',
    },
];