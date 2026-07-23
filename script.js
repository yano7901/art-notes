// Piano frequency data for all 88 keys
// Standard piano: A0 (27.5 Hz) to C8 (4186.01 Hz)
const pianoNotes = [
    // Octave 0
    { note: 'A0', freq: 27.5, isBlack: false },
    { note: 'A#0', freq: 29.14, isBlack: true },
    { note: 'B0', freq: 30.87, isBlack: false },
    
    // Octave 1
    { note: 'C1', freq: 32.70, isBlack: false },
    { note: 'C#1', freq: 34.65, isBlack: true },
    { note: 'D1', freq: 36.71, isBlack: false },
    { note: 'D#1', freq: 38.89, isBlack: true },
    { note: 'E1', freq: 41.20, isBlack: false },
    { note: 'F1', freq: 43.65, isBlack: false },
    { note: 'F#1', freq: 46.25, isBlack: true },
    { note: 'G1', freq: 49.00, isBlack: false },
    { note: 'G#1', freq: 51.96, isBlack: true },
    { note: 'A1', freq: 55.00, isBlack: false },
    { note: 'A#1', freq: 58.27, isBlack: true },
    { note: 'B1', freq: 61.74, isBlack: false },
    
    // Octave 2
    { note: 'C2', freq: 65.41, isBlack: false },
    { note: 'C#2', freq: 69.30, isBlack: true },
    { note: 'D2', freq: 73.42, isBlack: false },
    { note: 'D#2', freq: 77.78, isBlack: true },
    { note: 'E2', freq: 82.41, isBlack: false },
    { note: 'F2', freq: 87.31, isBlack: false },
    { note: 'F#2', freq: 92.50, isBlack: true },
    { note: 'G2', freq: 98.00, isBlack: false },
    { note: 'G#2', freq: 103.83, isBlack: true },
    { note: 'A2', freq: 110.00, isBlack: false },
    { note: 'A#2', freq: 116.54, isBlack: true },
    { note: 'B2', freq: 123.47, isBlack: false },
    
    // Octave 3
    { note: 'C3', freq: 130.81, isBlack: false },
    { note: 'C#3', freq: 138.59, isBlack: true },
    { note: 'D3', freq: 146.83, isBlack: false },
    { note: 'D#3', freq: 155.56, isBlack: true },
    { note: 'E3', freq: 164.81, isBlack: false },
    { note: 'F3', freq: 174.61, isBlack: false },
    { note: 'F#3', freq: 185.00, isBlack: true },
    { note: 'G3', freq: 196.00, isBlack: false },
    { note: 'G#3', freq: 207.65, isBlack: true },
    { note: 'A3', freq: 220.00, isBlack: false },
    { note: 'A#3', freq: 233.08, isBlack: true },
    { note: 'B3', freq: 246.94, isBlack: false },
    
    // Octave 4
    { note: 'C4', freq: 261.63, isBlack: false },
    { note: 'C#4', freq: 277.18, isBlack: true },
    { note: 'D4', freq: 293.66, isBlack: false },
    { note: 'D#4', freq: 311.13, isBlack: true },
    { note: 'E4', freq: 329.63, isBlack: false },
    { note: 'F4', freq: 349.23, isBlack: false },
    { note: 'F#4', freq: 369.99, isBlack: true },
    { note: 'G4', freq: 392.00, isBlack: false },
    { note: 'G#4', freq: 415.30, isBlack: true },
    { note: 'A4', freq: 440.00, isBlack: false },
    { note: 'A#4', freq: 466.16, isBlack: true },
    { note: 'B4', freq: 493.88, isBlack: false },
    
    // Octave 5
    { note: 'C5', freq: 523.25, isBlack: false },
    { note: 'C#5', freq: 554.37, isBlack: true },
    { note: 'D5', freq: 587.33, isBlack: false },
    { note: 'D#5', freq: 622.25, isBlack: true },
    { note: 'E5', freq: 659.25, isBlack: false },
    { note: 'F5', freq: 698.46, isBlack: false },
    { note: 'F#5', freq: 739.99, isBlack: true },
    { note: 'G5', freq: 784.00, isBlack: false },
    { note: 'G#5', freq: 830.61, isBlack: true },
    { note: 'A5', freq: 880.00, isBlack: false },
    { note: 'A#5', freq: 932.33, isBlack: true },
    { note: 'B5', freq: 987.77, isBlack: false },
    
    // Octave 6
    { note: 'C6', freq: 1046.50, isBlack: false },
    { note: 'C#6', freq: 1108.73, isBlack: true },
    { note: 'D6', freq: 1174.66, isBlack: false },
    { note: 'D#6', freq: 1244.51, isBlack: true },
    { note: 'E6', freq: 1318.51, isBlack: false },
    { note: 'F6', freq: 1396.91, isBlack: false },
    { note: 'F#6', freq: 1479.98, isBlack: true },
    { note: 'G6', freq: 1568.00, isBlack: false },
    { note: 'G#6', freq: 1661.22, isBlack: true },
    { note: 'A6', freq: 1760.00, isBlack: false },
    { note: 'A#6', freq: 1864.66, isBlack: true },
    { note: 'B6', freq: 1975.53, isBlack: false },
    
    // Octave 7
    { note: 'C7', freq: 2093.00, isBlack: false },
    { note: 'C#7', freq: 2217.46, isBlack: true },
    { note: 'D7', freq: 2349.32, isBlack: false },
    { note: 'D#7', freq: 2489.02, isBlack: true },
    { note: 'E7', freq: 2637.02, isBlack: false },
    { note: 'F7', freq: 2793.83, isBlack: false },
    { note: 'F#7', freq: 2959.96, isBlack: true },
    { note: 'G7', freq: 3136.00, isBlack: false },
    { note: 'G#7', freq: 3322.44, isBlack: true },
    { note: 'A7', freq: 3520.00, isBlack: false },
    { note: 'A#7', freq: 3729.31, isBlack: true },
    { note: 'B7', freq: 3951.07, isBlack: false },
    
    // Octave 8
    { note: 'C8', freq: 4186.01, isBlack: false }
];

