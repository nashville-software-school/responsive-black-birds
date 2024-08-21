# Responsive Web Design
Responsive web design is an approach to designing and developing websites that ensures they work well on a variety of devices and screen sizes. The goal is to provide an optimal viewing experience, whether users are on a desktop, laptop, tablet, or smartphone.

Here are some key principles of responsive web design:

### Fluid Grids
Instead of using fixed-width layouts, responsive design uses fluid grids that adjust to the size of the screen. This means that the content and layout can scale proportionally based on the screen size.

### Flexible Images
Images and other media elements are also scaled to fit the screen size. This ensures that images don't overflow their containers or appear too small on larger screens.

### Media Queries
These are CSS techniques used to apply different styles based on the device's characteristics, such as screen width, height, or orientation. Media queries help tailor the layout and appearance of the site to different devices.

### Responsive Typography
Text sizes and line lengths are adjusted to be legible and aesthetically pleasing across different devices.

# Resources

There are plenty of articles and videos on Responsive Design. Here are a few:
- [Web Dev Simplified: 10 Concepts](https://www.youtube.com/watch?v=TUD1AWZVgQ8)
- [Web Dev Simplified: 7 Sizing Features](https://www.youtube.com/watch?v=1AyiCquK8zY)
- [Net Ninja: Comprehensive Tutorial Series](https://www.youtube.com/watch?v=3tLb3i7GB38&list=PL4cUxeGkcC9g9Vh9MAA-XKnfJsWZnPZFw)


# Black Birds

The example you're going to work with is a website that lists various black birds and provides a description of each, to help people learn more about them and their differences.

# What to do
After cloning this repository and opening it in VSCode, you'll notice two folders. One with some basic code to start with, and another with a completed solution. Use these steps to run both of them:

- In terminal, run `serve -l 3000` from the `complete` directory
- Visit `http://localhost:3000` in your browser
- Open your `Developer Tools` and choose the `Console` tab.
- In the top-left of the Developer Tools, click the `Device Toolbar` icon. It looks like a laptop and a mobile phone.
- Click the `Dimensions` dropdown at the top of the browser view and choose different devices to see how the site looks on each one, or use `Responsive` to freely resize the view.

After you see how the site looks on different devices, it’s time to make it work on your own. Follow these steps (with a different port number) to get the starter code running while keeping the completed example open

- Open a new terminal window and run `serve -l 3001` from the `start` directory
- Visit `http://localhost:3001` in a new browser tab
- Open `Developer Tools` and use `Device Toolbar` just as above.

Now, add styles in `styles.css` in `start` to get the page to work like the completed example. You need to refresh the browser after each change. You can also add styles directly in the browser's `styles` tab (within the `elements` tab), which is a quick and fluid way to explore... but it doesn't change the actual files, and will reset when you refresh the page.

This exercise will probably be very difficult. Try to do it unassisted, but don't expect to be able to get it alone. Use the hints below to help walk you through the process as needed.

# Hints:
This layout uses a row-direction flexbox inside of a column-direction flexbox.

These are all the style rules added in the completed CSS: display, flex, flex-direction, flex-wrap, order. Look them up if you're not sure how to use each of them.

If you feel stumped, definitely look at the example CSS. It's fine to use that as a reference, but you should manually type in all the changes, to better reinforce your learning.