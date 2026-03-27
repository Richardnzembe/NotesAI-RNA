# NotesAI-RNA Website

A modern, responsive website for NotesAI-RNA - Smart Notes. Tasks. AI. All in One.

## 🌐 Live Website

This website is hosted on GitHub Pages. Once deployed, it will be available at:
`https://yourusername.github.io/your-repo-name/`

## 📁 Project Structure

```
NotesAI-RNA/
├── index.html          # Landing Page (Home)
├── features.html       # Features Page
├── download.html       # Download Page
├── privacy.html       # Privacy Policy
├── terms.html          # Terms of Service
├── contact.html        # Contact/Support Page
├── css/
│   └── style.css      # Main Stylesheet
├── js/
│   └── main.js        # JavaScript Interactions
├── logo/
│   └── icon-512.png   # App Logo
├── screenshots/
│   ├── 1.png         # App Screenshot 1
│   ├── 2.png         # App Screenshot 2
│   └── 3.png         # App Screenshot 3
└── README.md          # This file
```

## 🚀 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com)
   - Click "New Repository"
   - Name it `notesai-rna-website` (or your preferred name)
   - Choose "Public"
   - Click "Create Repository"

2. **Upload Files**
   - On your repository page, click "uploading an existing file"
   - Drag and drop all the files from this project
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to "Settings" tab
   - Click "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 1-2 minutes for deployment

4. **Get Your URL**
   - Go back to "Pages" section
   - You'll see your live URL: `https://yourusername.github.io/notesai-rna-website/`

### Method 2: Using Git CLI

```bash
# Clone the repository
git clone https://github.com/yourusername/notesai-rna-website.git
cd notesai-rna-website

# Create a new branch for deployment
git checkout -b gh-pages

# Push to GitHub
git push origin gh-pages

# Go to Settings > Pages and select "gh-pages" branch as source
```

### Method 3: Using GitHub Desktop

1. Download [GitHub Desktop](https://desktop.github.com)
2. Add this folder to GitHub Desktop
3. Commit the changes
4. Push to origin
5. Go to Repository Settings → GitHub Pages → Enable

## 🎨 Customization

### Changing the Primary Color
Edit `css/style.css` and find the `--primary` variable:
```css
:root {
    --primary: #2563EB;  /* Change this hex code */
    --primary-hover: #1D4ED8;
}
```

### Updating Contact Information
Edit each HTML file and update the contact details:
- `contact.html` - Main contact page
- Footer on all pages - Links to contact
- `privacy.html` & `terms.html` - Legal pages

### Adding Your APK File
1. Upload your APK file to the repository
2. Edit `download.html`
3. Find the APK download button and update the href:
```html
<a href="your-apk-file.apk" class="btn btn-primary">
    📥 Download APK
</a>
```

### Adding Google Play Store Link
Edit `download.html` and update the Play Store link:
```html
<a href="https://play.google.com/store/your-app-link" class="btn btn-secondary">
    🏪 View on Play Store
</a>
```

## 📱 Features

- ✅ Responsive design (works on mobile, tablet, desktop)
- ✅ Dark mode toggle
- ✅ Professional blue color theme (#2563EB)
- ✅ Smooth animations
- ✅ SEO optimized
- ✅ Accessible navigation
- ✅ All 6 pages: Home, Features, Download, Privacy, Terms, Contact

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with variables
- **JavaScript** - Vanilla JS (no frameworks)
- **Google Fonts** - Poppins & Inter fonts

## 📄 License

Copyright © 2024 NotesAI-RNA. All rights reserved.

## 🤝 Support

For questions or support:
- Email: nzemberichard398@gmail.com
- Phone: 0779019896
- Website: Contact page once deployed

---

**Note:** Don't forget to update the "Last Updated" dates in `privacy.html` and `terms.html` when you make changes!
