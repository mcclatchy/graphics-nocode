# audio-player
The `AudioPlayer` is a custom web component that provides an HTML5 audio player with optional waveform visualization using WaveSurfer.js. It supports standard audio controls, progress tracking, and volume control. The component will automatically handle the audio playback, display waveform if enabled, and provide interactive controls for the user.

### Data Attributes
- `data-audio`: URL of the audio file.
- `data-title`: Title displayed above the player.
- `data-subtitle`: Subtitle displayed next to the title.
- `data-waveform`: Enables waveform visualization if set.
- `data-wave-background-color`: Background color of the waveform.
- `data-wave-color`: Color of the waveform progress.

### Example
```html
<audio-player 
  data-audio="path/to/audio.mp3" 
  data-title="Sample Audio" 
  data-subtitle="Subtitle" 
  data-waveform="true"
  data-wave-background-color="#e0e0e0"
  data-wave-color="#3b5998"
>
</audio-player>
```

# block-quote
Custom HTML element for displaying styled block quotes with adjustable quote text and attribution.

### Data Attributes
- `data-quote`: Sets the quote text.
- `data-attribution`: Sets the attribution for the quote.
- `data-color`: Defines the color of the quote icon and attribution text.
- `data-attribution-max-width`: Limits the maximum width of the attribution text.
- `data-max-width`: Limits the maximum width of the block quote container.

### Example
```html
<block-quote
  data-quote="This is a block quote example."
  data-attribution="John Doe"
  data-color="#007bff"
  data-attribution-max-width="300"
  data-max-width="600"
>
</block-quote>
```

# event-timeline
Event Timeline is a custom HTML element designed to display a chronological list of events with optional media attachments. This component fetches event data from a JSON file and renders it with optionally collapsible sections based on the number of visible events.

### Data Attributes
- `data-sheet`: URL to a JSON data source containing event details.
- `data-title`: Title of the event timeline.
- `data-subtitle`: Subtitle or description of the event timeline.
- `data-collapsible`: Indicates whether events should collapse when not in view.

### Example
```html
<event-timeline
  data-sheet="/path/to/events.json"
  data-title="History of Events"
  data-subtitle="Important milestones in our journey."
  data-collapsible
>
</event-timeline>
```


# fact-box
Custom web component for displaying a fact box with customizable title, fact, and background color. Supports an optional image or default icon.

### Data Attributes
- `data-title`: Title for the fact box.
- `data-fact`: Fact content to display.
- `data-background-color`: Background color of the fact box.
- `data-image`: URL of an image to display as the fact box icon (optional).

### Example
```html
<fact-box
  data-title="Did You Know?"
  data-fact="The Earth is approximately 4.5 billion years old."
  data-background-color="#f0f0f0"
  data-image="https://example.com/earth-icon.png"
>
</fact-box>
```

# image-carousel
This web component, `ImageCarousel`, creates a customizable image carousel with navigation controls, captions, and dots for visual indicators. Replace `<img>` elements within the `<slot>` with your desired images. Each `<img>` can include a `data-caption` attribute to specify captions for individual images.

### Data Attributes
- `data-embed-class`: Changes the class of the parent element based on the value provided.
- `data-one-caption`: When set, displays only one caption at a time for all images (defaults to first caption).

### Slot
This component uses a `<slot>` element (`#image-slot`) to dynamically insert images with optional captions.

### Example
```html
<image-carousel data-embed-class="wide">
  <img src="image1.jpg" data-caption="First Image">
  <img src="image2.jpg" data-caption="Second Image">
  <img src="image3.jpg" data-caption="Third Image">
</image-carousel>
```

# image-dual
This web component displays a dual-image layout with captions in a responsive manner.

### Data Attributes
- `left-image`: URL of the image for the left container.
- `left-image-alt`: Alternative text for the left image.
- `left-caption`: Caption for the left image.
- `right-image`: URL of the image for the right container.
- `right-image-alt`: Alternative text for the right image.
- `right-caption`: Caption for the right image.

### Example
```html
<image-dual
  data-left-image="path/to/left-image.jpg"
  data-left-image-alt="Alternative text for left image"
  data-left-caption="Caption for left image"
  data-right-image="path/to/right-image.jpg"
  data-right-image-alt="Alternative text for right image"
  data-right-caption="Caption for right image"
>
</image-dual>
```


# image-quote
A web component for displaying an image with a quote and attribution in a flexible layout. Replace `image-url.jpg`, alternate text, quote, and attribution with your desired content. Set `data-image-position` to `right` for a right-aligned image, or omit it (defaults to left alignment).

### Data Attributes
This component supports the following data attributes:

- `data-image`: URL of the image to display.
- `data-image-alt`: Alternate text for the image.
- `data-quote`: The quote text to display.
- `data-attribution`: Attribution for the quote.
- `data-image-position`: Position of the image (`left` or `right`). Defaults to `left`.

