# Ember-image-zoom

Component which toggles a full screen image view on click and provides translateY adjustment on mousemove.
DEMO: https://martinmalinda.github.io/ember-image-zoom

TODO:
- Touch support
- Checking if image is smaller than viewport
- Add tests

## Install

```
ember install ember-image-zoom
```

### Example usage

```javascript
smallImage: {
  src: "/images/image2-small.jpg",
  alt: "Small Image"
},
largeImage: {
  src: "/images/image2-full.jpg",
  alt: "Large image",
  srcset: "..."
}
```

```handlebars
{{image-zoom
  small=smallImage
  large=largeImage
}}
```

Component will set `hasLoaded` to `true` on the `large` object once the image has loaded. That's why using `hash` helper is not suitable anymore as it will not keep the `hasLoaded` information persistently.  

Component uses `ember-wormhole` and it creates a destination element if needed. Different destination element can be set with `wormholeDest` attr.
