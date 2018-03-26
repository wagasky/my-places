# Concept3D Interview : The Technical Challenge

### Overview

I completed this challenge for Concept3D. The challenge took me about ~6-7 hours and I spread that out over the course of the weekend. I completed all of the required features:

 ```When I enter a valid latitude and longitude into the form with a name, and then press enter, I will see a new marker added to the map with the correct name in the popup```
 - Markers must persist on refresh of the browser. It is not required to persist on the server side, but it'll be more impressive if it does.
  - **Valid** latitude and longitude is important. How you want to verify that is up to you.
  - Use Redux and Reducers to update the state of your app.
 
 ```When I click on a marker, it's location will be used as a point for a polygon. Successive clicks will add markers to the polygon, and clicking a point will remove it from the polygon```
 
  - Use the React-Leaflet library to add your polygon
  - Use Redux to update state

And most of the bonus features:

- When adding a new marker, the center of the map will be set to the [lat, lng] of the new marker.
- Add some other fun features with the React-Leaflet library. Be creative!



### Bonus additions:

First, I decided to update the map marker to reflect the icon of the leaflet library by editing the L.icon element available with leaflet. I also selected a polygon color to compliment the icon. 

![image](https://user-images.githubusercontent.com/24358415/37892386-eebaa9ee-3094-11e8-952d-488d13ea2b75.png)


Next, I imported the WMSTileLayer element from react-leaflet to render two different layers on the map. When the user loads the page, they see:

![image](https://user-images.githubusercontent.com/24358415/37892545-650e47d6-3095-11e8-9505-73b0ee174b0b.png)

![image](https://user-images.githubusercontent.com/24358415/37892524-529af46e-3095-11e8-80c3-196dd1c75d3c.png)


And they can toggle to this view with a click:

![image](https://user-images.githubusercontent.com/24358415/37892571-75bdfee6-3095-11e8-95ce-d9d733e1950c.png)

![image](https://user-images.githubusercontent.com/24358415/37892587-81903acc-3095-11e8-9da0-f5ec73b5499d.png)


### Intructions

1. Clone this repo to your own machine.
2. cd into the repo
3. Delete the .git folder.
4. Initialize a new git repo on your own Github profile.
5. `npm install`
6. Open a separate terminal tab and run `npm run dev` (this will start your server)
7. Open a separate terminal tab and run `npm start` (to start the app in chrome)

This project was made with Create-React-App.


### Next Steps:

I ran out of time to test the React elements and the new server endpoints in Javascript. I'd like to do that with Jest and Enzyme - a handy library for testing React. I'd like to keep playing around with leaflet and develop a view of the map where you can select a pane and see the geographic name of that pane in the tooltip. I'd also like to refactor out unused redux elements, move stateless containers into the components folder, and refactor all of the code I wrote to be more declarative and bried whenever possible.
