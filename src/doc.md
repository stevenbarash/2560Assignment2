# What framework did you pick and why?

For this project I chose Angular for a combination of reasons. Mostly for its popularity, the fact that I already had experience with React and wanted to try something new, I also wanted to get more experience with the type-safety features of TypeScript. In addition, due to the framework's popularity there was a great deal of helpful tutorials and resources for learning Angular, as well as troubleshooting issues. Due to the frameworks relative wide use, it also means that there is little risk of the framework going away anytime soon.

Given my previous experience with React, I felt it would be best to use this project as an opportunity to learn a new framework. I also noticed that Angular uses a similar component-based system to React, so adjusting to Angular was just a matter of adjusting to the new syntax as well as TypeScript. I also used this as a perfect excuse to get more familiar with TypeScript as it was always something that I was interested in learning more about.

# What about that framework appealed to you, for this project?

I was attracted to Angular's large ecosystem of components, large community, usage of TypeScript and popularity in the industry. I saw that many tutorials and how-to's were available as well, which I knew would make the learning process much smoother. Looking at which frameworks to study, I also made sure to look into the employability of the framework, and it seemed that Angular and React would be my best bet given their extremely wide use within the industry. Searching for "Angular" within Linkedin's job search yielded thousands upon thousands of results, so it is safe to say that there won't be any problems on that end with Angular.

Another aspect of Angular that attracted me to it over Angular is the fact that many tasks are taken care of for you, such as handling of updating data. With React I'd have to set up a function to listen for data updates, but with Angular I just put the JavaScript in {{double brackets}} and changes are listened to for me and the page is updated automatically. The fact that it is developed by Google and supported directly by it makes me certain that this framework will be kept to a high standard as well.

# What alternative frameworks did you consider?

I considered just making something with React as I had already had previous experience with it from my internship last summer as well as from other projects. But I realized that I would have missed out on a great opportunity to learn a new framework and gain new skills, so I decided against it. I knew I didn't want to learn Jquery as many of its features have been rendered obsolete as the Javascript standard library grew more advanced with ECMAScript 6+, and also it is not nearly as popular among companies today as some of the other frameworks such as Angular and React. It also didn't provide nearly as many features as these other frameworks unfortunately, and many of the tutorials and articles were over five years old, which made me feel as though the ecosystem and resources for jQuery was stagnating.

I then considered the Vue framework, and I really liked the detailed documentation as well as its straightforward syntax, however Vue is not nearly as popular as Angular or React is in the professional world, so I realized my time was best spent elsewhere as I am mostly learning these frameworks for use professionally after I graduate.

# What resources did you read/watch/listen to?

For the most part I used this YouTube tutorial:https://www.youtube.com/watch?v=Fdf5aTYRW0E

I found this tutorial by searching "Angular Tutorial" on Youtube and simply chose the most popular result. This tutorial had us create a To-Do application using Angular and through this ToDo application I learned many of the fundamentals of Angular as well as more in depth knowledge of TypeScript and ensuring my code was type-safe. In addition, I extensively used the official documentation provided by Google themselves for Angular found at https://angular.io/docs which proved to be immensely helpful as it was very straightforward and detailed. Through this guide I learned the specifics of how components work behind the scenes, and also more generally how Angular works as a whole, as the tutorial video above really only gave a brief introduction to how Angular works behind the scenes.

I also made use of the documentation for Angular's Material Design UI Library and components found at https://material.angular.io/. This helped a great deal when I was trying to bind the long list of languages to a drop down. Rather than manually creating <option> items for each selection item, the guide showed me that I can bind an array of objects to the dropdown menu instead which would save a great deal of time, and also make the code much neater and easier to understand.

# Describe your project. What does it do? What components or features of the framework did you explore for this project?

For my project I decided to utilize Yandex Translate's translation API to create a translator app. I am really interested in languages so I was hoping to combine this interest with this project in some way. Yandex is essentially the Google equivalent for Russia, and I frequently used its Russian-English translation features for my Russian class as I found it to be much better than Google Translate. I was interested to see how the API worked behind the scenes and actually found it much more straight forward than Google's much more popular service. Although at times parts of the API was documented

The way my project works is that there are two dropdowns with all 50+ of the languages that Yandex translate supports. The user pics the desired language translation combination, for example English-Chinese and then types in what they want translated in the textbox on the left. This combination of language selection and text is then appended to the API query and then the response is displayed on the right. Angular listens to changes in the dropdowns in the background and adjusts the api call accordingly. In addition I set it to wait 500ms after the u ser stops typingbefore sending the API call so that it doesn't overload the API.

Some of the features I used was Angular's built in Material Design themed components, Angular's component system, TypeScript's typing system, and also Angular's built in handlebar system.
