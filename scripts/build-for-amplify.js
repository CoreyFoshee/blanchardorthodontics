const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Amplify build process...');

try {
  // Run the Next.js build
  console.log('📦 Building Next.js application...');
  execSync('npm run build', { stdio: 'inherit' });

  // Check if required-server-files.json exists
  const requiredServerFilesPath = path.join('.next', 'required-server-files.json');
  
  if (!fs.existsSync(requiredServerFilesPath)) {
    console.log('⚠️  required-server-files.json not found, creating a minimal version...');
    
    // Create a minimal required-server-files.json
    const minimalRequiredFiles = {
      version: 4,
      files: [
        'server/pages-manifest.json',
        'server/build-manifest.json',
        'server/prerender-manifest.json',
        'server/routes-manifest.json',
        'server/app-paths-manifest.json',
        'server/app-build-manifest.json',
        'server/font-manifest.json',
        'server/next-font-manifest.json',
        'server/next-server.js.nft.json',
        'server/trace',
        'server/static',
        'server/chunks',
        'server/pages',
        'server/app'
      ],
      directories: [
        'server/static',
        'server/chunks',
        'server/pages',
        'server/app'
      ]
    };

    fs.writeFileSync(requiredServerFilesPath, JSON.stringify(minimalRequiredFiles, null, 2));
    console.log('✅ Created required-server-files.json');
  } else {
    console.log('✅ required-server-files.json found');
  }

  // Copy required-server-files.json to root for Amplify
  const rootRequiredFilesPath = 'required-server-files.json';
  if (fs.existsSync(requiredServerFilesPath)) {
    fs.copyFileSync(requiredServerFilesPath, rootRequiredFilesPath);
    console.log('✅ Copied required-server-files.json to root directory');
  }

  console.log('🎉 Amplify build process completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 