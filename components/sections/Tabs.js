"use client";

import React, { useState } from 'react'
import Datasetstab from './Datasetstab';
import Labeltab from './Labeltab';
import Modeltab from './Modeltab';
import Deplaytab from './Deploytab';
import Collabtab from './Collabtab';


const Tabs = () => {

    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { label: 'Datasets', content: <Datasetstab /> },
        { label: 'Labeling', content: <Labeltab /> },
        { label: 'Models', content: <Modeltab /> },
        { label: 'Deployment', content: <Deplaytab/> },
        { label: 'Collaboration', content: <Collabtab/> },
    ];
    return (
        <>
            <section className="tabs_section wow fadeInUp" data-wow-delay=".9s">
                <div className="tabs_sec_inner">
                    <div className="tabs">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`tab ${index === activeTab ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className="tab-content">
                        {tabs[activeTab].content}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Tabs