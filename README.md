1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById finds an element using its unique ID and always returns just one element.  
getElementsByClassName gathers all elements that share the same class name.  It gives you a live collection that updates on its own whenever the page changes.  
querySelector chooses the first item that fits a CSS selector. 
querySelectorAll picks out all the elements that fit a CSS selector and gives you a list of them.  This list doesn't change automatically when the page updates.
2. How do you create and insert a new element into the DOM?
Answer: Add a new item, first make it, then put in some text or content, you can also change how it looks or add labels, and finally place it in
the right spot on the web page. This allows new content to show up on the page automatically.
3. What is Event Bubbling and how does it work?
Answer: Event bubbling happens when an event on a child element travels up to its parent elements.
4. What is Event Delegation and why is it useful?
Answer: Event Delegation means putting an event listener on a parent element to handle events for its children. It’s useful because:
You don’t need multiple listeners on each child (better performance).
It works for dynamically added elements too, even after the page loads
5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() stops the default browser action for an element, like preventing a link from navigating or a form from submitting.
stopPropagation() stops the event from moving up (or down) the DOM, preventing parent elements from reacting to the same event.