// Initialize Tone.js synth
const synth = new Tone.Synth({
    oscillator: { type: 'triangle' },
    envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.3,
        release: 1,
    },
}).toDestination();

// Function to convert frequency to RGB color
function frequencyToColor(frequency) {
    const minFreq = 27.5;   // A0
    const maxFreq = 4186.01; // C8
    
    // Normalize frequency to 0-1
    const normalized = (frequency - minFreq) / (maxFreq - minFreq);
    
    // Map to hue (0-360 degrees)
    const hue = normalized * 360;
    
    // Use full saturation and 70% lightness for vibrant colors
    const saturation = 100;
    const lightness = 60;
    
    // Convert HSL to RGB
    return hslToRgb(hue, saturation, lightness);
}

// Convert HSL to RGB
function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    
    const r = Math.round(f(0) * 255);
    const g = Math.round(f(8) * 255);
    const b = Math.round(f(4) * 255);
    
    return `rgb(${r}, ${g}, ${b})`;
}

// Handle key press
function playNote(frequency, noteName) {
    // Play the sound
    synth.triggerAttackRelease(frequency, '0.5');
    
    // Update color
    const color = frequencyToColor(frequency);
    const colorBox = document.getElementById('colorBox');
    const noteLabel = document.getElementById('noteLabel');
    
    colorBox.style.backgroundColor = color;
    noteLabel.textContent = `${noteName} - ${color}`;
}

// Generate piano keys with proper layout
function generatePianoKeys() {
    const keysContainer = document.getElementById('whiteKeysContainer');
    const pianoContainer = document.querySelector('.piano');
    
    // Create all keys in order (white and black mixed)
    pianoNotes.forEach((noteData, index) => {
        const button = document.createElement('button');
        button.className = `key ${noteData.isBlack ? 'black-key' : 'white-key'}`;
        button.setAttribute('data-note', noteData.note);
        button.setAttribute('data-freq', noteData.freq);
        button.setAttribute('data-black', noteData.isBlack);
        button.textContent = noteData.note;
        
        button.addEventListener('click', () => {
            playNote(noteData.freq, noteData.note);
            button.style.opacity = '0.7';
            setTimeout(() => {
                button.style.opacity = '1';
            }, 100);
        });
        
        keysContainer.appendChild(button);
    });
}

// Initialize keyboard support
const keyboardMap = {
    'z': 'C4', 'x': 'D4', 'c': 'E4', 'v': 'F4', 'b': 'G4', 'n': 'A4', 'm': 'B4',
    's': 'C#4', 'd': 'D#4', 'g': 'F#4', 'h': 'G#4', 'j': 'A#4'
};

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (keyboardMap[key]) {
        const noteName = keyboardMap[key];
        const noteButton = document.querySelector(`[data-note="${noteName}"]`);
        if (noteButton) {
            const freq = parseFloat(noteButton.getAttribute('data-freq'));
            playNote(freq, noteName);
        }
    }
});

// Generate the piano when the page loads
document.addEventListener('DOMContentLoaded', () => {
    generatePianoKeys();
    console.log('Art Notes 88-key piano is ready!');
});
