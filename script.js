// Piano frequency data for all 88 keys
// Standard piano: A0 (27.5 Hz) to C8 (4186.01 Hz)
const pianoNotes = [
    // Octave 0
    { note: 'A0', freq: 27.5 },
    { note: 'A#0', freq: 29.14 },
    { note: 'B0', freq: 30.87 },
    
    // Octave 1
    { note: 'C1', freq: 32.70 },
    { note: 'C#1', freq: 34.65 },
    { note: 'D1', freq: 36.71 },
    { note: 'D#1', freq: 38.89 },
    { note: 'E1', freq: 41.20 },
    { note: 'F1', freq: 43.65 },
    { note: 'F#1', freq: 46.25 },
    { note: 'G1', freq: 49.00 },
    { note: 'G#1', freq: 51.96 },
    { note: 'A1', freq: 55.00 },
    { note: 'A#1', freq: 58.27 },
    { note: 'B1', freq: 61.74 },
    
    // Octave 2
    { note: 'C2', freq: 65.41 },
    { note: 'C#2', freq: 69.30 },
    { note: 'D2', freq: 73.42 },
    { note: 'D#2', freq: 77.78 },
    { note: 'E2', freq: 82.41 },
    { note: 'F2', freq: 87.31 },
    { note: 'F#2', freq: 92.50 },
    { note: 'G2', freq: 98.00 },
    { note: 'G#2', freq: 103.83 },
    { note: 'A2', freq: 110.00 },
    { note: 'A#2', freq: 116.54 },
    { note: 'B2', freq: 123.47 },
    
    // Octave 3
    { note: 'C3', freq: 130.81 },
    { note: 'C#3', freq: 138.59 },
    { note: 'D3', freq: 146.83 },
    { note: 'D#3', freq: 155.56 },
    { note: 'E3', freq: 164.81 },
    { note: 'F3', freq: 174.61 },
    { note: 'F#3', freq: 185.00 },
    { note: 'G3', freq: 196.00 },
    { note: 'G#3', freq: 207.65 },
    { note: 'A3', freq: 220.00 },
    { note: 'A#3', freq: 233.08 },
    { note: 'B3', freq: 246.94 },
    
    // Octave 4
    { note: 'C4', freq: 261.63 },
    { note: 'C#4', freq: 277.18 },
    { note: 'D4', freq: 293.66 },
    { note: 'D#4', freq: 311.13 },
    { note: 'E4', freq: 329.63 },
    { note: 'F4', freq: 349.23 },
    { note: 'F#4', freq: 369.99 },
    { note: 'G4', freq: 392.00 },
    { note: 'G#4', freq: 415.30 },
    { note: 'A4', freq: 440.00 },
    { note: 'A#4', freq: 466.16 },
    { note: 'B4', freq: 493.88 },
    
    // Octave 5
    { note: 'C5', freq: 523.25 },
    { note: 'C#5', freq: 554.37 },
    { note: 'D5', freq: 587.33 },
    { note: 'D#5', freq: 622.25 },
    { note: 'E5', freq: 659.25 },
    { note: 'F5', freq: 698.46 },
    { note: 'F#5', freq: 739.99 },
    { note: 'G5', freq: 784.00 },
    { note: 'G#5', freq: 830.61 },
    { note: 'A5', freq: 880.00 },
    { note: 'A#5', freq: 932.33 },
    { note: 'B5', freq: 987.77 },
    
    // Octave 6
    { note: 'C6', freq: 1046.50 },
    { note: 'C#6', freq: 1108.73 },
    { note: 'D6', freq: 1174.66 },
    { note: 'D#6', freq: 1244.51 },
    { note: 'E6', freq: 1318.51 },
    { note: 'F6', freq: 1396.91 },
    { note: 'F#6', freq: 1479.98 },
    { note: 'G6', freq: 1568.00 },
    { note: 'G#6', freq: 1661.22 },
    { note: 'A6', freq: 1760.00 },
    { note: 'A#6', freq: 1864.66 },
    { note: 'B6', freq: 1975.53 },
    
    // Octave 7
    { note: 'C7', freq: 2093.00 },
    { note: 'C#7', freq: 2217.46 },
    { note: 'D7', freq: 2349.32 },
    { note: 'D#7', freq: 2489.02 },
    { note: 'E7', freq: 2637.02 },
    { note: 'F7', freq: 2793.83 },
    { note: 'F#7', freq: 2959.96 },
    { note: 'G7', freq: 3136.00 },
    { note: 'G#7', freq: 3322.44 },
    { note: 'A7', freq: 3520.00 },
    { note: 'A#7', freq: 3729.31 },
    { note: 'B7', freq: 3951.07 },
    
    // Octave 8
    { note: 'C8', freq: 4186.01 }
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

// Generate piano keys
function generatePianoKeys() {
    const whiteKeysContainer = document.getElementById('whiteKeysContainer');
    const blackKeysContainer = document.getElementById('blackKeysContainer');
    
    // White keys (C, D, E, F, G, A, B pattern)
    const whiteKeyNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const blackKeyPattern = [true, false, true, true, false, true, false]; // Which positions have black keys to the right
    
    let blackKeyOffset = 0;
    let blackKeyPositions = [];
    
    // Generate white keys
    pianoNotes.forEach((noteData, index) => {
        const noteLetter = noteData.note.replace(/\d/g, ''); // Remove octave number
        
        if (whiteKeyNotes.includes(noteLetter)) {
            const whiteKey = document.createElement('button');
            whiteKey.className = 'key white-key';
            whiteKey.setAttribute('data-note', noteData.note);
            whiteKey.setAttribute('data-freq', noteData.freq);
            whiteKey.textContent = noteData.note;
            
            whiteKey.addEventListener('click', () => {
                playNote(noteData.freq, noteData.note);
                whiteKey.style.opacity = '0.7';
                setTimeout(() => {
                    whiteKey.style.opacity = '1';
                }, 100);
            });
            
            whiteKeysContainer.appendChild(whiteKey);
            blackKeyPositions.push(whiteKeysContainer.children.length - 1);
        }
    });
    
    // Generate black keys
    pianoNotes.forEach((noteData, index) => {
        const noteLetter = noteData.note.replace(/\d/g, '');
        
        if (noteLetter.includes('#')) {
            const blackKey = document.createElement('button');
            blackKey.className = 'key black-key';
            blackKey.setAttribute('data-note', noteData.note);
            blackKey.setAttribute('data-freq', noteData.freq);
            blackKey.textContent = noteData.note;
            
            blackKey.addEventListener('click', () => {
                playNote(noteData.freq, noteData.note);
                blackKey.style.opacity = '0.7';
                setTimeout(() => {
                    blackKey.style.opacity = '1';
                }, 100);
            });
            
            blackKeysContainer.appendChild(blackKey);
        }
    });
}

// Initialize keyboard support
const keyboardMap = {
    'z': 0, 'x': 1, 'c': 2, 'v': 3, 'b': 4, 'n': 5, 'm': 6,
    's': 0, 'd': 1, 'g': 2, 'h': 3, 'j': 4
};

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (keyboardMap[key] !== undefined) {
        const noteIndex = keyboardMap[key];
        const noteButton = document.querySelector(`[data-note="${pianoNotes[noteIndex + 12].note}"]`);
        if (noteButton) {
            const freq = parseFloat(noteButton.getAttribute('data-freq'));
            const note = noteButton.getAttribute('data-note');
            playNote(freq, note);
        }
    }
});

// Generate the piano when the page loads
document.addEventListener('DOMContentLoaded', () => {
    generatePianoKeys();
    console.log('Art Notes 88-key piano is ready!');
});
