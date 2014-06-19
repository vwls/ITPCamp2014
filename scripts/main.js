$(function() {

    // Populate using an object literal

    WTF.init({
    "heading": [
        ""
    ],

    "response": [
        ""
    ],

    "template": [
        "@kind @project @about @concept made with @material @and @tech",
        "@kind @project @about @concept made with @tech",
        "@kind @project @about @concept using @tech and @tech",
        "@kind @project @about @concept made from @material and @material"
    ],

    "kind": [
        "An interactive",
        "An immersive",
        "A projection mapping",
        "A solar-powered",
        "A wearable",
        "A transmedia",
        "A mechanical",
        "An abstract"
    ],

    "concept": [
        "climate change",
        "our programmable future",
        "the limitations of the human body",
        "first world healthcare",
        "gender as a performative act",
        "geometry in nature",
        "metapatterns in nature",
        "urban space as a playground",
        "new urbanism",
        "childhood memories",
        "new forms of education",
        "the potential of direct democracy",
        "rituals of personal technology",
        "identity",
        "collective identity",
        "collective memory",
        "the quantified self",
        "ritual sleep-deprivation",
        "Allisonian techno-shamanism",
        "digital self-actualization",
        "modes of production",
        "incarceration",
        "new agriculture",
        "big data",
        "new media"

    ],

    "project": [
        "web experience",
        "sculpture",
        "installation",
        "mobile app",
        "personal meditation",
        "DIY kit",
        "pop-up book",
        "twitter bot",
        "non-linear story",
        "game",
        "parametric display",
        "new musical interface"
    ],

    "about": [
        "about",
        "exploring",
        "visualizing",
        "deconstructing",
        "examining",
        "investigating",
        "unpacking",
        "about"
    ],

    "material": [
        "paper",
        "cardboard",
        "ink",
        "conductive ink",
        "ferromagnetic fluid",
        "bricks",
        "latex",
        "origami",
        "LEGOs",
        "techno-trash",
        "plaster",
        "aluminum",
        "wood",
        "light",
        "candy",
        "soil",
        "human hair",
        "food",
        "acrylic",
        "silicone",
        "transistors"
    ],

    "tech": [
        "arduino",
        "LEDs",
        "Raspberry Pi",
        "Processing",
        "openFrameworks",
        "Cinder",
        "javaScript",
        "python",
        "the Kinect",
        "drones",
        "reclaimed plastic",
        "techno-trash",
        "a 3D printer"
    
    ],

    "and": [
        "and",
        "and"
    ]
    });


    // Populate using a JSON file
    //WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    //WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});