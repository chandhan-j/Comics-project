AFRAME.registerComponent("comics", {
  init: function () {
    this.placesContainer = this.el
    this.createCards()
  },
  createBorder: function(position, id) {
    const entityA = document.createElement('a-entity')
    entityA.setAttribute("id", id)
    entityA.setAttribute("position", position)
    entityA.setAttribute("visible", true)
    entityA.setAttribute("geometry", {
      primitive: 'plane',
      width: 22,
      height: 30
    })
    entityA.setAttribute("material", {
      color: 'blue',
      opacity: 0.1  
    })
    entityA.setAttribute("overlay", {
      overlay: 1
    })
    return entityA
  },
  createthumbnail: function(item) {
    const entityB = document.createElement('a-entity')
    entityB.setAttribute("visible", true)
    entityB.setAttribute("geometry", {
      primitive: 'plane',
      width: 20,
      height:28
    })
    entityB.setAttribute("material", {
      src: item.url
    })
    return entityB
  },
  createTitle: function(position, item) {
    const entityC = document.createElement('a-entity')
    entityC.setAttribute("text", {
      font: 'exo2bold',
      align: 'center',
      width: 60,
      color: 'black',
      value: item.title
    })
    const elPosition = position
    elPosition.y = -20
    entityC.setAttribute("visible", true)
    entityC.setAttribute("position", elPosition)
    return entityC
  },
  createCards: function () {
    const thumbNailsRef = [
      {
        id: "Iron_Man",
        title: "Iron Man",
        url: "./assets/thumbnails/Iron_Man.webp",
      },
      {
        id: "Shazam",
        title: "Shazam",
        url: "./assets/thumbnails/Shazam.jpg",
      },

      {
        id: "Spider_Man",
        title: "Spider Man",
        url: "./assets/thumbnails/Spider_Man.jpg",
      },
      {
        id: "Super_Man",
        title: "Super Man",
        url: "./assets/thumbnails/Super_Man.jpg",
      },
    ];
    let previousXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = previousXPosition + 26;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id)
      // Thumbnail Element
      const thumbnail = this.createthumbnail(item)
      borderEl.appendChild(thumbnail)
      // Title Text Element
      const title = this.createTitle(position, item)
      borderEl.appendChild(title)
      
      this.placesContainer.appendChild(borderEl);
    }
  },
  
});
