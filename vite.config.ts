import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

const viteVersionPlugin = (): Plugin => {
  return {
    name: "vite-version-plugin",
    config(_, env) {
      if (env) {
        return {
          define: {
            "import.meta.env.APP_VERSION": JSON.stringify(
              process.env.npm_package_version
            ),
          },
        };
      }
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteVersionPlugin(),
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "My Awesome App",
        short_name: "MyApp",
        description: "My Awesome App description",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    react(),
  ],
});
