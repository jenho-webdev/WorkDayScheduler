# Work Day Scheduler

- [Explore the docs](https://github.com/jenho-webdev/WorkDayScheduler)

- [Deployed Application](https://jenho-webdev.github.io/WorkDayScheduler/)

- [Report Bug](https://github.com/jenho-webdev/WorkDayScheduler/issues/)

- [Request Feature](https://github.com/jenho-webdev/WorkDayScheduler/issues)

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About The Project](#about-the-app)

- [User Story](#user-story)

- [Acceptance Criteria](#acceptance-criteria)

- [Mock-up](#mock-up)

- [Roadmap](#roadmap)

- [Contact](#contact-me)

- [Acknowledgments](#acknowledgments)

## About The App

The simple calendar application is designed to help users organize their day by allowing them to save events for each hour of the day. The app runs in the browser and features dynamically updated HTML and CSS that is powered by jQuery.

When a user opens the planner, the current day is displayed at the top of the calendar. As the user scrolls down, they are presented with timeblocks for standard business hours. Each timeblock is color-coded to indicate whether it is in the past, present, or future, making it easy for users to quickly identify upcoming events.

When a user clicks into a timeblock, they can enter an event and save it by clicking the save button for that timeblock. The text for the event is saved in local storage, so when the user refreshes the page, their saved events persist.

Overall, this simple calendar application provides users with an easy and efficient way to plan their day and keep track of important events.

## User Story


    AS AN employee with a busy schedule
    I WANT to add important events to a daily planner
    SO THAT I can manage my time effectively


## Acceptance Criteria


    GIVEN I am using a daily planner to create a schedule
    WHEN I open the planner
    THEN the current day is displayed at the top of the calendar
    WHEN I scroll down
    THEN I am presented with timeblocks for standard business hours
    WHEN I view the timeblocks for that day
    THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    WHEN I click into a timeblock
    THEN I can enter an event
    WHEN I click the save button for that timeblock
    THEN the text for that event is saved in local storage
    WHEN I refresh the page
    THEN the saved events persist


## Mock Up
The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->
![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/demo.gif)

## Roadmap

- Allow user to select the total number of questions that they will be quiz on in an incremental of 10.
- Instead of using time remaining and -5sec for wrong answer as a scoring system. Develop a more robust scoring system that will scale with different number of questions set.
- Support interactive coding questions
- Include HTML and CSS questions
- support emailing result to user.

## Contact Me

[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/jen-h-202a1723/)
[![Github][Github-shield]](https://github.com/jenho-webdev/Personal-Portfolio)
[![Slack][slack-shield]](https://jenworkspace-as73396.slack.com/archives/C052QLTJQHG)

## Acknowledgments

- Shield and badges used in this markdown document were sourced from [Shields.io](https://shields.io/).
- The site sound clips were provided by UCI Bootcamp Course.
- This website was inspired by UCIBookcamp Week 4 Assignment. The user story, acceptance criteria were built ontop of the original in the UCI Bootcamp Full Stack WebDev Course.

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[Github-shield]:https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[slack-shield]:https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white
