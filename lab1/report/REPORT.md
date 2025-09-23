# Labwork 1 - Setting up Ionic Framework and Developing First App

## Introduction

This report is written as a part of Labwork 1 – a practical assignment from Module
1, where students were expected to study module materials, complete an online
course on Udacity and set up the environment for the future work related to this
course. Additionally, students were expected to share their experiences of setting
up the environment, as well as learning reflections.

In the following text, I will share my learning reflections, alongside a step-by-step
demonstration of how I set up my learning environment, in accordance with the
instructions. Demonstration consists of screenshots and written explanations.
However, I need to point out that I am using a MacBook, therefore some installation
processes were significantly different for iOS compared to Windows. My current OS
is macOS Sequoia version 15.6.1, and my MacBook runs on an M1 chip. These
specifications were taken into consideration when downloading and installing
certain tools to ensure compatibility.

## Learning reflection

As per Canvas instructions, I studied materials from Module 1 and only then
attempted to complete this assignment. Module 1 was interesting, because I have
learned many new concepts I have been unfamiliar with. Since I do not have any
previous experience with mobile app development (or development of any kind,
apart from some small school projects), most of the tools were completely new to
me. It was interesting to learn the difference between native and hybrid apps, and
all the way hybrid apps can be developed (How to develop cross platform apps
2021). Additionally, JavaScript videos offer a lot of useful information for those
who are, just like me, complete beginners when it comes to that programming
language (JavaScript Course for Beginners 2018).

On the other hand, the Udacity course (UX Design for Mobile Developers) content
was familiar, since I already did a course on UX Design (Coursera) and also have
some experience of creating personas, analyzing customer journeys, prototyping
and wireframing from other school related projects. Nevertheless, it was
interesting to learn how developers and designers can work together, rather than in
silos, on building the app with the best possible UX design. Design oriented
developer was also a new term that I have learned.

When it comes to setting up a work environment for this course, I had some
experience from previous courses. For instance, I had already installed Git and
Visual Studio Code, as I have been using them for other school related projects, so
for this course, I only updated them to the last available versions. For most of the
tools, setting up was pretty straightforward and, in some cases, much more simple
compared to Windows OS. For instance, it took me less time to install Node.js than
anticipated in the instructions. Also, I was using Terminal on a Mac, so some of the
commands were specific to it and I needed to search for them, as they were not
provided in the instructions document, but finding them was relatively easy.

I did, however, experience some problems when setting up some of the tools. I
could not update Visual Studio Code by using the in-app features – every time I
would click update and restart the app, it would show that I still have the same
version in use. I could not update it using Terminal either, because I installed the
app manually. In the end, I went to the website, downloaded the latest version and
replaced the old one with it. It did not take me a lot of time, and the solution was
straightforward.

The most complicated installation process for me was related to Ionic. First I
wanted to make sure that I was using the right commands. Then I encountered
some issues when trying to create the app because the output was showing multiple
errors. However, the solution was offered in the output as well and, after a few
tries, I managed to create the first app. I also asked for advice from my friend who
is also using a Mac, and learned that error output when trying to create an Ionic app
is not that uncommon when it comes to iOS. Luckily, I was able to resolve it and
proceed with the steps from the instructions.

The whole experience of setting up the Mobile App development environment was
an interesting experience and I learned a lot from it. I am confident that I will be
able to install a similar set up in the future, although I believe that I need more
practice to be able to confidently resolve any issues that might appear in the
process.

## Node.js

For installing Node.js, I followed the link provided in the Lab instructions. The
website automatically suggested the last version with Long Term Support. 
The installation process was straightforward and much easier than
the one for Windows, demonstrated in the instructions. I downloaded the .pkg file
and opened the installer, which took me through several steps from
Introduction to Summary, until I completed the installation. At the
end, there was the prompt to either keep the installer or move it to the bin. 
After closing the installer, I checked in Terminal whether the
installation was successful or not. In the last screenshot, you can see
the output I got after the command node -v, which checks for the version of
Node.js that is installed on my computer.

### Node.js instalation screenshots

- [Node.js Screenshots](../screenshots/node.js)


## Git

