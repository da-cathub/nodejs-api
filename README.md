# `cathub-api`

![WOW Cathub has a API?!](https://res.craft.do/user/full/c5a06d16-e546-e9e6-71fb-facd27438315/doc/A6558D3B-01CB-4901-9706-03802E54CBA6/AAB0EACA-DD03-4E95-8F85-370769DF0D04_2/AtHuEGfv07xyWuZYRD3nU5pRJixAqcDh01uLBTH4db4z/IMG_6588.png)

A wrapper for Cathub’s API

```javascript
// ============= index.js
const cathub = require(`cathub-api`)

cathub.random(2).then(console.log)

// ============= console.log
[
	{
		"id":"ycg2x0qa",
		"author":"CharlieCat",
		"imageURL":"https://cdn.cathub.space/cyp/IMG_5258.webp",
		"type":"img",
		"ghost":false
	},{
		"id":"llelm4c7rm",
		"imageURL":"https://cdn.cathub.space/117620014_306007537513180_3043951134926672532_n.webp",
		"author":"CharlieCat",
		"catName":"Not known",
		"description":"I woud like to eat your nuggets",
		"type":"img",
		"ghost":false
	}
]
```

## Way to use it!

> ### `cathub.random`
>
> • howManyCats - Defaults to `1` else needs to be `Number` between `1-100`
>
> Sample
```javascript
const cathub = require("cathub-api")

cathub.random(2).then(console.log)
```

---

> ### `cathub.get()`
> 
> • id - **NEEDS** to be a String with valid id of image on CatHub, else returns an `Object` with an error property
> 
> Sample
```javascript
const cathub = require("cathub-api")

cathub.id("ycg2x0qa").then(console.log)
```

---

> ### `cathub.author()`
> 
> • id  - **NEEDS** to be a String with valid id of an user on CatHub, else returns an `Object` with an error property
> 
> Sample
```javascript
const cathub = require("cathub-api")

cathub.author("da.charliecatto").then(console.log)
```
