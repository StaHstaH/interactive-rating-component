//TODO:
// select li elements ✓
// apply consecutive id to these elements ✓
// check for selected li's id on click ✓
// apply class ✓

// make sure that id number corresponds with the item's position & number
// make it possible to unclick the item
// when another item is clicked, clear selection of the currently clicked one


        let selectedIndex = -1;
// Get the <ul> element
        var ul = document.getElementById("rating");

        // Get all <li> elements inside the <ul>
        var liElements = ul.getElementsByTagName("li");

        // Add an event listener to each <li> element
        for (var i = 0; i < liElements.length; i++) {
            let index = i;
            liElements[i].addEventListener("click", function() {
                // Apply a specific class on click
                this.classList.add("rated");

                if(selectedIndex === index) {
                    this.classList.remove("rated")
                    selectedIndex = -1;
                } else if (selectedIndex !== -1) {
                    let otherItem = document.getElementById("item" + (selectedIndex + 1));
                    otherItem.classList.remove("rated");
                    selectedIndex = index;
                }                
                else {
                    selectedIndex = index;
                }
                // Get the ID of the clicked <li> element
                var itemId = this.getAttribute("id");

                // If the <li> element doesn't have an ID, create one
                if (!itemId) {
                    itemId = "item" + (index + 1);
                    this.setAttribute("id", itemId);
                }

                // Display the ID in the console 
                console.log("Clicked item with ID: " + itemId);
            });
        }

