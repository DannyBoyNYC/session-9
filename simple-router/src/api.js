// A simple data API that will be used to get the data for our
// components. 
const PiratesAPI = {
  pirates: [{
      "number": 1,
      "name": "John Rackham",
      "image": "avatar.svg",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga minus molestiae placeat ad iure asperiores nam, recusandae dolor quasi debitis, eveniet reiciendis veritatis et! Sit provident, praesentium laborum tempore.",
      "year": 1724,
      "weapon": "Sword",
      "vessel": "Bounty"
  }, {
    "number": 2,
      "name": "Donald Trump",
      "image": "avatar.svg",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia consectetur, praesentium eaque ad odit. Nihil molestiae ut temporibus commodi natus delectus cumque architecto, eligendi ad repellat, quasi porro eos dignissimos.",
      "year": 1800,
      "weapon": "Twitter",
      "vessel": "Bounty"
    }, {
      "number": 3,
      "name": "Sea Dog",
      "image": "avatar.svg",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem autem rerum, nam minima dolorum blanditiis, velit aliquid assumenda illum totam magni sint laudantium laboriosam odit minus distinctio repellendus. Cumque, quod.",
      "year": 1684,
      "weapon": "Sword",
      "vessel": "Bounty"
    }, {
      "number": 4,
      "name": "Jean Lafitte",
      "image": "avatar.svg",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus pariatur ratione dicta, neque sed, odio maxime, saepe autem libero dolore nobis. Dicta deleniti, illo natus nemo suscipit impedit quod amet!",
      "year": 1629,
      "weapon": "Sword",
      "vessel": "Bounty"
    }, {
      "number": 5,
      "name": "Crab McPirate",
      "image": "avatar.svg",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magnam ullam eveniet eius provident, omnis quos ex quam maiores id fugit accusantium ea ipsa tenetur excepturi vero quis nulla aliquid!",
      "year": 1734,
      "weapon": "Sword",
      "vessel": "Bounty"
    }],
  all: function() { return this.pirates},
  get: function(id) {
    const isPirate = p => p.number === id
    return this.pirates.find(isPirate)
  }
}

export default PiratesAPI