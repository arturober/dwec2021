/* eslint-disable @typescript-eslint/naming-convention */
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.arturober.capacitor',
  appName: 'Ionic Capacitor',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      androidClientId: '746820501392-nc4pet9ffnm8gq8hg005re9e6ho65nua.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
