```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3498db',
      },
    },
  },
  plugins: [],
};
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body class="bg-custom-blue">
  <div>This is a test. The color should be applied now.</div>
</body>
</html>
```

**Explanation:** The solution may involve adding missing files in the content array. This issue might occur due to several reasons, including incorrect paths in the `content` option in `tailwind.config.js` or problems with the build process failing to integrate the custom color definition into the generated CSS.  Ensure that your build process compiles all your Tailwind directives into your CSS.