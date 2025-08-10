import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = 'public/assets';
const outputDir = 'public/assets/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  try {
    console.log('🔄 Starting image optimization...');
    
    const files = await imagemin([`${inputDir}/**/*.{jpg,jpeg,png}`], {
      destination: outputDir,
      plugins: [
        // Optimize JPEG
        imageminMozjpeg({
          quality: 80,
          progressive: true
        }),
        // Optimize PNG
        imageminPngquant({
          quality: [0.6, 0.8],
          speed: 4
        }),
        // Convert to WebP
        imageminWebp({
          quality: 80,
          method: 6
        })
      ]
    });

    console.log(`✅ Optimized ${files.length} images`);
    console.log(`📁 Output saved to: ${outputDir}`);
    
    // Create a mapping file for easy reference
    const mapping = {};
    files.forEach(file => {
      const relativePath = path.relative(outputDir, file.destinationPath);
      mapping[relativePath] = file.destinationPath;
    });
    
    fs.writeFileSync(
      path.join(outputDir, 'image-mapping.json'), 
      JSON.stringify(mapping, null, 2)
    );
    
    console.log('📋 Image mapping saved to image-mapping.json');
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeImages();
