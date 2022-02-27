# Codedamn Projects - Spotify Audio Player Clone

![header image](https://raw.githubusercontent.com/codedamn-projects/spotify-audio-player-clone/master/designs/Home%20%5BDesktop%5D.png)
## Hello developer!

This is one of the many projects available on [codedamn](https://codedamn.com/projects) to reinforce your learning by building. If you want to become a full stack developer and learn by practicing, feel free to attempt this challenge. Feel free to check out the codedamn [Full Stack Web Development Learning Path](https://codedamn.com/learning-paths/fullstack) to learn more about how to become an awesome full stack developer.

## Project Overview and Instructions

You have to implement a functional audio player similar to spotify where a user can  play, pause, shuffle and repeat functionality. 

The users can also be able to view the songs Queue and playlists as well. 

The main intention of the project is not the user interface but the functionality to build an audio player. 

Your projects should have the following functionalities 

- playing songs on clicking on them
- ability to move between songs (forward and backward)
- ability to change the volume 
- ability to shuffle the songs
- ability to view the queue 
- Be responsive for desktop and mobile phones

You can find the songs and playlist data in the `public/songs.js` and `public/playlists.js` 

You can also find the `.mp3` files in the `/audio` folder.

You can take a look at below attached two articles to get to know more about how to build a custom audio player 

- [Creating a custom audio player (CSS Tricks)](https://css-tricks.com/lets-create-a-custom-audio-player/)
- [Building a Music Player with React (aviyel)](https://aviyel.com/post/1193/building-a-music-player-application-in-react-js)

There is no limit you can go beyond the mentioned criteria and create additional functionalities

Your challenge is to build out this project and get it looking as close to the design as possible.

You can use **any tools or technologies** you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

### Landing Page

The `/` directory represents the Home of the application.

![Home page](https://raw.githubusercontent.com/codedamn-projects/spotify-audio-player-clone/master/designs/Home%20%5BDesktop%5D.png)

### Playlists 

At `/playlists/[id]` you have to show the playlist and the detailed list of songs in the playlist similar to the image below. 

![playlists](https://raw.githubusercontent.com/codedamn-projects/spotify-audio-player-clone/master/designs/playlist%20%5BDesktop%5D.png)


### Queue 

At `/queue` you should show the active queue of the player 


![Queue](https://raw.githubusercontent.com/codedamn-projects/spotify-audio-player-clone/master/designs/Queue%20%5BDesktop%5D.png)

### Ports 
The Codedamn Playgrounds exposes only `1337` and `1338` ports on the internet. So you'll be using `localhost` for connecting to the mongodb instance as they are hosted on the same docker container. You can specify it as `localhost:27017` or simple write `localhost`. 
 
## Want to do more 

- You can create a database and store all the songs and playlists 
- You can directly interact with the spotify api instead of showing the downloaded songs
## Where to find everything

Your task is to build out the project as per the provided screenshots.

The designs are in image formats can be found in `/designs`.
## Send feedback!

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please visit [codedamn feedback page](https://codedamn.com/contact)