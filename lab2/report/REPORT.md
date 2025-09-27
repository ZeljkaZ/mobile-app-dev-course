# Labwork 2 – App navigation and Git

## Introduction

Lab work 2 has two tasks. The first one is to develop a simple mobile app with
navigation and tab components. The second task is to configure the GitHub
repository. This report contains step-by-step explanations of how I completed the
tasks in Lab 2, as well as accompanying screenshots. Additionally, at the beginning
of the report, I will share my learning reflection and experience of completing Lab
2. 

## Learning Reflection

Module 2 offers more detailed insight into Ionic and React. The video materials
provide instructions on how projects are created, and more concrete examples such
as how to create tab bar navigation or other components such as buttons, slide bars
etc. (Ionic + React + Firebase 2020). The material is detailed and informative, but
was hard to follow at times, since I have no previous experience with hybrid app
development. I had to pause some of the videos to learn more about certain
concepts and needed to rewatch some parts. 

I particularly liked videos about GitHub, especially Git and GitHub for Beginners –
Crash Course (2020). I really wish I discovered this video a year ago when I started
using GitHub, as it would have saved me a lot of trouble. It explains the difference
between Git and GitHub in a clear and beginner-friendly way and offers a lot of
useful information for working with GitHub. 

However, what I found interesting was the ease of creating applications with Ionic.
It requires only a few commands in Terminal, choosing the right template for your
app, and you get a whole project ready for you to work on in Visual Studio Code.
Going through Lab work steps helped me to better understand content from Module
2 videos that were previously difficult. I encountered some challenges with the first
task of Lab 2. Since I am using a Mac, there are some permission issues that appear
from time to time. I used Saudi when installing dependencies for Ionic, but it
appeared to create some conflicts later when I tried to create an Ionic app. I
resolved the issues in the same manner I did in Lab one and was able to complete
this step successfully. 

I was also confused by some of the instructions provided in Canvas, as they were a
bit vague. For instance, I did not understand do we need to install all the
dependencies or only React. However, I contacted our tutor student, who was more
than willing to help and to answer additional questions I had. 

The second task of this Lab work a bit easier, since I have already used Git in
Terminal for pushing/pulling and connecting local and remote repositories. I did not
have any access issues when using git, but the reason for this is that I have already
set an access password. I mistakenly created a separate repository for the first Lab
work, so I decided to create a new repository for all the labs for this course. I
cloned it locally on my computer and added Lab 1 to it. However, when I wanted to
push changes, Git kept asking for a keychain password. Since my old password was
not working, I tried pushing changes through Visual Studio Code but encountered
the same issue. Finally, I generated a token on GitHub and used it for
authentication, so I was able to commit and push my lab work successfully. 

## Hands-on Practice 1 – Navigation App

### Step 1 – Dependencies configuration

I followed the instructions provided in Canvas and checked for Ionic version that I
have installed on my computer. My next step was to install dependencies.
The instructions advised to install them globally. So, first I installed Angular. 
I used sudo to avoid permission errors. The next step was installation of Cordova. 
I used sudo again here, and first installed the latest version, and then checked whether 
the installation was successful and what was the version I installed. Finally, 
I installed React following the instructions provided in Canvas. 
I ran ionic info and had some warning in the output, just as instructions
predicted.

### Step 2 – VSC and installing Plug-ins

I installed the following extensions:

- Angular Language Service 
- Angular Snippet (Version 18) 
- ESLint 
- Atom One Dark Theme 
- Ionic Development Extension Pack 
- ES7+ React/Redux/React-Native/JS snippets 

### Developing a Simple Mobile App With Navigation

First, I created a directory named Labwork-2, as per instructions. Then I ran ionic
start –-list command.

### Creating a New Tabs Project

Next, I started creating the app. Here I encountered similar issue as those in Lab 1.
I used sudo for installation to avoid permission errors, and now,
when I tried to create a new Tabs project, the output in my Terminal was full of
errors. The problem was the ownership of some files which were owned by root
instead of me, so I needed to fix that. To resolve this, I changed ownership of the
project files back to my user account. Also, I deleted some of the corrupted files
and ran npm install again to successfully complete the process.
However, I did not get any prompts during installation similar to those from the
Instructions document. Then I ran ionic serve and got the output shown in
screenshots. 

### Opening the Project in VS Code

When I opened my project in VSC, I got suggestion to install one more extension - WebNative, 
which I did. 

### Building a Simple UI With Navigation

I followed the steps from the instructions and made the required changes to the
App.tsx document and then I terminated running processes. I also saved the changes 
I made in VSC. Then I ran ionic serve again and saw the changes in the app. Next, 
I added a service page and then followed the rest of the instructions to create the
navigation and connect the pages.

## Hands-on Practice 2 – Git

For the second part of this lab, I first checked for the version of Git I have. 
Then I created a new Ionic blank project, following the
instructions from Canvas. I was prompted to create a free Ionic
account, but I refused. I then went into the GitDemo directory, ran the app in the
browser and then terminated the server, as per instructions.
I already have an account on GitHub, so I skipped the next step where we were
supposed to sign up. But I created a repository named GitDemo.
Then I ran a command to initialize the local Git repository, but got the message
that it was already initialized, so the reinitializing took place. Then I checked git
status and staged all files for commit, but there was nothing to commit. 

The next step was to connect the local repository with the remote one. I
encountered some issues with branch naming, just as instructions predicted, but
managed to successfully push the project to the remote repository (Screenshot 33).

### References

- [Ionic + React + Firebase. 2020. Mehul. Codedamn. Accessed 23 September 2023.](https://www.youtube.com/watch?v=J_MIqthDInM&list=PLYxzS__5yYQlhvyLXSKhv4oAvl06MInSE&index=10)  

- [Git and GitHub for Beginners – Crash Course. 2020. FreeCodeCamp.org. Accessed 23 September 2025.](https://www.youtube.com/watch?v=RGOj5yH7evk)  
