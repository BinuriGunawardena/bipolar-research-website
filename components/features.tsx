export function MainComponents() {
    return (
        <section
            id="main-components"
            className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        >
            <div className="max-w-5xl mx-auto">
                <div className="mb-12 text-center animate-fade-in">
                    <h2 className="text-5xl font-semibold text-gray-900 mb-4">
                        Core Components of Our Research
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our solution is built upon three key components that work together to deliver holistic monitoring and analysis for bipolar disorder management.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Component 1: Browser Activity */}
                    <div className="text-center group animate-slide-up">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-2xl font-bold">🌐</span>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                            Video Emotion Capturing
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm mb-2">
                            This component explores the development of an AI-powered emotion recognition system using text and video data. The system aims to identify and analyze emotions in real-time, enhancing understanding and interaction in various applications.

                        </p>
                        <p className="text-gray-500 text-xs">
                            Enables the system to monitor mood trends visually with minimal user input.
                        </p>
                    </div>

                    {/* Component 2: Audio Emotion */}
                    <div className="text-center group animate-slide-up" style={{ animationDelay: "200ms" }}>
                        <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-2xl font-bold">🎤</span>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                            Passive Data Capture
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm mb-2">
                            This work introduces an innovative system designed to predict mood changes and activity through the analysis of multiple passive data sources, offering personalized interventions.

                        </p>
                        <p className="text-gray-500 text-xs">
                            Offers continuous, context-aware emotional feedback without explicit prompts.
                        </p>
                    </div>

                    {/* Component 3: Physical Activity */}
                    <div className="text-center group animate-slide-up" style={{ animationDelay: "400ms" }}>
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-2xl font-bold">🏃‍♀️</span>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                            Recommendation Engine
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm mb-2">
                            This component explores the development of a revolutionary recommendation engine designed to empower users with personalized activities for managing their mental well-being. The engine utilizes advanced machine learning algorithms to deliver dynamic and adaptive recommendations tailored to individual needs.

                        </p>
                        <p className="text-gray-500 text-xs">
                            Provides personalized suggestions to support daily wellbeing.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
