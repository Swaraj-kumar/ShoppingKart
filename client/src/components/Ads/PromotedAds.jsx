// components/PromotedAds.jsx

import React from 'react';
import './PromotedAds.css'; // Import CSS file for styling

const PromotedAds = () => {
    return (
        <div className="promoted-ads">
            <h2 className="ads-heading">Promoted Ads</h2>
            <div className="ads-container">
                {/* First Card */}
                <div className="ad-card max-w-sm w-full lg:max-w-full lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                         style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202310_GEO_US?wid=1200&hei=1000&fmt=p-jpg&qlt=95&.v=1699558878362")' }}
                         title="MacBook Pro">
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path
                                        d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/>
                                </svg>
                                New Arrival
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">MacBook Pro</div>
                            <p className="text-gray-700 text-base">The ultimate pro notebook, featuring M1 Pro and M1 Max chips for extreme performance.</p>
                        </div>
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src="https://tse1.mm.bing.net/th?id=OIP.OMyXG7zUS_QW_H8b85sIogAAAA&pid=Api&P=0&h=220" alt="Avatar of User 1"/>
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">John Doe</p>
                                <p className="text-gray-600">June 25</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Second Card */}
                <div className="ad-card max-w-sm w-full lg:max-w-full lg:flex mt-6 lg:mt-0">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                         style={{ backgroundImage: 'url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034")' }}
                         title="MacBook Air">
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path
                                        d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/>
                                </svg>
                                Limited Stock
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">MacBook Air</div>
                            <p className="text-gray-700 text-base">The lightest and most compact MacBook ever, with Apple's M1 chip for incredible performance.</p>
                        </div>
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src="https://i.pinimg.com/474x/90/e9/c2/90e9c2f4d9f47a77643bd18853755e2b.jpg" alt="Avatar of User 2"/>
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">Jane Smith</p>
                                <p className="text-gray-600">July 5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotedAds;
