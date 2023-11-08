import React, { useState, useEffect } from 'react';

function TokenInfo({ selectedToken }) {
    const [tokenData, setTokenData] = useState(null);

    useEffect(() => {
        fetchTokenInfo();
    }, [selectedToken]);

    const fetchTokenInfo = () => {
        const apiUrl = `https://api.coingecko.com/api/v3/coins/${selectedToken.toLowerCase()}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setTokenData(data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    };

    if (!tokenData) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <div className="widget_main_body h-[200px] w-[500px] border-2 border-gray-500 rounded-[15px] overflow-hidden sm:w-[400px]">

                <div className="upper h-[43%] flex ">
                    <div className="logo  w-[35%] flex items-center justify-center">
                        <img className="h-[70%]" src={tokenData.image.small} alt="logo" />
                    </div>
                    <div className="info  w-[65%]">
                        <div className="name h-[50%] pt-3">
                            <a className="text-blue-500 text-2xl font-medium">
                                {tokenData.name}
                            </a>
                        </div>
                        <div className="price  h-[50%] text-white ">
                            <a className="text-2xl font-semibold">{tokenData.market_data.circulating_supply}</a>
                            <a className="text-lg font-medium ml-2">USD</a>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-400"></div>

                <div className="middle  h-[35%] flex text-white">
                    <div className="rank w-[33%] flex flex-col items-center justify-center ">
                        <a className="text text-sm font-semibold ">RANK</a>
                        <a className="text text-xl font-semibold ">{tokenData.market_cap_rank}</a>
                    </div>
                    <div className="border border-gray-400"></div>
                    <div className="mcap  w-[34%] flex flex-col items-center justify-center">
                        <a className="text text-sm font-semibold pb-1">MARKET CAP</a>
                        <div className="text ">
                            <a className="text text-md font-semibold">$</a>
                            <a className="text text-md font-semibold">{tokenData.market_data.market_cap.btc}</a>
                            <a className="text-md ml-1 font-semibold">B</a>
                            <a className="text-sm font-semibold ml-1">USD</a>
                        </div>
                    </div>
                    <div className="border border-gray-400"></div>
                    <div className="vol  w-[33%] flex flex-col items-center justify-center">
                        <a className="text text-sm font-semibold pb-1">VOLUME</a>
                        <div className="text">
                            <a className="text text-md font-semibold">$</a>
                            <a className="text text-md font-semibold">{tokenData.market_data.total_volume.btc}</a>
                            <a className="text-md font-semibold ml-1">B</a>
                            <a className="text-sm font-semibold ml-1">USD</a>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-400"></div>

                <div className="lower h-[23%] flex items-center justify-center text-sm text-blue-500 font-semibold italic">
                    Powered by CoinMarketCap
                </div>
            </div>
        </>
    );
}

export default TokenInfo;