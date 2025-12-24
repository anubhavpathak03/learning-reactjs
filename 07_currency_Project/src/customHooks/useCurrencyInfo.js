import React from "react";

import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    // mein chata hun jab mera component mount hoga tab mein ye api call karunga
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])

    console.log(data);
    return data
}

export default useCurrencyInfo;