I already have Git installed on my computer. We used Git and GitHub Desktop for
collaboration during our Python group project, which was a part of the
Fundamentals of Programming course. I checked for the version of Git I had,
and since that was not the latest version, I downloaded the latest
version following the steps provided in Labwork 1 instructions document.
Since I opted to upgrade Git by using Homebrew, I run
brew update which refreshed the package information and identified
3 outdated packages, Git being one of them. My next command was
brew upgrade git, which upgraded git to the latest version. Then I
checked whether the update was successful using the command git -–version, which
showed version 2.51.0. Lastly, I checked the configuration, making
sure that my username and email are still in place, which you can see in the last
screenshot.

### Git update screenshots

- [Git Screenshots](../screenshots/git)


## Visual Studio Code

Just like Git, I already had Visual Studio Code installed, and I used it
throughout the last year in different courses, such as Fundamentals of Programming
and Foundations of Web Development. I checked for the version I have, and it
showed that my current version is 1.100.1. I checked for the updates
inside the app and tried to update VSC that way but it
was not successful. I then visited the Visual Studio Code website, where I
downloaded the last version of VSC. I replaced the old VSC with the
newest version in the Applications folder. Therefore, my current
version of VSC is the one from August 2025.

### Visual Studio Code update screenshots

- [Visual Studio Code Screenshots](../screenshots/visual_studio_code)


## Java JDK

I did not have Java JDK installed, so I followed the link provided in the instructions.
I choose JDK 21, as it offers support until September 2026. I choose
to download ARM64 DMG Installer, since it is the most compatible with my
computer. I downloaded the file and completed the installation
process. Finally, I used java –version command in my
Terminal to check whether the installation was successful. I did not
have an option to set environment variables, but I assume that it will not be an
issue, since this is the only version of Java JDK installed on my computer.

### JavaJDK installation screenshots

- [Java JDK Screenshots](../screenshots/java_jdk)


## Ionic CLI and First App Development

For this part of the assignment, I first wanted to make sure that I did not have Ionic
installed, since I am not the first user of this computer. However,
the Ionic was not found, so I proceeded with the installation process following the
instructions from the link provided in Canvas and managed to install it successfully.
My user password was required in the process, to authorize
installation. Then, I used the command ionic -v to check for the current version of
ionic, and the output can be seen in screenshots.
Then I created the folder called Labwork1, where my first Ionic app will be stored.
However, when I tried to access that folder in Terminal, permission was denied,
which was peculiar. I confirmed that I was the owner of the folder
and was struggling to understand why I could not access it, but then I noticed that I
made a mistake when typing the command in Terminal - I forgot to type cd before
specifying the document path. I fixed my mistake and was granted access to
Labwork1 Folder. Then I typed the next command ionic start
FirstApp tabs –type react. I decided to call my app FirstApp and choose the tabs
view. I was then asked to give permission to Terminal to access my Document
folder, where Labwork1 was located. I gave permission.
However, the output I got had several errors and even offered some examples of
how I can resolve the issue. It turned out that I made a mistake by
using sudo when installing Ionic, which caused some files in my npm cache to be
owned by root. I executed the command that resolved this issue, by changing
ownership back to my account. I was also prompted to enter my password, which I
did. After that, I repeated the process of creating the app – accessed Labwork1
Folder and typed command for creating FirstApp. From the output I got, it was
clear that the app folder had already been created in the previous attempt, which I
decided to overwrite. The process was successful this time. I was asked to create an Ionic account, which I
refused. I then ran cd FirstApp as per instructions, and then ionic
serve which opened FirstApp in the new tab of my browser. 

### Ionic installation and First App Developmet Screenshots

- [Ionic Screenshots](../screenshots/ionic)


## References

- How to Develop Cross Platform Apps. 2021. Programming w/ Professor Sluiter. Accessed 10 September 2025.  
  [Watch on YouTube](https://www.youtube.com/watch?v=AlyTBd4tuMs&t=1s)

- JavaScript Course for Beginners – Your First Step to Web Development. 2018. Programming with Mosh. Accessed 10 September 2025.  
  [Watch on YouTube](https://www.youtube.com/watch?v=W6NZfCO5SIk&t=1s)

- UX Design for Mobile Developers. Udacity. Accessed 12 September 2025.  
  [View Course](https://www.udacity.com/enrollment/ud849)
