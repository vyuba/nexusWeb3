// import React from 'react'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);
import { ArrowBigLeft, ArrowBigRight, DatabaseZapIcon, GitCompareArrows, LucideFileKey2, Shield } from "lucide-react"

function Home() {

    const cardsRef = useRef(null);
    const indexRef = useRef(0); // To keep track of the current card index

    useEffect(() => {
        const cards = cardsRef.current.children;
        const totalCards = cards.length;
        const cardWidth = cards[0].offsetWidth + 8; // 8 is the gap between cards

        const updateSlides = (newIndex) => {
            if (newIndex >= totalCards) newIndex = 0;
            if (newIndex < 0) newIndex = totalCards - 1;
            indexRef.current = newIndex;

            gsap.to(cardsRef.current, {
                x: -newIndex * cardWidth,
                duration: 0.5,
                ease: 'power2.inOut',
            });
        };

        Draggable.create(cardsRef.current, {
            type: 'x',
            edgeResistance: 0.65,
            inertia: true,
            bounds: { minX: -(totalCards - 1) * cardWidth, maxX: 0 },
            onDragEnd: function () {
                const newIndex = Math.round(this.x / -cardWidth);
                updateSlides(newIndex);
            },
        });

        document.getElementById('next').addEventListener('click', () => {
            updateSlides(indexRef.current + 1);
        });

        document.getElementById('prev').addEventListener('click', () => {
            updateSlides(indexRef.current - 1);
        });
    }, []);

  return (
    <div className="w-full">
        <div className="w-full h-screen flex flex-col items-center gap-16 md:gap-20 md:pt-[60px]">
            <h1 className="text-[22px] md:text-[30px] text-center px-[30px] uppercase">Welcome to the Future of the Web</h1>
            <div className="   ">
                <img className="w-full" src="/images/nexus worls.png" alt="" />
            </div>
            <div className="flex flex-col w-full items-center gap-7">
            <h2 className="font-light text-[16px] md:text-[20px] uppercase text-center px-[10px]">Connecting the Decentralized Future</h2>
            <button className="callToAction text-[16px] w-fit font-medium bg-white text-[#272727] uppercase py-[13px] px-[30px] border border-solid border-[#CBCBCB]">connect wallet</button>
            </div>
        </div>
        <section className="flex flex-col w-full px-[20px] md:max-w-[1400px] md:mx-auto items-center gap-10">
            <h2 className="text-sm md:hidden">Nexusweb3 is at the forefront of the Web3 movement, offering a decentralized platform that puts you in control of your digital identity and assets.</h2>
            <div className="md:hidden">
                <img src="/images/—Pngtree—2.5d illustration of internet technology-scene_3688726 1.png" alt="" />
            </div>
            <div className="flex flex-col gap-10 md:gap-[4rem] md:flex-row items-center">
                <div className="grid gap-10 md:max-w-[500px]">
                    <h2 className="text-sm hidden md:block">Nexusweb3 is at the forefront of the Web3 movement, offering a decentralized platform that puts you in control of your digital identity and assets.</h2>
                    <h1 className="text-[16px] text-center md:text-left uppercase">Our Vision for a Decentralized Web</h1>
                    <p className="text-sm font-light md:text-left">At nexusweb3, we believe in a future where users have full control over their data and digital interactions. Our platform leverages blockchain technology to create a more transparent, secure, and user-centric internet experience.</p>
                    <div className="py-3 flex flex-col gap-[4rem] items-center md:items-start">
                        <div className="card bg-white">
                            <div className="flex flex-row gap-2 w-fit px-[11px] py-1 bg-[#FF2B2B] text-white items-center">
                                <GitCompareArrows/>
                                <p className="uppercase text-[14px] font-medium">Decentralization</p>
                            </div>
                            <p className="text-sm px-2 font-light py-4">
                            At nexusweb3, we believe in a future where users have full control over their data and digital interactions.
                            </p>
                        </div>
                        <div className="card bg-white">
                            <div className="flex flex-row gap-2 w-fit px-[11px] py-1 bg-[#FF2B2B] text-white items-center">
                                <DatabaseZapIcon/>
                                <p className="uppercase text-[14px] font-medium">Data Ownership</p>
                            </div>
                            <p className="text-sm px-2 font-light py-4">
                            At nexusweb3, we believe in a future where users have full control over their data and digital interactions.
                            </p>
                        </div>
                        <div className="card bg-white">
                            <div className="flex flex-row gap-2 w-fit px-[11px] py-1 bg-[#FF2B2B] text-white items-center">
                                <LucideFileKey2/>
                                <p className="uppercase text-[14px] font-medium">Enhanced Privacy</p>
                            </div>
                            <p className="text-sm px-2 font-light py-4">
                            At nexusweb3, we believe in a future where users have full control over their data and digital interactions.
                            </p>
                        </div>
                        <div className="card bg-white">
                            <div className="flex flex-row gap-2 w-fit px-[11px] py-1 bg-[#FF2B2B] text-white items-center">
                                <Shield/>
                                <p className="uppercase text-[14px] font-medium">Interoperability</p>
                            </div>
                            <p className="text-sm px-2 font-light py-4">
                            At nexusweb3, we believe in a future where users have full control over their data and digital interactions.
                            </p>
                        </div>
                        <div className="card bg-white">
                            <div className="flex flex-row gap-2 w-fit px-[11px] py-1 bg-[#FF2B2B] text-white items-center">
                                <GitCompareArrows/>
                                <p className="uppercase text-[14px] font-medium">Decentralization</p>
                            </div>
                            <p className="text-sm px-2 font-light py-4">
                            At nexusweb3, we believe in a future where users have full control over their data and digital interactions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block w-[500px]">
                    <img className="w-full" src="/images/—Pngtree—2.5d illustration of internet technology-scene_3688726 1.png" alt="" />
                </div>
            </div>
        </section>
        <section className="flex flex-col w-full px-[20px] py-16 items-center gap-10 md:gap-24 md:max-w-[1400px] md:mx-auto">
            <h1 className="text-[16px] uppercase md:text-[20px]">Why Choose NexusWeb3?</h1>
            <div className="flex flex-col gap-10 md:flex-row">
                <div className="Dapp-card flex flex-col items-center bg-white ">
                    <div className="pt-10">
                        <img src="/images/Rectangle.png" alt="" />
                    </div>
                    <div className="px-[15px] pt-7">
                        <div className="flex flex-row gap-2 w-fit px-[11px] py-1 bg-[#FF2B2B] text-white items-center">
                            <p className="uppercase text-[14px] font-medium">Enhanced Privacy</p>
                        </div>
                        <p className="text-sm px-2 font-light py-4">
                        NexusWeb3 puts you in control of your personal information. Our decentralized identity system allows you to selectively share data, ensuring your privacy is protected across the digital landscape.
                        </p>
                    </div>
                </div>
                <div className="Dapp-card flex flex-col items-center bg-white ">
                    <div className="pt-10">
                        <img src="/images/chip.png" alt="" />
                    </div>
                    <div className="px-[15px] pt-7">
                        <div className="flex flex-row gap-2 w-fit px-[11px] py-1 bg-[#FF2B2B] text-white items-center">
                            <p className="uppercase text-[14px] font-medium">True Ownership</p>
                        </div>
                        <p className="text-sm px-2 font-light py-4">
                        Your data belongs to you, not corporations. With NexusWeb3, you have full ownership and control over your digital assets and personal information, stored securely on the blockchain
                        </p>
                    </div>
                </div>
                <div className="Dapp-card flex flex-col items-center bg-white ">
                    <div className="pt-10">
                        <img src="/images/network.png" alt="" />
                    </div>
                    <div className="px-[15px] pt-7">
                        <div className="flex flex-row gap-2 w-fit px-[11px] py-1 bg-[#FF2B2B] text-white items-center">
                            <p className="uppercase text-[14px] font-medium">Interoperability</p>
                        </div>
                        <p className="text-sm px-2 font-light py-4">
                        Seamlessly interact across different blockchain networks and applications. NexusWeb3&apos;s cross-chain compatibility ensures your assets and identity work harmoniously throughout the Web3 ecosystem
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="flex flex-col w-full px-[20px] py-16 gap-10 md:max-w-[1400px] md:mx-auto"> 
            <h1 className="text-[16px] uppercase text-center md:text-[20px]">Join Our Thriving Community</h1>
            <h6 className="text-left text-sm font-light">Join 40,000 active users</h6>
            <div className="w-full overflow-hidden ">
            <div ref={cardsRef} className="flex flex-row gap-2  w-full">
                <div className="review-card flex flex-col gap-3 bg-white py-[23px] px-[15px] md:max-w-[350px] min-w-[15rem]">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-[31px] rounded-full overflow-hidden">
                            <img src="/images/Ape Gang Trending NFT.jpeg" alt="" />
                        </div>
                        <h6 className="text-sm font-medium uppercase">BlockchainDev</h6>
                    </div>
                    <p className="text-sm font-light">
                        Building on @NexusWeb3 is a breeze. Their dev tools are top-notch. Excited for what&apos;s coming! #buidl
                    </p>
                </div>
                <div className="review-card flex flex-col gap-3 bg-white py-[23px] px-[15px] min-w-[15rem]  md:max-w-[350px]">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-[31px] rounded-full overflow-hidden">
                            <img src="/images/make your nft pixel art.jpeg" alt="" />
                        </div>
                        <h6 className="text-sm font-medium uppercase">degenKing</h6>
                    </div>
                    <p className="text-sm font-light">
                    Just tried @NexusWeb3&apos;s new cross-chain swap feature. Seamless experience! #Web3 #DeFi
                    </p>
                </div>
                <div className="review-card flex flex-col gap-3 bg-white py-[23px] px-[15px] min-w-[15rem] md:max-w-[350px]">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-[31px] rounded-full overflow-hidden">
                            <img src="/images/Kaiju Kingz - Collection _ OpenSea.jpeg" alt="" />
                        </div>
                        <h6 className="text-sm font-medium uppercase">Web3Educator</h6>
                    </div>
                    <p className="text-sm font-light">
                    Just finished another successful workshop on @NexusWeb3. The future of the internet is here, folks! #LearnWeb3
                    </p>
                </div>
                <div className="review-card flex flex-col gap-3 bg-white py-[23px] px-[15px] min-w-[15rem] md:max-w-[350px]">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-[31px] rounded-full overflow-hidden">
                            <img src="/images/Ape Gang Trending NFT.jpeg" alt="" />
                        </div>
                        <h6 className="text-sm font-medium uppercase">BlockchainDev</h6>
                    </div>
                    <p className="text-sm font-light">
                        Building on @NexusWeb3 is a breeze. Their dev tools are top-notch. Excited for what&apos;s coming! #buidl
                    </p>
                </div>
            </div>
            <div className="w-full flex items-center justify-between md:hidden pt-8">
                <div id="prev" className="flex gap-1 bg-white w-fit py-2 px-3 items-center cursor-pointer">
                    <ArrowBigLeft />
                    <p className="capitalize text-sm">prev</p>
                </div>
                <div id="next" className="flex gap-1 bg-white w-fit py-2 px-3 items-center cursor-pointer">
                    <p className="capitalize text-sm">next</p>
                    <ArrowBigRight />
                </div>
            </div>
        </div>
            <button className="callToAction mx-auto text-[16px] w-fit font-medium bg-white text-[#272727] uppercase py-[13px] px-[30px] border border-solid border-[#CBCBCB]">join community</button>
        </section>
        <section className="flex flex-col w-full px-[20px] pt-4 pb-20 gap-10">
            <h1 className="text-[13px] uppercase text-center">Stay Updated on the Web3 Revolution</h1>
            <h1 className="text-[13px] uppercase text-center">Get the latest news, updates, and exclusive offers straight to your inbox</h1>
            <div className="flex flex-row bg-white w-[300px] md:w-[450px] mx-auto">
                <input className="outline-none text-[13px] py-[10px] px-3 flex-1" type="email" name="email" placeholder="EMAIL" id="" />
                <button className="uppercase text-[13px] bg-[#FF3A3A] text-white p-2" type="submit">submit</button>
            </div>
        </section>
    </div>
  )
}

export default Home