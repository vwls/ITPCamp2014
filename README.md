INSPIRED BY JUSTIN: https://github.com/soulwire   BY FLETCHER: https://github.com/lifeonhoth 




## How to use it

To make your own, simply [clone](github-mac://openRepo/https://github.com/soulwire/WTFEngine) or [download](https://github.com/soulwire/WTFEngine/archive/master.zip) this repository and start populating the engine with your content.

You can populate it using one of three different methods. Each is controlled from [`main.js`](https://github.com/soulwire/WTFEngine/blob/master/scripts/main.js) (where you will find commented examples of each technique.)

1. JavaScript Object literal
2. A JSON file
3. A live feed from a Google spreadsheet

If you choose to use a Google spreadsheet, you must [publish it first](https://support.google.com/drive/answer/37579?hl=en) and be sure to manually republish it after editing if you want changes to propagate immediately, otherwise they will take around 15 minutes.

Here's an [example spreadsheet](https://docs.google.com/a/soulwire.co.uk/spreadsheet/ccc?key=0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc), which you can clone and use a base for your data source.

_**Note**: For local testing (when using loaded JSON or Google spreadsheet data), you'll need to serve the site from a local webserver. You can easily do this using tools like [SimpleHTTPServer](http://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python) for Python or [http-server](https://github.com/nodeapps/http-server) for Node._

## How it works

The process is very simple. The WTF Engine takes a sentence template and fills in different types of blanks with different types of words, much like the game [Mad Libs](http://en.wikipedia.org/wiki/Mad_Libs). You can nominate any amount of templates and as many different categories of words or phrases as you like.

For example, here is a basic corpus

    {
        template: [ "Big @color @animal", "Silly @animal with @color fur" ],
        animal: [ "dog", "cat", "rabbit" ],
        color: [ "red", "blue", "green", "yellow" ]
    };
    
As you can see, in a template you use the __@__ symbol, followed by the type of word you wish to use to tell the WTF Engine to pick a random word of that type from the corpus and insert it at that point.

## Showcase


- [MasterChef Me](http://www.masterchef.me)
- [Bieber Blotter](http://www.linkalope.com/bieber-blotter)
- [What the Fuck is my Wearable Strategy](http://whatthefuckismywearablestrategy.com/)
- [What the Fuck is my Next TV Format](http://www.whatthefuckismynexttvformat.com/)
- [What the Fuck is my Twitter Bio](http://whatthefuckismytwitterbio.com/)
- [What the Fuck is my Award Idea](http://whatthefuckismyawardidea.com/)
- [What is my SEO Doing](http://www.clicksandclients.com/what-is-my-seo-doing/)
- [Fucking Valentines](http://fuckingvalentines.com/)
- [Tony Abbott Excuse](http://abbottexcuse.1apps.com/)
- [Why the Fuck are you Running Late](http://www.whythefuckareyourunninglate.com/)
- [What the Fuck is my Brief](http://www.whatthefuckismybrief.com/)
- [Whip-o-matic](http://whipomatic.com/)
- [What the Fuck is my SXSW Panel](http://wtfismypanel.com/)
- [Pitchfork Review Generator](http://pitchforkreviewgenerator.com/)
- [Shit PR Ideas](http://shitprideas.com/)
- [What the Fuck is my Mashup](http://whatthefuckismymashup.com/)





