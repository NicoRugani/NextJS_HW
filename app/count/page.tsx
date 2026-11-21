'use client'

import { useState } from 'react'

type CountButtonProps = {
    step: number
    backgroundColor: string
}

function CountButton({ step, backgroundColor }: CountButtonProps) {
    const [count, setCount] = useState(0)

    function increment(){
        setCount((previousCount) => {
            const nextCount = previousCount + step
            return nextCount > 10 ? 0 : nextCount
        })
    }

    return (
        <section>
            <p>Count: {count}</p>
            <button type="button" onClick={increment} style={{backgroundColor}}> Add {step}</button>
        </section>
    )
}

 export default function CountPage() {
        return (
            <main>
                <h1>Counters</h1>
                <CountButton step={1} backgroundColor="lightblue" />
                <CountButton step={2} backgroundColor="lightgreen" />
            </main>
        )
    }