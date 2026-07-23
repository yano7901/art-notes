# 🎨 Art Notes - Piano to Color

A creative web app that converts piano notes into colors! Play musical notes and watch unique colors appear based on the frequency and theme of each note.

## 🎯 Concept

Art Notes bridges music and visual art by mapping piano notes to colors:
- **Low notes** (C, D, E) → **Warm colors** (Red, Orange, Yellow) 
- **Mid notes** (F, G, A, B) → **Neutral colors** (Green, Brown)
- **High notes** (C5 and above) → **Cool colors** (Blue, Purple)

## 🚀 How to Use

1. **Open the app** in your web browser
2. **Click any piano key** to play a note
3. **Watch the color change** based on the note's frequency
4. **Experiment** by playing different notes to see different colors!

### Keyboard Controls (Optional)

Use your computer keyboard to play:
- **White Keys:** Z, X, C, V, B, N, M, , (comma)
- **Black Keys:** S, D, G, H, J

## 🎹 Features (v1)

- ✅ Interactive piano keyboard (8 white keys + 5 black keys)
- ✅ Real-time color generation based on note frequency
- ✅ Audio playback using Web Audio API (Tone.js)
- ✅ Beautiful, responsive UI
- ✅ Keyboard support for computer keys

## 🛠 Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript** - Logic and interactivity
- **Tone.js** - Web Audio API wrapper for sound generation

## 📁 Project Structure

```
art-notes/
├── index.html      # Main HTML file with piano keyboard
├── style.css       # Styling for the app
├── script.js       # JavaScript logic for notes and colors
└── README.md       # This file
```

## 🎓 How the Color Mapping Works

Each piano note has a specific frequency (Hz). This app:
1. Takes the frequency of the played note
2. Normalizes it to a value between 0-1
3. Converts it to a HSL color (Hue, Saturation, Lightness)
4. Displays the resulting color in real-time

**Example:**
- C4 (261.63 Hz) → Red (#FF0000)
- G4 (392 Hz) → Green (#00FF00)
- C5 (523.25 Hz) → Blue (#0000FF)

## 🚀 Future Ideas (v2, v3, etc.)

- [ ] Save generated color sequences as images
- [ ] Record and replay sequences
- [ ] Multiple instruments (flute, violin, etc.)
- [ ] Chord support
- [ ] MIDI keyboard input
- [ ] Animation based on rhythm
- [ ] Export artwork as PNG/SVG
- [ ] Music visualization patterns

## 📝 License

MIT License - Feel free to use, modify, and share!

## 👨‍💻 Author

Created by yano7901

---

**Have fun creating art with music! 🎵🎨**
