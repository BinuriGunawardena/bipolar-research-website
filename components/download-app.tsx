"use client"

import Image from "next/image"

export function DownloadApp() {
  return (
    <section
      id="download"
      className="relative py-24 px-6 text-white text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/website1.jpeg')`,
      }}
    >
      {/* Overlay for dark gradient effect */}
      <div className="absolute inset-0 bg-[#0d0b23]/80 backdrop-blur-sm" />

      {/* Content over background */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2
          className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-slide-in-down font-serif tracking-wide drop-shadow-lg"
        >
          Download Our App
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Scan the QR code below to download the BipoLink mobile app for Android.
        </p>

        <div className="flex justify-center mb-4">
          <Image
            src="/images/BipoLinkQR.png"
            alt="QR Code to download app"
            width={200}
            height={200}
            className="rounded-lg shadow-lg border border-white/10"
          />
        </div>

        <p className="text-sm text-gray-300">
          Don’t have a QR scanner?{" "}
          <a
            href="https://qrco.de/bg1rP9"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-300"
          >
            Click here to download the APK
          </a>
        </p>
      </div>
    </section>
  )
}
