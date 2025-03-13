import { JSX } from "react";

/**
 * @file StarBackground.tsx
 * @description This component renders an SVG element that simulates a starry night sky with a moon.
 * 
 * @module StarBackground
 **/

const StarBackground = (): JSX.Element => {
    return <svg height="100%" width="100%">
        <defs>
            <filter id="starrySkyFilter">
                <feTurbulence baseFrequency="0.1" numOctaves={2} seed={2}/>
                <feColorMatrix values="0 0 0 3 -2
                                       0 0 0 3 -2
                                       0 0 0 3 -2
                                       0 0 0 0 0.4"/>
            </filter>
            <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" style={{ stopColor: "#001f3f" }} />
                <stop offset="100%" style={{ stopColor: "#001a33" }} />
            </linearGradient>
            <radialGradient id="moonGradient">
                <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#ffff99", stopOpacity: 1 }} />
            </radialGradient>
            <filter id="moonTexture">
                <feTurbulence type="fractalNoise" baseFrequency="0.175" numOctaves="4" result="noise" />
                <feDiffuseLighting in="noise" surfaceScale="0.75">
                    <feDistantLight azimuth="45" elevation="65"/>
                </feDiffuseLighting>
                <feComposite in2="SourceAlpha" operator="in" />
                <feGaussianBlur stdDeviation="2.25" />
            </filter>
        </defs>
        <rect height="100%" width="100%" fill="url(#skyGradient)" />
        <rect height="100%" width="100%" filter="url(#starrySkyFilter)" />
        <circle cx="125" cy="125" r="75" fill="url(#moonGradient)" filter="url(#moonTexture)"/>
    </svg>
}

export default StarBackground;
