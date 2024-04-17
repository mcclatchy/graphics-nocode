const menuDefault = {
    "themes": [],
    
    "enhancements": [ 
    {
        "type": "checkbox",
        "label": "makeMediaWide",
        "script": "https://www.miamiherald.com/static/hi/graphics/2.0.0/make-media-wide.js"
    }],
    "lead-cards": [],
    "text-cards": [
    {
        "type": "increment",
        "label": "block-quote",
        "script": "https://www.miamiherald.com/static/hi/graphics/2.0.0/block-quote.js",
        "defaultOptions":
        {
            "data-quote":
            {
                "label": "Quote",
                "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat sapien eu sem mollis, non vehicula tortor malesuada.",
                "type": "text"
            },
            "data-attribution":
            {
                "label": "Attribution",
                "value": "Cicero",
                "type": "text"
            },
            "data-color":
            {
                "label": "Color",
                "value": "#00008b",
                "type": "color",
                "hide": true
            },
            "data-max-width":
            {
                "label": "Quote Max Width",
                "value": "600",
                "type": "range",
                "unit": "px",
                "min": "300",
                "max": "700",
                "hide": true
            },
            "data-attribution-max-width":
            {
                "label": "Attribution Max Width",
                "value": "400",
                "type": "range",
                "unit": "px",
                "min": "300",
                "max": "700",
                "hide": true
            }
        }
    },
    {
        "type": "increment",
        "label": "fact-box",
        "script": "https://www.miamiherald.com/static/hi/graphics/2.0.0/fact-box.js",
        "defaultOptions":
        {
            "data-title":
            {
                "label": "Title",
                "value": "What is a charter school?",
                "type": "text"
            },
            "data-fact":
            {
                "label": "Fact",
                "value": "Charter schools are publicly funded, independently run institutions with flexibility in curriculum and operations. Established by teachers, parents, or community groups, they operate under a specific charter, accountable for meeting academic goals beyond traditional public school constraints.",
                "type": "text"
            }
        }
    },
    {
        "type": "increment",
        "label": "info-slate",
        "script": "https://www.miamiherald.com/static/hi/graphics/2.0.0/info-slate.js",
        "defaultOptions":
        {
            "data-info":
            {
                "label": "Info",
                "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat sapien eu sem mollis, non vehicula tortor malesuada.",
                "type": "text"
            },
            "data-source":
            {
                "label": "Source",
                "value": "Source: National Institute of Health",
                "type": "text"
            },

            "data-max-width":
            {
                "label": "Quote Max Width",
                "value": "700",
                "type": "range",
                "unit": "px",
                "min": "300",
                "max": "700",
                "hide": true
            },
            "data-embed-class":
            {
                "label": "Embed Class",
                "value": "full-bleed",
                "options": [
                {
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
                }],
                "type": "switch",
                "hide": true
            }
        }
    },
    {
        "type": "increment",
        "label": "outro-text",
        "script": "https://www.miamiherald.com/static/hi/graphics/2.0.0/outro-text.js",
        "defaultOptions":
        {
            "slot":
            {
                "label": "Text",
                "options": ["h5", "p"],
                "value": [
                {
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
                }],
                "type": "text-item"
            }
        }
    },
    {
        "type": "increment",
        "label": "summary-list",
        "link": "https://www.miamiherald.com/static/hi/graphics/2.0.0/summary-list.css",
        "script": "https://www.miamiherald.com/static/hi/graphics/2.0.0/summary-list.js",
        "defaultOptions":
        {
            "data-list-style":
            {
                "label": "List Style",
                "value": "ul",
                "options": [
                {
                    "label": "Bulleted",
                    "value": "ul"
                },
                {
                    "label": "Numbered",
                    "value": "ol"
                }],
                "type": "switch"
            },
            "data-title":
            {
                "label": "Title",
                "value": "Summary of Items",
                "type": "text"
            },
            "data-subtitle":
            {
                "label": "Subtitle",
                "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat sapien eu sem mollis, non vehicula tortor malesuada.",
                "type": "text"
            },
            "slot":
            {
                "label": "Text",
                "options": ["li"],
                "value": [
                {
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
                }],
                "type": "text-item"
            }
        }
    }],
    "media-cards": [
    {
        "type": "increment",
        "label": "related-stories",
        "script": "https://www.miamiherald.com/static/hi/graphics/2.0.0/related-stories.js",
        "defaultOptions":
        {
            "data-title":
            {
                "label": "Title",
                "value": "More coverage on schools",
                "type": "text"
            },
            "data-include-site":
            {
                "label": "Include Site Name",
                "value": "",
                "options": [
                {
                    "label": "On",
                    "value": "true"
                },
                {
                    "label": "Off",
                    "value": ""
                }],
                "type": "switch",
                "hide": true
            },
            "slot":
            {
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
                "value": [
                {
                    "tag": "related-story",
                    "text": "",
                    "attributes":
                    {
                        "data-url":
                        {
                            "label": "URL",
                            "value": "https://www.miamiherald.com/news/local/education/article285186842.html",
                            "type": "text"
                        }
                    }
                },
                {
                    "tag": "related-story",
                    "text": "",
                    "attributes":
                    {
                        "data-url":
                        {
                            "label": "URL",
                            "value": "https://www.idahostatesman.com/news/local/education/article282967503.html",
                            "type": "text"
                        }
                    }
                },
                {
                    "tag": "related-story",
                    "text": "",
                    "attributes":
                    {
                        "data-url":
                        {
                            "label": "URL",
                            "value": "https://www.kansascity.com/news/local/article285147997.html",
                            "type": "text"
                        }
                    }
                }],
                "type": "text-item"
            }
        }
    }],
    "graphics": []
}

export default menuDefault;