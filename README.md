# Password Revealer

A simple Chrome extension that reveals any password field found on the current page.

# Sources

- extension template: https://developer.chrome.com/docs/extensions/mv3/getstarted/
- action on click: https://developer.chrome.com/docs/extensions/reference/action/#injecting-a-content-script-on-click
- eye icon: https://fonts.google.com/icons?selected=Material+Icons&icon.query=eye

## Convert SVG to PNG:

https://stackoverflow.com/questions/9530524/convert-svg-to-transparent-png-with-antialiasing-using-imagemagick/9570081

```sh
convert +antialias -density 1200 -background none -resize 128x128 eye.svg eye128.png
```
