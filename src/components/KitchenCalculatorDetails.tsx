import React, { useState } from 'react';

// Interfaces for layout data
interface Step {
    id: number;
    title: string;
    description: string;
    iconText: string;
}

interface KitchenLayout {
    title: string;
    description: string;
    imageUrl: string;
}

interface FeatureDetail {
    title: string;
    description: string;
}

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export const KitchenCalculatorDetails: React.FC = () => {
    // State for Accordion/FAQs
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (id: number) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    // Data Arrays
    const steps: Step[] = [
        {
            id: 1,
            title: 'Select the shape of your kitchen',
            description: 'The kitchen layout lets us understand the scope of work and how we could design your kitchen based on your taste.',
            iconText: '🍳'
        },
        {
            id: 2,
            title: 'Choose the measurements',
            description: 'This helps us estimate the size of your kitchen and give you a more accurate pricing.',
            iconText: '📐'
        },
        {
            id: 3,
            title: 'Pick a package as per your requirements',
            description: 'Our packages will offer you a choice of accessories to pick from, based on your preference.',
            iconText: '💻'
        }
    ];

    const layouts: KitchenLayout[] = [
        {
            title: 'Sleek L-shaped Kitchen',
            description: 'Featuring adjoining countertops with corner spaces.',
            imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80' // Replace with your asset path
        },
        {
            title: 'Spacious U-shaped Kitchen',
            description: 'Comprising three connected walls of cabinets with a practical open entrance.',
            imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d7c992?auto=format&fit=crop&w=600&q=80' // Replace with your asset path
        },
        {
            title: 'Essential Straight Kitchen',
            description: 'A convenient option with the countertop and cabinets placed in a straight line.',
            imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80' // Replace with your asset path
        }
    ];

    const details: FeatureDetail[] = [
        {
            title: 'Shape of your kitchen',
            description: 'The modular kitchen price estimator will make a few assumptions based on the shape of your kitchen. The shape of your kitchen is a significant factor in calculating the price of your kitchen. For instance, the under counter space and the over counter space in an L-shaped kitchen varies from an island or a straight kitchen.'
        },
        {
            title: 'Size of your kitchen',
            description: 'Based on the shape of your kitchen, our modular kitchen price calculator will give you default measurements for the kitchen size. You can change the measurements in case the size of your kitchen differs from the default values. Our estimator will calculate the modular kitchen cost per sq ft. The more accurate the size is, the more accurate the cost of modular kitchen.'
        },
        {
            title: 'Accessories',
            description: 'Not sure about what accessory to pick? No problem. We have 3 packages for you: Basic, Intermediate and Premium. You can choose the one that suits your lifestyle.'
        },
        {
            title: 'Material and finishes',
            description: 'The kind of material and the finish you pick determines not only the cost of modular kitchen but also the quality of your kitchen. Our modular kitchen price calculator will highlight popular materials and their features to ease the process of decision making for you.'
        },
        {
            title: 'On-site services as per requirement',
            description: 'Do you need electrical and plumbing services? Are you looking at a fresh coat of paint? Our modular kitchen price estimator will also include a cost based on the services you select.'
        },
        {
            title: 'Appliances',
            description: 'Choose from a variety of built-in appliances like hob, chimney or oven. If you don\'t need one, the modular kitchen cost calculator will make note of it.'
        }
    ];

    const faqs: FAQItem[] = [
        { id: 1, question: 'Will the modular kitchen estimator throw up a cost based on location?', answer: 'Yes, regional rates for material sourcing and local labor logistical metrics are factored dynamically depending on your project zip code/city selection.' },
        { id: 2, question: 'How will the modular kitchen price calculator make assumptions on materials, accessories & other products?', answer: 'It applies baseline standard industry configurations for core materials based on your selected package tiers (Basic, Intermediate, Premium).' },
        { id: 3, question: 'Can I customize and build my own kitchen and get a cost basis?', answer: 'Absolutely! The initial estimate acts as a framework which you can completely fine-tune with our interior design experts later.' },
        { id: 4, question: 'How accurate is this? Can I expect my designer to share a similar quote?', answer: 'The estimate is highly accurate for budgetary planning based on square footage variables, though final quotes may fluctuate up or down by 10% depending on custom on-site custom structural work.' },
        { id: 5, question: 'What if I want to change the shape of my kitchen? How will the estimator factor in that cost for demolition?', answer: 'Demolition or civil wall modifications fall under custom civil site-services layout choices which can be added manually.' },
        { id: 6, question: 'Why can\'t I choose individual accessories?', answer: 'To maximize speed and ease of calculating, accessories are grouped into curated value bundles. Individual accessory updates happen during exact 3D drafting steps.' }
    ];

    return (
        <div className="w-full bg-white text-gray-800 font-sans antialiased">

            {/* 1. SECTION: 3 Simple Steps */}
            <section className="max-w-6xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    3 simple steps to get your quote
                </h2>
                <p className="text-gray-500 text-lg mb-12">
                    It's that easy! You can now effortlessly plan your dream kitchen.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex flex-col items-center relative z-10 bg-white p-4">
                            <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-2xl font-bold border border-rose-100 shadow-sm mb-4">
                                {step.iconText}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-500 text-sm max-w-xs">{step.description}</p>

                            {/* Optional UI connectors between steps on desktop layout */}
                            {index < 2 && (
                                <div className="hidden md:block absolute top-12 left-[65%] w-full h-[1px] border-t border-dashed border-gray-300 -z-10" />
                            )}
                        </div>
                    ))}
                </div>

                <button className="mt-12 px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-full transition-colors tracking-wide uppercase text-sm shadow-md">
                    Get Free Estimate
                </button>
            </section>

            <hr className="border-gray-100" />

            {/* 2. SECTION: Estimates for Every Kitchen (Cards Grid) */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Estimates for every kitchen</h2>
                    <p className="text-gray-500">Choose your preferred kitchen layout, and let our estimator work its magic.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {layouts.map((layout, index) => (
                        <div key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                            <div className="h-48 overflow-hidden bg-gray-100">
                                <img
                                    src={layout.imageUrl}
                                    alt={layout.title}
                                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{layout.title}</h3>
                                    <p className="text-gray-500 text-sm mb-6">{layout.description}</p>
                                </div>
                                <button className="w-full border border-rose-500 text-rose-500 font-medium py-2 rounded-lg text-sm uppercase tracking-wider hover:bg-rose-50 transition-colors">
                                    Start Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. SECTION: How it Works Explainer Details */}
            <section className="w-full bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">
                        Here's how the modular kitchen price estimator works
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed text-center md:text-left">
                        Our modular kitchen price estimator considers the shape and area of your kitchen, materials, and the package you choose to check the pricing in real time and gives you the kitchen interior cost.
                    </p>

                    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-3">We'll ask you about a few things:</h3>
                        <div className="space-y-6">
                            {details.map((detail, idx) => (
                                <div key={idx} className="flex flex-col gap-1">
                                    <h4 className="text-base font-bold text-gray-900">{detail.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{detail.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SECTION: FAQs Accordion Block */}
            <section className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                    IN | Kitchen Price Calculator FAQs
                </h2>
                <div className="space-y-3">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="border border-gray-200 rounded-lg overflow-hidden transition-all bg-white"
                        >
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full text-left px-5 py-4 flex items-center justify-between font-medium text-gray-800 hover:bg-gray-50 transition-colors text-sm md:text-base gap-4"
                            >
                                <span>{faq.id}. {faq.question}</span>
                                <span className="text-xl text-gray-400 font-light select-none">
                                    {openFaq === faq.id ? '−' : '+'}
                                </span>
                            </button>

                            {openFaq === faq.id && (
                                <div className="px-5 pb-5 pt-1 text-gray-600 text-sm leading-relaxed bg-gray-50 border-t border-gray-100">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. SECTION: Brand Copy Summary Footer Context */}
            <section className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
                <div className="max-w-4xl mx-auto px-4 text-xs md:text-sm space-y-4 leading-relaxed">
                    <p>
                        Livspace is the world's largest interior design and home renovation platform that connects interior designers, homeowners and vendors. We provide homeowners with personalised and efficient home interior designs. Looking to make your dream kitchen come true but need a cost to plan ahead? We're here to make it easy for you.
                    </p>
                    <p>
                        The Livspace modular kitchen price calculator is a comprehensive guide to help you understand the factors that are taken into consideration while estimating your dream kitchen's quote. This helps you get an idea of the estimate for modular kitchen cost per sq ft. That's not all. You also get to choose from a range of materials, accessories, appliances, finishes, and on-site services like plumbing, electrical, Dado, Painting, False ceiling, and Platform work to make your modular kitchen complete and comfortable.
                    </p>
                    <p>
                        Oh, we also provide expert tips so that you are thoroughly informed of the choices present and make a balanced decision. We believe every product or package you choose needs to fit your needs and lifestyle perfectly. The final price of your modular kitchen may be lower or higher than the estimate depending on the choice of products and services you make. Further, our designers will make sure you understand the process better by providing you with all the additional details you would need. So get started with our modular kitchen price calculator, make your choices, and get your modular kitchen cost with our fairly attached calculation rules.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default KitchenCalculatorDetails;