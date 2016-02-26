# SillyId
#### Generate fun Id's like HairyOrangeGeckos

Inspired by the gifycat urls.

### Basic Usage

	var SillyId = require('sillyid')
	
	var sid = new SillyId()
	
	sid.generate()
	=> "HairyOrangeGeckos"
	
	
### Customisation

	var SillyId = require('sillyid')
	
	var order = [
	    // use { ..., letter: '*' } for any letter to be used
		{ type: 'adj',  letter: 'n'  },
		{ type: 'adj',  letter: 'p'  },
		{ type: 'noun', letter: 'm' }
	]
	
	var spacer = '-'
	
	var caps = false
	
	var sid = new SillyId(order, spacer, caps)
	
	sid.generate()
	=> "naked-purple-monkey"
	
### Todo
 - BYOD a.k.a Bring your own dictionary(s)
 - Include adverb dictionary
 - Include more categories of nouns (only animals at the moment)
 - More entries in the dictionaries
 
Have better/more/extra words for the included dictionaries? Or improvements to the code? Submit a PR! Don't be nervous, even small updates are appreciated :)