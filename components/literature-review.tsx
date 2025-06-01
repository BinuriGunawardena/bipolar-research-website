"use client"

export function LiteratureReview() {
  return (
    <section id="literature" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        <h2
          className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-slide-in-down font-serif tracking-tight  decoration-purple-300 decoration-4 underline-offset-8"
        >
          Literature Review
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify space-y-6">
          Emotion recognition has gained significant attention in recent years, with various approaches being explored to analyze human emotions using video and audio data.
          Previous research efforts have primarily focused on post-processing techniques where users manually record and upload their data for analysis. However, these methods often fail to capture real-time emotional states due to user awareness and intentional expression control.
          <br /><br />
          Studies <sup>[1][2]</sup> proposed a method where users record their video using a mobile phone and then upload it for emotion prediction. While this enables detection via facial expressions, user awareness may affect the genuineness of emotional reactions. Our system avoids this by integrating a real-time AI assistant, encouraging spontaneous interaction.
          <br /><br />
          In audio-based emotion recognition, past efforts relied on phone call recordings <sup>[3]</sup>, raising privacy concerns. Our solution avoids this by analyzing voice tone, pitch, and rhythm in ethical, user-consented conversations with the assistant.
          <br /><br />
          Most mental health tech lacks personalized, dynamic interventions. Traditional systems focus on static tracking, whereas our approach adapts in real-time based on historical and multi-modal data <sup>[2][4]</sup>.
          <br /><br />
          Using data fusion, we combine speech, video, browsing, and motion data. Deep learning models like LSTM and CNNs enhance prediction accuracy by analyzing patterns across modalities. Ensemble methods ensure robustness even with partial data <sup>[5][6]</sup>.
          <br /><br />
          This real-time, adaptive, and privacy-conscious approach bridges the gap between emotion detection and actionable mental health support <sup>[7]</sup>.
        </p>
      </div>
    </section>
  );
}
