import React from 'react';

export default function FillOptions() {
    const percentages = [];
    for (let i = 0; i <=5; i = i + 0.25) {
        percentages.push(i);
    }

    return (
        percentages.map(percentage => {
            return <option value={percentage}>{percentage} %</option>
        })
    )
}
