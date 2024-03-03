"use client";
import React, { useState, useEffect } from "react";

const CountDown = () => {
    const endingDate = new Date("10/04/2024");
    const [difference, setDifference] = useState(endingDate - new Date());

    const calculateTime = () => {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const m = Math.floor((difference / 1000 / 60) % 60);
        const s = Math.floor((difference / 1000) % 60);

        return { d, h, m, s };
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setDifference(prevDifference => prevDifference - 1000);
        }, 1000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(timer);
    }, []); // empty dependency array ensures this effect runs only once

    const { d, h, m, s } = calculateTime();

    return (
        <span className="font-bold text-5xl text-yellow-300">
            {d}:{h}:{m}:{s}
        </span>
    );
};

export default CountDown;
