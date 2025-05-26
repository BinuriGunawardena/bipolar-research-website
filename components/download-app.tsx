"use client"

import Image from "next/image"

export function DownloadApp() {
  return (
    <section id="download" className="py-20 px-6 bg-gradient-to-br from-[#1a1c33] via-[#212443] to-[#292b4d] text-white text-center">
      <h2 className="text-4xl font-semibold mb-6">Download Our App</h2>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Scan the QR code below to download the BipoLink mobile app for Android.
      </p>
      <div className="flex justify-center">
        <Image
          src="/images/BipoLinkQR.png" 
          alt="QR Code to download app"
          width={200}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="mt-4 text-sm text-gray-300">
        Don’t have a QR scanner? <a href="https://qrco.de/bg1oV0" target="_blank" className="underline text-blue-400">Click here to download</a>
      </p>
    </section>
  )
}
