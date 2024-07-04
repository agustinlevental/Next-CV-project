const nextJest = require('next/jest')

// Proporciona la ruta a tu aplicación Next.js para habilitar la carga de next.config.js y archivos .env
const createJestConfig = nextJest({ dir: './' })

// Configuración personalizada de Jest
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  verbose: true,
}

// Exporta createJestConfig de esta manera para asegurar que next/jest pueda cargar la configuración de Next.js, que es asíncrona
module.exports = createJestConfig(customJestConfig)
