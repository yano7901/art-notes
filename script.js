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
    // Map frequency range (261.63 Hz to 523.25 Hz) to hue (0-360 degrees)
    // Low frequencies = warm colors (red/orange)
    // Mid frequencies = neutral colors (green/yellow)
    // High frequencies = cool colors (blue/purple)
    
    const minFreq = 261.63; // C4
    const maxFreq = 523.25; // C5
    
    // Normalize frequency to 0-1
    const normalized = (frequency - minFreq) / (maxFreq - minFreq);
    
    // Map to hue (0-360 degrees)
    // 0 = Red, 60 = Yellow, 120 = Green, 240 = Blue, 300 = Magenta
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

// Function to get note name
function getNoteReadable(frequency) {
    const notes = {
        261.63: 'C4',
        277.18: 'C#4',
        293.66: 'D4',
        311.13: 'D#4',
        329.63: 'E4',
        349.23: 'F4',
        369.99: 'F#4',
        392.00: 'G4',
        415.30: 'G#4',
        440.00: 'A4',
        466.16: 'A#4',
        493.88: 'B4',
        523.25: 'C5'
    };
    
    return notes[frequency] || 'Unknown';
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

// Attach event listeners to all keys
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const frequency = parseFloat(key.getAttribute('data-freq'));
        const noteName = key.getAttribute('data-note');
        playNote(frequency, noteName);
        
        // Visual feedback
        key.style.opacity = '0.7';
        setTimeout(() => {
            key.style.opacity = '1';
        }, 100);
    });
});

// Optional: Keyboard support (map computer keyboard to piano)
const keyboardMap = {
    'z': 'C4',
    'x': 'D4',
    'c': 'E4',
    'v': 'F4',
    'b': 'G4',
    'n': 'A4',
    'm': 'B4',
    ',': 'C5',
    's': 'C#4',
    'd': 'D#4',
    'g': 'F#4',
    'h': 'G#4',
    'j': 'A#4'
};

const frequencyMap = {
    'C4': 261.63,
    'C#4': 277.18,
    'D4': 293.66,
    'D#4': 311.13,
    'E4': 329.63,
    'F4': 349.23,
    'F#4': 369.99,
    'G4': 392.00,
    'G#4': 415.30,
    'A4': 440.00,
    'A#4': 466.16,
    'B4': 493.88,
    'C5': 523.25
};

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (keyboardMap[key]) {
        const noteName = keyboardMap[key];
        const frequency = frequencyMap[noteName];
        playNote(frequency, noteName);
    }
});

console.log('Art Notes is ready! Click the piano keys or use your keyboard (z, x, c, v, b, n, m for white keys, s, d, g, h, j for black keys)');
