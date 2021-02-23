# Landing-Page
Web Development Professional Nanodegree Program - First Project


## Table of Contents

This is an Interactive landing Page that contains Four main sections and a navbar that has a link to each one of the main four sections.

## Tools

in this Project we used 
HTML,
CSS and
JavaScript, Especially Dom Techniques 

## Features

There are 4 main sections that have been added to the page,
Navigation is built dynamically as an unordered list,
when each sections be in the view port it will been highlihted and it's links will be active,
Styling has been added for active states,
When clicking an item from the navigation menu, the link scroll to the appropriate section. 

## Explanation
in first part in js code we define global variables,
Then it creates links by number of sections,
and add 'href' Attribute to the 'a' element to use it in scrolling,
then append this links to the ul elemnt.


in setActive function,
we iterate over all sections and add the active class to the section that has been in the view port.
and delete this class from it's siblings.
we used 'getBoundingClientRect' function to do that, it gives me the section position.

## Notes

I didn't use scrollTo method to scrolling, I just add an href attribute to the link with the same name of section id and add a smooth scroll Behavior to the HTML Node in CSS file
