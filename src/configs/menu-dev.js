const menuDev = {
    "themes": [{
            "type": "checkbox",
            "label": "Beige",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/beige.css"
        },
        {
            "type": "checkbox",
            "label": "Dark",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/dark.css"
        },
        {
            "type": "checkbox",
            "label": "Indigo",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/indigo.css"
        }
    ],
    "enhancements": [
        {
            "type": "checkbox",
            "label": "declutterPage",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/declutter.css",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/declutter.js"
        },
        {
            "type": "checkbox",
            "label": "makeMediaWide",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/make-media-wide.js"
        },
        {
            "type": "checkbox",
            "label": "minimalHeader",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/minimal-header.css",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/minimal-header.js"
        },
        {
            "type": "checkbox",
            "label": "minimalFooter",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/minimal-footer.css"
        },
        {
            "type": "checkbox",
            "label": "moveLeadArtToTop",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/move-lead-art-to-top.css",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/move-lead-art-to-top.js"
        },
        {
            "type": "checkbox",
            "label": "premiumSubheads",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/premium-subheads.css"
        }
    ],
    "lead-cards": [
        {
            "type": "increment",
            "label": "lead-logo",
            "maxCount": "1",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/lead-logo.css",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/lead-logo.js",
            "defaultOptions": {
                "data-logo": {
                    "label": "Logo URL",
                    "value": "https://www.miamiherald.com/static/hi/2023/reality-check/images/reality-check-logo-black.png",
                    "type": "text"
                },
                "data-link": {
                    "label": "Logo Link (Optional)",
                    "value": "",
                    "type": "text"
                },
                "data-max-width": {
                    "label": "Logo Max Width",
                    "value": "500",
                    "type": "range",
                    "unit": "px",
                    "min": "150",
                    "max": "700"
                },
                "--lead-logo-margin": {
                    "label": "Logo Margin",
                    "value": "10",
                    "type": "range",
                    "unit": "px",
                    "min": "0",
                    "max": "20"
                }
            }
        },
        {
            "type": "increment",
            "label": "lead-media",
            "maxCount": "1",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/lead-media.js",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/lead-media.css",
            "defaultOptions": {
                "data-embed-class": {
                    "label": "Embed Class",
                    "value": "full-bleed",
                    "options": [{
                            "label": "Prominent",
                            "value": "prominent"
                        },
                        {
                            "label": "Full Screen",
                            "value": "full-screen"
                        },
                        {
                            "label": "Full Bleed",
                            "value": "full-bleed"
                        },
                        {
                            "label": "Overlap",
                            "value": "overlap"
                        },
                        {
                            "label": "Corner Text",
                            "value": "corner-text"
                        }
                    ],
                    "type": "switch"
                },
                "data-header-color": {
                    "label": "Header Color",
                    "value": "",
                    "options": [{
                            "label": "Default",
                            "value": ""
                        },
                        {
                            "label": "Light",
                            "value": "light"
                        },
                        {
                            "label": "Dark",
                            "value": "dark"
                        }
                    ],
                    "type": "switch"
                },
                "data-title": {
                    "label": "Title",
                    "value": "",
                    "type": "text"
                },
                "data-subtitle": {
                    "label": "Subtitle",
                    "value": "",
                    "type": "text"
                },
                "slot": {
                    "label": "Caption",
                    "options": ["figcaption"],
                    "value": [{
                        "tag": "figcaption",
                        "text": "Illustration by Rachel Handley"
                    }],
                    "type": "text-item"
                },
                "data-media": {
                    "label": "Lead Media URL",
                    "value": "https://www.miamiherald.com/static/hi/2023/tree-canopy/images/intro-7-centered.jpg",
                    "type": "text"
                },
                "data-media-portrait": {
                    "label": "Lead Media URL (Portrait)",
                    "value": "https://www.miamiherald.com/static/hi/2023/tree-canopy/images/intro-7-portrait.jpg",
                    "type": "text"
                }
            }
        },
        {
            "type": "increment",
            "label": "lead-split",
            "maxCount": "1",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/lead-split.js",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/lead-split.css",
            "defaultOptions": {
                "data-title": {
                    "label": "Title",
                    "value": "Messi in Miami",
                    "type": "text"
                },
                "data-subtitle": {
                    "label": "Subtitle",
                    "value": "Lionel Messi’s play has been ‘epic’ so far, his humility has been equally impressive",
                    "type": "text"
                },
                "data-intro-text": {
                    "label": "Intro Text",
                    "value": "",
                    "type": "text"
                },
                "data-caption": {
                    "label": "Caption",
                    "value": "Illustration by Rachel Handley",
                    "type": "text"
                },
                "data-image-side": {
                    "label": "Image Side",
                    "value": "",
                    "options": [{
                            "label": "Left",
                            "value": ""
                        },
                        {
                            "label": "Right",
                            "value": "right"
                        }
                    ],
                    "type": "switch"
                },
                "--lead-split-border-bottom": {
                    "label": "Border",
                    "value": "1px solid var(--media-background-color)",
                    "options": [{
                            "label": "On",
                            "value": "1px solid var(--media-background-color)"
                        },
                        {
                            "label": "Off",
                            "value": "none"
                        }
                    ],
                    "type": "switch"
                },
                "--lead-split-background-color": {
                    "label": "Background Color",
                    "value": "",
                    "type": "color"
                },
                "--lead-split-text-color": {
                    "label": "Text Color",
                    "value": "",
                    "type": "color"
                },
                "--lead-split-secondary-text-color": {
                    "label": "Secondary Text Color",
                    "value": "",
                    "type": "color"
                },
                "slot": {
                    "label": "Images",
                    "options": ["img"],
                    "attributes": {
                        "src": {
                            "value": "",
                            "label": "Image URL",
                            "type": "text"
                        }
                    },
                    "sort": "src",
                    "excludeText": true,
                    "value": [{
                            "tag": "img",
                            "text": "",
                            "attributes": {
                                "src": {
                                    "label": "Image URL",
                                    "value": "https://www.miamiherald.com/static/hi/2024/nc-hbcu-underfunding/images/lead-person.jpg",
                                    "type": "text"
                                }
                            }
                        }
                    ],
                    "type": "text-item"
                }
            }
        },
        {
            "type": "increment",
            "label": "lead-title",
            "maxCount": "1",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/lead-title.js",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/lead-title.css",
            "defaultOptions": {
                "data-title": {
                    "label": "Title",
                    "value": "Messi in Miami",
                    "type": "text"
                },
                "data-link": {
                    "label": "Title Link (Optional)",
                    "value": "",
                    "type": "text"
                }
            }
        }
    ],
    "text-cards": [{
            "type": "increment",
            "label": "block-quote",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/block-quote.js",
            "defaultOptions": {
                "data-quote": {
                    "label": "Quote",
                    "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat sapien eu sem mollis, non vehicula tortor malesuada.",
                    "type": "text"
                },
                "data-attribution": {
                    "label": "Attribution",
                    "value": "Cicero",
                    "type": "text"
                },
                "data-color": {
                    "label": "Color",
                    "value": "#00008b",
                    "type": "color"
                },
                "data-max-width": {
                    "label": "Quote Max Width",
                    "value": "600",
                    "type": "range",
                    "unit": "px",
                    "min": "300",
                    "max": "700"
                },
                "data-attribution-max-width": {
                    "label": "Attribution Max Width",
                    "value": "400",
                    "type": "range",
                    "unit": "px",
                    "min": "300",
                    "max": "700"
                }
            }
        },
        {
            "type": "increment",
            "label": "fact-box",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/fact-box.js",
            "defaultOptions": {
                "data-title": {
                    "label": "Title",
                    "value": "What is a charter school?",
                    "type": "text"
                },
                "data-fact": {
                    "label": "Fact",
                    "value": "Charter schools are publicly funded, independently run institutions with flexibility in curriculum and operations. Established by teachers, parents, or community groups, they operate under a specific charter, accountable for meeting academic goals beyond traditional public school constraints.",
                    "type": "text"
                },
                "data-image": {
                    "label": "Image URL (Optional)",
                    "value": "",
                    "type": "text"
                },
                "--fact-box-icon-height": {
                    "label": "Image Height (px)",
                    "value": "70px",
                    "type": "text"
                }
            }
        },
        {
            "type": "increment",
            "label": "hide-from-app",
            "maxCount": "1",
            "html": '<style>.app-only-item{display:none;}#app-only-message{font-style:italic;}</style>\n<script type="module"> const isPageInfoPresent = window?.pageInfo ? true : false; const appOnlyItems = document.querySelectorAll(".app-only-item"); appOnlyItems.forEach(elem => {elem.closest(".embed-infographic")?.classList.remove("embed-infographic")}); if (!isPageInfoPresent) { appOnlyItems.forEach(elem => {elem.style.setProperty("display", "block")}); const elementsToHide = document.querySelectorAll(".hide-from-app"); elementsToHide.forEach(elem => {elem.style.setProperty("display", "none","important")}); }</script>\n\n<p id="app-only-message" class="app-only-item">\n\tViewing this story in our app?\n\t<a target="_blank" href="$-tool-article">\n\tClick here\n\t</a>\n\tfor a better experience on our website.\n</p>',
            "defaultOptions": {
                "$-tool-article": {
                    "label": "Article URL",
                    "value": "https://www.miamiherald.com/news/local/environment/climate-change/article276415291.html",
                    "type": "text"
                }
            }
        },
        {
            "type": "increment",
            "label": "info-slate",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/info-slate.js",
            "defaultOptions": {
                "data-info": {
                    "label": "Info",
                    "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat sapien eu sem mollis, non vehicula tortor malesuada.",
                    "type": "text"
                },
                "data-source": {
                    "label": "Source",
                    "value": "Source: National Institute of Health",
                    "type": "text"
                },

                "data-max-width": {
                    "label": "Quote Max Width",
                    "value": "700",
                    "type": "range",
                    "unit": "px",
                    "min": "300",
                    "max": "700"
                },
                "data-text-color": {
                    "label": "Text Color",
                    "value": "",
                    "type": "color"
                },
                "data-background-color": {
                    "label": "Background Color",
                    "value": "",
                    "type": "color"
                },
                "data-embed-class": {
                    "label": "Embed Class",
                    "value": "full-bleed",
                    "options": [{
                            "label": "None",
                            "value": ""
                        },
                        {
                            "label": "Wide",
                            "value": "wide"
                        },
                        {
                            "label": "Full Bleed",
                            "value": "full-bleed"
                        }
                    ],
                    "type": "switch"
                }
            }
        },
        {
            "type": "increment",
            "label": "outro-text",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/outro-text.js",
            "defaultOptions": {
                "slot": {
                    "label": "Text",
                    "options": ["h5", "p"],
                    "value": [{
                            "tag": "h5",
                            "text": "Sources"
                        },
                        {
                            "tag": "p",
                            "text": "Scenes not witnessed by the reporter in this series were compiled from research, interviews and public records including documents from the Mecklenburg County Detention Center and Clerk of Superior Court."
                        },
                        {
                            "tag": "h5",
                            "text": "Credits"
                        },
                        {
                            "tag": "p",
                            "text": "Kallie Cox | Reporter"
                        },
                        {
                            "tag": "p",
                            "text": "Anna Douglas | Editor"
                        },
                        {
                            "tag": "p",
                            "text": "Rachel Handley | Illustrations & Design"
                        },
                        {
                            "tag": "p",
                            "text": "Gabby McCall | Page Design"
                        },
                        {
                            "tag": "p",
                            "text": "David Newcomb | Development & Design"
                        }
                    ],
                    "type": "text-item"
                }
            }
        },
        {
            "type": "increment",
            "label": "summary-list",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/summary-list.css",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/summary-list.js",
            "defaultOptions": {
                "data-list-style": {
                    "label": "List Style",
                    "value": "ul",
                    "options": [{
                            "label": "Bulleted",
                            "value": "ul"
                        },
                        {
                            "label": "Numbered",
                            "value": "ol"
                        }
                    ],
                    "type": "switch"
                },
                "data-title": {
                    "label": "Title",
                    "value": "Summary of Items",
                    "type": "text"
                },
                "data-subtitle": {
                    "label": "Subtitle",
                    "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat sapien eu sem mollis, non vehicula tortor malesuada.",
                    "type": "text"
                },
                "slot": {
                    "label": "Text",
                    "options": ["li"],
                    "value": [{
                            "tag": "li",
                            "text": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                        },
                        {
                            "tag": "li",
                            "text": "Cras ut neque a orci vulputate sollicitudin. Mauris convallis orci vitae semper vehicula."
                        },
                        {
                            "tag": "li",
                            "text": "Donec vestibulum, neque at facilisis maximus, felis lectus condimentum ex, et laoreet nulla dolor vitae urna."
                        },
                        {
                            "tag": "li",
                            "text": "Fusce ut mi faucibus, ultrices ante a, imperdiet quam. Etiam a sem at leo condimentum pretium sit amet ut lacus."
                        }
                    ],
                    "type": "text-item"
                }
            }
        }
    ],
    "media-cards": [
        {
            "type": "increment",
            "label": "audio-player",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/audio-player.js",
            "defaultOptions": {
                "data-title": {
                    "label": "Title",
                    "value": "Clemson Chant",
                    "type": "text"
                },
                "data-audio": {
                    "label": "Audio URL",
                    "value": "https://www.miamiherald.com/static/hi/2024/sc-ea-games/audio/south-carolina/17_USCMB_Def3_EDT2a.mp3",
                    "type": "text"
                },
                "data-waveform": {
                    "label": "Progress Visual",
                    "value": "true",
                    "options": [{
                            "label": "Waveform",
                            "value": "true"
                        },
                        {
                            "label": "Bar",
                            "value": ""
                        }
                    ],
                    "type": "switch"
                },
            }
        },
        {
            "type": "increment",
            "label": "audio-quote",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/audio-quote.js",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/audio-quote.css",
            "defaultOptions": {
                "data-quotes": {
                    "label": "Quotes URL",
                    "value": "https://www.miamiherald.com/static/hi/graphics/assets/data/borges-snippet.json",
                    "type": "text"
                },
                "data-audio": {
                    "label": "Audio URL",
                    "value": "https://www.miamiherald.com/static/hi/graphics/assets/audio/borges-snippet.mp3",
                    "type": "text"
                },
                "data-attribution": {
                    "label": "Attribution",
                    "value": "Jorge Luis Borges",
                    "type": "text"
                },
                "--audio-quote-max-width": {
                    "label": "Max Embed Width",
                    "value": "650",
                    "type": "range",
                    "unit": "px",
                    "min": "300",
                    "max": "1000"
                },
                "data-quote-size": {
                    "label": "Quote Size",
                    "value": "small",
                    "options": [{
                            "label": "Small",
                            "value": "small"
                        },
                        {
                            "label": "Normal",
                            "value": ""
                        }
                    ],
                    "type": "switch"
                },
                "data-img": {
                    "label": "Image URL (Optional)",
                    "value": "",
                    "type": "text"
                },
                "--audio-quote-img-width": {
                    "label": "Image Width (Optional)",
                    "value": "250",
                    "type": "range",
                    "unit": "px",
                    "min": "150",
                    "max": "350"
                },
                "data-controls": {
                    "label": "Progress Style",
                    "value": "circle",
                    "options": [{
                            "label": "Circle",
                            "value": "circle"
                        },
                        {
                            "label": "Bar",
                            "value": "bar"
                        }
                    ],
                    "type": "switch"
                }
            }
        },
        {
            "type": "increment",
            "label": "image-carousel",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/image-carousel.css",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/image-carousel.js",
            "defaultOptions": {
                "data-embed-class": {
                    "label": "Embed Class",
                    "value": "wide",
                    "options": [{
                            "label": "None",
                            "value": ""
                        },
                        {
                            "label": "Wide",
                            "value": "wide"
                        },
                        {
                            "label": "Full Bleed",
                            "value": "full-bleed"
                        }
                    ],
                    "type": "switch"
                },
                "data-one-caption": {
                    "label": "Use First Caption Only",
                    "value": "",
                    "options": [{
                            "label": "True",
                            "value": "true"
                        },
                        {
                            "label": "False",
                            "value": ""
                        }
                    ],
                    "type": "switch"
                },
                "slot": {
                    "label": "Images",
                    "options": ["img"],
                    "attributes": {
                        "src": {
                            "value": "",
                            "label": "Image URL",
                            "type": "text"
                        },
                        "data-caption": {
                            "value": "",
                            "label": "Caption",
                            "type": "text"
                        }
                    },
                    "sort": "src",
                    "excludeText": true,
                    "value": [{
                            "tag": "img",
                            "text": "",
                            "attributes": {
                                "src": {
                                    "label": "Image URL",
                                    "value": "https://www.miamiherald.com/static/hi/2023/idaho-shepherds/images/1.jpg",
                                    "type": "text"
                                },
                                "data-caption": {
                                    "label": "Caption",
                                    "value": "",
                                    "type": "text"
                                }
                            }
                        },
                        {
                            "tag": "img",
                            "text": "",
                            "attributes": {
                                "src": {
                                    "label": "Image URL",
                                    "value": "https://www.miamiherald.com/static/hi/2023/idaho-shepherds/images/2.jpg",
                                    "type": "text"
                                },
                                "data-caption": {
                                    "label": "Caption",
                                    "value": "",
                                    "type": "text"
                                }
                            }
                        },
                        {
                            "tag": "img",
                            "text": "",
                            "attributes": {
                                "src": {
                                    "label": "Image URL",
                                    "value": "https://www.miamiherald.com/static/hi/2023/idaho-shepherds/images/3.jpg",
                                    "type": "text"
                                },
                                "data-caption": {
                                    "label": "Caption",
                                    "value": "",
                                    "type": "text"
                                }
                            }
                        },
                        {
                            "tag": "img",
                            "text": "",
                            "attributes": {
                                "src": {
                                    "label": "Image URL",
                                    "value": "https://www.miamiherald.com/static/hi/2023/idaho-shepherds/images/4.jpg",
                                    "type": "text"
                                },
                                "data-caption": {
                                    "label": "Caption",
                                    "value": "",
                                    "type": "text"
                                }
                            }
                        },
                        {
                            "tag": "img",
                            "text": "",
                            "attributes": {
                                "src": {
                                    "label": "Image URL",
                                    "value": "https://www.miamiherald.com/static/hi/2023/idaho-shepherds/images/5.jpg",
                                    "type": "text"
                                },
                                "data-caption": {
                                    "label": "Caption",
                                    "value": "",
                                    "type": "text"
                                }
                            }
                        },
                        {
                            "tag": "img",
                            "text": "",
                            "attributes": {
                                "src": {
                                    "label": "Image URL",
                                    "value": "https://www.miamiherald.com/static/hi/2023/idaho-shepherds/images/6.jpg",
                                    "type": "text"
                                },
                                "data-caption": {
                                    "label": "Caption",
                                    "value": "",
                                    "type": "text"
                                }
                            }
                        },
                        {
                            "tag": "img",
                            "text": "",
                            "attributes": {
                                "src": {
                                    "label": "Image URL",
                                    "value": "https://www.miamiherald.com/static/hi/2023/idaho-shepherds/images/7.jpg",
                                    "type": "text"
                                },
                                "data-caption": {
                                    "label": "Caption",
                                    "value": "",
                                    "type": "text"
                                }
                            }
                        }
                    ],
                    "type": "text-item"
                }
            }
        },
        {
            "type": "increment",
            "label": "image-dual",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/image-dual.js",
            "defaultOptions": {
                "data-left-image": {
                    "label": "Left Image URL",
                    "value": "https://www.miamiherald.com/static/hi/2023/idaho-shepherds/images/1.jpg",
                    "type": "text"
                },
                "data-left-caption": {
                    "label": "Left Image Caption",
                    "value": "Impressionist illustration of migrant farmworker's tent in a field with mountains in the background by Rachel Handley",
                    "type": "text"
                },
                "data-left-image-alt": {
                    "label": "Left Image Alt Text",
                    "value": "Impressionist illustration of migrant farmworker's tent in a field with mountains in the background",
                    "type": "text"
                },
                "data-right-image": {
                    "label": "Right Image URL",
                    "value": "https://www.miamiherald.com/static/hi/2023/idaho-shepherds/images/5.jpg",
                    "type": "text"
                },
                "data-right-caption": {
                    "label": "Right Image Caption",
                    "value": "Impressionist illustration of person on a horse by Rachel Handley",
                    "type": "text"
                },
                "data-right-image-alt": {
                    "label": "Right Image Alt Text",
                    "value": "Impressionist illustration of person on a horse",
                    "type": "text"
                }
            }
        },
        {
            "type": "increment",
            "label": "image-quote",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/image-quote.js",
            "defaultOptions": {
                "data-quote": {
                    "label": "Quote",
                    "value": "“Today, it is the city’s political leadership, once again, that has fallen into unethical behavior, criminal investigations and dealmaking that are not in the best interest of the public.”",
                    "type": "text"
                },
                "data-attribution": {
                    "label": "Attribution",
                    "value": "Merrett Stierheim, retired government administrator",
                    "type": "text"
                },
                "data-image": {
                    "label": "Image URL",
                    "value": "https://www.miamiherald.com/static/hi/2023/miami-political-webs/images/miami-political-webs-story5-portrait-stierheim.png",
                    "type": "text"
                },
                "data-image-alt": {
                    "label": "Image Alt Text",
                    "value": "Portrait image of Merrett Stierheim, retired government administrator. Image submitted by Stierheim.",
                    "type": "text"
                },
                "data-image-position": {
                    "label": "Image Position",
                    "value": "left",
                    "options": [{
                            "label": "Left",
                            "value": "left"
                        },
                        {
                            "label": "Right",
                            "value": "right"
                        }
                    ],
                    "type": "switch"
                }
            }
        },
        {
            "type": "increment",
            "label": "image-slider",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/image-slider.js?vsim=1",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/image-slider.css?vsim=1",
            "defaultOptions": {
                "data-image-left": {
                    "label": "Left Image URL",
                    "value": "https://www.newsobserver.com/static/hi/2024/nc-hurricane-helene/images/biltmore-village-before.jpg",
                    "type": "text"
                },
                "data-tag-left": {
                    "label": "Left Tag",
                    "value": "Before",
                    "type": "text"
                },
                "data-image-right": {
                    "label": "Right Image URL",
                    "value": "https://www.newsobserver.com/static/hi/2024/nc-hurricane-helene/images/biltmore-village-after.jpg",
                    "type": "text"
                },
                "data-tag-right": {
                    "label": "Right Tag",
                    "value": "After",
                    "type": "text"
                },
                "slot": {
                    "label": "Caption",
                    "options": ["figcaption"],
                    "value": [{
                        "tag": "figcaption",
                        "text": 'Satellite imagery from ©Planet Labs shows Biltmore Village, North Carolina before and after Hurricane Helene. The image on the left was taken on 09/28/2024 and the image on the right was taken 09/23/2024. <span class="byline">Susan Merriam, David Newcomb</span>'
                    }],
                    "type": "text-item"
                }
            }
        },
        {
            "type": "increment",
            "label": "inset-box",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/inset-box.css",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/inset-box.js",
            "defaultOptions": {
                "data-title": {
                    "label": "Title (Optional)",
                    "value": "Read more",
                    "type": "text"
                },
                "data-link": {
                    "label": "Link URL (Optional)",
                    "value": "https://www.sacbee.com/news/politics-government/the-state-worker/article283078973.html",
                    "type": "text"
                },
                "data-image": {
                    "label": "Image URL",
                    "value": "https://www.sacbee.com/latest-news/jlxxar/picture285758691/alternates/LANDSCAPE_1140/sac-osha-lead-landscape.jpg",
                    "type": "text"
                },
                "data-image-alt": {
                    "label": "Image Alt Text",
                    "value": "",
                    "type": "text"
                },
                "data-text": {
                    "label": "Text",
                    "value": "Cal-OSHA is experiencing a staffing crisis. Here’s how that endangers California workers",
                    "type": "text"
                },
                "data-position": {
                    "label": "Image Position",
                    "value": "right",
                    "options": [{
                            "label": "Left",
                            "value": "left"
                        },
                        {
                            "label": "Right",
                            "value": "right"
                        }
                    ],
                    "type": "switch"
                },
                "data-embed-class": {
                    "label": "Embed Class",
                    "hide": true,
                    "value": "inset",
                    "options": [{
                            "label": "Inset",
                            "value": "inset"
                        }
                    ],
                    "type": "switch"
                },
                "data-embed-max-width": {
                    "label": "Max Embed Width",
                    "value": "728",
                    "type": "range",
                    "unit": "px",
                    "min": "728",
                    "max": "1000"
                },
                "--inset-border-left": {
                    "label": "Border",
                    "value": "1px solid gray",
                    "options": [{
                            "label": "On",
                            "value": "1px solid gray"
                        },
                        {
                            "label": "Off",
                            "value": "none"
                        }
                    ],
                    "type": "switch"
                }
            }
        },
        {
            "type": "increment",
            "label": "link-preview",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/link-preview.js",
            "defaultOptions": {
                "data-series": {
                    "label": "Series",
                    "value": "Made in Miami",
                    "type": "text"
                },
                "data-title": {
                    "label": "Title",
                    "value": "A rogue's gallery of suspects",
                    "type": "text"
                },
                "data-summary": {
                    "label": "Summary",
                    "value": "Investigators in at least three countries are sorting through a rogues’ gallery of players, trying to determine how the killing of Haitian President Jovenel Moïse was carried out on July 7, 2021.",
                    "type": "text"
                },
                "data-link": {
                    "label": "Link URL",
                    "value": "https://www.miamiherald.com/news/nation-world/world/americas/haiti/article266152901.html",
                    "type": "text"
                },
                "data-img": {
                    "label": "Image URL",
                    "value": "https://www.miamiherald.com/static/hi/2022/haiti-assassination/assets/network-outlink.jpg",
                    "type": "text"
                },
                "data-alt": {
                    "label": "Alt Text",
                    "value": "Illustration of Jovenel Moïse in a network graphic node with a network of other illustrated profiles surrounding him",
                    "type": "text"
                },
                "data-color": {
                    "label": "Color (Optional)",
                    "value": "",
                    "type": "color"
                }
            }
        },
        {
            "type": "increment",
            "label": "lottie-box",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/lottie-box.js",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/lottie-box.css",
            "defaultOptions": {
                "data-lottie-config": {
                    "label": "Lottie Config URL",
                    "value": "https://www.miamiherald.com/static/hi/2024/nc-epic-games/data/Battle_Bus_Floating.json",
                    "type": "text"
                },
                "data-speed": {
                    "label": "Animation Speed",
                    "value": "100",
                    "type": "range",
                    "unit": "%",
                    "min": "1",
                    "max": "250"
                },
                "data-embed-class": {
                    "label": "Embed Class",
                    "value": "",
                    "options": [{
                            "label": "None",
                            "value": ""
                        },
                        {
                            "label": "Inner Left",
                            "value": "inner-left"
                        },
                        {
                            "label": "Inner Right",
                            "value": "inner-right"
                        }
                    ],
                    "type": "switch"
                },
                "data-height": {
                    "label": "Height",
                    "value": "250",
                    "type": "range",
                    "unit": "px",
                    "min": "100",
                    "max": "1400"
                },
                "data-width": {
                    "label": "Width",
                    "value": "250",
                    "type": "range",
                    "unit": "px",
                    "min": "100",
                    "max": "1400"
                }

            }
        },
        {
            "type": "increment",
            "label": "nearest-figure",
            "maxCount": "1",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/nearest-figure.js",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/nearest-figure.css",
            "defaultOptions": {
                "data-figure-class": {
                    "label": "Figure Class",
                    "value": "outer-left",
                    "options": [
                        {
                            "label": "Outer Left",
                            "value": "outer-left"
                        },
                        {
                            "label": "Inner Left",
                            "value": "inner-left"
                        },
                        {
                            "label": "Inner Right",
                            "value": "inner-right"
                        },
                        {
                            "label": "Outer Right",
                            "value": "outer-right"
                        },
                        {
                            "label": "Portrait",
                            "value": "portrait"
                        },
                        {
                            "label": "Wide",
                            "value": "wide"
                        },
                        {
                            "label": "Extra Wide",
                            "value": "extra-wide"
                        },
                        {
                            "label": "Full Bleed",
                            "value": "full-bleed"
                        }
                    ],
                    "type": "switch"
                },
                "data-figure-max-width": {
                    "label": "Figure Max Width (Overrides Figure Class Width)",
                    "value": "",
                    "type": "range",
                    "unit": "px",
                    "min": "100",
                    "max": "1400"
                }
            }
        },
        {
            "type": "increment",
            "label": "related-stories",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/related-stories.js",
            "defaultOptions": {
                "data-title": {
                    "label": "Title",
                    "value": "More coverage on schools",
                    "type": "text"
                },
                "data-include-site": {
                    "label": "Include Site Name",
                    "value": "",
                    "options": [{
                            "label": "On",
                            "value": "true"
                        },
                        {
                            "label": "Off",
                            "value": ""
                        }
                    ],
                    "type": "switch"
                },
                "data-include-date": {
                    "label": "Include Publish Date",
                    "value": "true",
                    "options": [{
                            "label": "On",
                            "value": "true"
                        },
                        {
                            "label": "Off",
                            "value": ""
                        }
                    ],
                    "type": "switch"
                },
                "slot": {
                    "label": "Story URLs",
                    "options": ["related-story"],
                    "attributes": {
                        "data-url": {
                            "value": "",
                            "label": "URL",
                            "type": "text"
                        }
                    },
                    "excludeText": true,
                    "value": [{
                            "tag": "related-story",
                            "text": "",
                            "attributes": {
                                "data-url": {
                                    "label": "URL",
                                    "value": "https://www.miamiherald.com/news/local/education/article285186842.html",
                                    "type": "text"
                                }
                            }
                        },
                        {
                            "tag": "related-story",
                            "text": "",
                            "attributes": {
                                "data-url": {
                                    "label": "URL",
                                    "value": "https://www.idahostatesman.com/news/local/education/article282967503.html",
                                    "type": "text"
                                }
                            }
                        },
                        {
                            "tag": "related-story",
                            "text": "",
                            "attributes": {
                                "data-url": {
                                    "label": "URL",
                                    "value": "https://www.kansascity.com/news/local/article285147997.html",
                                    "type": "text"
                                }
                            }
                        }
                    ],
                    "type": "text-item"
                }
            }
        },
        {
            "type": "increment",
            "label": "resizable-image",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/resizable-image.css",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/resizable-image.js",
            "defaultOptions": {
                "data-image": {
                    "label": "Image URL",
                    "value": "https://www.miamiherald.com/static/hi/2023/idaho-shepherds/images/5.jpg",
                    "type": "text"
                },
                "data-image-alt": {
                    "label": "Image Alt Text",
                    "value": "Impressionist illustration of person in field",
                    "type": "text"
                },
                "data-embed-class": {
                    "label": "Embed Class",
                    "value": "",
                    "options": [{
                            "label": "None",
                            "value": ""
                        },
                        {
                            "label": "Portrait",
                            "value": "portrait"
                        },
                        {
                            "label": "Wide",
                            "value": "wide"
                        },
                        {
                            "label": "Prominent",
                            "value": "prominent"
                        },
                        {
                            "label": "Full Bleed",
                            "value": "full-bleed"
                        }
                    ],
                    "type": "switch"
                },
                "slot": {
                    "label": "Caption",
                    "options": ["figcaption"],
                    "value": [{
                        "tag": "figcaption",
                        "text": "Illustration by Rachel Handley"
                    }],
                    "type": "text-item"
                }
            }
        },
        {
            "type": "increment",
            "label": "resizable-video",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/resizable-video.css",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/resizable-video.js",
            "defaultOptions": {
                "data-video": {
                    "label": "Video URL",
                    "value": "https://www.miamiherald.com/static/hi/2023/skydiving-lodi/videos/tyler-interview.mp4",
                    "type": "text"
                },
                "data-embed-class": {
                    "label": "Embed Class",
                    "value": "",
                    "options": [{
                            "label": "None",
                            "value": ""
                        },
                        {
                            "label": "Wide",
                            "value": "wide"
                        },
                        {
                            "label": "Prominent",
                            "value": "prominent"
                        },
                        {
                            "label": "Full Bleed",
                            "value": "full-bleed"
                        }
                    ],
                    "type": "switch"
                },
                "data-video-type": {
                    "label": "Video Type",
                    "value": "controls-click-to-play",
                    "options": [{
                            "label": "Muted Autoplay",
                            "value": "muted-autoplay"
                        },
                        {
                            "label": "Muted Scrollplay",
                            "value": "muted-scrollplay"
                        },
                        {
                            "label": "Controls Scrollplay",
                            "value": "controls-scrollplay"
                        },
                        {
                            "label": "Controls<br>Click-to-play",
                            "value": "controls-click-to-play"
                        }
                    ],
                    "type": "switch"
                },
                "data-captions": {
                    "label": "Video Captions",
                    "value": "https://www.miamiherald.com/static/hi/2023/skydiving-lodi/data/tyler-interview.json",
                    "type": "text"
                },
                "slot": {
                    "label": "Caption",
                    "options": ["figcaption"],
                    "value": [{
                        "tag": "figcaption",
                        "text": "Illustration by Rachel Handley, animation by Sohail Al-Jamea"
                    }],
                    "type": "text-item"
                }
            }
        }
    ],
    "graphics": [
        {
            "type": "increment",
            "label": "background-split",
            "maxCount": "1",
            "script": "https://www.miamiherald.com/static/hi/graphics/4.0.0/background-split.js",
            "defaultOptions": {
                "data-top-color": {
                    "label": "Top Color",
                    "value": "#6b61ff",
                    "type": "color"
                },
                "data-top-text-color": {
                    "label": "Top Text Color",
                    "value": "#FFFFFF",
                    "type": "color"
                },
                "data-top-link-color": {
                    "label": "Top Link Color",
                    "value": "#FFFFFF",
                    "type": "color"
                },
                "data-top-caption-color": {
                    "label": "Top Caption Color",
                    "value": "#F1F1F1",
                    "type": "color"
                },
                "data-bottom-color": {
                    "label": "Bottom Color",
                    "value": "#e8e7f8",
                    "type": "color"
                },
                "data-bottom-text-color": {
                    "label": "Bottom Text Color",
                    "value": "#191917",
                    "type": "color"
                },
                "data-bottom-secondary-text-color": {
                    "label": "Bottom Secondary Text Color",
                    "value": "#565655",
                    "type": "color"
                },
                "data-bottom-link-color": {
                    "label": "Bottom Link Color",
                    "value": "#191917",
                    "type": "color"
                },
                "data-bottom-caption-color": {
                    "label": "Bottom Caption Color",
                    "value": "",
                    "type": "color"
                }
            }
        },
        {
            "type": "increment",
            "label": "event-timeline",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/event-timeline.js",
            "defaultOptions": {
                "data-title": {
                    "label": "Title",
                    "value": "Gone but not forgotten",
                    "type": "text"
                },
                "data-subtitle": {
                    "label": "Subtitle",
                    "value": "A decade of efforts to bring journalist Austin Tice home from Syria",
                    "type": "text"
                },
                "data-sheet": {
                    "label": "Sheet",
                    "value": "https://www.miamiherald.com/static/hi/prodx/sheet-data/1npUIJTdZLX9tgM01AX1oNBKfpejCpXSMU8Seim8Msdo.json",
                    "type": "text"
                },
                "data-expanded": {
                    "label": "Style",
                    "value": null,
                    "options": [{
                            "label": "Collapsed",
                            "value": null
                        },
                        {
                            "label": "Expanded",
                            "value": "true"
                        }
                    ],
                    "type": "switch"
                }
            }
        },
        {
            "type": "increment",
            "label": "obituary-section",
            "link": "https://www.miamiherald.com/static/hi/graphics/3.0.0/obituary-section.css",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/obituary-section.js",
            "defaultOptions": {
                "data-sheet": {
                    "label": "Sheet",
                    "value": "https://www.miamiherald.com/static/hi/prodx/sheet-data/109B1KqGXQ9V_XUfap1GMZuEHMg3M6VSeYTa9IvW_lX8.json",
                    "type": "text"
                },
                "data-img-filepath": {
                    "label": "Image Folder",
                    "value": "https://www.miamiherald.com/static/hi/2023/eky-floods/images",
                    "type": "text"
                },
                "data-sort": {
                    "label": "Sort By",
                    "value": "section",
                    "type": "text"
                },
                "collage": {
                    "value": true,
                    "hide": true,
                    "type": "boolean"
                }
            }
        },
        {
            "type": "increment",
            "label": "scrolling-map",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/scrolling-map.js",
            "defaultOptions": {
                "mapId": {
                    "label": "Map ID",
                    "value": "map-ogallala",
                    "type": "text"
                },
                "projectPath": {
                    "label": "Project URL Path",
                    "value": "https://www.kansascity.com/static/hi/2023/kc-ogallala-aquifer",
                    "type": "text"
                },
                "textConfig": {
                    "label": "Text Config URL",
                    "value": "https://www.kansascity.com/static/hi/2023/kc-ogallala-aquifer/data/config-text.json",
                    "type": "text"
                },
                "mapConfig": {
                    "label": "Map Config URL",
                    "value": "https://www.kansascity.com/static/hi/2023/kc-ogallala-aquifer/data/config-map.json",
                    "type": "text"
                },
                "background": {
                    "label": "Background Color",
                    "value": "#191917",
                    "type": "color"
                },
                "textColor": {
                    "label": "Text Color",
                    "value": "#ffffff",
                    "type": "color"
                },
                "textBorder": {
                    "label": "Text Border Color",
                    "value": "#444444",
                    "type": "color"
                },
                "textBackground": {
                    "label": "Text Background Color",
                    "value": "#191917",
                    "type": "color"
                },
                "embedClass": {
                    "label": "Embed Class",
                    "value": "full-bleed",
                    "options": [{
                            "label": "None",
                            "value": ""
                        },
                        {
                            "label": "Wide",
                            "value": "wide"
                        },
                        {
                            "label": "Full Bleed",
                            "value": "full-bleed"
                        }
                    ],
                    "type": "switch"
                }
            }
        },
        {
            "type": "increment",
            "label": "scrolling-video",
            "script": "https://www.miamiherald.com/static/hi/graphics/3.0.0/scrolling-video.js",
            "defaultOptions": {
                "src": {
                    "label": "Video - Landscape",
                    "value": "https://www.miamiherald.com/static/hi/2022/diabetic-amputations/videos/scrollVideoThree.mp4",
                    "type": "text"
                },
                "portrait-src": {
                    "label": "Video - Portrait",
                    "value": "https://www.miamiherald.com/static/hi/2022/diabetic-amputations/videos/scrollVideoThreeMobile.mp4",
                    "type": "text"
                },
                "interpolate": {
                    "value": true,
                    "hide": true,
                    "type": "boolean"
                },
                "data-edit-mode": {
                    "value": true,
                    "hide": true,
                    "exclude": true,
                    "type": "boolean"
                },
                "slot": {
                    "label": "Text",
                    "options": ["p"],
                    "attributes": {
                        "data-timestamp": {
                            "value": "",
                            "label": "Timestamp",
                            "type": "text"
                        }
                    },
                    "sort": "data-timestamp",
                    "value": [{
                            "tag": "p",
                            "text": "Revascularization procedures<br>restore blood flow to the<br>extremities and can often save<br>a limb from amputation.",
                            "attributes": {
                                "data-timestamp": {
                                    "label": "Timestamp",
                                    "value": "00:01.17",
                                    "type": "text"
                                }
                            }
                        },
                        {
                            "tag": "p",
                            "text": "One of the most common is angioplasty.",
                            "attributes": {
                                "data-timestamp": {
                                    "label": "Timestamp",
                                    "value": "00:04.04",
                                    "type": "text"
                                }
                            }
                        },
                        {
                            "tag": "p",
                            "text": "Plaque in the artery<br>reduces blood flow to<br>the affected limb.",
                            "attributes": {
                                "data-timestamp": {
                                    "label": "Timestamp",
                                    "value": "00:06.04",
                                    "type": "text"
                                }
                            }
                        },
                        {
                            "tag": "p",
                            "text": "During angioplasty, a balloon catheter<br>is inserted through the site of the narrowed<br>blood vessel.",
                            "attributes": {
                                "data-timestamp": {
                                    "label": "Timestamp",
                                    "value": "00:08.14",
                                    "type": "text"
                                }
                            }
                        },
                        {
                            "tag": "p",
                            "text": "The balloon is then inflated to open<br>the blood vessel, restoring blood flow.",
                            "attributes": {
                                "data-timestamp": {
                                    "label": "Timestamp",
                                    "value": "00:10.20",
                                    "type": "text"
                                }
                            }
                        },
                        {
                            "tag": "p",
                            "text": "A patient’s five-year survival rate after<br>limb salvage revascularization is 80% to 90%",
                            "attributes": {
                                "data-timestamp": {
                                    "label": "Timestamp",
                                    "value": "00:12.25",
                                    "type": "text"
                                }
                            }
                        }
                    ],
                    "type": "text-item"
                },
                "data-embed-class": {
                    "label": "Embed Class",
                    "value": "full-bleed",
                    "options": [{
                            "label": "None",
                            "value": ""
                        },
                        {
                            "label": "Wide",
                            "value": "wide"
                        },
                        {
                            "label": "Full Bleed",
                            "value": "full-bleed"
                        }
                    ],
                    "type": "switch"
                },
                "--scrolling-video-text-alignment": {
                    "label": "Text Alignment",
                    "value": "start",
                    "options": [{
                            "label": "Left",
                            "value": "start"
                        },
                        {
                            "label": "Middle",
                            "value": "center"
                        },
                        {
                            "label": "Right",
                            "value": "end"
                        }
                    ],
                    "type": "switch"
                },
                "--scrolling-video-text-color": {
                    "label": "Text Color",
                    "value": "#ffffff",
                    "type": "color"
                },
                "--scrolling-video-text-background": {
                    "label": "Text Background Color",
                    "value": "#000000",
                    "type": "color"
                },
                "--scrolling-video-text-border": {
                    "label": "Text Border",
                    "value": "none",
                    "type": "text"
                }
            }
        }
    ]
}

export default menuDev;