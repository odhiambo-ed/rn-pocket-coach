# RN Pocket Coach

A personal finance + habit tracking mobile app built with React Native (Expo) and TailwindCSS.

## Tech Stack

- **React Native** (Expo SDK 54)
- **TypeScript** for type safety
- **NativeWind** (TailwindCSS for React Native)

## Getting Started

### Prerequisites

- Node.js (18.x or later)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/odhiambo-ed/rn-pocket-coach.git
cd rn-pocket-coach
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

### Running the app

- **iOS Simulator**: `npm run ios`
- **Android Emulator**: `npm run android`
- **Web Browser**: `npm run web`

Or scan the QR code with the Expo Go app on your mobile device.

## Project Structure

```
rn-pocket-coach/
├── App.tsx              # Main application component
├── app.json             # Expo configuration
├── babel.config.js      # Babel configuration with NativeWind
├── global.css           # TailwindCSS global styles
├── index.ts             # App entry point
├── metro.config.js      # Metro bundler configuration
├── nativewind-env.d.ts  # TypeScript types for NativeWind
├── package.json         # Project dependencies
├── tailwind.config.js   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
└── assets/              # Static assets (icons, splash screen)
```

## Features (Planned)

- [ ] Expense tracking
- [ ] Income management
- [ ] Budget planning
- [ ] Habit tracking
- [ ] Progress visualization
- [ ] Daily reminders

## License

MIT
