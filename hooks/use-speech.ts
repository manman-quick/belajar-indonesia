import { useState, useCallback } from "react";
import * as Speech from "expo-speech";
import { Platform } from "react-native";

/**
 * Hook for Indonesian TTS (Text-to-Speech) using expo-speech.
 * Uses Indonesian language code "id-ID" for proper pronunciation.
 */
export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = useCallback(async (text: string) => {
    try {
      // Stop any ongoing speech first
      const speaking = await Speech.isSpeakingAsync();
      if (speaking) {
        await Speech.stop();
      }

      setIsSpeaking(true);
      Speech.speak(text, {
        language: "id-ID",
        rate: Platform.OS === "web" ? 0.9 : 0.85,
        pitch: 1.0,
        onDone: () => setIsSpeaking(false),
        onStopped: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false),
      });
    } catch {
      setIsSpeaking(false);
    }
  }, []);

  const stop = useCallback(async () => {
    await Speech.stop();
    setIsSpeaking(false);
  }, []);

  return { speak, stop, isSpeaking };
}
