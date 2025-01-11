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
  <title>Tailwind CSS Bug</title>
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body class="bg-custom-blue">
  <div>This is a test.</div>
</body>
</html>
```