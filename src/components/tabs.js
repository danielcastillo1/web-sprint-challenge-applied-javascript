

const Tabs = (topics) => {

for (let i = 0; i <topics.length; i++ ) {
  Tabs(topics[i])
}
 const topic = document.createElement("div");
 const div1 = documentcreateElement("div");
 const div2 = documentcreateElement("div");
 const div3 = documentcreateElement("div");

 topic.classList.add("topics")
 div1.classList.add("tab");
 div2.classList.add("tab");
 div3.classList.add("tab");

 div1.textConent = topics
 div2.textConent = topics
 div3.textConent = topics

topic.appendChild(div1);
topic.appendChild(div2);
topic.appendChild(div3);

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
