# Images Directory

This directory is for storing images used in your website.

## Recommended Image Types:

1. **Profile Photo**: 
   - Filename: `profile-photo.jpg`
   - Recommended size: 300x300px or larger
   - Used in the About section

2. **Project Screenshots**:
   - Filenames: `project1.jpg`, `project2.jpg`, etc.
   - Recommended size: 800x600px or similar 4:3 ratio
   - Used in the Portfolio section

3. **Service Icons** (if you want custom icons):
   - Filenames: `website-icon.png`, `automation-icon.png`
   - Recommended size: 128x128px
   - Used in the Services section

## How to Add Your Images:

1. Copy your images to this directory
2. Use relative imports in your components
3. Replace the placeholder URLs with your imported images

Example:
```jsx
import profilePhoto from '../assets/images/profile-photo.jpg';

// Then in your component:
<img src={profilePhoto} alt="William Walker" />
```

Note: For best performance, optimize your images before adding them here.
