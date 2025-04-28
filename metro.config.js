const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const path = require('path'); // Importa el módulo 'path' para manejar rutas

// Obtén la configuración predeterminada de Metro
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

// Configura el alias '@' para la raíz del proyecto
config.resolver = {
    ...config.resolver,
    extraNodeModules: {
        ...config.resolver.extraNodeModules,
        '@': path.resolve(__dirname), // Apunta '@' a la raíz del proyecto
    },
};

module.exports = withNativeWind(config, { input: './global.css' });