# Initial CSS Setup

- User a master.css file to import everything in the correct order (see table of contents below)

# When creating new CSS files

- Add a table of contents to each of our CSS files (particularly if they get larger!)

# When working with your CSS

- Nest no more than 3 times.
- order selectors alphabetically
- Don't use vendor prefixes. We will autoprefix them!
- Use comments to structure your CSS in sections that make sense
- Naming convention: Follow the [BEM (Block__Element--Modifier)](http://getbem.com/naming/) pattern
- If applicable: Don't create styles for CSS classes suffixed with `--js`! Those classes are only used for JS functionality

# Inividual Parts

## Reset

- Don't change this! This resets the default browser styles

## Constants

- When using SCSS desing global variables such as colors here.
- Without SCSS use this file to write in comments all the default constants as reference

## Typography

- Define default styles for HTML tags: h1..., strong, small, p, etc.

## Helpers

- Define helper classes that can be useful in our code such as .text-right etc.
- Alternatively this can be the home for helper @mixins or classes to @extend from

## Components

- Define reusable component classes that will be reused all over the platform, such as buttons
- Create an inventory of components and how to use them!

## Layout

- Setup the gloabl layout of the app

## Pages

- All styles are loaded globally EXCEPT for the last bunch: "Pages". That's page specific CSS that should only be used if you are absolutely certain that certain styles are not going to be reused anywhere else.
