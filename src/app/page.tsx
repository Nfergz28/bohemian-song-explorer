"use client";

import { useState } from "react";
import { songs } from "../data/songs";

export default function Home() {
  const [selectedSong, setSelectedSong] = useState<number | null>(null);

  return (
    <main className="min-h-screen p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">
        🎵 Bohemian Rhapsody Song Explorer
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {/* SONG LIST */}
        <div>
          <h2 className="text-xl mb-4">Songs</h2>

          {songs.map((song, index) => (
            <button
              key={index}
              onClick={() => setSelectedSong(index)}
              className="block w-full text-left p-3 mb-2 bg-gray-800 hover:bg-gray-700 rounded"
            >
              {song.title}
            </button>
          ))}
        </div>

        {/* DETAILS PANEL */}
        <div>
          <h2 className="text-xl mb-4">Details</h2>

          {selectedSong !== null ? (
            <div className="bg-gray-900 p-4 rounded">
              <h3 className="text-2xl font-semibold mb-2">
                {songs[selectedSong].title}
              </h3>

              {/* 🎥 YOUTUBE VIDEO */}
              <div className="mb-4">
                <iframe
                  width="100%"
                  height="250"
                  src={`https://www.youtube.com/embed/${songs[selectedSong].youtubeId}?start=${songs[selectedSong].start}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded"
                ></iframe>
              </div>

              <p>
                <strong>🧠 Meaning:</strong> {songs[selectedSong].meaning}
              </p>

              <p>
                <strong>🌍 Impact:</strong> {songs[selectedSong].impact}
              </p>
            </div>
          ) : (
            <p>Select a song to see details</p>
          )}
        </div>
      </div>
    </main>
  );
}