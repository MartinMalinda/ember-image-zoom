# Ember-image-zoom

Component which toggles a full screen image view on click and provides translateY adjustment on mousemove.

TODO:
- Touch support
- Checking if image is smaller than viewport

## Install

```
ember install ember-image-zoom
```

### Example usage

```handlebars
{{image-zoom
  small=(hash
    src="/images/image2-small.jpg"
    alt="Small image")
  large=(hash
    src="/images/image2-full.jpg"
    srcset="..."
    alt="Large image" )
}}
```

Component uses `ember-wormhole` and it creates a destination element if needed. Different destination element can be set with `wormholeDest` attr.