### Example
```html
<image-quote
  data-image="image-url.jpg"
  data-image-alt="Alternate text"
  data-quote="Lorem ipsum dolor sit amet."
  data-attribution="John Doe"
  data-image-position="right"
>
</image-quote>
```


# info-slate
A custom web component for displaying styled informational content. Customize attributes like `data-info`, `data-source`, and others to fit your content and styling preferences. Adjust colors and dimensions as needed for your application.

### Data Attributes
- `data-embed-class`: Controls styling for embedded content.
- `data-info`: Sets the main informational text.
- `data-source`: Sets the source of the information.
- `data-text-color`: Specifies the color of text elements.
- `data-max-width`: Sets the maximum width of the component.
- `data-background-color`: Specifies the background color of the component.

### Example
```html
<info-slate
  data-info="Your information text"
  data-source="Your information source"
  data-text-color="#333"
  data-max-width="600"
  data-background-color="#f0f0f0"
>
</info-slate>
```



# inset-box
A custom web component for creating inset boxes with flexible content and styling options.

### Data Attributes
The component supports the following data attributes:
- `data-link`: URL link for the inset box.
- `data-title`: Title displayed in the inset box.
- `data-image`: Image source URL for the inset box.
- `data-image-alt`: Alternate text for the image.
- `data-text`: Text content displayed in the inset box.

### Example
```html
<inset-box
  data-link="https://example.com"
  data-title="Example Title"
  data-image="https://example.com/image.jpg"
  data-image-alt="Image Alt Text"
  data-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
>
</inset-box>
```



# lead-image
A web component for displaying lead images with customizable embedding styles. This web component dynamically adjusts image display based on specified attributes, providing flexibility in layout and presentation. Adjustments include header positioning and embedding styles to suit different content needs.

### Data Attributes
- `data-image`: Specifies the URL of the image to display.
- `data-embed-class`: Controls embedding style options (`overlap`, `full-bleed`, `full-screen`).
- `data-header-position`: Defines header position (`overlaid`, default).

### Slot
This component supports a slot for optional caption (`<figcaption>`).

### Example
```html
<lead-image 
  data-image="path/to/image.jpg" 
  data-embed-class="full-screen"
  data-header-position="overlaid"
>
  <figcaption>Optional caption</figcaption>
</lead-image>
```



# lead-logo
This web component displays a logo image with customizable attributes for integration within web pages.

### Data Attributes
- `data-logo`: Specifies the URL of the logo image.
- `data-max-width`: Sets the maximum width of the logo, defaulting to 500 pixels.

### Example
```html
<lead-logo
   data-logo="logo.png"
   data-max-width="300"
>
</lead-logo>
```


# lead-title
This web component, `lead-title`, dynamically generates a styled `<h1>` element with configurable text attributes, making it suitable for prominent headers.

### Data Attributes
- `data-title`: Specifies the text content of the `<h1>` element.
- `data-max-width`: Limits the maximum width of the component.

### Example
```html
<lead-title
   data-title="Hello World"
   data-maxWidth="600"
>
</lead-title>
```


# lead-video
This web component displays a lead video with customizable attributes. This component dynamically adjusts video attributes based on data attributes and screen size. Adjusts padding based on the header's overlap status using `data-headerPosition`.

### Data Attributes
- `data-video`: URL of the video to display.
- `data-title`: Title for the video.
- `data-logo`: URL of a logo to display.
- `data-embed-class`: Class name for video embedding size.
- `data-headerPosition`: Controls padding for header overlap (`"overlaid"` or default).

### Slot
The content inside `<lead-video>` tags serves as the video caption (`<figcaption>`).

### Example
```html
<lead-video
  data-video="https://example.com/video.mp4"
  data-title="Awesome Video"
  data-logo="https://example.com/logo.png"
  data-embed-class="full-bleed"
  data-headerPosition="overlaid"
>
  <figcaption>This is an awesome video</figcaption>
</lead-video>
```


# link-preview
This web component renders a preview of a linked content URL.

### Data Attributes
- `data-link`: URL of the linked content.
- `data-img`: URL of the preview image.
- `data-alt`: Alternative text for the preview image.
- `data-series`: Name of the series.
- `data-title`: Title of the preview.
- `data-summary`: Brief summary of the content.
- `data-visibility-date`: Date when the preview should become visible.
- `data-color`: Custom color for series and title text.

### Example
```html
<link-preview
  data-link="https://example.com"
  data-img="preview-image-url"
  data-alt="Preview alt text"
  data-series="Series name"
  data-title="Preview Title"
  data-summary="Brief summary"
  data-visibility-date="2024-07-01"
  data-color="#ff0000"
>
</link-preview>
```
