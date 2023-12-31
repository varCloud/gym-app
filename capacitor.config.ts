import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'methods',
  webDir: 'dist/methods',
  server: {
    androidScheme: 'https'
  }
};

export default config;
