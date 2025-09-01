const output = document.querySelector(".output"); // Sets my output class within the html to the output variable.
output.textContent = ""; // output variable (div within html) is now blank. If any text was here, it is now deleted.

let i = 10; // Loop starts at 10 then counts down until it hits 0. So it runs 11 times from 10 .. 9 .. etc.

while (i >= 0) {
    const para = document.createElement("p"); // Creates a paragraph element in memory. Not visible yet.
    if (i === 10) {
        para.textContent = `Countdown ${i}`; // Now, this fills the paragraph with text. Ex: When i == 10, then <p>Countdown 10 </p>
    } else if (i === 0) {
        para.textContent = "Blast off!";
    } else {
        para.textContent = i; // i =/10 or i =/0, then <p>i</p> or <p>7</p>.
    }

    output.appendChild(para); // This takes my paragraph and inserts it into my <div class = "output">. Now it becomes visible in the HTML.

    i--;
}

/*  After some iteraitons, my HTML should look like this:

<div class="output">
  <p>Countdown 10</p>
  <p>9</p>
  <p>8</p>
  <p>7</p>
  ...
  <p>Blast off!</p>
</div>

*/
