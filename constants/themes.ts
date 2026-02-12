export const DEADPOOL_THEME = {
    name: 'deadpool' as const,
    primary: '#E62429',
    secondary: '#1A1A1A',
    accent: '#FF4444',
    background: '#0A0A0A',
    surface: '#1A1A1A',
    surfaceLight: '#2A2A2A',
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
    gradient: ['#E62429', '#8B0000'],
    glow: 'rgba(230, 36, 41, 0.6)',
    inputBg: '#1A1A1A',
    inputBorder: '#E62429',
    buttonBg: '#E62429',
    buttonText: '#FFFFFF',
    chatBubbleUser: '#E62429',
    chatBubbleBot: '#2A2A2A',
    heroImage: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&q=80',
    mascotImage: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&q=80',
  };
  
  export const HACKER_THEME = {
  name: 'hacker' as const,

  // Deep cinematic green (not neon)
  primary: '#00C16A',
  secondary: '#0C1117',

  accent: '#00A86B',

  // Not pure black — slightly lifted dark
  background: '#0A0F14',

  surface: '#111827',       // dark slate
  surfaceLight: '#1F2937',

  // Soft readable green
  text: '#A7F3D0',
  textSecondary: '#6EE7B7',

  gradient: ['#00C16A', '#009E60'],

  // Very subtle glow
  glow: 'rgba(0, 193, 106, 0.25)',

  inputBg: '#111827',
  inputBorder: '#1F2937',

  buttonBg: '#00C16A',
  buttonText: '#04130D',

  chatBubbleUser: '#064E3B',
  chatBubbleBot: '#1F2937',

  heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
  mascotImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
};

  
  export type ThemeType = typeof DEADPOOL_THEME | typeof HACKER_THEME;
  export type ThemeName = 'deadpool' | 'hacker';
  