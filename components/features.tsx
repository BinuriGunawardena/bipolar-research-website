import React, { useRef, useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export function MainComponents() {
    const [openVideo1, setOpenVideo1] = useState(false);
    const [openVideo2, setOpenVideo2] = useState(false);
    const [openVideo3, setOpenVideo3] = useState(false);

    const handleOpenVideo1 = () => setOpenVideo1(true);
    const handleCloseVideo1 = () => setOpenVideo1(false);

    const handleOpenVideo2 = () => setOpenVideo2(true);
    const handleCloseVideo2 = () => setOpenVideo2(false);

    const handleOpenVideo3 = () => setOpenVideo3(true);
    const handleCloseVideo3 = () => setOpenVideo3(false);

    const videoRef = useRef<HTMLVideoElement | null>(null);

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const videoSources = [
        "/videos/PassiveDataCapture.mp4",
        "/videos/PassiveBrowserCaptureFollowUp.mp4"
    ];

    useEffect(() => {
        if (!openVideo2) {
            setCurrentVideoIndex(0);
        }
    }, [openVideo2]);

    const handleVideoEnded = () => {
        if (currentVideoIndex < videoSources.length - 1) {
            const nextIndex = currentVideoIndex + 1;
            setCurrentVideoIndex(nextIndex);
            const videoElement = videoRef.current;
            if (videoElement) {
                videoElement.src = videoSources[nextIndex];
                videoElement.play();
            }
        }
    };

    return (
        <section
            id="main-components"
            className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        >
            <div className="max-w-5xl mx-auto">
                <div className="mb-12 text-center animate-fade-in">
                    <h2
                        className="text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight drop-shadow-md animate-slide-in-down"
                    >
                        Core Components of Our Research
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our solution is built upon three key components that work together to deliver holistic monitoring and analysis for bipolar disorder management.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Component 1: Emotion */}
                    <div className="text-center group animate-slide-up">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-2xl font-bold">🌐</span>
                        </div>
                        <h3 className="text-xl font-medium text-yellow-600 mb-4 group-hover:text-yellow-400 transition-colors">
                            Video Emotion Capturing
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm mb-2">
                            This component explores the development of an AI-powered emotion recognition system using text and video data. The system aims to identify and analyze emotions in real-time, enhancing understanding and interaction in various applications.

                        </p>
                        <p className="text-gray-500 text-xs mb-6">
                            Enables the system to monitor mood trends visually with minimal user input.
                        </p>
                        <button
                            onClick={handleOpenVideo1}
                            className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm hover:underline transition-all"
                        >
                            <PlayCircleOutlineIcon style={{ fontSize: '1.2rem' }} />
                            View Demo
                        </button>
                    </div>

                    {/* Component 2: Browser */}
                    <div className="text-center group animate-slide-up" style={{ animationDelay: "200ms" }}>
                        <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-2xl font-bold">🎤</span>
                        </div>
                        <h3 className="text-xl font-medium text-pink-600 mb-4 group-hover:text-pink-500 transition-colors">
                            Passive Data Capture
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm mb-2">
                            This component leverages passive data collection techniques to continuously monitor behavioral signals without requiring active user input. By analyzing these patterns in real time, the system can detect early indicators of mood fluctuations, shifts in routine, or signs of social withdrawal.
                        </p>
                        <p className="text-gray-500 text-xs mb-4">
                            This enables a seamless, non-intrusive loop where emotional states are inferred in the background, allowing the system to track timely mental health interventions while respecting user privacy and reducing engagement burden.
                        </p>

                        <button
                            onClick={handleOpenVideo2}
                            className="inline-flex items-center gap-2 text-pink-500 font-medium text-sm hover:underline transition-all"
                        >
                            <PlayCircleOutlineIcon style={{ fontSize: '1.2rem' }} />
                            View Demo
                        </button>
                    </div>

                    {/* Component 3: Recomendations */}
                    <div className="text-center group animate-slide-up" style={{ animationDelay: "400ms" }}>
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-2xl font-bold">🏃‍♀️</span>
                        </div>

                        <h3 className="text-xl font-medium text-green-600 mb-4 group-hover:text-emerald-500 transition-colors">
                            Recommendation Engine
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm mb-2">
                            This component explores the development of a revolutionary recommendation engine designed to empower users with personalized activities for managing their mental well-being. The engine utilizes advanced machine learning algorithms to deliver dynamic and adaptive recommendations tailored to individual needs.
                        </p>
                        <p className="text-gray-500 text-xs mb-4">
                            Provides personalized suggestions to support daily wellbeing.
                        </p>

                        {/* View Demo Button */}
                        <button
                            onClick={handleOpenVideo3}
                            className="inline-flex items-center gap-2 text-green-700 font-medium text-sm hover:underline transition-all"
                        >
                            <PlayCircleOutlineIcon style={{ fontSize: '1.2rem' }} />
                            View Demo
                        </button>
                    </div>

                </div>
            </div>
            <Dialog
                open={openVideo1}
                onClose={handleCloseVideo1}
                maxWidth={false}
                PaperProps={{
                    sx: {
                        width: '320px',
                        maxWidth: '90vw',
                        height: '568px',
                        maxHeight: '90vh',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                    }
                }}
            >
                <DialogTitle
                    sx={{
                        fontSize: '1rem',
                        padding: '8px 16px',
                        textAlign: 'center',
                        flexShrink: 0
                    }}
                >
                    Emotion Recognition Demo
                </DialogTitle>

                <DialogContent
                    sx={{
                        padding: 0,
                        flexGrow: 1
                    }}
                >
                    <video
                        width="100%"
                        height="100%"
                        controls
                        style={{ objectFit: 'cover', borderRadius: '0 0 16px 16px' }}
                    >
                        <source src="/videos/EmotionRecognition.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </DialogContent>
            </Dialog>

            <Dialog
                open={openVideo2}
                onClose={handleCloseVideo2}
                maxWidth={false}
                PaperProps={{
                    sx: {
                        width: '320px',
                        maxWidth: '90vw',
                        height: '568px',
                        maxHeight: '90vh',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                    }
                }}
            >
                <DialogTitle
                    sx={{
                        fontSize: '1rem',
                        padding: '8px 16px',
                        textAlign: 'center',
                        flexShrink: 0
                    }}
                >
                    Passive Data Capture Demo
                </DialogTitle>

                <DialogContent
                    sx={{
                        padding: 0,
                        flexGrow: 1
                    }}
                >
                    <video
                        ref={videoRef}
                        width="100%"
                        height="100%"
                        controls
                        autoPlay
                        onEnded={handleVideoEnded}
                        style={{ objectFit: 'cover', borderRadius: '0 0 16px 16px' }}
                    >
                        <source src={videoSources[currentVideoIndex]} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </DialogContent>
            </Dialog>


            <Dialog
                open={openVideo3}
                onClose={handleCloseVideo3}
                maxWidth={false}
                PaperProps={{
                    sx: {
                        width: '320px',
                        maxWidth: '90vw',
                        height: '568px',
                        maxHeight: '90vh',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                    }
                }}
            >
                <DialogTitle
                    sx={{
                        fontSize: '1rem',
                        padding: '8px 16px',
                        textAlign: 'center',
                        flexShrink: 0
                    }}
                >
                    Recommendation Engine Demo
                </DialogTitle>

                <DialogContent
                    sx={{
                        padding: 0,
                        flexGrow: 1
                    }}
                >
                    <video
                        width="100%"
                        height="100%"
                        controls
                        style={{ objectFit: 'cover', borderRadius: '0 0 16px 16px' }}
                    >
                        <source src="/videos/Recommendations.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </DialogContent>
            </Dialog>


        </section>
    );
}
