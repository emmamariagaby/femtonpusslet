import React from 'react';

// funktion som genererar en array med nummer för varje bricka i pusslet
// returnerar blandade siffror från 1 till 15 och 0 som representerar den tomma rutan
export const generateNumbersGrid = (): number[] => {
    const numbers = Array.from({ length: 15 }, (_, i) => i + 1);
    numbers.push(0);
    numbers.sort(() => Math.random() - 0.5);
    return numbers;
};

export const shuffleText = "Slumpa";

type ShuffleProps = {
    onClick: () => void;
    text: string;
}

// komponenten Shuffle tar emot props och renderar en knapp för att blanda brickor med nummer
const Shuffle: React.FC<ShuffleProps> = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    );
};

export default Shuffle;
