{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "nextjs-development-env";
  
  buildInputs = with pkgs; [
    # Runtime de Node.js
    nodejs_20
    
    # Gestores de paquetes
    nodePackages.npm
    nodePackages.yarn
    nodePackages.pnpm
    
    # TypeScript y herramientas de desarrollo
    nodePackages.typescript
    nodePackages.typescript-language-server
    nodePackages.eslint
    nodePackages.prettier
    
    # Herramientas modernas
    bat          # cat mejorado
    eza          # ls mejorado
    ripgrep      # grep mejorado
    fd           # find mejorado
  ];
  
  shellHook = ''
    clear

    echo "⚡ Entorno Next.js especializado activado!"
    echo "📦 Node.js: $(node --version)"
    echo "📦 npm: $(npm --version)"
    echo "📦 TypeScript: $(tsc --version || echo 'Disponible')"
    
    # Configurar paths importantes
    export PATH="./node_modules/.bin:$PATH"
    export NODE_ENV=development
    
    # Crear directorios de cache
    mkdir -p .npm-cache .next-cache
    
    echo ""
    echo "🚀 Comandos de inicio rápido para Next.js:"
    echo "  npx create-next-app@latest mi-app --typescript --tailwind --eslint --app"
    echo "  # o:"
    echo "  npm create next-app@latest mi-app -- --typescript --tailwind --eslint --app"
    echo ""
    echo "📁 Para proyectos existentes:"
    echo "  npm install    # Instalar dependencias"
    echo "  npm run dev    # Iniciar servidor de desarrollo"
    echo "  npm run build  # Build para producción"
    echo "  npm run start  # Iniciar servidor de producción"
    echo ""
    echo "🎨 Next.js incluye:"
    echo "  ✅ TypeScript"
    echo "  ✅ Tailwind CSS"
    echo "  ✅ ESLint"
    echo "  ✅ App Router (nuevo)"
    echo ""
  '';
  
  # Variables de entorno
  env = {
    NPM_CONFIG_CACHE = "./.npm-cache";
    NEXT_TELEMETRY_DISABLED = "1";
  };
  
  NIX_SHELL_PRESERVE_PROMPT = 1;
}