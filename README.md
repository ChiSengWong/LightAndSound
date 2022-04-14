# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **ChiSengWong**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/abyssinian-ten-judge

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Game buttons are disabled when clues are playing, to prevent multiple clues playing at the same time.
- [x] Added display on HTML page to show how much time the player have left.
- [x] Added display on HTML page to show how many strikes the player have left.
- [x] another button sound is played when player clicked on inccorrect button.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![x](https://imgur.com/ZNf6z8N.gif)
![x](https://imgur.com/kTxjYTV.gif)
![x](https://imgur.com/jjfUb67.gif)
![x](https://imgur.com/VCTfU85.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   https://www.w3schools.com/howto/howto_css_round_buttons.asp
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
   https://www.w3schools.com/cssref/css_colors.asp
   https://www.w3schools.com/howto/howto_css_round_buttons.asp
   https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
   

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
 	Although I have learned the basic of HTML, CSS and JavaScript on my own in the past. It is my first practical experience of web development.  One of the biggest challenge I encounter during the project was the confusion about how the three elements interact with one another, when I was looking for supporting resource online, I often got confused because of  changes in one of the three structures of the website often requires correlated adjustment in the other structures. I overcome the confusion by spending a lot time read through some documentation of the three structures to get a full understanding of basic before further implementing extra features.
	Another issue that I faced is solving hidden bugs in the game. Since web development includes interactive user interface elements, which I was unfamiliar with, it took me a while to discover bugs and took me even longer to deal with it. When testing out the project, I found that if players were able to click game buttons when the clues are playing, it could result in multiple turns of clues being played at the same time, which would confuse the player in their next approach. The reason for the bug is that I did not consider the situation that players start clicking on game buttons before all clues are played. Eventually I decided to debug by pausing the functionality of game buttons when clues are playing by using setTimeout function taught in the instruction. I found the root cause of the bug is that I did not consider every situation and did not have clear understanding of how onClick events would interact with the JavaScript logic. To prevent more bugs occurring in the rest of my implementation, I decided to hand write a diagram indicating the relation between each features and events. That helps me to have a clear image to view before add features. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
	After developing the Light and Sound game website, one of the greatest quetsion in my mind is are there ways to do testing for web development more efficiently, and what technology could I implement to help with my testing. Since I am not familiar with web development, I have to use the most barbaric way of testing code, manually running and playing the game myself and try to  find bugs during game play. Unlike using Java, which is a more familiar language to me, testing could be done by writing JUnit test cases beforehand to ensure my implementation is working as expected. However, I do not have tools in my knowledge to test an interactive website. 
	Another question that popped up in my mind during the project is whether is it possible to organize web developing code in a more pleasant way? For instance, in style.css file of the project, we implements four identically built game buttons. The way to do so on instruction is to write four identical blocks of code separately. Are there any tools that could help dealing with such redundant steps? Organizing code and building up the frame structure of a project are always the hardest part of any projects and assignments that I have done before. The instruction of this project taught me how to build a simple project from scratch, I wanted to learn more about how should I divide a larger project into a clear project frame to work on.
  
4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
	If I had a little more time to work on the website, I could add a leaderboard system to the project, which includes score record features, online features, user account registration feature, social media connecting feature and infinite pitch mode feature.
	The most important part is adding online feature to the game so that it creates a competition between people. The score recording feature would record the users highest score in the game and upload it to the Internet. Score could be determine by play time of one normal game, or the number of turns one plays in the infinite mode. The infinite mode is a feature to let people play the game for unlimited number of turns. Last but not least is the account feature which let user either create an account or connect to their social media, so that their score could be upload to the leaderboard with their identity.
	

	

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.kapwing.com/videos/6257763fb7c1cd00c3b4f623)

## License

    Copyright [ChiSeng Wong]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
